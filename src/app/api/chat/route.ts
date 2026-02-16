import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { supabase } from '@/lib/supabase/client';
import { generateEmbedding } from '@/lib/ai/embedding';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // 1. Get the latest user message
    const lastMessage = messages[messages.length - 1];
    const query = lastMessage.content;

    // 2. Generate embedding for the query
    const embedding = await generateEmbedding(query);

    // 3. Retrieve relevant documents from Supabase via RPC
    const { data: documents, error } = await supabase.rpc('match_documents', {
      query_embedding: embedding,
      match_threshold: 0.5, // Similarity threshold (0-1)
      match_count: 5,       // Number of chunks to retrieve
    });

    if (error) {
      console.error('Supabase retrieval error:', error);
      // Determine if we should fail or just proceed without context
    }

    // 4. Construct the context string from retrieved documents
    const context = documents
      ?.map((doc: any) => doc.content)
      .join('\n\n') || "No specific context found.";

    // 5. Define System Prompt with Context
    const systemPrompt = `You are SatriaBot, a professional AI portfolio assistant for Satria Dewangga.

    Start with a friendly, brief greeting if it's the start of the conversation.
    Use the following pieces of retrieved context to answer the user's question about Satria.

    Context:
    ${context}

    Rules:
    - Answer strictly based on the context provided.
    - If the answer is not in the context, say "I don't have that specific information in my database, but I can tell you about Satria's known skills or projects."
    - Keep answers concise, professional, and engaging.
    - Use formatting (bullet points, bold text) for readability.
    - Satria is a Front-End Developer based in Bali, specialized in Next.js.
    `;

    // 6. Stream response from Gemini 1.5 Pro
    const result = await streamText({
      model: google('models/gemini-1.5-pro-latest'),
      system: systemPrompt,
      messages: messages.map((m: any) => ({
        role: m.role,
        content: m.content,
      })),
    });

    return result.toTextStreamResponse();

  } catch (err) {
    console.error('Chat API Error:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}
