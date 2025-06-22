import type { APIRoute } from "astro";
import { clerkClient } from "@clerk/astro/server";

export const GET: APIRoute = async function (context) {
    const { userId, redirectToSignIn } = context.locals.auth();

    if (!userId) {
        return redirectToSignIn();
    }

    const id = context.params.id;
    if (!id) {
        return context.redirect("/404");
    }

    const c = clerkClient(context).users;
    const { imageUrl, username } = await c.getUser(id);
    return new Response(
        JSON.stringify({
            imageUrl,
            username,
        }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" },
        },
    );
};
