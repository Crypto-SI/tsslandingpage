'use client'

import { ReactNode } from 'react';

interface LinkBuildingProps {
  children?: ReactNode;
}

interface Partnership {
  name: string;
  type: 'school' | 'community' | 'business' | 'sports' | 'media';
  url?: string;
  description: string;
  benefits: string[];
  status: 'active' | 'pending' | 'prospective';
  priority: 'high' | 'medium' | 'low';
}

interface LinkOpportunity {
  url: string;
  domainAuthority: number;
  relevanceScore: number;
  opportunityType: 'guest_post' | 'resource_page' | 'broken_link' | 'unlinked_mention';
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedValue: number;
  outreachStatus: 'not_contacted' | 'contacted' | 'responded' | 'accepted' | 'rejected';
}

interface OutreachStrategy {
  targetAudience: string[];
  messaging: {
    introduction: string;
    valueProp: string;
    callToAction: string;
  };
  channels: string[];
  followUp: {
    intervals: number[]; // days
    templates: string[];
  };
  successMetrics: {
    responseRate: number;
    conversionRate: number;
    averageTimeToResponse: number;
  };
}

// Link building strategy data
export const partnerships: Partnership[] = [
    {
      name: "Sportsville Primary School",
      type: "school",
      url: "https://sportsville-primary.co.uk",
      description: "Local primary school with strong sports program",
      benefits: ["Access to students", "Credibility boost", "Local community presence"],
      status: "active",
      priority: "high"
    },
    {
      name: "Community Sports Centre",
      type: "community",
      url: "https://community-sports-centre.org",
      description: "Local community sports facility",
      benefits: ["Facility partnership", "Cross-promotion", "Shared resources"],
      status: "active",
      priority: "high"
    },
    {
      name: "Youth Football League",
      type: "sports",
      url: "https://youth-football-league.co.uk",
      description: "Regional youth football organization",
      benefits: ["League credibility", "Player recruitment", "Coaching network"],
      status: "pending",
      priority: "medium"
    },
    {
      name: "Local Family Business Directory",
      type: "business",
      description: "Local business directory for families",
      benefits: ["Local SEO boost", "Family audience", "Business network"],
      status: "prospective",
      priority: "low"
    },
    {
      name: "Community Newspaper",
      type: "media",
      url: "https://sportsville-chronicle.co.uk",
      description: "Local community newspaper",
      benefits: ["Local media coverage", "Brand awareness", "Community trust"],
      status: "prospective",
      priority: "medium"
    }
  ];

  const linkOpportunities: LinkOpportunity[] = [
    {
      url: "https://parenting-blog.co.uk/football-for-kids",
      domainAuthority: 45,
      relevanceScore: 9,
      opportunityType: "guest_post",
      difficulty: "medium",
      estimatedValue: 150,
      outreachStatus: "not_contacted"
    },
    {
      url: "https://community-resources.org/sports-programs",
      domainAuthority: 38,
      relevanceScore: 8,
      opportunityType: "resource_page",
      difficulty: "easy",
      estimatedValue: 100,
      outreachStatus: "contacted"
    },
    {
      url: "https://local-sports-directory.co.uk/broken-link",
      domainAuthority: 42,
      relevanceScore: 7,
      opportunityType: "broken_link",
      difficulty: "medium",
      estimatedValue: 120,
      outreachStatus: "not_contacted"
    },
    {
      url: "https://family-blog.co.uk/mentioned-tss-multisports",
      domainAuthority: 35,
      relevanceScore: 8,
      opportunityType: "unlinked_mention",
      difficulty: "easy",
      estimatedValue: 80,
      outreachStatus: "not_contacted"
    }
  ];

  const outreachStrategy: OutreachStrategy = {
    targetAudience: [
      "School administrators and sports coordinators",
      "Community center managers",
      "Local business owners",
      "Sports bloggers and journalists",
      "Parent group leaders"
    ],
    messaging: {
      introduction: "Hi [Name], I hope this message finds you well. My name is [Your Name] from TSS Multisports.",
      valueProp: "We provide expert football coaching for children aged 3-12 and seniors 50+, helping develop skills, confidence, and community connections through sports.",
      callToAction: "I'd love to explore how we might collaborate to benefit the local community. Would you be open to a brief chat next week?"
    },
    channels: [
      "Email outreach",
      "LinkedIn networking",
      "Community events",
      "Phone calls",
      "Referrals"
    ],
    followUp: {
      intervals: [3, 7, 14, 21],
      templates: [
        "Following up on our previous conversation...",
        "Just wanted to share some additional information...",
        "Checking in to see if you had any questions...",
        "Final follow-up before moving on..."
      ]
    },
    successMetrics: {
      responseRate: 25, // 25% target
      conversionRate: 15, // 15% target
      averageTimeToResponse: 7 // 7 days target
    }
  };

  const linkBuildingTactics = {
    contentBased: [
      {
        tactic: "Create Ultimate Guides",
        description: "Comprehensive guides on youth football development",
        targetAudience: "Parents and coaches",
        estimatedLinks: "10-15 high-quality links",
        timeline: "2-3 months"
      },
      {
        tactic: "Local Resource Pages",
        description: "Pages listing local sports activities and programs",
        targetAudience: "Local families",
        estimatedLinks: "5-10 local directory links",
        timeline: "1 month"
      },
      {
        tactic: "Success Stories",
        description: "Participant testimonials and achievement stories",
        targetAudience: "Community members",
        estimatedLinks: "3-5 social shares",
        timeline: "Ongoing"
      }
    ],
    relationshipBased: [
      {
        tactic: "School Partnerships",
        description: "Collaborate with local schools for sports programs",
        targetAudience: "School administrators",
        estimatedLinks: "2-3 school website links",
        timeline: "3-6 months"
      },
      {
        tactic: "Community Sponsorships",
        description: "Sponsor local events and teams",
        targetAudience: "Community organizations",
        estimatedLinks: "3-5 sponsorship mentions",
        timeline: "6-12 months"
      },
      {
        tactic: "Coach Networking",
        description: "Build relationships with local coaches",
        targetAudience: "Sports professionals",
        estimatedLinks: "5-10 professional connections",
        timeline: "Ongoing"
      }
    ],
    digitalPR: [
      {
        tactic: "Press Releases",
        description: "Distribute press releases about program achievements",
        targetAudience: "Local media",
        estimatedLinks: "2-4 media mentions",
        timeline: "Monthly"
      },
      {
        tactic: "Guest Blogging",
        description: "Write articles for parenting and sports blogs",
        targetAudience: "Blog readers",
        estimatedLinks: "1-2 guest posts per month",
        timeline: "Ongoing"
      },
      {
        tactic: "Infographics",
        description: "Create shareable infographics about sports benefits",
        targetAudience: "Visual content consumers",
        estimatedLinks: "5-15 infographic shares",
        timeline: "Quarterly"
      }
    ]
  };

const LinkBuilding = ({ children }: LinkBuildingProps) => {
  return (
    <>
      {/* Link Building Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "TSS Multisports Link Building Strategy",
            "description": "Comprehensive off-page SEO and link building strategy for improved search rankings",
            "provider": {
              "@type": "Organization",
              "name": "TSS Multisports"
            },
            "serviceType": "Link Building",
            "audience": {
              "@type": "Audience",
              "audienceType": "Local families, sports organizations, community partners"
            },
            "offers": {
              "@type": "Offer",
              "price": "Custom",
              "priceCurrency": "GBP",
              "availability": "https://schema.org/InStock"
            },
            "featureList": [
              "Partnership Development",
              "Outreach Strategy",
              "Content Creation",
              "Relationship Building",
              "Digital PR",
              "Local Citation Building"
            ]
          })
        }}
      />

      {children}
    </>
  );
};

export default LinkBuilding;
