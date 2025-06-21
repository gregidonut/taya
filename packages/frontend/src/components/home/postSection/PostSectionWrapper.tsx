import React from "react";
import PostSection from "./postSection/PostSection.tsx";
import { PostTextAreaContext, type PostTextAreaValue } from "./context.ts";

type Props = {
    p: PostTextAreaValue;
};

export default function PostSectionWrapper({ p }: Props): React.JSX.Element {
    return (
        <PostTextAreaContext.Provider value={p}>
            <PostSection />
        </PostTextAreaContext.Provider>
    );
}
