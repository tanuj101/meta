import { icons as lIcons } from "@iconify-json/lucide";
import { icons as siIcons } from "@iconify-json/simple-icons";

import almada from "@/assets/icons/almada.svg?raw";
import browserstack from "@/assets/icons/browserstack.svg?raw";
import finrep from "@/assets/icons/finrep.svg?raw";
import img from "@/assets/icons/img.svg?raw";
import instantpost from "@/assets/icons/instantpost.svg?raw";
import jtg from "@/assets/icons/jtg.svg?raw";
import kwalee from "@/assets/icons/kwalee.svg?raw";
import mathesar from "@/assets/icons/mathesar.svg?raw";
import nexusplatform from "@/assets/icons/nexusplatform.svg?raw";
import pls from "@/assets/icons/pls.svg?raw";
import calyxpod from "@/assets/icons/pod.svg?raw";
import portfolio from "@/assets/icons/portfolio.svg?raw";
import recivi from "@/assets/icons/recivi.svg?raw";
import skyscraper from "@/assets/icons/skyscraper.svg?raw";
import starlight from "@/assets/icons/starlight.svg?raw";
import xpromo from "@/assets/icons/xpromo.svg?raw";
import yojak from "@/assets/icons/yojak.svg?raw";

const knownIcons = {
	browserstack,
	finrep,
	img,
	mathesar,
	pls,
	portfolio,
	recivi,
	skyscraper,
	starlight,
	yojak,
	almada,
	kwalee,
	jtg,
	nexusplatform,
	instantpost,
	calyxpod,
	xpromo,
} as Record<string, string>;

// These are generally epics that don't have their own icon and just use the
// the icon of the parent org.
const aliases = {
	"kwalee-design-system": "kwalee",
	"kwalee.com": "kwalee",
	"casual-games-tools": "kwalee",
	"ds-infra": "kwalee",
	"ds-docs": "kwalee",
	"printing-platform": "instantpost",
	"printing-sdk": "instantpost",
	bootstrap: "instantpost",
	"x-promo": "xpromo",
} as Record<string, string>;

export type Source = "simple_icons" | "lucide";

/**
 * Get the SVG body of an icon by its name and source. The source is
 * ignored if that name is in the known icons list.
 *
 * @param name - the name of the icon
 * @param source - the source of the icon
 * @returns the SVG body of the icon
 */
export function getBody(name: string, source: Source = "simple_icons") {
	const identifier = aliases[name] ?? name;

	const icon = knownIcons[identifier];
	if (icon) {
		// Strip the SVG opening and closing tags, including all attributes.
		return icon.replace(/<\/?svg[^>]*>/g, "");
	}

	if (source === "simple_icons") {
		return siIcons.icons[identifier]?.body || lIcons.icons[identifier]?.body;
	}

	if (source === "lucide") {
		return lIcons.icons[identifier]?.body;
	}

	return undefined;
}
