import { execSync } from "node:child_process";
import { statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const srcDir = import.meta.env.DEV
	? path.resolve(__filename, "../..")
	: path.resolve(__filename, "../../../../../src");

console.log({ __filename, srcDir });

/**
 * Get the modification timestamp of a file from Git. In case this doesn't work,
 * it returns a blank string.
 *
 * @param path - the path to the file whose modification timestamp is being read
 * @returns the modification timestamp of the file
 */
function getGitMtime(path: string): string {
	try {
		return execSync(`git log -1 --format=%cI ${path}`).toString();
	} catch {
		return "";
	}
}

/**
 * Get the modification timestamp of a file from the filesystem. This should
 * always work.
 *
 * @param path - the path to the file whose modification timestamp is being read
 * @returns the modification timestamp of the file
 */
function getFsMtime(path: string): string {
	return statSync(path).mtime.toISOString();
}

export function getModDate(slug: string): Date {
	const filePath = path.resolve(srcDir, "posts", `${slug}.mdx`);
	const gitTimestamp = getGitMtime(filePath);
	const fsTimestamp = getFsMtime(filePath);

	console.log({ filePath, gitTimestamp, fsTimestamp });

	const timestamp = gitTimestamp || fsTimestamp;
	return new Date(timestamp);
}
