import React from "react";
import PostSection from "./postSection/PostSection.tsx";
import { PostTextAreaContext, type PostTextAreaValue } from "./context.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

type Props = {
    p: PostTextAreaValue;
};

export default function PostSectionWrapper({ p }: Props): React.JSX.Element {
    return (
        <QueryClientProvider client={queryClient}>
            <PostTextAreaContext.Provider value={p}>
                <PostSection />
            </PostTextAreaContext.Provider>
        </QueryClientProvider>
    );
}
