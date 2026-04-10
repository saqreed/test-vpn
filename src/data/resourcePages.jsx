import {
  Activity,
  Award,
  BookOpen,
  Crown,
  Globe,
  Headphones,
  Mail,
  MessageSquare,
  Server,
  Shield,
  Smartphone,
  Users,
  Zap,
} from 'lucide-react'

export const resourcePages = {
  download: {
    seo: {
      title: 'Download CloudVPN Apps for Every Device',
      description:
        'Download CloudVPN for desktop, mobile, Linux, routers and remote teams. Secure every device with a native app, quick setup, and verified configuration bundles.',
      path: '/download',
      keywords:
        'CloudVPN download, VPN apps, VPN for Windows, VPN for macOS, VPN for iPhone, VPN for Android, VPN for Linux, router VPN setup',
    },
    hero: {
      eyebrow: 'Download',
      title: 'Install CloudVPN wherever work and life happen',
      description:
        'Native apps, one-click profiles, and rollout kits for every major platform. Start on your laptop, continue on mobile, and keep every connection covered.',
      badges: ['Windows', 'macOS', 'iOS', 'Android', 'Linux', 'Routers'],
      actions: [
        { label: 'See Pricing', to: '/pricing', primary: true },
        { label: 'Talk to Support', to: '/contact' },
      ],
    },
    sections: [
      {
        type: 'cards',
        background: 'var(--bg)',
        title: 'Choose the setup that matches your environment',
        description:
          'Whether you are onboarding one device or shipping a company-wide rollout, the installation flow stays lightweight and predictable.',
        items: [
          {
            Icon: Shield,
            title: 'Desktop apps',
            description:
              'Windows and macOS clients with automatic server selection, kill switch support, and one-click reconnect.',
            bullets: ['Fast install package', 'Auto-connect on risky Wi-Fi', 'Built-in diagnostics'],
          },
          {
            Icon: Smartphone,
            title: 'Mobile apps',
            description:
              'Secure iPhone and Android devices with fast resume, low battery overhead, and privacy alerts for open networks.',
            bullets: ['Biometric unlock', 'Quick server switcher', 'Streaming and travel presets'],
          },
          {
            Icon: Server,
            title: 'Linux and CLI',
            description:
              'Teams running Linux can use configuration bundles, CLI-friendly profiles, and deployment scripts for repeatable setup.',
            bullets: ['OpenVPN and WireGuard files', 'Headless-friendly setup', 'Ops-ready documentation'],
          },
          {
            Icon: Globe,
            title: 'Router and edge coverage',
            description:
              'Protect smart TVs, game consoles, and office networks by moving security closer to the network edge.',
            bullets: ['Router guide library', 'DNS fallback notes', 'Shared network protection'],
          },
        ],
      },
      {
        type: 'split',
        background: 'var(--bg-sect)',
        title: 'Deployment stays simple even when the footprint grows',
        description:
          'CloudVPN ships with the operational details teams need before a rollout goes live.',
        body: [
          'Every download bundle includes checksum validation, setup guidance, and the minimum permissions required for install.',
          'For managed environments, you can hand off platform-specific packages to IT without rebuilding the experience for end users.',
        ],
        bullets: [
          'Versioned release packages',
          'Rollback instructions for previous clients',
          'Configuration templates for travel, streaming, and zero-trust access',
        ],
        asideTitle: 'What ships with every release',
        asideItems: [
          { label: 'Installer checks', value: 'Signed builds and checksum notes' },
          { label: 'Protocol support', value: 'WireGuard, OpenVPN, fallback profiles' },
          { label: 'Support SLA', value: '24/7 help for setup and migration' },
        ],
      },
      {
        type: 'timeline',
        background: 'var(--bg)',
        title: 'Recommended rollout sequence',
        description:
          'A simple sequence that works well for both individual users and internal IT teams.',
        items: [
          {
            label: 'Step 1',
            title: 'Choose your device mix',
            description:
              'Identify whether you need personal installs, admin-managed devices, or network-level protection for a shared office.',
          },
          {
            label: 'Step 2',
            title: 'Pick the right connection profile',
            description:
              'Start with the fastest automatic profile, then move to WireGuard, OpenVPN, or dedicated business settings if policy requires it.',
          },
          {
            label: 'Step 3',
            title: 'Verify and scale',
            description:
              'Run connection checks, confirm DNS protection, and roll the same bundle out across the rest of the fleet.',
          },
        ],
      },
    ],
    finalCta: {
      title: 'Need a rollout plan instead of a simple install?',
      description:
        'Our support team can help map devices, profiles, and migration timing before you deploy CloudVPN company-wide.',
      actions: [
        { label: 'Contact Support', to: '/contact', primary: true },
        { label: 'Explore Features', to: '/features' },
      ],
    },
  },
  changelog: {
    seo: {
      title: 'CloudVPN Changelog and Product Updates',
      description:
        'Track CloudVPN releases, network upgrades, client improvements, and security hardening notes across desktop, mobile, and global infrastructure.',
      path: '/changelog',
      keywords:
        'CloudVPN changelog, VPN release notes, VPN product updates, client improvements, network upgrades, security patch notes',
    },
    hero: {
      eyebrow: 'Changelog',
      title: 'Every release, network upgrade, and hardening note in one place',
      description:
        'A readable product log for teams that care about what changed, why it changed, and what to verify after updating.',
      badges: ['Client releases', 'Infrastructure', 'Security', 'Performance'],
      actions: [
        { label: 'Download Apps', to: '/download', primary: true },
        { label: 'See Server Status', to: '/status' },
      ],
    },
    sections: [
      {
        type: 'timeline',
        background: 'var(--bg)',
        title: 'Recent releases',
        description:
          'A snapshot of the most important updates shipped across the product surface.',
        items: [
          {
            label: 'v4.8.0',
            title: 'Faster reconnect flow on desktop',
            description:
              'Reduced average recovery time after network interruption and improved visibility into connection state.',
            bullets: ['Quicker network handoff detection', 'Improved kill switch state messaging', 'Cleaner connection diagnostics'],
          },
          {
            label: 'v4.7.3',
            title: 'Expanded routing controls for business teams',
            description:
              'Added better split-tunneling defaults and safer profile sharing for distributed teams.',
            bullets: ['Profile templates for teams', 'Safer default routes', 'More predictable policy sync'],
          },
          {
            label: 'Network',
            title: 'New low-latency capacity in Frankfurt and Singapore',
            description:
              'Added edge capacity to absorb peak streaming and remote-work traffic without degrading latency.',
            bullets: ['Lower queue depth at peak hours', 'More headroom for failover', 'Improved uptime margin'],
          },
          {
            label: 'Security',
            title: 'Session token hardening and audit logging cleanup',
            description:
              'Reduced token exposure windows and simplified internal operational logs to align with privacy-by-default goals.',
          },
        ],
      },
      {
        type: 'cards',
        background: 'var(--bg-sect)',
        title: 'What we log in the changelog',
        description:
          'The changelog focuses on the changes that actually matter to operators and end users.',
        items: [
          {
            Icon: Zap,
            title: 'Performance',
            description:
              'Latency, reconnect behavior, throughput tuning, and anything that changes day-to-day feel.',
          },
          {
            Icon: Shield,
            title: 'Security',
            description:
              'Protocol defaults, hardening changes, privacy posture updates, and audit-related notes.',
          },
          {
            Icon: Users,
            title: 'Team workflows',
            description:
              'Anything affecting onboarding, device rollout, support escalation, or account administration.',
          },
        ],
      },
    ],
    finalCta: {
      title: 'Want release notes delivered with rollout guidance?',
      description:
        'We can help translate product updates into actions for operators, support teams, and remote employees.',
      actions: [
        { label: 'Contact Our Team', to: '/contact', primary: true },
        { label: 'Read the Blog', to: '/blog' },
      ],
    },
  },
  blog: {
    seo: {
      title: 'CloudVPN Blog: Security Research, Guides, and Product Notes',
      description:
        'Read CloudVPN articles on secure remote work, privacy operations, VPN setup, travel security, streaming performance, and product announcements.',
      path: '/blog',
      keywords:
        'VPN blog, privacy blog, security guides, remote work security, travel privacy, VPN setup articles, product updates',
    },
    hero: {
      eyebrow: 'Blog',
      title: 'Clear writing for people who care how privacy tools really work',
      description:
        'Research notes, practical setup guides, and product thinking written for operators, travelers, and teams shipping secure access.',
      badges: ['Guides', 'Research', 'Remote work', 'Announcements'],
      actions: [
        { label: 'Open Help Center', to: '/help-center', primary: true },
        { label: 'Browse Features', to: '/features' },
      ],
    },
    sections: [
      {
        type: 'cards',
        background: 'var(--bg)',
        title: 'Featured reads',
        description:
          'Editorial pieces that help customers understand both the product and the landscape around it.',
        items: [
          {
            Icon: Shield,
            title: 'What a no-log promise should actually mean',
            meta: 'Security explainer',
            description:
              'How to evaluate privacy claims, what operational logs still exist, and where marketing language usually gets fuzzy.',
          },
          {
            Icon: Globe,
            title: 'Travel-ready privacy checklist for remote teams',
            meta: 'Operations guide',
            description:
              'A practical pre-flight checklist for devices, network trust, MFA hygiene, and cross-border access planning.',
          },
          {
            Icon: Activity,
            title: 'Why latency feels worse than bandwidth',
            meta: 'Performance note',
            description:
              'A breakdown of where perceived speed is lost and how network architecture decisions affect the end-user experience.',
          },
          {
            Icon: BookOpen,
            title: 'Routing only the traffic you intend to protect',
            meta: 'Product guide',
            description:
              'When split tunneling helps, when it adds risk, and how to decide between convenience and policy control.',
          },
        ],
      },
      {
        type: 'split',
        background: 'var(--bg-sect)',
        title: 'We optimize for useful reading, not content volume',
        description:
          'The goal is to publish material that helps someone make a better privacy or operations decision within a few minutes.',
        body: [
          'Every article is written around one concrete job: explain a product decision, teach a setup, or clarify a real-world security tradeoff.',
          'That keeps the blog practical for customers and credible for teams evaluating CloudVPN in regulated or high-velocity environments.',
        ],
        bullets: [
          'No filler product recaps',
          'Action-oriented guides with operating context',
          'Clear distinction between research, education, and announcements',
        ],
        asideTitle: 'Editorial focus',
        asideItems: [
          { label: 'Audience', value: 'Operators, remote teams, privacy-minded users' },
          { label: 'Cadence', value: 'Major notes monthly, smaller updates as needed' },
          { label: 'Style', value: 'Short, concrete, and operationally useful' },
        ],
      },
    ],
    finalCta: {
      title: 'Need answers faster than an article can give them?',
      description:
        'The help center and support team cover setup, troubleshooting, and rollout questions in more detail.',
      actions: [
        { label: 'Visit Help Center', to: '/help-center', primary: true },
        { label: 'Contact Support', to: '/contact' },
      ],
    },
  },
  careers: {
    seo: {
      title: 'Careers at CloudVPN',
      description:
        'Build privacy infrastructure, support secure remote work, and help millions of users trust their internet connection. Explore roles and hiring principles at CloudVPN.',
      path: '/careers',
      keywords:
        'CloudVPN careers, security jobs, remote infrastructure jobs, privacy company jobs, support engineering careers, product design jobs',
    },
    hero: {
      eyebrow: 'Careers',
      title: 'Build privacy infrastructure people depend on every day',
      description:
        'We hire builders who care about reliability, clarity, and the human side of security products.',
      badges: ['Engineering', 'Support', 'Design', 'Remote collaboration'],
      actions: [
        { label: 'Contact Recruiting', to: '/contact', primary: true },
        { label: 'About CloudVPN', to: '/about' },
      ],
    },
    sections: [
      {
        type: 'cards',
        background: 'var(--bg)',
        title: 'What the work feels like here',
        description:
          'We keep the team small enough to move quickly and disciplined enough to earn trust.',
        items: [
          {
            Icon: Shield,
            title: 'Privacy-minded engineering',
            description:
              'Product and infrastructure choices are evaluated for both speed and privacy impact, not just feature velocity.',
          },
          {
            Icon: Users,
            title: 'Operators close to customers',
            description:
              'Engineering, support, and product collaborate directly so customer pain is not filtered away from the people who can fix it.',
          },
          {
            Icon: Award,
            title: 'High standards, low drama',
            description:
              'We aim for rigorous decision making without turning every project into a process tax.',
          },
        ],
      },
      {
        type: 'cards',
        background: 'var(--bg-sect)',
        title: 'Sample teams and role areas',
        description:
          'Current openings shift, but these are the functions we continue to invest in.',
        items: [
          {
            Icon: Zap,
            title: 'Network and client engineering',
            description:
              'Desktop, mobile, protocol performance, reliability automation, and release engineering.',
          },
          {
            Icon: Headphones,
            title: 'Support and customer operations',
            description:
              'Technical escalation, onboarding playbooks, incident communication, and knowledge base quality.',
          },
          {
            Icon: Crown,
            title: 'Product and design',
            description:
              'UX for privacy tooling, trust messaging, lifecycle improvements, and multi-device experience design.',
          },
        ],
      },
      {
        type: 'timeline',
        background: 'var(--bg)',
        title: 'How hiring works',
        description:
          'A lightweight process focused on signal, collaboration, and realistic work discussion.',
        items: [
          {
            label: '01',
            title: 'Intro conversation',
            description:
              'We align on role scope, mission fit, and what kind of problems you want to spend your time on.',
          },
          {
            label: '02',
            title: 'Practical team interview',
            description:
              'A collaborative discussion around systems, product judgment, or customer scenarios rather than abstract trivia.',
          },
          {
            label: '03',
            title: 'Final alignment',
            description:
              'A closing conversation on expectations, communication style, and how you would shape the role over time.',
          },
        ],
      },
    ],
    finalCta: {
      title: 'Interested but not sure where you fit yet?',
      description:
        'Reach out anyway. We are open to conversations with people who care deeply about privacy, clarity, and operational excellence.',
      actions: [{ label: 'Start the Conversation', to: '/contact', primary: true }],
    },
  },
  press: {
    seo: {
      title: 'CloudVPN Press Center',
      description:
        'Company facts, press contacts, media resources, and brand context for journalists, analysts, and partners covering CloudVPN.',
      path: '/press',
      keywords:
        'CloudVPN press, media kit, company facts, journalist resources, security company press center, VPN company media',
    },
    hero: {
      eyebrow: 'Press',
      title: 'Facts, context, and media resources without the scavenger hunt',
      description:
        'A single place for journalists, analysts, and partners who need company details, response contacts, and background material quickly.',
      badges: ['Company facts', 'Media contact', 'Brand context', 'Network updates'],
      actions: [
        { label: 'Email Press Team', to: '/contact', primary: true },
        { label: 'Read the Blog', to: '/blog' },
      ],
    },
    sections: [
      {
        type: 'stats',
        background: 'var(--bg)',
        title: 'Company snapshot',
        description:
          'Numbers and operating details most often requested in briefings and media packets.',
        items: [
          { value: '2018', label: 'Founded' },
          { value: '10M+', label: 'Active users' },
          { value: '100+', label: 'Server locations' },
          { value: '24/7', label: 'Support coverage' },
        ],
      },
      {
        type: 'cards',
        background: 'var(--bg-sect)',
        title: 'Press resources',
        description:
          'Use these entry points if you need background, expert comment, or brand material.',
        items: [
          {
            Icon: Mail,
            title: 'Media contact',
            description:
              'For interview requests, embargo coordination, and expert commentary on privacy and remote work security.',
          },
          {
            Icon: BookOpen,
            title: 'Background material',
            description:
              'Company history, product evolution, privacy posture, and market context for rapid orientation.',
          },
          {
            Icon: Activity,
            title: 'Operational updates',
            description:
              'Status, release notes, and infrastructure changes that may affect customer or market reporting.',
          },
        ],
      },
      {
        type: 'split',
        background: 'var(--bg)',
        title: 'Need a fast answer from the team?',
        description:
          'The press workflow is designed to make it easy to get a factual answer instead of a long chain of redirects.',
        body: [
          'For timely coverage, the best path is to send a concise request with deadline, outlet, and what kind of response you need.',
          'If your question touches product changes or network events, include the related release or status page so we can route it quickly.',
        ],
        bullets: [
          'Short response windows for time-sensitive requests',
          'Clear routing between comms, support, and operations',
          'Consistent public-facing facts across materials',
        ],
        asideTitle: 'Recommended request details',
        asideItems: [
          { label: 'Include', value: 'Deadline, publication, topic, response format' },
          { label: 'Best channel', value: 'Press inquiry through contact page' },
          { label: 'Follow-up', value: 'Product and ops leads available as needed' },
        ],
      },
    ],
  },
  helpCenter: {
    seo: {
      title: 'CloudVPN Help Center',
      description:
        'Find setup guides, troubleshooting steps, billing help, policy explanations, and support workflows for CloudVPN across every major platform.',
      path: '/help-center',
      keywords:
        'CloudVPN help center, VPN support articles, VPN troubleshooting, billing help, setup guides, CloudVPN documentation',
    },
    hero: {
      eyebrow: 'Help Center',
      title: 'Answers for setup, troubleshooting, billing, and rollout questions',
      description:
        'A practical support library designed to get people unstuck quickly without sending them through a maze of generic docs.',
      badges: ['Setup guides', 'Troubleshooting', 'Billing', 'Admin help'],
      actions: [
        { label: 'Contact Support', to: '/contact', primary: true },
        { label: 'Download CloudVPN', to: '/download' },
      ],
    },
    sections: [
      {
        type: 'cards',
        background: 'var(--bg)',
        title: 'Browse by task',
        description:
          'The help center is organized around the jobs people actually show up to complete.',
        items: [
          {
            Icon: BookOpen,
            title: 'Getting started',
            description:
              'Install guides, first-login steps, recommended settings, and quick checks after setup.',
          },
          {
            Icon: Headphones,
            title: 'Troubleshooting',
            description:
              'Connection issues, slow speeds, DNS problems, and client-specific recovery steps.',
          },
          {
            Icon: Shield,
            title: 'Security and policy',
            description:
              'Privacy commitments, protocol options, account security, and compliance-facing explanations.',
          },
          {
            Icon: MessageSquare,
            title: 'Billing and accounts',
            description:
              'Plan changes, refunds, trial questions, invoices, and team account setup.',
          },
        ],
      },
      {
        type: 'faq',
        background: 'var(--bg-sect)',
        title: 'Popular support questions',
        description:
          'A few of the questions customers ask most often before they escalate to the support team.',
        items: [
          {
            q: 'How do I know the VPN is actually protecting my connection?',
            a: 'After connecting, verify the displayed region, run a DNS leak check, and confirm the kill switch is enabled if you want traffic blocked during reconnects.',
          },
          {
            q: 'What should I do if performance drops after connecting?',
            a: 'Start by switching to the fastest nearby server, confirm local network quality, and compare protocol settings. If the issue persists, share diagnostics with support.',
          },
          {
            q: 'Can my team roll this out without manual per-device setup?',
            a: 'Yes. CloudVPN supports repeatable deployment bundles for managed devices and can help map the right profile approach for your environment.',
          },
          {
            q: 'Where do billing and refund requests go?',
            a: 'Those requests are handled through the contact workflow and prioritized by account context so customers do not need to repeat details across teams.',
          },
        ],
      },
    ],
    finalCta: {
      title: 'Still blocked after trying the guides?',
      description:
        'Send the environment details and what you already tested. We will pick it up from there without making you start over.',
      actions: [{ label: 'Open a Support Request', to: '/contact', primary: true }],
    },
  },
  community: {
    seo: {
      title: 'CloudVPN Community Programs',
      description:
        'Join the CloudVPN community through beta programs, customer feedback loops, educational sessions, and privacy-first collaboration initiatives.',
      path: '/community',
      keywords:
        'CloudVPN community, beta program, customer feedback, privacy community, VPN user community, CloudVPN advocates',
    },
    hero: {
      eyebrow: 'Community',
      title: 'A place for testers, advocates, and teams shaping the product with us',
      description:
        'We keep the community practical: real feedback, early access, and direct conversations with the people building and supporting CloudVPN.',
      badges: ['Beta access', 'Feedback loops', 'Live sessions', 'Advocacy'],
      actions: [
        { label: 'Talk to the Team', to: '/contact', primary: true },
        { label: 'Read the Blog', to: '/blog' },
      ],
    },
    sections: [
      {
        type: 'cards',
        background: 'var(--bg)',
        title: 'Ways to participate',
        description:
          'Choose the level of involvement that fits your time and your interest.',
        items: [
          {
            Icon: Users,
            title: 'Beta circle',
            description:
              'Preview upcoming client changes, test rollout paths, and flag regressions before broad release.',
          },
          {
            Icon: MessageSquare,
            title: 'Feedback sessions',
            description:
              'Join periodic product conversations around setup friction, performance, and what makes trust feel real.',
          },
          {
            Icon: BookOpen,
            title: 'Educational events',
            description:
              'Short live sessions on travel security, remote work hygiene, and safe VPN operating patterns.',
          },
        ],
      },
      {
        type: 'timeline',
        background: 'var(--bg-sect)',
        title: 'How the program usually works',
        description:
          'A lightweight structure that keeps participation valuable without turning it into unpaid labor.',
        items: [
          {
            label: 'Join',
            title: 'Tell us where you want to contribute',
            description:
              'Share whether you care more about testing, education, security dialogue, or customer experience feedback.',
          },
          {
            label: 'Access',
            title: 'Get matched to the right track',
            description:
              'We route participants toward beta builds, feedback sessions, or community briefings based on fit.',
          },
          {
            label: 'Improve',
            title: 'See feedback turn into product changes',
            description:
              'We close the loop with release notes, changelog callouts, and follow-up conversations when input changes the roadmap.',
          },
        ],
      },
      {
        type: 'split',
        background: 'var(--bg)',
        title: 'A small code of conduct with real expectations',
        description:
          'We want conversations that are thoughtful, kind, and useful to the people showing up.',
        body: [
          'Participants are expected to share evidence-based feedback, respect privacy boundaries, and avoid publishing beta behavior without context.',
          'In return, the team shares direction honestly, credits feedback when it shapes the product, and keeps communication direct.',
        ],
        bullets: [
          'Respectful, specific feedback',
          'No vague pile-ons or performative reporting',
          'Privacy-first handling of beta details and account information',
        ],
        asideTitle: 'Best fit for',
        asideItems: [
          { label: 'Individuals', value: 'Power users and privacy-minded travelers' },
          { label: 'Teams', value: 'Operators managing distributed employees' },
          { label: 'Partners', value: 'Educators and community organizers' },
        ],
      },
    ],
  },
}
