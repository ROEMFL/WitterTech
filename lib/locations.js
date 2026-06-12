// Local service-area landing pages. Each entry is one city/town under
// /service-areas/[slug]. The hub page and sitemap both read from here.
// Keep copy in first-person Joe voice, no em/en dashes (client rule).

export const SERVICES = [
  {
    name: 'Computer & Laptop Repair',
    href: '/services#pc-repair',
    blurb: "Slow machines, cracked screens, spills, failed parts, and won't-power-on. Diagnosed honestly and quoted before any work starts.",
  },
  {
    name: 'Wi-Fi & Home Networking',
    href: '/services#home-tech',
    blurb: 'Dead zones gone, mesh and routers set up right, whole-home coverage tested before I leave.',
  },
  {
    name: 'Virus & Malware Removal',
    href: '/services#home-tech',
    blurb: 'Pop-ups, redirects, and slowdowns cleaned out, with your machine set up to stay safer afterward.',
  },
  {
    name: 'Data Recovery & Backup',
    href: '/services#home-tech',
    blurb: 'Files and photos rescued from failing drives, plus automatic backups so it does not happen again.',
  },
  {
    name: 'Smart Home & Security Cameras',
    href: '/services#security',
    blurb: 'Cameras, video doorbells, smart locks, and thermostats installed and connected to your phone.',
  },
  {
    name: 'Small Business IT & Microsoft 365',
    href: '/services#business-it',
    blurb: 'Networks, email, Microsoft 365, and monthly support plans, with one local person who answers.',
  },
  {
    name: 'Custom & Gaming PC Builds',
    href: '/services#pc-repair',
    blurb: 'Built to your budget and what you actually do, from gaming rigs to home-office machines.',
  },
]

export const LOCATIONS = [
  {
    slug: 'kissimmee',
    city: 'Kissimmee',
    region: 'Osceola County',
    metaDescription:
      'Computer repair, Wi-Fi, virus removal, and small-business IT in Kissimmee, FL. On-site, remote, or drop-off, with honest pricing quoted before any work starts.',
    intro:
      "I'm Joe, and I provide computer repair and IT support across Kissimmee, on-site at your home or business, remotely, or by drop-off. Honest pricing, quoted before any work starts.",
    local: [
      {
        h: 'Local help, from Lake Toho to the 192 corridor',
        p: "Kissimmee is home, so when your computer quits or the Wi-Fi drops you get a real local person, not a call center three states away. I cover the whole area, from the neighborhoods around Lake Tohopekaliga to the busy Highway 192 corridor and the vacation-home communities, usually same day when the schedule allows.",
      },
      {
        h: 'Homes, families, and the small businesses that keep Kissimmee running',
        p: "I help families with the everyday stuff, slow laptops, cracked screens, and lost photos, and I keep small offices, shops, and short-term-rental owners running with networking, Microsoft 365, and cameras. Whatever it is, I explain it in plain English and quote it before I touch anything.",
      },
    ],
    areas: ['Buenaventura Lakes', 'Campbell', 'Kissimmee Bay', 'Remington', 'Mill Run', 'Downtown Kissimmee'],
  },
  {
    slug: 'st-cloud',
    city: 'St. Cloud',
    region: 'Osceola County',
    metaDescription:
      'Local computer repair and IT support in St. Cloud, FL. Slow PCs, Wi-Fi, data recovery, cameras, and business IT, quoted up front and often same-day.',
    intro:
      'Computer repair and IT support for St. Cloud, on-site, remote, or drop-off, with an honest price quoted before any work begins.',
    local: [
      {
        h: 'A St. Cloud neighbor who actually shows up',
        p: "From the historic downtown on New York Avenue out to the newer communities toward Narcoossee and Lake Nona, I cover St. Cloud and the surrounding lakefront area. When something breaks you reach me directly, and I give you a realistic window, often same day.",
      },
      {
        h: 'Family tech and small-business IT, handled locally',
        p: "I keep family computers fast and safe, set up Wi-Fi that reaches the whole house, and recover photos people thought were gone. For St. Cloud's small businesses I handle networks, email, Microsoft 365, and cameras, with one local contact instead of a ticket queue.",
      },
    ],
    areas: ['Downtown St. Cloud', 'Narcoossee', 'Lakefront Park', 'Hickory Tree', 'East Lake Toho', 'Harmony'],
  },
  {
    slug: 'davenport',
    city: 'Davenport',
    region: 'Polk County, Four Corners',
    metaDescription:
      'Computer repair and IT support for Davenport and the Four Corners, FL. Home tech, vacation-rental Wi-Fi, cameras, and business IT, with honest up-front pricing.',
    intro:
      'On-site, remote, and drop-off computer repair and IT support for Davenport and the Four Corners area, honest pricing, no surprises.',
    local: [
      {
        h: 'Built for Davenport and the Four Corners',
        p: "Davenport sits where Polk, Osceola, Orange, and Lake counties meet, and it is full of resort communities and vacation homes near US-27, I-4, and ChampionsGate. I cover the whole area, and I am used to what comes up out here: guest Wi-Fi, smart locks, and getting a rental property's tech working before the next check-in.",
      },
      {
        h: 'Homeowners, property managers, and small businesses',
        p: "Whether you live here year-round or manage short-term rentals around Posner Park and Ridgewood Lakes, I handle the computers, networks, cameras, and smart-home gear, quoted up front and tested before I leave. Slow laptop at home? I do that too.",
      },
    ],
    areas: ['ChampionsGate', 'Providence', 'Ridgewood Lakes', 'Posner Park', 'Loma Linda', 'Four Corners'],
  },
  {
    slug: 'hunters-creek',
    city: "Hunter's Creek",
    region: 'Orange County',
    metaDescription:
      "Computer repair, Wi-Fi, and IT support in Hunter's Creek, FL. On-site home-office and family tech help, quoted before any work begins and often same-day.",
    intro:
      "Computer repair and IT support across Hunter's Creek, on-site at your home or office, remote, or drop-off, with pricing quoted before any work starts.",
    local: [
      {
        h: "Right here in Hunter's Creek",
        p: "Hunter's Creek is a busy, family-filled community off John Young and the 417, close to The Loop. I cover it all, and because I am local you get fast, in-person help, no shipping your computer off or waiting on a big-box counter.",
      },
      {
        h: 'For the home office and the whole household',
        p: "Plenty of folks here work from home, so I keep home offices running with fast machines, solid Wi-Fi, and secure backups, and I handle the family side too: virus cleanups, cracked screens, and smart cameras and doorbells. All in plain English, all quoted before I begin.",
      },
    ],
    areas: ['The Loop', 'Town Center', 'Southchase', 'Meadow Woods', 'John Young Pkwy', 'Osceola Pkwy'],
  },
  {
    slug: 'poinciana',
    city: 'Poinciana',
    region: 'Osceola & Polk Counties',
    metaDescription:
      'Patient, local computer and tech support in Poinciana, FL. Slow PCs, viruses, Wi-Fi, data recovery, and new-device setup, with pricing quoted up front.',
    intro:
      'On-site, remote, and drop-off computer repair and IT support for Poinciana, honest pricing, quoted before any work begins.',
    local: [
      {
        h: "Covering Poinciana's villages",
        p: "Poinciana is big and spread out across Osceola and Polk counties, so a technician who comes to you matters. I cover the villages and the Solivita area, and I am happy to work on-site, walk you through a fix remotely, or have you drop a device off, whatever is easiest.",
      },
      {
        h: 'Patient help for retirees, families, and remote workers',
        p: "A lot of Poinciana neighbors just want someone who explains things without the jargon and does not rush them, and that is exactly how I work. Slow computers, viruses and pop-ups, Wi-Fi that will not reach the back bedroom, lost photos, new-device setup, I handle it and tell you the price first.",
      },
    ],
    areas: ['Solivita', 'Tuscany Preserve', 'Villages of Poinciana', 'Poinciana Lakes', 'Cypress Woods', 'Lake Marion area'],
  },
  {
    slug: 'lake-buena-vista',
    city: 'Lake Buena Vista',
    region: 'Orange County',
    metaDescription:
      'Computer and tech support around Lake Buena Vista, FL. Home, host, and small-business help: Wi-Fi, smart home, cameras, and IT, with honest up-front pricing.',
    intro:
      'Computer and tech support in and around Lake Buena Vista, on-site, remote, or drop-off, with honest, up-front pricing.',
    local: [
      {
        h: 'Tech support around Lake Buena Vista',
        p: "Lake Buena Vista is the heart of the resort area near Disney Springs and the parks, full of hotels, timeshares, vacation homes, and the businesses that serve them. I help the people who live and work here with computers, networks, and smart-home and camera systems, quoted before any work starts.",
      },
      {
        h: 'For residents, hosts, and hospitality businesses',
        p: "If you host guests nearby, I get the Wi-Fi, smart locks, and streaming working so visitors never call you about it. If you run a local business, I handle the office IT, Microsoft 365, and security cameras. And if it is just a slow home laptop, I fix that too, same friendly local service either way.",
      },
    ],
    areas: ['Disney Springs area', 'Hotel Plaza', 'Vista Centre', 'Little Lake Bryan', 'Lake Buena Vista Resort', 'SR-535 corridor'],
  },
  {
    slug: 'celebration',
    city: 'Celebration',
    region: 'Osceola County',
    metaDescription:
      'Reliable computer repair and IT support in Celebration, FL. Home office, family tech, smart home, and small-business IT, quoted before any work starts.',
    intro:
      'Computer repair and IT support for Celebration, on-site at home or office, remote, or drop-off, priced honestly before any work begins.',
    local: [
      {
        h: "Celebration's own local technician",
        p: "Celebration is a close-knit, walkable town, and people here appreciate a service that is personal and reliable. I cover the whole community, from the downtown around Market Street out to the surrounding villages, with in-person help and a price quoted before I start.",
      },
      {
        h: 'Polished, dependable tech, at home and at work',
        p: "I keep home offices and family computers running smoothly, set up Wi-Fi and smart-home gear cleanly, and handle the small-business IT for Celebration's shops and offices. No jargon, no runaround, just dependable help from someone local who takes pride in doing it right.",
      },
    ],
    areas: ['Market Street / Downtown', 'Lake Evalyn', 'Roseville Corner', 'Artisan Park', 'Aquila Reserve', 'Spring Lake'],
  },
  {
    slug: 'near-disney',
    city: 'the Disney Area',
    region: 'Vacation-home corridor near Disney',
    metaDescription:
      'Computer, Wi-Fi, and smart-home help for vacation homes near Disney, FL. Reunion, ChampionsGate, Windsor Hills and more, honest pricing, same-day when possible.',
    intro:
      'Computer repair, Wi-Fi, and smart-home help for the vacation-home communities near Disney, on-site, remote, or drop-off, with honest up-front pricing.',
    local: [
      {
        h: 'Tech help for the communities near the parks',
        p: "The area around Disney, Reunion, ChampionsGate, Windsor Hills, Windsor Island, and the Four Corners, is packed with vacation homes and short-term rentals. I know the tech that keeps them running, and I cover all of it with same-day help whenever the schedule allows.",
      },
      {
        h: 'Made for hosts, property managers, and owners',
        p: "Guest Wi-Fi that actually works, smart locks and keypads, cameras, streaming, and the office computers behind the booking, I set them up, lock them down, and get them working before your next guest arrives. Live nearby full-time? I handle home computers and family tech with the same honest pricing.",
      },
    ],
    areas: ['Reunion', 'ChampionsGate', 'Windsor Hills', 'Windsor Island', 'Solterra', 'Four Corners'],
  },
  {
    slug: 'orlando',
    city: 'Orlando',
    region: 'Orange County',
    metaDescription:
      'Computer repair and IT support across Orlando, FL. Slow PCs, Wi-Fi, virus removal, data recovery, cameras, and small-business IT, quoted before any work begins.',
    intro:
      'Computer repair and IT support across Orlando, on-site at your home or business, remotely, or by drop-off, with a price quoted before any work begins.',
    local: [
      {
        h: 'One local technician for the whole Orlando area',
        p: "Orlando is big, and I cover a lot of it, from Lake Nona and the Dr. Phillips area to MetroWest, Hunter's Creek, and the communities south toward Kissimmee. You get one person who answers the phone, shows up, and explains what is going on, instead of a rotating cast from a national chain.",
      },
      {
        h: 'Homes and small businesses, handled the same careful way',
        p: "For Orlando families I do the everyday work: slow PCs, virus cleanups, Wi-Fi dead zones, cracked screens, data recovery, and new-device setup. For small businesses I handle networks, Microsoft 365, cameras, and monthly support plans. Every job gets an honest, up-front price and plain-language answers.",
      },
    ],
    areas: ['Lake Nona', 'Dr. Phillips', 'MetroWest', "Hunter's Creek", 'Southchase', 'Meadow Woods'],
  },
]

export function getLocation(slug) {
  return LOCATIONS.find(l => l.slug === slug)
}
