import { ReactNode } from 'react';

interface SEOMaintenanceProps {
  children?: ReactNode;
}

interface MaintenanceTask {
  id: string;
  name: string;
  category: 'technical' | 'content' | 'local' | 'analytics' | 'off-page';
  frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'annually';
  priority: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  estimatedTime: string;
  tools: string[];
  successCriteria: string[];
}

interface MaintenanceSchedule {
  daily: MaintenanceTask[];
  weekly: MaintenanceTask[];
  monthly: MaintenanceTask[];
  quarterly: MaintenanceTask[];
  annually: MaintenanceTask[];
}

interface PerformanceAlert {
  id: string;
  type: 'traffic' | 'ranking' | 'technical' | 'content' | 'local';
  severity: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  triggerConditions: string[];
  resolutionSteps: string[];
  estimatedImpact: string;
}

interface MaintenanceMetrics {
  uptime: {
    target: number; // percentage
    current: number;
  };
  crawlErrors: {
    target: number; // maximum allowed
    current: number;
  };
  indexCoverage: {
    target: number; // percentage
    current: number;
  };
  pageSpeed: {
    lcp: {
      target: number; // milliseconds
      current: number;
    };
    fid: {
      target: number; // milliseconds
      current: number;
    };
    cls: {
      target: number; // score
      current: number;
    };
  };
  organicTraffic: {
    target: number; // percentage growth
    current: number;
  };
  keywordRankings: {
    target: number; // number of keywords
    current: number;
  };
}

// SEO maintenance data
export const maintenanceSchedule: MaintenanceSchedule = {
    daily: [
      {
        id: "daily-traffic-check",
        name: "Traffic Monitoring",
        category: "analytics",
        frequency: "daily",
        priority: "high",
        description: "Monitor organic traffic trends and anomalies",
        estimatedTime: "15 minutes",
        tools: ["Google Analytics", "Google Search Console"],
        successCriteria: ["No significant traffic drops", "All goals tracking properly"]
      },
      {
        id: "daily-security-check",
        name: "Security Monitoring",
        category: "technical",
        frequency: "daily",
        priority: "critical",
        description: "Check for security issues and manual actions",
        estimatedTime: "10 minutes",
        tools: ["Google Search Console", "Security Tools"],
        successCriteria: ["No security warnings", "No manual actions"]
      }
    ],
    weekly: [
      {
        id: "weekly-keyword-tracking",
        name: "Keyword Ranking Check",
        category: "analytics",
        frequency: "weekly",
        priority: "high",
        description: "Track keyword positions and search visibility",
        estimatedTime: "30 minutes",
        tools: ["SEMrush", "Ahrefs", "Google Search Console"],
        successCriteria: ["Rankings stable or improving", "No significant drops"]
      },
      {
        id: "weekly-content-review",
        name: "Content Performance Review",
        category: "content",
        frequency: "weekly",
        priority: "medium",
        description: "Analyze content performance and identify opportunities",
        estimatedTime: "45 minutes",
        tools: ["Google Analytics", "Content Management System"],
        successCriteria: ["Content engagement metrics reviewed", "Action items identified"]
      },
      {
        id: "weekly-backlink-check",
        name: "Backlink Profile Audit",
        category: "off-page",
        frequency: "weekly",
        priority: "medium",
        description: "Monitor new backlinks and identify toxic links",
        estimatedTime: "20 minutes",
        tools: ["Ahrefs", "Google Search Console"],
        successCriteria: ["No toxic links detected", "Quality links acquired"]
      }
    ],
    monthly: [
      {
        id: "monthly-technical-audit",
        name: "Technical SEO Audit",
        category: "technical",
        frequency: "monthly",
        priority: "high",
        description: "Comprehensive technical SEO analysis",
        estimatedTime: "2 hours",
        tools: ["Screaming Frog", "Google Search Console", "PageSpeed Insights"],
        successCriteria: ["No critical issues", "All technical metrics within targets"]
      },
      {
        id: "monthly-content-update",
        name: "Content Refresh",
        category: "content",
        frequency: "monthly",
        priority: "medium",
        description: "Update and refresh existing content",
        estimatedTime: "4 hours",
        tools: ["Content Management System", "Keyword Research Tools"],
        successCriteria: ["Content updated", "Performance improved"]
      },
      {
        id: "monthly-local-seo",
        name: "Local SEO Maintenance",
        category: "local",
        frequency: "monthly",
        priority: "high",
        description: "Update local listings and monitor local rankings",
        estimatedTime: "1.5 hours",
        tools: ["Google Business Profile", "Local SEO Tools"],
        successCriteria: ["Listings updated", "Local rankings stable"]
      },
      {
        id: "monthly-report",
        name: "Monthly Performance Report",
        category: "analytics",
        frequency: "monthly",
        priority: "medium",
        description: "Generate comprehensive monthly SEO report",
        estimatedTime: "1 hour",
        tools: ["Google Analytics", "SEMrush", "Custom Reports"],
        successCriteria: ["Report generated", "Insights documented"]
      }
    ],
    quarterly: [
      {
        id: "quarterly-strategy-review",
        name: "SEO Strategy Review",
        category: "analytics",
        frequency: "quarterly",
        priority: "high",
        description: "Review and update SEO strategy based on performance",
        estimatedTime: "4 hours",
        tools: ["Analytics Tools", "Competitor Analysis Tools"],
        successCriteria: ["Strategy updated", "New goals set"]
      },
      {
        id: "quarterly-competitor-analysis",
        name: "Competitor Analysis",
        category: "analytics",
        frequency: "quarterly",
        priority: "medium",
        description: "Analyze competitor SEO strategies and performance",
        estimatedTime: "3 hours",
        tools: ["SEMrush", "Ahrefs", "Competitor Tools"],
        successCriteria: ["Competitor insights documented", "Strategy adjustments made"]
      },
      {
        id: "quarterly-content-audit",
        name: "Comprehensive Content Audit",
        category: "content",
        frequency: "quarterly",
        priority: "high",
        description: "Full audit of all content assets",
        estimatedTime: "6 hours",
        tools: ["Content Audit Tools", "Analytics"],
        successCriteria: ["Content inventory completed", "Optimization plan created"]
      }
    ],
    annually: [
      {
        id: "annual-strategic-planning",
        name: "Annual SEO Strategic Planning",
        category: "analytics",
        frequency: "annually",
        priority: "critical",
        description: "Develop annual SEO strategy and goals",
        estimatedTime: "8 hours",
        tools: ["Strategic Planning Tools", "Market Research"],
        successCriteria: ["Annual strategy documented", "Goals and KPIs set"]
      },
      {
        id: "annual-technical-overhaul",
        name: "Technical SEO Overhaul",
        category: "technical",
        frequency: "annually",
        priority: "high",
        description: "Major technical SEO improvements and updates",
        estimatedTime: "16 hours",
        tools: ["Technical SEO Tools", "Development Team"],
        successCriteria: ["Technical infrastructure updated", "Performance improved"]
      },
      {
        id: "annual-brand-authority",
        name: "Brand Authority Building",
        category: "off-page",
        frequency: "annually",
        priority: "high",
        description: "Major brand authority and link building campaign",
        estimatedTime: "20 hours",
        tools: ["Link Building Tools", "PR Tools"],
        successCriteria: ["Brand authority increased", "High-quality links acquired"]
      }
    ]
  };

  const performanceAlerts: PerformanceAlert[] = [
    {
      id: "traffic-drop-alert",
      type: "traffic",
      severity: "critical",
      description: "Significant organic traffic drop detected",
      triggerConditions: ["Traffic drop > 20%", "Lasts > 24 hours"],
      resolutionSteps: [
        "Check Google Search Console for issues",
        "Verify no manual actions",
        "Check for technical problems",
        "Analyze recent changes",
        "Implement fixes and monitor"
      ],
      estimatedImpact: "High impact on lead generation"
    },
    {
      id: "ranking-drop-alert",
      type: "ranking",
      severity: "high",
      description: "Significant keyword ranking drops detected",
      triggerConditions: ["Top 10 rankings drop > 5 keywords", "Lasts > 7 days"],
      resolutionSteps: [
        "Analyze content quality",
        "Check for algorithm updates",
        "Review competitor activity",
        "Update content if needed",
        "Build additional links"
      ],
      estimatedImpact: "Medium impact on visibility"
    },
    {
      id: "crawl-error-alert",
      type: "technical",
      severity: "high",
      description: "Crawl errors detected on important pages",
      triggerConditions: ["> 10 crawl errors", "Includes critical pages"],
      resolutionSteps: [
        "Identify error patterns",
        "Fix broken links",
        "Update redirects",
        "Resubmit sitemap",
        "Monitor resolution"
      ],
      estimatedImpact: "Medium impact on indexation"
    }
  ];

  const maintenanceMetrics: MaintenanceMetrics = {
    uptime: {
      target: 99.9,
      current: 99.95
    },
    crawlErrors: {
      target: 0,
      current: 2
    },
    indexCoverage: {
      target: 95,
      current: 97
    },
    pageSpeed: {
      lcp: {
        target: 2500,
        current: 2200
      },
      fid: {
        target: 100,
        current: 85
      },
      cls: {
        target: 0.1,
        current: 0.08
      }
    },
    organicTraffic: {
      target: 50,
      current: 35
    },
    keywordRankings: {
      target: 20,
      current: 15
    }
  };

  return (
    <>
      {/* SEO Maintenance Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "TSS Multisports SEO Maintenance",
            "description": "Comprehensive SEO maintenance and monitoring system for sustained search performance",
            "provider": {
              "@type": "Organization",
              "name": "TSS Multisports"
            },
            "serviceType": "SEO Maintenance",
            "audience": {
              "@type": "Audience",
              "audienceType": "Website owners, SEO professionals, marketing teams"
            },
            "offers": {
              "@type": "Offer",
              "price": "Custom",
              "priceCurrency": "GBP",
              "availability": "https://schema.org/InStock"
            },
            "featureList": [
              "Automated Monitoring",
              "Performance Tracking",
              "Issue Detection",
              "Scheduled Maintenance",
              "Performance Reporting",
              "Alert Management"
            ]
          })
        }}
      />

      {children}
    </>
  );
}
