'use client'

import { ReactNode } from 'react';
import { ContentTopic, contentTopics } from '@/lib/content-data';

interface ContentStrategyProps {
  children?: ReactNode;
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

const ContentStrategy = ({ children }: ContentStrategyProps) => {
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
};

export default ContentStrategy;