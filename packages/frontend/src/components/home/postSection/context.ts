import { createContext, useContext } from "react";

export type PostTextAreaValue = {
    astroStage: string;
};

export const PostTextAreaContext = createContext<PostTextAreaValue | null>(
    null,
);

export function usePostTextArea(): PostTextAreaValue | null {
    return useContext(PostTextAreaContext);
}
