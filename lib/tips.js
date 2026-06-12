// Shared Tech Tips content — each tip is an individually-routed article
// under /tech-tips/[slug]. The index page and sitemap both read from here.

export const TIPS = [
  {
    slug: 'ssd-upgrade-signs',
    tag: 'PC Performance',
    title: '5 Signs Your PC Needs an SSD Upgrade',
    description:
      'Slow boot times, grinding noises, sluggish programs — here are the five signs an SSD upgrade will fix your computer, from a Central Florida repair technician.',
    intro:
      "If your computer is slow, loud, and struggling with everyday tasks, the culprit is almost always the hard drive. An SSD upgrade is the single biggest speed boost you can make — usually without replacing the whole machine.",
    sections: [
      {
        h: 'It takes more than 2 minutes to fully boot up',
        p: "A healthy computer with an SSD boots in 15–30 seconds. If you press the power button and have time to make coffee before the desktop is usable, your old mechanical drive is the bottleneck — not the rest of the machine.",
      },
      {
        h: 'Opening a browser or Word takes 30+ seconds',
        p: "Programs live on your drive, so every launch means reading thousands of small files. Mechanical drives are terrible at this; SSDs are built for it. If everyday apps crawl open, the drive is almost certainly to blame.",
      },
      {
        h: 'The computer makes grinding or clicking sounds',
        p: "Mechanical drives have spinning platters and a moving arm. Grinding, clicking, or whirring under load means the moving parts are wearing out — and a drive that's making noise is a drive that's going to fail. Back up now and replace it before it dies.",
      },
      {
        h: 'Tasks that used to feel instant now feel sluggish',
        p: "Drives slow down as they fill up and fragment over years of use. If the same computer that felt snappy three years ago now hesitates at everything, the drive has aged — even though the processor and memory are exactly as fast as the day you bought it.",
      },
      {
        h: "The machine is 4–8 years old but otherwise works fine",
        p: "This is the sweet spot for an SSD upgrade. The screen, keyboard, processor, and memory are all still good — the only thing holding the machine back is the drive. An upgrade costs a fraction of a new computer and most people say it feels brand new afterward.",
      },
    ],
    related: { href: '/services#pc-repair', label: 'PC Repair & Custom Builds' },
    cta: "Not sure if an SSD will fix your machine? I'll diagnose it honestly and quote the price before any work begins.",
  },
  {
    slug: 'protect-home-network',
    tag: 'Cybersecurity',
    title: 'How to Protect Your Home Network from Hackers',
    description:
      'Five simple router and Wi-Fi changes that protect your home network from the most common attacks — explained in plain language.',
    intro:
      'Most home networks are one default password away from being compromised. A few simple changes put your home in much better shape than 90% of people around you.',
    sections: [
      {
        h: "Change your router's default username and password immediately",
        p: "Default router logins are published on the internet — anyone can look up the admin password for your exact model in seconds. Changing it is the single most important security step, and it takes two minutes.",
      },
      {
        h: 'Use WPA3 or WPA2 encryption — never open or WEP',
        p: "Your Wi-Fi password setting has an encryption mode behind it. WPA3 (or WPA2 on older routers) keeps traffic scrambled; WEP was cracked nearly twenty years ago, and an open network is an open door. Check this once in your router settings and you're done.",
      },
      {
        h: "Keep your router's firmware updated",
        p: "Router makers patch security holes through firmware updates, and most modern routers can install them automatically. If yours is more than a few years old and has never been updated, it's running with known, documented vulnerabilities.",
      },
      {
        h: 'Create a separate guest network',
        p: "Visitors' phones and smart home gadgets don't need to be on the same network as your personal computers and files. A guest network keeps them isolated — so a compromised smart plug or an infected visitor laptop can't reach anything that matters.",
      },
      {
        h: 'Disable remote management unless you specifically need it',
        p: "Remote management lets your router's settings be changed from outside your home. Almost nobody needs that — and leaving it on gives attackers a way in from anywhere on the internet. Turn it off unless you have a specific reason not to.",
      },
    ],
    related: { href: '/services#home-tech', label: 'Home Tech Support' },
    cta: "Want your home network checked and locked down properly? I do exactly this — and I'll explain every change I make.",
  },
  {
    slug: 'fix-wifi-dead-zones',
    tag: 'Wi-Fi',
    title: "Dead Zones? Here's How to Fix Your Home Wi-Fi",
    description:
      'Wi-Fi dead zones are usually a placement or hardware problem, not an internet speed problem. Here is what to check before upgrading your plan.',
    intro:
      "Wi-Fi problems are almost always a placement or hardware issue — not an internet speed issue. Before you upgrade your plan, check these things first.",
    sections: [
      {
        h: 'Router placement matters more than most people think',
        p: "Wi-Fi radiates outward from the router in all directions. A router shoved in a corner closet or behind the TV wastes half its coverage on your yard. Central, elevated, and out in the open wins — sometimes that one move fixes everything.",
      },
      {
        h: 'Thick walls, appliances, and other devices all block signal',
        p: "Concrete, brick, metal ductwork, refrigerators, and even fish tanks absorb Wi-Fi. Microwaves and baby monitors actively interfere with it. If your dead zone sits behind the kitchen or a masonry wall, the signal isn't weak — it's being eaten.",
      },
      {
        h: 'Mesh Wi-Fi systems eliminate dead zones in larger homes',
        p: "Mesh systems (Eero, Orbi, Google Wifi) use multiple units that hand your devices off seamlessly as you move through the house. For homes over ~1,800 square feet or with multiple floors, mesh is almost always the right answer — one powerful router rarely is.",
      },
      {
        h: 'Know your bands: 5GHz is faster, 2.4GHz reaches further',
        p: "Modern routers broadcast on two bands. 5GHz is much faster but fades quickly through walls; 2.4GHz is slower but travels further. A device at the far end of the house may actually do better on 2.4GHz — and most routers can steer devices automatically if set up right.",
      },
      {
        h: 'If your router is more than 5 years old, it is the bottleneck',
        p: "Wi-Fi standards improve every few years, and an old router slows down every device in the house — no matter how fast your internet plan is. Before paying your provider for more speed, make sure your own hardware can actually deliver the speed you already have.",
      },
    ],
    related: { href: '/services#home-tech', label: 'Home Wi-Fi Setup & Optimization' },
    cta: "I design and install whole-home Wi-Fi that reaches every room — quoted up front, tested before I leave.",
  },
  {
    slug: 'repair-vs-replace',
    tag: 'Repair vs. Replace',
    title: 'When to Repair vs. Replace Your Computer',
    description:
      'Most "dead" computers have one fixable part. Here is an honest framework for deciding whether to repair or replace, from a technician with no reason to upsell you.',
    intro:
      "The gut reaction is to replace a broken computer. But most of the time, the problem is one fixable part — and a repair costs a fraction of a new machine.",
    sections: [
      {
        h: 'Slow performance is usually storage or RAM — not the whole computer',
        p: "When a machine crawls, people assume it's worn out. Almost always, it's the hard drive or a shortage of memory. Both are replaceable parts, and either upgrade costs far less than a new computer while delivering most of the same feeling of speed.",
      },
      {
        h: "Won't turn on? Power supply or battery — both replaceable",
        p: "A computer that's completely dead looks like a total loss, but the most common causes are the cheapest parts: the power supply in a desktop, the battery or charging port in a laptop. The data on your drive is usually completely untouched.",
      },
      {
        h: 'Overheating is a $50 fix, not an $800 replacement',
        p: "Computers that run hot and shut themselves down usually need their fans cleaned and fresh thermal paste — routine maintenance, not a death sentence. Doing it early also prevents the heat damage that genuinely does kill machines.",
      },
      {
        h: 'Replace when the repair exceeds ~60% of a comparable new machine',
        p: "That's the honest threshold. If your laptop is worth $500 and the fix costs $350, put that money toward a replacement — and I'll tell you so. Below that line, repair wins: less cost, less waste, and no weekend lost to setting up a new machine.",
      },
      {
        h: "Always get a diagnostic first",
        p: "You can't make a good repair-or-replace decision without knowing what's actually wrong. A proper diagnostic turns a guess into a number — and once you have the number, the decision usually makes itself.",
      },
    ],
    related: { href: '/services#pc-repair', label: 'PC Repair & Custom Builds' },
    cta: "Bring me the machine and I'll tell you straight: fix it, or put the money toward something new.",
  },
  {
    slug: 'microsoft-365-small-business',
    tag: 'Business IT',
    title: 'What is Microsoft 365 — and Does Your Small Business Need It?',
    description:
      'A plain-language guide to Microsoft 365 for small businesses: professional email, cloud storage, Teams, and security — and what it actually costs.',
    intro:
      "Microsoft 365 is more than Outlook and Word. For small businesses, it's a complete platform for email, file sharing, communication, and security — at a price that makes sense.",
    sections: [
      {
        h: 'Professional @yourcompany.com email builds trust',
        p: "Customers notice when an invoice comes from a Gmail address. Microsoft 365 gives every employee email at your own domain, with a real business-grade inbox behind it — spam filtering, calendars, and shared mailboxes included.",
      },
      {
        h: '1TB of cloud storage per user, accessible anywhere',
        p: "Every user gets a terabyte of OneDrive storage. Files sync across computers and phones automatically, which means a stolen laptop or a failed drive no longer takes your documents with it.",
      },
      {
        h: 'Teams replaces the group-text chaos',
        p: "Small teams often run on personal texting, which means business conversations live on personal phones. Teams gives you chat, calls, and file sharing in one place that the business actually owns — and it's included in most plans.",
      },
      {
        h: 'Built-in security protects your business data',
        p: "Multi-factor authentication, device management, and data-loss protection are built into the platform. For a small business without an IT department, that's enterprise-level security infrastructure for the price of a lunch per user.",
      },
      {
        h: 'Plans start around $6/user/month',
        p: "That's far cheaper than buying email hosting, cloud storage, an office suite, and a communication tool separately. The trick is picking the right plan tier and setting it up correctly the first time — which is where most businesses stumble.",
      },
    ],
    related: { href: '/services#business-it', label: 'Small Business IT' },
    cta: "I set up and manage Microsoft 365 for small businesses across Central Florida — migration, security, and ongoing support.",
  },
  {
    slug: 'how-to-back-up-your-data',
    tag: 'Data Safety',
    title: 'How to Back Up Your Data (and Why It Actually Matters)',
    description:
      'Hard drives fail and laptops get dropped. A simple, realistic backup strategy — the 3-2-1 rule explained in plain language.',
    intro:
      "Hard drives fail. Laptops get dropped. Ransomware encrypts your files. The only question is whether you had a backup when it happened. Here's a simple approach that works.",
    sections: [
      {
        h: 'The 3-2-1 rule: 3 copies, 2 different media, 1 offsite',
        p: "Keep three copies of anything that matters: the original, a local backup (like an external drive), and one copy somewhere else (the cloud counts). It sounds like overkill until the day your house loses both the laptop and the drive sitting next to it.",
      },
      {
        h: 'External drive + cloud backup is the minimum',
        p: "For most homes, one external hard drive that backs up automatically plus a cloud sync service covers the 3-2-1 rule without any effort after setup day. The key word is automatically — a backup that depends on you remembering isn't a backup.",
      },
      {
        h: 'Google Drive, OneDrive, and iCloud all work — pick one and actually use it',
        p: "There's no meaningful wrong choice among the big three. What matters is that it's turned on, it's syncing the folders you actually use, and you haven't quietly run out of storage space — which is the most common silent failure I see.",
      },
      {
        h: 'Back up your photos first',
        p: "In years of doing data recovery, photos are the thing people grieve. Documents can be recreated; the photos of your kids can't. Whatever backup you set up, confirm the photo library is in it before anything else.",
      },
      {
        h: "Test your backup occasionally",
        p: "A backup you can't restore isn't really a backup. Once or twice a year, pick a random file and actually restore it. Five minutes of checking beats finding out the backup was broken on the day you need it.",
      },
    ],
    related: { href: '/services#home-tech', label: 'Data Recovery & Home Tech Support' },
    cta: "I set up automatic backups that don't depend on anyone remembering — and if you've already lost files, data recovery is one of the things I do most.",
  },
  {
    slug: 'smart-home-setup-guide',
    tag: 'Smart Home',
    title: 'Smart Home Setup: Where to Start (Without Getting Overwhelmed)',
    description:
      'A practical starting guide to smart home setup — which device to buy first, how to keep everything compatible, and how to keep it secure.',
    intro:
      "Smart home technology is useful — but only if it's set up correctly. Start simple, add gradually, and make sure everything is on a secure network.",
    sections: [
      {
        h: 'Start with one high-impact device',
        p: "A smart thermostat or a video doorbell delivers obvious daily value — comfort and savings, or knowing who's at the door from anywhere. Start with one, live with it for a month, and you'll know exactly what you want to add next.",
      },
      {
        h: 'Choose a single ecosystem when possible',
        p: "Google, Amazon, and Apple each have their own smart home world, and devices work best inside one of them. Mixing ecosystems is where the frustration stories come from. Pick the one that matches the phones in your house and stay in it.",
      },
      {
        h: 'Put smart devices on a dedicated guest or IoT network',
        p: "Smart plugs and cameras are small computers with cheap security. Keeping them on a separate network means that even if one is compromised, it can't reach your laptops, files, or anything that actually matters.",
      },
      {
        h: 'Change default passwords on every device before connecting it',
        p: "Default camera and doorbell passwords are searchable online, and there are real websites that index unsecured cameras. Thirty seconds per device closes that door permanently.",
      },
      {
        h: 'Professional installation saves hours of frustration',
        p: "Most smart home horror stories are setup problems, not product problems: weak Wi-Fi at the camera location, wrong network bands, devices that never got fully paired. Having it installed and tested properly once means it just works from day one.",
      },
    ],
    related: { href: '/services#security', label: 'Security & Smart Home Setup' },
    cta: "Cameras, doorbells, thermostats, whole ecosystems — I install them cleanly, connect them to your phone, and make sure it all works before I leave.",
  },
  {
    slug: 'cybersecurity-for-small-business',
    tag: 'Cybersecurity',
    title: 'Cybersecurity Basics for Small Businesses',
    description:
      'Small businesses are the top target for cybercriminals. Five baseline practices that dramatically cut your risk without a big IT budget.',
    intro:
      "Small businesses are the number one target for cybercriminals — because defenses are weaker. A few baseline practices dramatically reduce your risk without requiring a big IT budget.",
    sections: [
      {
        h: 'Use a password manager — no excuses',
        p: "Reused passwords are how one leaked account becomes ten compromised ones. A password manager gives every account its own strong password while your team only remembers one. It's the highest-impact, lowest-cost security upgrade a small business can make.",
      },
      {
        h: 'Enable multi-factor authentication on email and banking — always',
        p: "MFA means a stolen password alone isn't enough to get in. Email and banking come first because email resets every other password you have. This one setting stops the majority of account-takeover attacks cold.",
      },
      {
        h: 'Keep software and operating systems updated automatically',
        p: "Most successful attacks exploit holes that were patched months earlier — they work because nobody installed the update. Turn on automatic updates everywhere and the problem largely solves itself.",
      },
      {
        h: 'Train employees to recognize phishing',
        p: "Phishing emails are the #1 way businesses get breached, and the fake invoices and password-reset emails are getting genuinely convincing. A short training session — and a culture where it's safe to ask 'is this email real?' — is worth more than expensive software.",
      },
      {
        h: 'Have a backup strategy before you need it',
        p: "Ransomware works by making your files the hostage. A tested, automatic, offsite backup means there's nothing to ransom — you wipe, restore, and get back to work. After the attack is the wrong time to find out your backups weren't running.",
      },
    ],
    related: { href: '/services#business-it', label: 'Small Business IT & Cybersecurity' },
    cta: "I do cybersecurity assessments for small businesses — a plain-language review of where you're exposed and what to fix first, quoted up front.",
  },
]

export function getTip(slug) {
  return TIPS.find(t => t.slug === slug)
}
