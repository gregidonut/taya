import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import styles from "./user.module.css";

export default function User({
    userId,
    date,
}: {
    userId: string;
    date: number;
}): React.JSX.Element {
    const d: Date = new Date(date).toLocaleString();
    type User = {
        imageUrl: string;
        username: string;
    };

    const { data, isLoading, isError, error } = useQuery<User>({
        queryKey: ["users", userId],
        queryFn: async function () {
            const { data } = await axios.get(`/api/users/${userId}`);
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
        <figure className={styles.figure}>
            <img
                className={styles.img}
                src={data.imageUrl}
                alt={`${data.username}_dp`}
            />
            <figcaption className={styles.figcaption}>
                <h4>{data.username}</h4>
                <p>posted: {d}</p>
            </figcaption>
        </figure>
    );
}
