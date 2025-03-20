import { icons as siIcons } from '@iconify-json/simple-icons'
import { icons as lIcons } from '@iconify-json/lucide'

import _2fac from '@/assets/icons/2fac.svg?raw'
import browserstack from '@/assets/icons/browserstack.svg?raw'
import finrep from '@/assets/icons/finrep.svg?raw'
import img from '@/assets/icons/img.svg?raw'
import mathesar from '@/assets/icons/mathesar.svg?raw'
import pls from '@/assets/icons/pls.svg?raw'
import portfolio from '@/assets/icons/portfolio.svg?raw'
import recivi from '@/assets/icons/recivi.svg?raw'
import skyscraper from '@/assets/icons/skyscraper.svg?raw'
import starlight from '@/assets/icons/starlight.svg?raw'
import yojak from '@/assets/icons/yojak.svg?raw'
import almada from '@/assets/icons/almada.svg?raw'
import kwalee from '@/assets/icons/kwalee.svg?raw'
import jtg from '@/assets/icons/jtg.svg?raw'
import groupnexus from '@/assets/icons/groupnexus.svg?raw'
import instantpost from '@/assets/icons/instantpost.svg?raw'
import calyxpod from '@/assets/icons/pod.svg?raw'

const knownIcons = {
  '2fac': _2fac,
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
  groupnexus,
  instantpost,
  calyxpod,
} as Record<string, string>

// These are generally epics that don't have their own icon and just use the
// the icon of the parent org.
const aliases = {
  'kwalee-design-system': 'kwalee',
  'casual-games-tools': 'kwalee',
  'printing-platform': 'instantpost',
} as Record<string, string>

export type Source = 'simple_icons' | 'lucide'

/**
 * Get the SVG body of an icon by its name and source. The source is
 * ignored if that name is in the known icons list.
 *
 * @param name - the name of the icon
 * @param source - the source of the icon
 * @returns the SVG body of the icon
 */
export function getBody(name: string, source: Source = 'simple_icons') {
  const identifier = aliases[name] ?? name

  const icon = knownIcons[identifier]
  if (icon) {
    // Strip the SVG opening and closing tags, including all attributes.
    return icon.replace(/<\/?svg[^>]*>/g, '')
  }

  if (source === 'simple_icons') {
    return siIcons.icons[identifier]?.body || lIcons.icons[identifier]?.body
  } else if (source === 'lucide') {
    return lIcons.icons[identifier]?.body
  }

  return undefined
}
