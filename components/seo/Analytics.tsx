import { ReactNode } from 'react';

interface AnalyticsProps {
  children?: ReactNode;
}

interface TrackingConfig {
  googleAnalytics: {
    measurementId: string;
    enabled: boolean;
  };
  googleTagManager: {
    containerId: string;
    enabled: boolean;
  };
  hotjar: {
    siteId: number;
    enabled: boolean;
  };
  searchConsole: {
    siteUrl: string;
    enabled: boolean;
  };
}

interface SEOGoals {
  conversions: {
    formSubmissions: boolean;
    phoneCalls: boolean;
    emailSignups: boolean;
    programEnrollments: boolean;
  };
  engagement: {
    timeOnPage: {
      target: number; // in seconds
      pages: string[];
    };
    scrollDepth: {
      target: number; // percentage
      pages: string[];
    };
    bounceRate: {
      target: number; // percentage
      pages: string[];
    };
  };
}

interface PerformanceMetrics {
  traffic: {
    organicGrowth: number; // percentage target
    keywordRankings: number; // number of keywords target
    searchVisibility: number; // percentage target
  };
  conversions: {
    conversionRate: number; // percentage target
    leadQuality: string; // rating scale
    costPerAcquisition: number; // currency target
  };
  technical: {
    pageSpeed: {
      lcp: number; // milliseconds target
      fid: number; // milliseconds target
      cls: number; // target score
    };
    crawlErrors: number; // maximum allowed
    indexCoverage: number; // percentage target
  };
}

// Analytics configuration
export const trackingConfig: TrackingConfig = {
    googleAnalytics: {
      measurementId: "G-XXXXXXXXXX",
      enabled: true
    },
    googleTagManager: {
      containerId: "GTM-XXXXXXX",
      enabled: true
    },
    hotjar: {
      siteId: 1234567,
      enabled: true
    },
    searchConsole: {
      siteUrl: "https://tssmultisports.com",
      enabled: true
    }
  };

  const seoGoals: SEOGoals = {
    conversions: {
      formSubmissions: true,
      phoneCalls: true,
      emailSignups: true,
      programEnrollments: true
    },
    engagement: {
      timeOnPage: {
        target: 120, // 2 minutes
        pages: ["/", "/after-school-football", "/toddler-football", "/walking-football"]
      },
      scrollDepth: {
        target: 70, // 70%
        pages: ["/", "/blog", "/locations"]
      },
      bounceRate: {
        target: 40, // 40%
        pages: ["/", "/after-school-football", "/toddler-football", "/walking-football"]
      }
    }
  };

  const performanceMetrics: PerformanceMetrics = {
    traffic: {
      organicGrowth: 50, // 50% increase target
      keywordRankings: 20, // top 10 for 20+ keywords
      searchVisibility: 15 // 15% visibility target
    },
    conversions: {
      conversionRate: 25, // 25% conversion rate target
      leadQuality: "High",
      costPerAcquisition: 50 // £50 target
    },
    technical: {
      pageSpeed: {
        lcp: 2500, // 2.5 seconds
        fid: 100, // 100ms
        cls: 0.1 // 0.1 score
      },
      crawlErrors: 0, // no crawl errors allowed
      indexCoverage: 95 // 95% coverage target
    }
  };

  const advancedTracking = {
    events: {
      formInteractions: {
        formStart: "form_start",
        formStep: "form_step",
        formCompletion: "form_complete",
        formError: "form_error"
      },
      programInteractions: {
        programView: "program_view",
        programInterest: "program_interest",
        programEnrollment: "program_enrollment",
        programCompletion: "program_complete"
      },
      contentInteractions: {
        articleRead: "article_read",
        videoPlay: "video_play",
        download: "download",
        share: "share"
      },
      userBehavior: {
        scrollDepth: "scroll_depth",
        timeOnPage: "time_on_page",
        clickTracking: "click_tracking",
        exitIntent: "exit_intent"
      }
    },
    conversions: {
      macroConversions: [
        {
          name: "Program Registration",
          conditions: ["form_submission", "program_enrollment"],
          value: 100
        },
        {
          name: "Newsletter Signup",
          conditions: ["email_signup"],
          value: 25
        },
        {
          name: "Phone Inquiry",
          conditions: ["phone_call"],
          value: 50
        }
      ],
      microConversions: [
        {
          name: "Program View",
          conditions: ["program_view"],
          value: 10
        },
        {
          name: "Article Read",
          conditions: ["article_read"],
          value: 5
        },
        {
          name: "Social Share",
          conditions: ["share"],
          value: 15
        }
      ]
    }
  };

  return (
    <>
      {/* Google Analytics */}
      {trackingConfig.googleAnalytics.enabled && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingConfig.googleAnalytics.measurementId}`}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${trackingConfig.googleAnalytics.measurementId}', {
                  page_title: document.title,
                  page_path: window.location.pathname,
                  send_page_view: true,
                  custom_map: {
                    'dimension1': 'user_type',
                    'dimension2': 'program_type',
                    'dimension3': 'location',
                    'dimension4': 'device_category'
                  }
                });
              `,
            }}
          />
        </>
      )}

      {/* Google Tag Manager */}
      {trackingConfig.googleTagManager.enabled && (
        <>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${trackingConfig.googleTagManager.containerId}');
              `,
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${trackingConfig.googleTagManager.containerId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* Hotjar Tracking */}
      {trackingConfig.hotjar.enabled && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${trackingConfig.hotjar.siteId},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      )}

      {/* Custom Event Tracking */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Form Interaction Tracking
            document.addEventListener('DOMContentLoaded', function() {
              // Track form submissions
              const forms = document.querySelectorAll('form');
              forms.forEach(form => {
                form.addEventListener('submit', function(e) {
                  gtag('event', 'form_submission', {
                    'event_category': 'engagement',
                    'event_label': form.id || 'unknown_form',
                    'value': 1
                  });
                });
              });

              // Track program views
              const programLinks = document.querySelectorAll('[data-program]');
              programLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                  const program = this.getAttribute('data-program');
                  gtag('event', 'program_view', {
                    'event_category': 'engagement',
                    'event_label': program,
                    'value': 1
                  });
                });
              });

              // Track scroll depth
              let scrollTimer;
              window.addEventListener('scroll', function() {
                clearTimeout(scrollTimer);
                scrollTimer = setTimeout(function() {
                  const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
                  if (scrollPercent > 25 && scrollPercent <= 50) {
                    gtag('event', 'scroll_depth', {
                      'event_category': 'engagement',
                      'event_label': '25%_scroll'
                    });
                  } else if (scrollPercent > 50 && scrollPercent <= 75) {
                    gtag('event', 'scroll_depth', {
                      'event_category': 'engagement',
                      'event_label': '50%_scroll'
                    });
                  } else if (scrollPercent > 75) {
                    gtag('event', 'scroll_depth', {
                      'event_category': 'engagement',
                      'event_label': '75%_scroll'
                    });
                  }
                }, 200);
              });
            });
          `,
        }}
      />

      {/* Analytics Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "TSS Multisports Analytics",
            "description": "Advanced SEO monitoring and analytics for TSS Multisports website",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "author": {
              "@type": "Organization",
              "name": "TSS Multisports"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "GBP",
              "availability": "https://schema.org/InStock"
            },
            "featureList": [
              "Google Analytics Integration",
              "Google Tag Manager",
              "Hotjar User Behavior Tracking",
              "Search Console Monitoring",
              "Custom Event Tracking",
              "Conversion Tracking",
              "Performance Metrics"
            ]
          })
        }}
      />

      {children}
    </>
  );
}
