export const prerender = false;
import type { APIRoute } from "astro";
import { createDocument } from "../../lib/appwrite";

export const POST : APIRoute = async ({ request }) => {
    const formData = await request.formData();
    const data = {
        title: formData.get("title"),
        content: formData.get("content"),
    };

    // Perform the document creation logic
    createDocument(data);

    return new Response("Document created successfully!", {
        status: 200,
        headers: { "Content-Type": "text/plain" },
    });
}
