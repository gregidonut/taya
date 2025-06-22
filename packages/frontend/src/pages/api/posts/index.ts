import type { APIRoute } from "astro";
import { turso } from "@/turso";
import { selectPosts } from "@/utils/sqls";

export const GET: APIRoute = async function ({ locals }) {
    const { userId, redirectToSignIn } = locals.auth();

    if (!userId) {
        return redirectToSignIn();
    }

    const rows = await selectPosts(turso);
    return new Response(JSON.stringify(rows), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
};
