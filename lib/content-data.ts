export interface ContentTopic {
  title: string;
  description: string;
  keywords: string[];
  targetAudience: string[];
  contentFormat: string[];
  publishingFrequency: string;
  seoPriority: 'high' | 'medium' | 'low';
  relatedPrograms?: string[];
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