import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: "@", replacement: path.resolve("./src/") },
			{
				find: "@/components",
				replacement: path.resolve("./src/components/"),
			},
			{ find: "@/lib", replacement: path.resolve("./src/lib/") },
		],
	},
});
