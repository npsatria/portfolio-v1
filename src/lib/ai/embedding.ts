import { google } from '@ai-sdk/google';
import { embed, embedMany } from 'ai';

// Using Gemini text-embedding-004 model
const embeddingModel = google.textEmbeddingModel('text-embedding-004');

export const generateEmbedding = async (value: string): Promise<number[]> => {
  const input = value.replace(/\n/g, ' ');
  const { embedding } = await embed({
    model: embeddingModel,
    value: input,
  });
  return embedding;
};

export const generateEmbeddings = async (
  values: string[],
): Promise<number[][]> => {
  const inputs = values.map((v) => v.replace(/\n/g, ' '));
  const { embeddings } = await embedMany({
    model: embeddingModel,
    values: inputs,
  });
  return embeddings;
};
