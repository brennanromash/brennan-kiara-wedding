import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const videosDir = path.join(process.cwd(), 'public', 'videos');
    const files = fs.readdirSync(videosDir)
      .filter(file => file.match(/\.(mp4|mov|webm)$/i))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    return new Response(JSON.stringify(files), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('Error reading videos directory:', err);
    return new Response(JSON.stringify({ error: 'Failed to load videos' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
