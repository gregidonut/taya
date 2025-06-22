import React from "react";
import User from "@/components/user/User";
import PostTextArea from "./postTextArea/PostTextArea";
import PostList from "./postList/PostList";
import styles from "./postSection.module.css";

export default function PostSection(): React.JSX.Element {
    return (
        <>
            <header className={styles.header}>
                <User />
                <PostTextArea />
            </header>
            <main className={styles.main}>
                <PostList />
            </main>
        </>
    );
}
