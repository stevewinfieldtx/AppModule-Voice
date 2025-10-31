import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
});

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const completion = await openai.chat.completions.create({
    model: 'google/gemma-2-2b-it:free',  // Cheap/free model
    messages: [{ role: 'user', content: message }],
    max_tokens: 150,
    temperature: 0.7,
  });

  const response = completion.choices[0]?.message?.content || 'Sorry, no response.';
  return NextResponse.json({ response });
}