import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "resume", "Suresh_resume.pdf");

    // Read the file from disk (Node runtime)
    const file = await fs.promises.readFile(filePath);
    const stat = await fs.promises.stat(filePath);

    return new Response(file, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        // 👇 Forces download with this filename
        "Content-Disposition": 'attachment; filename="Suresh_resume.pdf"',
        "Content-Length": stat.size.toString(),
        // Optional caching (1 hour)
        "Cache-Control": "public, max-age=3600, immutable",
      },
    });
  } catch (err) {
    // File missing or other error
    return new Response("Resume not found", { status: 404 });
  }
}

// Ensure Node.js runtime (required to use fs)
export const runtime = "nodejs";