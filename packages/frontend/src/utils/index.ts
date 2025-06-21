export function cy(attr: string, stage: string) {
    return stage === "dev" ? { "data-cy": attr } : {};
}
