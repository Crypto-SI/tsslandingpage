import { ReactNode } from 'react';

interface ContentStrategyProps {
  children?: ReactNode;
}

interface ContentTopic {
  title: string;
  description: string;
  keywords: string[];
  targetAudience: string[];
  contentFormat: string[];
  publishingFrequency: string;
  seoPriority: 'high' | 'medium' | 'low';
  relatedPrograms?: string[];
}

interface ContentCalendar {
  monthlyThemes: {
    [key: string]: string;
  };
  weeklyContentPillars: {
    [key: string]: string[];
  };
  seasonalContent: {
    [key: string]: string[];
  };
}

// Content strategy data
export const contentTopics: ContentTopic[] = [
    {
      title: "Football Development Guides",
      description: "Comprehensive guides on football skill development for different age groups",
      keywords: [
        "football coaching tips",
        "youth football development",
        "soccer skills training",
        "children's football coaching",
        "football drills for kids"
      ],
      targetAudience: ["Parents", "Coaches", "Young Players"],
      contentFormat: ["Blog Posts", "Video Tutorials", "Infographics"],
      publishingFrequency: "Weekly",
      seoPriority: "high",
      relatedPrograms: ["After School Football", "Toddler Football"]
    },
    {
      title: "Parent Resources",
      description: "Educational content for parents about children's sports development",
      keywords: [
        "parent guide sports",
        "children's fitness",
        "youth sports benefits",
        "sports for kids",
        "parent coaching tips"
      ],
      targetAudience: ["Parents", "Guardians"],
      contentFormat: ["Guides", "Checklists", "Webinars"],
      publishingFrequency: "Bi-weekly",
      seoPriority: "high",
      relatedPrograms: ["All Programs"]
    },
    {
      title: "Program-Specific Content",
      description: "Detailed information about each football program and its benefits",
      keywords: [
        "after school football benefits",
        "walking football health",
        "toddler football development",
        "holiday club activities",
        "football for seniors"
      ],
      targetAudience: ["Parents", "Seniors", "Community Members"],
      contentFormat: ["Program Pages", "Testimonials", "Case Studies"],
      publishingFrequency: "Monthly",
      seoPriority: "medium",
      relatedPrograms: ["All Programs"]
    },
    {
      title: "Community Stories",
      description: "Success stories and participant testimonials from our programs",
      keywords: [
        "football success stories",
        "sports testimonials",
        "youth sports achievements",
        "community sports impact",
        "football program reviews"
      ],
      targetAudience: ["Prospective Participants", "Community Members"],
      contentFormat: ["Video Stories", "Written Testimonials", "Photo Galleries"],
      publishingFrequency: "Monthly",
      seoPriority: "medium",
      relatedPrograms: ["All Programs"]
    },
    {
      title: "Coaching Insights",
      description: "Expert insights from our coaching staff about sports development",
      keywords: [
        "coaching expertise",
        "football coaching philosophy",
        "youth development",
        "sports coaching tips",
        "football training methods"
      ],
      targetAudience: ["Coaches", "Parents", "Sports Enthusiasts"],
      contentFormat: ["Blog Posts", "Interviews", "Workshop Videos"],
      publishingFrequency: "Bi-weekly",
      seoPriority: "medium",
      relatedPrograms: ["All Programs"]
    },
    {
      title: "Health & Fitness",
      description: "Content about the health benefits of sports and physical activity",
      keywords: [
        "children's health benefits",
        "sports fitness",
        "physical activity kids",
        "senior fitness",
        "health benefits football"
      ],
      targetAudience: ["Parents", "Seniors", "Health Professionals"],
      contentFormat: ["Articles", "Infographics", "Research Summaries"],
      publishingFrequency: "Monthly",
      seoPriority: "low",
      relatedPrograms: ["Walking Football", "All Programs"]
    }
  ];

  const contentCalendar: ContentCalendar = {
    monthlyThemes: {
      January: "New Year Fitness Goals",
      February: "Valentine's Family Sports",
      March: "Spring Season Preparation",
      April: "Easter Holiday Activities",
      May: "Summer Program Registration",
      June: "End of Season Celebrations",
      July: "Summer Holiday Programs",
      August: "Back to Sports",
      September: "Autumn Season Start",
      October: "Halloween Sports Events",
      November: "Winter Sports Planning",
      December: "Christmas Holiday Programs"
    },
    weeklyContentPillars: {
      Monday: ["Program Announcements", "Schedule Updates"],
      Tuesday: ["Coaching Tips", "Skill Development"],
      Wednesday: ["Parent Resources", "Educational Content"],
      Thursday: ["Success Stories", "Participant Highlights"],
      Friday: ["Weekend Events", "Activity Promotions"],
      Saturday: ["Game Day Coverage", "Match Reports"],
      Sunday: ["Weekly Recaps", "Upcoming Previews"]
    },
    seasonalContent: {
      Spring: ["Season Preparation", "New Program Launches", "Outdoor Activities"],
      Summer: ["Holiday Programs", "Summer Camps", "Outdoor Sports"],
      Autumn: ["Back to School Sports", "Indoor Activities", "Team Building"],
      Winter: ["Indoor Programs", "Holiday Activities", "Fitness Goals"]
    }
  };

  const seoContentStrategy = {
    keywordResearch: {
      primaryKeywords: [
        "football coaching for kids",
        "after school football",
        "walking football",
        "toddler football",
        "children's sports programs",
        "holiday football camps"
      ],
      secondaryKeywords: [
        "youth football training",
        "kids football academy",
        "parent and toddler football",
        "football for over 50s",
        "school holiday activities",
        "children's fitness programs"
      ],
      longTailKeywords: [
        "football coaching for 5 year olds near me",
        "after school football [school name]",
        "parent and toddler football classes near me",
        "walking football health benefits near me",
        "best football programs for children",
        "affordable football coaching for kids"
      ]
    },
    contentOptimization: {
      wordCountTargets: {
        blogPosts: "1500-2000 words",
        programPages: "800-1200 words",
        guides: "2000-3000 words",
        testimonials: "300-500 words"
      },
      readability: {
        targetGradeLevel: "8th grade",
        sentenceLength: "15-20 words",
        paragraphLength: "3-4 sentences"
      },
      multimedia: {
        imagesPerPost: "2-3 high-quality images",
        videosPerPost: "1-2 short videos",
        infographics: "1 per major topic"
      }
    },
    performanceTracking: {
      metrics: {
        traffic: "organic sessions, page views, bounce rate",
        engagement: "time on page, scroll depth, comments",
        conversions: "form submissions, phone calls, email signups",
        rankings: "keyword positions, search visibility"
      },
      tools: [
        "Google Analytics 4",
        "Google Search Console",
        "SEMrush/Ahrefs",
        "Hotjar"
      ]
    }
  };

  return (
    <>
      {/* Content Strategy Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "TSS Multisports Content Strategy",
            "description": "Comprehensive content strategy for ongoing SEO growth and audience engagement",
            "author": {
              "@type": "Organization",
              "name": "TSS Multisports"
            },
            "keywords": contentTopics.map(topic => topic.title).join(", "),
            "audience": contentTopics.flatMap(topic => topic.targetAudience),
            "genre": "SEO Strategy",
            "learningResourceType": "Guide",
            "inLanguage": "en-GB",
            "isAccessibleForFree": true,
            "datePublished": "2025-09-22",
            "dateModified": "2025-09-22"
          })
        }}
      />
      
      {children}
    </>
  );
}