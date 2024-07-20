import { kv } from "@/lib/kv";

export async function POST(req) {
  const { userId, prompt } = await req.json();

 

  const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
  const randomIndex = Math.floor(Math.random() * images.length);
  const image = `/images/${images[randomIndex]}`;

  // Store the generated image in Vercel KV (optional)
  await kv.set(`image:${userId}`, image);

  return new Response(JSON.stringify({ image }), { status: 200 });
}
