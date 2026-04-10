export const legalPages = {
  privacy: {
    seo: {
      title: 'CloudVPN Privacy Policy',
      description:
        'Read CloudVPN’s privacy policy, including what information we collect, what we avoid collecting, how we secure account data, and how we handle support interactions.',
      path: '/privacy',
      keywords: 'CloudVPN privacy policy, VPN privacy, no-log policy, data handling, account security, support data retention',
    },
    hero: {
      eyebrow: 'Privacy Policy',
      title: 'Privacy commitments written for humans, not just lawyers',
      description:
        'This summary explains what account data exists, what browsing data we do not keep, and how we handle support and security events.',
      badges: ['No browsing logs', 'Limited account data', 'Secure support handling'],
      actions: [{ label: 'Contact Privacy Team', to: '/contact', primary: true }],
    },
    sections: [
      {
        type: 'document',
        background: 'var(--bg)',
        title: 'What we collect',
        description: 'The minimum information required to operate accounts, subscriptions, and support safely.',
        items: [
          {
            title: 'Account and billing details',
            body: [
              'We collect identifiers such as email address, plan status, and billing metadata needed to provision service and manage subscription access.',
              'Payment processing is handled by approved processors. We do not store full card numbers inside the product experience.',
            ],
          },
          {
            title: 'Support information',
            body: [
              'When you contact support, we may retain the conversation, diagnostic notes you choose to share, and actions taken to resolve the issue.',
            ],
          },
        ],
      },
      {
        type: 'document',
        background: 'var(--bg-sect)',
        title: 'What we do not collect',
        description: 'CloudVPN is designed to avoid retaining browsing activity and connection behavior that can profile the user.',
        items: [
          {
            title: 'Browsing and traffic history',
            bullets: [
              'Visited websites and DNS history',
              'Connection content or transferred files',
              'Browsing session timelines tied to user identity',
            ],
          },
          {
            title: 'Persistent activity logs',
            body: [
              'We do not maintain long-lived activity logs that reconstruct where you browsed, what you opened, or how you used the network.',
            ],
          },
        ],
      },
      {
        type: 'document',
        background: 'var(--bg)',
        title: 'How we protect the data that does exist',
        items: [
          {
            title: 'Security controls',
            bullets: [
              'Restricted operational access',
              'Encryption in transit and at rest for account systems',
              'Role-based workflows for support and operations teams',
            ],
          },
          {
            title: 'Retention approach',
            body: [
              'We aim to keep data only for as long as it serves a legitimate operational, billing, or security purpose.',
            ],
          },
        ],
      },
    ],
  },
  terms: {
    seo: {
      title: 'CloudVPN Terms of Service',
      description:
        'Review the CloudVPN Terms of Service, including account responsibilities, acceptable use expectations, billing terms, and service availability notes.',
      path: '/terms',
      keywords: 'CloudVPN terms of service, VPN terms, acceptable use policy, subscription terms, service availability',
    },
    hero: {
      eyebrow: 'Terms of Service',
      title: 'Service terms that match how the product is actually used',
      description:
        'These terms cover account use, subscriptions, service boundaries, and the expectations we place on both customers and ourselves.',
      badges: ['Account use', 'Billing', 'Service expectations'],
      actions: [{ label: 'Contact Support', to: '/contact', primary: true }],
    },
    sections: [
      {
        type: 'document',
        background: 'var(--bg)',
        title: 'Using the service',
        items: [
          {
            title: 'Account responsibilities',
            body: [
              'Customers are responsible for maintaining secure credentials, protecting their devices, and ensuring that authorized users comply with these terms.',
            ],
          },
          {
            title: 'Acceptable use',
            bullets: [
              'Do not misuse the service for fraud, abuse, or unlawful disruption',
              'Do not attempt to interfere with the security or availability of the network',
              'Do not resell or redistribute service access without written agreement',
            ],
          },
        ],
      },
      {
        type: 'document',
        background: 'var(--bg-sect)',
        title: 'Plans, billing, and cancellation',
        items: [
          {
            title: 'Subscription handling',
            body: [
              'Paid plans renew according to the selected billing cadence unless cancelled before the renewal date.',
              'Refund eligibility is governed by the published trial and guarantee terms associated with the plan.',
            ],
          },
          {
            title: 'Plan changes',
            body: [
              'We may update plan structure, pricing, or included features with reasonable notice where required.',
            ],
          },
        ],
      },
      {
        type: 'document',
        background: 'var(--bg)',
        title: 'Availability and limitations',
        items: [
          {
            title: 'Service availability',
            body: [
              'We work to maintain reliable access, but availability can be affected by maintenance, third-party infrastructure, local networks, and events beyond our control.',
            ],
          },
          {
            title: 'Policy enforcement',
            body: [
              'Accounts that violate these terms may be restricted or removed to protect customers, partners, and the integrity of the service.',
            ],
          },
        ],
      },
    ],
  },
  cookies: {
    seo: {
      title: 'CloudVPN Cookie Policy',
      description:
        'Review the CloudVPN cookie policy, including essential cookies, analytics preferences, support-related storage, and how to control browser-level cookie settings.',
      path: '/cookies',
      keywords: 'CloudVPN cookie policy, cookie settings, analytics cookies, essential cookies, support cookies',
    },
    hero: {
      eyebrow: 'Cookie Policy',
      title: 'A short explanation of browser-side storage and preferences',
      description:
        'This page explains the limited browser storage used for site functionality, analytics, and support-related preferences.',
      badges: ['Essential cookies', 'Preference storage', 'Limited analytics'],
      actions: [{ label: 'Contact Support', to: '/contact', primary: true }],
    },
    sections: [
      {
        type: 'document',
        background: 'var(--bg)',
        title: 'What cookies and similar storage are used for',
        items: [
          {
            title: 'Essential site behavior',
            body: [
              'Certain cookies or local browser storage may be used to remember basic preferences, maintain secure sessions, and support core site functionality.',
            ],
          },
          {
            title: 'Measurement and support',
            body: [
              'We may use limited analytics or support-related storage to understand site performance, improve help flows, and retain context during support interactions.',
            ],
          },
        ],
      },
      {
        type: 'document',
        background: 'var(--bg-sect)',
        title: 'Your controls',
        items: [
          {
            title: 'Browser settings',
            bullets: [
              'Block or clear cookies through browser controls',
              'Use private browsing when you want short-lived local storage',
              'Review device-level privacy settings for mobile browsers',
            ],
          },
          {
            title: 'Feature impact',
            body: [
              'Blocking all storage may affect sign-in continuity, preference persistence, and certain support or analytics experiences.',
            ],
          },
        ],
      },
    ],
  },
  gdpr: {
    seo: {
      title: 'CloudVPN GDPR and Data Rights',
      description:
        'Learn how CloudVPN handles GDPR-related requests, including access, correction, deletion, objection, and portability for eligible personal data.',
      path: '/gdpr',
      keywords: 'CloudVPN GDPR, data subject rights, access request, deletion request, privacy rights, data portability',
    },
    hero: {
      eyebrow: 'GDPR',
      title: 'Data rights and request handling for eligible users',
      description:
        'This overview explains how to request access, correction, deletion, or portability for the limited personal data associated with your account.',
      badges: ['Access requests', 'Deletion requests', 'Correction rights'],
      actions: [{ label: 'Submit a Request', to: '/contact', primary: true }],
    },
    sections: [
      {
        type: 'document',
        background: 'var(--bg)',
        title: 'Available rights',
        items: [
          {
            title: 'Access and correction',
            body: [
              'Eligible users can request details about the personal data associated with their account and ask us to correct inaccurate information.',
            ],
          },
          {
            title: 'Deletion, objection, and portability',
            body: [
              'Where applicable, users may request deletion of personal data, object to certain processing, or ask for a portable copy of data associated with their account.',
            ],
          },
        ],
      },
      {
        type: 'document',
        background: 'var(--bg-sect)',
        title: 'How to submit a request',
        items: [
          {
            title: 'Request workflow',
            bullets: [
              'Contact CloudVPN support with the email associated with the account',
              'Describe the specific right you want to exercise',
              'Complete any identity verification needed to protect the account',
            ],
          },
          {
            title: 'Response timing',
            body: [
              'We review requests promptly and respond within applicable timelines, taking request complexity and verification needs into account.',
            ],
          },
        ],
      },
    ],
  },
}
