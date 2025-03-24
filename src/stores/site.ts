/**
 * Configure your portfolio site here.
 */

interface Site {
	/** the final URL where the site is deployed, no trailing slash */
	baseUrl: string;
	/**
	 * the URL to the Récivi data file to populate the site
	 *
	 * This can be configured to either refer to a local JSON file (using the
	 * `file://` scheme) or a remote URL.
	 */
	reciviUrl: string;
	/** the creator ID that is used for author attribution in the Fediverse */
	fediverse?: string;
	/** the title of the website
	 *
	 * This title is used in the site header, Open Graph images, tab/window title
	 * and meta tags.
	 */
	title: string;

	/**
	 * the year in which your were born
	 *
	 * For privacy reasons, you can offset it a little bit as it's only being used
	 * in percentages.
	 */
	birthYear: number;
	/** the age at which I started writing software as a hobby */
	hobbyAge: number;
	/** the age at which I started working as a software developer */
	jobAge: number;

	/**
	 * whether include a link about Récivi in the footer
	 *
	 * We'd appreciate it a lot if you keep this enabled to help us spread the
	 * word about Récivi.
	 */
	showCredit?: boolean;
}

export const site: Site = {
	baseUrl: "https://tanuj-nagpal.is-a.dev",
	reciviUrl: import.meta.env.DEV
		? "file://C:/Users/admin/projects/recivi/recivi.json"
		: "https://raw.githubusercontent.com/tanuj101/recivi/refs/heads/main/recivi.json",
	title: "@tanuj",
	birthYear: 1999,
	hobbyAge: 17,
	jobAge: 19,
	showCredit: false,
};
