import { readdirSync } from "node:fs";

import type { AstroIntegration } from "astro";

export function watchPlugins(): AstroIntegration {
	return {
		name: "watchPlugins",
		hooks: {
			"astro:config:setup": ({ config, addWatchFile }) => {
				const pluginsDir = "./src/plugins/";

				for (const file of readdirSync(new URL(pluginsDir, config.root))) {
					addWatchFile(new URL(`${pluginsDir}${file}`, config.root));
				}
			},
		},
	};
}
