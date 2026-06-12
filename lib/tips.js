// Shared Tech Tips content, each tip is an individually-routed article
// under /tech-tips/[slug]. The index page and sitemap both read from here.

export const TIPS = [
  {
    slug: 'windows-10-end-of-support',
    tag: 'Windows',
    title: 'Windows 10 Support Has Ended: What It Means and What to Do',
    description:
      'Microsoft stopped updating Windows 10 in October 2025. Here is what that actually means for your security, plus your real options, explained without the scare tactics.',
    intro:
      "Microsoft ended support for Windows 10 on October 14, 2025. Your computer still turns on and still works, but it stopped getting the security updates that keep it safe. Here is what that really means, and what your options are.",
    sections: [
      {
        h: 'Your PC still works, it just stops getting security patches',
        p: "Windows 10 didn't shut off on that date, it simply stopped receiving updates. The danger is the slow kind: every month new security holes get discovered, and from now on they don't get fixed on Windows 10. The longer you stay, the more known, unpatched ways in there are.",
      },
      {
        h: 'Check whether your computer can upgrade to Windows 11 for free',
        p: "If your PC is recent enough, upgrading to Windows 11 is free and keeps your files and programs right where they are. Windows 11 has stricter requirements (it needs a security chip called TPM 2.0), so not every machine qualifies. The built-in PC Health Check tells you in a few seconds, or I can check it for you.",
      },
      {
        h: 'If it cannot upgrade, you have one paid year of breathing room',
        p: "Microsoft is offering consumers one extra year of security updates, through October 2026, for about $30, and you can even get it at no cost by syncing your settings to a Microsoft account. It buys time to plan, not a permanent fix, but it keeps you protected while you decide.",
      },
      {
        h: 'Often an older PC just needs a tune-up to run Windows 11 well',
        p: "A computer that feels too slow to bother upgrading is frequently just held back by an aging hard drive or low memory. An SSD and a little more RAM can make a five-year-old machine run Windows 11 smoothly, for a fraction of the cost of replacing it. It is worth checking before you spend on a new one.",
      },
      {
        h: 'Do not panic-buy a new computer because of a pop-up',
        p: "Scammers are already using the Windows 10 deadline as bait, with fake warnings that say you must buy or download something this instant. You don't. This is a planned change with calm, real options. If something is rushing you, that is your cue to slow down and ask someone you trust.",
      },
    ],
    related: { href: '/services#pc-repair', label: 'PC Repair & Upgrades' },
    cta: "Not sure if your computer can run Windows 11, or whether it is even worth upgrading? I'll check it honestly and tell you the most cost-effective move, with no pressure to replace anything that doesn't need it.",
  },
  {
    slug: 'tech-support-scam-warning-signs',
    tag: 'Online Safety',
    title: "That 'Your Computer Is Infected' Pop-Up Is a Scam",
    description:
      'The full-screen virus warning with a phone number to call is a scam, not a real alert. Here is how it works and exactly what to do when it shows up.',
    intro:
      "A full-screen warning takes over your computer. It says you have a virus, sometimes with a blaring alarm, and gives a phone number to call for Microsoft or Apple support. It is a scam, every single time. Here is how to recognize it and what to do.",
    sections: [
      {
        h: 'Real virus warnings never give you a phone number to call',
        p: "This is the giveaway. Microsoft, Apple, and your antivirus will never put a phone number on a security warning and tell you to call it. That number goes straight to a scammer, not a tech company. The moment you see a number to call, you are looking at a scam.",
      },
      {
        h: 'The scare and the rush are the entire trick',
        p: "Everything about the pop-up is built to panic you: the alarm sound, the frozen screen, the claim that your bank logins are being stolen right now. That urgency is the scam. Real problems give you time to think, and an honest technician will never pressure you to act in the next sixty seconds.",
      },
      {
        h: "Never let anyone you didn't call have remote access",
        p: "Once you call, they ask to connect to your computer to fix it. That remote access is how they steal files, install real malware, and watch you log into your bank. If you did not place the call yourself, to a company you already trust, never let anyone take control of your screen.",
      },
      {
        h: "What to actually do: close it, and if you can't, shut down",
        p: "The pop-up is usually just a web page, alarming but harmless until you act on it. Close the browser tab or window. If the screen is locked up and won't close, hold the power button until the computer shuts off, then turn it back on. Do not call the number, and do not type in any passwords.",
      },
      {
        h: "If you already called or gave access, act fast and don't panic",
        p: "It happens to careful, smart people, so there is no shame in it. Disconnect from the internet, change your important passwords from a different device, and call your bank if you shared any financial details. Then have the computer checked to be sure nothing was left behind. The sooner you act, the less damage gets done.",
      },
    ],
    related: { href: '/services#home-tech', label: 'Home Tech Support' },
    cta: "Got a pop-up you're not sure about, or let someone in and now you're worried? Call or text me. I'll tell you straight whether you're fine, and clean it up properly if you're not.",
  },
  {
    slug: 'spot-scam-text-messages',
    tag: 'Online Safety',
    title: 'How to Spot a Scam Text Before You Tap the Link',
    description:
      'Unpaid toll texts, fake delivery notices, bank alerts: scam texts are everywhere in 2026. Here is how to recognize them in seconds and what to do instead of tapping.',
    intro:
      "Scam texts have exploded. The fake unpaid-toll message alone helped push imposter-scam losses past $3.5 billion last year. The good news: once you know the pattern, these are easy to spot. Here is exactly what to look for.",
    sections: [
      {
        h: 'The big three right now: tolls, packages, and bank alerts',
        p: "Most scam texts tell one of three stories. An unpaid toll you need to settle (SunPass, E-ZPass, and the like), a package that is stuck and needs a small fee or your address, or your bank flagging a suspicious charge. They all want the same thing: for you to tap a link and type in your information.",
      },
      {
        h: 'A real toll or delivery never texts you a pay-now link',
        p: "Florida's SunPass, the post office, and your bank do not send a text with a link and ask you to pay or confirm details right there. When one of these lands, do not tap it. If you genuinely wonder whether you owe a toll, open the official app or type the website address in yourself, never go through the text.",
      },
      {
        h: 'Look at the sender and the link, not just the message',
        p: "Real companies text from short business numbers, not a random ten-digit cell or an email address. And the link almost never goes where it claims, it will be a strange web address dressed up to look official. If the sender or the link looks off, that is your answer right there.",
      },
      {
        h: 'Urgency plus a tiny dollar amount is the tell',
        p: "Scam texts push you to act fast over something small: a $6.99 toll, a held package, a charge you do not recognize. The small amount makes it feel harmless to just pay, and the urgency stops you from thinking it through. That combination, hurry plus a small ask, is the scam's signature.",
      },
      {
        h: 'Do not tap, do not reply, just delete it and report it',
        p: "Tapping the link, or even replying STOP, tells scammers your number is live and worth more. The safe move is to delete it. On most phones you can forward the message to 7726 (it spells SPAM) to report it to your carrier, and report it to the FTC at ReportFraud.ftc.gov. Then get on with your day.",
      },
    ],
    related: { href: '/services#home-tech', label: 'Home Tech Support' },
    cta: "Tapped a link you wish you hadn't, or want help locking down your phone and accounts? I help folks across Central Florida sort this out calmly, and set things up so you are harder to fool next time.",
  },
  {
    slug: 'ai-voice-scam-protection',
    tag: 'Online Safety',
    title: 'AI Voice Scams: When the Call Sounds Exactly Like Family',
    description:
      "Scammers can now clone a loved one's voice from a few seconds of audio. Here is how the 'family emergency' call works in 2026, and the simple habit that stops it cold.",
    intro:
      "Picture a call from your grandchild, crying, saying they are in trouble and need money right now. The voice sounds exactly like them. In 2026 it can be faked from a few seconds of audio pulled off social media. Here is how to protect your family.",
    sections: [
      {
        h: 'A voice can now be cloned from just a few seconds of audio',
        p: "This is not science fiction anymore. Cheap tools can copy someone's voice from a short clip: a video they posted, a voicemail, anything public. Scammers use it for the oldest trick there is, a loved one in trouble who needs money or gift cards immediately. The realism is what makes people fall for it.",
      },
      {
        h: 'The emergency and the secrecy are the warning signs',
        p: "The script is always urgent and always secret: there has been an accident or an arrest, they need money this minute, and please do not tell Mom or Dad. Real emergencies rarely demand wire transfers, gift cards, or cash handed to a stranger at your door. Those payment methods are the real tell.",
      },
      {
        h: 'Hang up and call the person back on their real number',
        p: "This one habit defeats the whole scam. However convincing the call is, hang up and call your loved one directly on the number you already have for them. If you cannot reach them, call another family member. Ninety seconds of checking is all it takes, and the real person is almost always perfectly fine.",
      },
      {
        h: 'Set up a family safe word, today',
        p: "Agree on a simple word or phrase that only your family knows, something an impersonator could never guess. If an emergency call comes in, you ask for the safe word. No safe word, no money, no exceptions. It costs nothing to set up, and it is the single most effective defense there is.",
      },
      {
        h: 'Be a little careful about the voice and video you post publicly',
        p: "Scammers pull the audio they need from public posts. You do not have to vanish from social media, but it helps to keep accounts private, and to remember that any video where you or your kids are talking is raw material. A little privacy makes you a much harder target.",
      },
    ],
    related: { href: '/services#home-tech', label: 'Home Tech Support' },
    cta: "Want help making your family's phones and accounts safer, or setting privacy on social media so there is less out there to copy? That is exactly the kind of plain-language help I am here for.",
  },
  {
    slug: 'what-are-passkeys',
    tag: 'Cybersecurity',
    title: 'Passkeys Explained: Logging In Without a Password',
    description:
      'Google, Apple, and Microsoft are replacing passwords with passkeys. Here is what a passkey is, why it is safer, and how to start using them, in plain language.',
    intro:
      "You may have started seeing the option to create a passkey instead of a password. It is not a gimmick, it is the technology meant to finally replace passwords, and it is genuinely both safer and easier. Here is what it is and how to begin.",
    sections: [
      {
        h: 'A passkey lets you sign in with your face, fingerprint, or PIN',
        p: "Instead of typing a password, you unlock the account the same way you unlock your phone: a fingerprint, a face scan, or the PIN you already use. The passkey lives on your device and proves it is you. Nothing to remember, nothing to type, nothing to forget.",
      },
      {
        h: 'There is no password for a hacker to steal or guess',
        p: "A passkey comes in two pieces: one stays locked on your device and never leaves it, the other sits with the website and is useless on its own. There is no password in a company's database waiting to leak in a breach, and nothing for you to accidentally reuse across sites. That is the whole security win.",
      },
      {
        h: "Passkeys can't be phished, and that is the big deal",
        p: "Passwords get stolen mostly through fake login pages. A passkey is tied to the real website's exact address, so even a flawless copy of a Google or bank login page simply will not work, the passkey refuses to hand anything to the wrong site. It closes the door that most account break-ins walk through.",
      },
      {
        h: 'They sync across your devices, and you keep a backup way in',
        p: "When you create a passkey, Apple, Google, or Microsoft can sync it securely to your other devices, so a new phone is not a lockout. Websites also keep a backup sign-in method, so a passkey adds convenience without taking away your safety net. You are not putting all your eggs in one device.",
      },
      {
        h: 'Where to start: your email and main accounts',
        p: "Begin with the accounts that matter most. Your email comes first, since it can reset everything else, then banking and shopping. In the security settings, look for 'Create a passkey' or 'Passwordless sign-in' and follow the prompts. You can keep your password as a fallback while you get comfortable. No rush, and no downside.",
      },
    ],
    related: { href: '/services#home-tech', label: 'Home Tech Support' },
    cta: "Want a hand turning on passkeys and locking down your most important accounts the right way? I walk people through it in plain English, at your pace, and make sure you never get locked out.",
  },
  {
    slug: 'ssd-upgrade-signs',
    tag: 'PC Performance',
    title: '5 Signs Your PC Needs an SSD Upgrade',
    description:
      'Slow boot times, grinding noises, sluggish programs, here are the five signs an SSD upgrade will fix your computer, from a Central Florida repair technician.',
    intro:
      "If your computer is slow, loud, and struggling with everyday tasks, the culprit is almost always the hard drive. An SSD upgrade is the single biggest speed boost you can make, usually without replacing the whole machine.",
    sections: [
      {
        h: 'It takes more than 2 minutes to fully boot up',
        p: "A healthy computer with an SSD boots in 15-30 seconds. If you press the power button and have time to make coffee before the desktop is usable, your old mechanical drive is the bottleneck, not the rest of the machine.",
      },
      {
        h: 'Opening a browser or Word takes 30+ seconds',
        p: "Programs live on your drive, so every launch means reading thousands of small files. Mechanical drives are terrible at this; SSDs are built for it. If everyday apps crawl open, the drive is almost certainly to blame.",
      },
      {
        h: 'The computer makes grinding or clicking sounds',
        p: "Mechanical drives have spinning platters and a moving arm. Grinding, clicking, or whirring under load means the moving parts are wearing out, and a drive that's making noise is a drive that's going to fail. Back up now and replace it before it dies.",
      },
      {
        h: 'Tasks that used to feel instant now feel sluggish',
        p: "Drives slow down as they fill up and fragment over years of use. If the same computer that felt snappy three years ago now hesitates at everything, the drive has aged, even though the processor and memory are exactly as fast as the day you bought it.",
      },
      {
        h: "The machine is 4-8 years old but otherwise works fine",
        p: "This is the sweet spot for an SSD upgrade. The screen, keyboard, processor, and memory are all still good, the only thing holding the machine back is the drive. An upgrade costs a fraction of a new computer and most people say it feels brand new afterward.",
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
      'Five simple router and Wi-Fi changes that protect your home network from the most common attacks, explained in plain language.',
    intro:
      'Most home networks are one default password away from being compromised. A few simple changes put your home in much better shape than 90% of people around you.',
    sections: [
      {
        h: "Change your router's default username and password immediately",
        p: "Default router logins are published on the internet, anyone can look up the admin password for your exact model in seconds. Changing it is the single most important security step, and it takes two minutes.",
      },
      {
        h: 'Use WPA3 or WPA2 encryption, never open or WEP',
        p: "Your Wi-Fi password setting has an encryption mode behind it. WPA3 (or WPA2 on older routers) keeps traffic scrambled; WEP was cracked nearly twenty years ago, and an open network is an open door. Check this once in your router settings and you're done.",
      },
      {
        h: "Keep your router's firmware updated",
        p: "Router makers patch security holes through firmware updates, and most modern routers can install them automatically. If yours is more than a few years old and has never been updated, it's running with known, documented vulnerabilities.",
      },
      {
        h: 'Create a separate guest network',
        p: "Visitors' phones and smart home gadgets don't need to be on the same network as your personal computers and files. A guest network keeps them isolated, so a compromised smart plug or an infected visitor laptop can't reach anything that matters.",
      },
      {
        h: 'Disable remote management unless you specifically need it',
        p: "Remote management lets your router's settings be changed from outside your home. Almost nobody needs that, and leaving it on gives attackers a way in from anywhere on the internet. Turn it off unless you have a specific reason not to.",
      },
    ],
    related: { href: '/services#home-tech', label: 'Home Tech Support' },
    cta: "Want your home network checked and locked down properly? I do exactly this, and I'll explain every change I make.",
  },
  {
    slug: 'fix-wifi-dead-zones',
    tag: 'Wi-Fi',
    title: "Dead Zones? Here's How to Fix Your Home Wi-Fi",
    description:
      'Wi-Fi dead zones are usually a placement or hardware problem, not an internet speed problem. Here is what to check before upgrading your plan.',
    intro:
      "Wi-Fi problems are almost always a placement or hardware issue, not an internet speed issue. Before you upgrade your plan, check these things first.",
    sections: [
      {
        h: 'Router placement matters more than most people think',
        p: "Wi-Fi radiates outward from the router in all directions. A router shoved in a corner closet or behind the TV wastes half its coverage on your yard. Central, elevated, and out in the open wins, sometimes that one move fixes everything.",
      },
      {
        h: 'Thick walls, appliances, and other devices all block signal',
        p: "Concrete, brick, metal ductwork, refrigerators, and even fish tanks absorb Wi-Fi. Microwaves and baby monitors actively interfere with it. If your dead zone sits behind the kitchen or a masonry wall, the signal isn't weak, it's being eaten.",
      },
      {
        h: 'Mesh Wi-Fi systems eliminate dead zones in larger homes',
        p: "Mesh systems (Eero, Orbi, Google Wifi) use multiple units that hand your devices off seamlessly as you move through the house. For homes over ~1,800 square feet or with multiple floors, mesh is almost always the right answer, one powerful router rarely is.",
      },
      {
        h: 'Know your bands: 5GHz is faster, 2.4GHz reaches further',
        p: "Modern routers broadcast on two bands. 5GHz is much faster but fades quickly through walls; 2.4GHz is slower but travels further. A device at the far end of the house may actually do better on 2.4GHz, and most routers can steer devices automatically if set up right.",
      },
      {
        h: 'If your router is more than 5 years old, it is the bottleneck',
        p: "Wi-Fi standards improve every few years, and an old router slows down every device in the house, no matter how fast your internet plan is. Before paying your provider for more speed, make sure your own hardware can actually deliver the speed you already have.",
      },
    ],
    related: { href: '/services#home-tech', label: 'Home Wi-Fi Setup & Optimization' },
    cta: "I design and install whole-home Wi-Fi that reaches every room, quoted up front, tested before I leave.",
  },
  {
    slug: 'repair-vs-replace',
    tag: 'Repair vs. Replace',
    title: 'When to Repair vs. Replace Your Computer',
    description:
      'Most "dead" computers have one fixable part. Here is an honest framework for deciding whether to repair or replace, from a technician with no reason to upsell you.',
    intro:
      "The gut reaction is to replace a broken computer. But most of the time, the problem is one fixable part, and a repair costs a fraction of a new machine.",
    sections: [
      {
        h: 'Slow performance is usually storage or RAM, not the whole computer',
        p: "When a machine crawls, people assume it's worn out. Almost always, it's the hard drive or a shortage of memory. Both are replaceable parts, and either upgrade costs far less than a new computer while delivering most of the same feeling of speed.",
      },
      {
        h: "Won't turn on? Power supply or battery, both replaceable",
        p: "A computer that's completely dead looks like a total loss, but the most common causes are the cheapest parts: the power supply in a desktop, the battery or charging port in a laptop. The data on your drive is usually completely untouched.",
      },
      {
        h: 'Overheating is a $50 fix, not an $800 replacement',
        p: "Computers that run hot and shut themselves down usually need their fans cleaned and fresh thermal paste, routine maintenance, not a death sentence. Doing it early also prevents the heat damage that genuinely does kill machines.",
      },
      {
        h: 'Replace when the repair exceeds ~60% of a comparable new machine',
        p: "That's the honest threshold. If your laptop is worth $500 and the fix costs $350, put that money toward a replacement, and I'll tell you so. Below that line, repair wins: less cost, less waste, and no weekend lost to setting up a new machine.",
      },
      {
        h: "Always get a diagnostic first",
        p: "You can't make a good repair-or-replace decision without knowing what's actually wrong. A proper diagnostic turns a guess into a number, and once you have the number, the decision usually makes itself.",
      },
    ],
    related: { href: '/services#pc-repair', label: 'PC Repair & Custom Builds' },
    cta: "Bring me the machine and I'll tell you straight: fix it, or put the money toward something new.",
  },
  {
    slug: 'microsoft-365-small-business',
    tag: 'Business IT',
    title: 'What is Microsoft 365, and Does Your Small Business Need It?',
    description:
      'A plain-language guide to Microsoft 365 for small businesses: professional email, cloud storage, Teams, and security, and what it actually costs.',
    intro:
      "Microsoft 365 is more than Outlook and Word. For small businesses, it's a complete platform for email, file sharing, communication, and security, at a price that makes sense.",
    sections: [
      {
        h: 'Professional @yourcompany.com email builds trust',
        p: "Customers notice when an invoice comes from a Gmail address. Microsoft 365 gives every employee email at your own domain, with a real business-grade inbox behind it, spam filtering, calendars, and shared mailboxes included.",
      },
      {
        h: '1TB of cloud storage per user, accessible anywhere',
        p: "Every user gets a terabyte of OneDrive storage. Files sync across computers and phones automatically, which means a stolen laptop or a failed drive no longer takes your documents with it.",
      },
      {
        h: 'Teams replaces the group-text chaos',
        p: "Small teams often run on personal texting, which means business conversations live on personal phones. Teams gives you chat, calls, and file sharing in one place that the business actually owns, and it's included in most plans.",
      },
      {
        h: 'Built-in security protects your business data',
        p: "Multi-factor authentication, device management, and data-loss protection are built into the platform. For a small business without an IT department, that's enterprise-level security infrastructure for the price of a lunch per user.",
      },
      {
        h: 'Plans start around $6/user/month',
        p: "That's far cheaper than buying email hosting, cloud storage, an office suite, and a communication tool separately. The trick is picking the right plan tier and setting it up correctly the first time, which is where most businesses stumble.",
      },
    ],
    related: { href: '/services#business-it', label: 'Small Business IT' },
    cta: "I set up and manage Microsoft 365 for small businesses across Central Florida, migration, security, and ongoing support.",
  },
  {
    slug: 'how-to-back-up-your-data',
    tag: 'Data Safety',
    title: 'How to Back Up Your Data (and Why It Actually Matters)',
    description:
      'Hard drives fail and laptops get dropped. A simple, realistic backup strategy, the 3-2-1 rule explained in plain language.',
    intro:
      "Hard drives fail. Laptops get dropped. Ransomware encrypts your files. The only question is whether you had a backup when it happened. Here's a simple approach that works.",
    sections: [
      {
        h: 'The 3-2-1 rule: 3 copies, 2 different media, 1 offsite',
        p: "Keep three copies of anything that matters: the original, a local backup (like an external drive), and one copy somewhere else (the cloud counts). It sounds like overkill until the day your house loses both the laptop and the drive sitting next to it.",
      },
      {
        h: 'External drive + cloud backup is the minimum',
        p: "For most homes, one external hard drive that backs up automatically plus a cloud sync service covers the 3-2-1 rule without any effort after setup day. The key word is automatically, a backup that depends on you remembering isn't a backup.",
      },
      {
        h: 'Google Drive, OneDrive, and iCloud all work, pick one and actually use it',
        p: "There's no meaningful wrong choice among the big three. What matters is that it's turned on, it's syncing the folders you actually use, and you haven't quietly run out of storage space, which is the most common silent failure I see.",
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
    cta: "I set up automatic backups that don't depend on anyone remembering, and if you've already lost files, data recovery is one of the things I do most.",
  },
  {
    slug: 'smart-home-setup-guide',
    tag: 'Smart Home',
    title: 'Smart Home Setup: Where to Start (Without Getting Overwhelmed)',
    description:
      'A practical starting guide to smart home setup, which device to buy first, how to keep everything compatible, and how to keep it secure.',
    intro:
      "Smart home technology is useful, but only if it's set up correctly. Start simple, add gradually, and make sure everything is on a secure network.",
    sections: [
      {
        h: 'Start with one high-impact device',
        p: "A smart thermostat or a video doorbell delivers obvious daily value, comfort and savings, or knowing who's at the door from anywhere. Start with one, live with it for a month, and you'll know exactly what you want to add next.",
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
    cta: "Cameras, doorbells, thermostats, whole ecosystems, I install them cleanly, connect them to your phone, and make sure it all works before I leave.",
  },
  {
    slug: 'cybersecurity-for-small-business',
    tag: 'Cybersecurity',
    title: 'Cybersecurity Basics for Small Businesses',
    description:
      'Small businesses are the top target for cybercriminals. Five baseline practices that dramatically cut your risk without a big IT budget.',
    intro:
      "Small businesses are the number one target for cybercriminals, because defenses are weaker. A few baseline practices dramatically reduce your risk without requiring a big IT budget.",
    sections: [
      {
        h: 'Use a password manager, no excuses',
        p: "Reused passwords are how one leaked account becomes ten compromised ones. A password manager gives every account its own strong password while your team only remembers one. It's the highest-impact, lowest-cost security upgrade a small business can make.",
      },
      {
        h: 'Enable multi-factor authentication on email and banking, always',
        p: "MFA means a stolen password alone isn't enough to get in. Email and banking come first because email resets every other password you have. This one setting stops the majority of account-takeover attacks cold.",
      },
      {
        h: 'Keep software and operating systems updated automatically',
        p: "Most successful attacks exploit holes that were patched months earlier, they work because nobody installed the update. Turn on automatic updates everywhere and the problem largely solves itself.",
      },
      {
        h: 'Train employees to recognize phishing',
        p: "Phishing emails are the #1 way businesses get breached, and the fake invoices and password-reset emails are getting genuinely convincing. A short training session, and a culture where it's safe to ask 'is this email real?', is worth more than expensive software.",
      },
      {
        h: 'Have a backup strategy before you need it',
        p: "Ransomware works by making your files the hostage. A tested, automatic, offsite backup means there's nothing to ransom, you wipe, restore, and get back to work. After the attack is the wrong time to find out your backups weren't running.",
      },
    ],
    related: { href: '/services#business-it', label: 'Small Business IT & Cybersecurity' },
    cta: "I do cybersecurity assessments for small businesses, a plain-language review of where you're exposed and what to fix first, quoted up front.",
  },
]

export function getTip(slug) {
  return TIPS.find(t => t.slug === slug)
}
