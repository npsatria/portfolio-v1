import { supabase } from '@/lib/supabase/client';
import { generateEmbedding } from '@/lib/ai/embedding';

// SECURE THIS ENDPOINT IN PRODUCTION! (e.g. check for a secret header)
// For now, it's open for initial setup.

const INITIAL_DATA = [
  {
    content: "My name is Ngakan Putu Satria Dewangga, but I go by Satria. I am a Front-End Developer based in Bali, Indonesia.",
    metadata: { category: "bio" }
  },
  {
    content: "I specialize in building modern web applications using Next.js, React, and Tailwind CSS. I focus on clean code, performance, and accessibility.",
    metadata: { category: "skills" }
  },
  {
    content: "I am efficient in JavaScript (ES6+), Python, and C++. I also use tools like Git, Figma, and Supabase.",
    metadata: { category: "stack" }
  },
  {
    content: "I am currently studying at SMK TI Bali Global Denpasar. I have completed courses at Timedoor Academy and Dicoding.",
    metadata: { category: "education" }
  },
  {
    content: "One of my featured projects is 'Lumina Fashion', a modern e-commerce platform with a minimalist UI, built with Next.js and Stripe integration.",
    metadata: { category: "project", title: "Lumina Fashion" }
  },
  {
    content: "I built 'Nexus Dashboard', a data visualization dashboard for tracking analytics in real-time using Recharts and Supabase.",
    metadata: { category: "project", title: "Nexus Dashboard" }
  },
  {
    content: "My approach to development is to treat every project as a chance to solve a problem with elegance. I don't just write code; I build scalable systems.",
    metadata: { category: "philosophy" }
  },
  {
    content: "You can contact me via email at satria@example.com or connect with me on LinkedIn.",
    metadata: { category: "contact" }
  }
];

export async function GET(req: Request) {
  try {
    const results = [];

    for (const item of INITIAL_DATA) {
      // 1. Generate Embedding
      const embedding = await generateEmbedding(item.content);

      // 2. Insert into Supabase
      const { data, error } = await supabase
        .from('documents')
        .insert({
          content: item.content,
          metadata: item.metadata,
          embedding: embedding
        })
        .select();

      if (error) {
        console.error("Error inserting:", item.content, error);
        results.push({ status: 'error', error, content: item.content });
      } else {
        results.push({ status: 'success', id: data[0].id, content: item.content });
      }
    }

    return Response.json({
      message: "Seeding complete",
      results
    });

  } catch (err) {
    console.error('Seeding Error:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}
