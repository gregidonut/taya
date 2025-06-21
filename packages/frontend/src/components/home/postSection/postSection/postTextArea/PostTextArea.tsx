import React from "react";

import { useForm } from "@tanstack/react-form";
import type { AnyFieldApi } from "@tanstack/react-form";
import styles from "./postTextArea.module.css";
import { usePostTextArea } from "../../context";
import { cy } from "@/utils";

function FieldInfo({ field }: { field: AnyFieldApi }) {
    return (
        <>
            {field.state.meta.isTouched && !field.state.meta.isValid ? (
                <em>{field.state.meta.errors.join(", ")}</em>
            ) : null}
            {field.state.meta.isValidating ? "Validating..." : null}
        </>
    );
}

export default function PostTextArea(): React.JSX.Element {
    const postTextArea = usePostTextArea();
    console.log("postTextArea:", postTextArea);

    const form = useForm({
        defaultValues: {
            postBody: "",
        },
        onSubmit: async function ({ value }) {
            console.log(value);
        },
        validators: {
            onBlurAsyncDebounceMs: 250,
        },
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            }}
        >
            <p className={styles.p}>
                <form.Field
                    name="postBody"
                    children={(field) => (
                        <>
                            <label htmlFor={field.name}>postBody:</label>
                            <textarea
                                {...cy(
                                    "newPostTextArea",
                                    postTextArea ? postTextArea.astroStage : "",
                                )}
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={function (e) {
                                    field.handleChange(e.target.value);
                                }}
                            />
                            <FieldInfo field={field} />
                        </>
                    )}
                />
            </p>
            <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                    <button type="submit" disabled={!canSubmit}>
                        {isSubmitting ? "..." : "Submit"}
                    </button>
                )}
            />
        </form>
    );
}
