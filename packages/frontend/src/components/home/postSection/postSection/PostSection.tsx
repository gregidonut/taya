import React from "react";
import PostTextArea from "./postTextArea/PostTextArea";
import User from "@/components/user/User";

export default function PostSection(): React.JSX.Element {
    return (
        <>
            <User />
            <PostTextArea />
        </>
    );
}
