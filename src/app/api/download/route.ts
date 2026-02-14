import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  const filename = searchParams.get("filename") || "download.pdf";

  if (!url) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
  }

  // Security check: ensure URL is from Cloudinary
  if (!url.startsWith("https://res.cloudinary.com/")) {
    return NextResponse.json({ error: "Invalid URL source" }, { status: 400 });
  }

  try {
    console.log(`Proxying download for URL: ${url}`);
    
    // Add User-Agent to avoid being blocked by some CDNs
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`Download proxy error: ${response.status} ${response.statusText} for URL: ${url}`);
      return NextResponse.json(
        { error: `Failed to fetch file from source: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }

    const contentType = response.headers.get("content-type") || "application/octet-stream";
    const contentDisposition = `attachment; filename="${filename}"`;

    return new NextResponse(response.body, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": contentDisposition,
      },
    });
  } catch (error) {
    console.error("Download proxy error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
