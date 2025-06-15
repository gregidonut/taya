// @ts-check
import { defineConfig } from "astro/config";
import clerk from "@clerk/astro";
import { shadesOfPurple } from "@clerk/themes";
import aws from "astro-sst";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
    integrations: [
        compressor(),
        clerk({
            appearance: {
                baseTheme: shadesOfPurple,
            },
        }),
    ],
    output: "server",
    adapter: aws({
        responseMode: "stream",
    }),
});
