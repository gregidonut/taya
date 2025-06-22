import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { SelectPostsResult } from "@/utils/sqls";
import styles from "./postList.module.css";
import User from "./user/User";

export default function PostList(): React.JSX.Element {
    const { data, isLoading, isError, error } = useQuery<SelectPostsResult[]>({
        queryKey: ["posts"],
        queryFn: async function () {
            const { data } = await axios.get("/api/posts");
            return data;
        },
    });
    if (isLoading) {
        return <p>loading...</p>;
    }
    if (isError) {
        return <p>error: {error.message}</p>;
    }

    if (!data) {
        return <p>no data</p>;
    }

    return (
        <ul className={styles.ul}>
            {data.map(function (p) {
                return (
                    <li key={p.id}>
                        <article className={styles.article}>
                            <header>
                                <User userId={p.user_id} date={p.date} />
                            </header>
                            <main>
                                <p>{p.body}</p>
                            </main>
                        </article>
                    </li>
                );
            })}
        </ul>
    );
}
