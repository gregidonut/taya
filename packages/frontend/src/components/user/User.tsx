import { useStore } from "@nanostores/react";
import { $userStore } from "@clerk/astro/client";
import styles from "./user.module.css";

export default function User() {
    const user = useStore($userStore);

    if (user === undefined) {
        return null;
    }

    if (user === null) {
        return <div>Not signed in</div>;
    }

    return (
        <div className={styles.div}>
            <img
                src={user.imageUrl}
                alt={`${user.fullName!.split(" ").join("_") + "_dp"}`}
            />
        </div>
    );
}
