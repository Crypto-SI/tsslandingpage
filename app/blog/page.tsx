import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/seo/seo";
import ContentStrategy, { contentTopics } from "@/components/seo/ContentStrategy";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Football Skills for Young Players",
      excerpt: "Discover the fundamental football skills every young player should master, with expert coaching tips and practice drills.",
      author: "Coach Sarah Johnson",
      date: "2025-09-20",
      readTime: "5 min read",
      category: "Football Development",
      tags: ["football skills", "youth coaching", "training drills"],
      featured: true,
      image: "/blog-article-football-skills-training-800x450-essential-techniques.png"
    },
    {
      id: 2,
      title: "The Benefits of After School Sports Programs",
      excerpt: "Learn how after school sports programs contribute to children's physical, mental, and social development.",
      author: "Dr. Mike Thompson",
      date: "2025-09-18",
      readTime: "4 min read",
      category: "Parent Resources",
      tags: ["after school programs", "child development", "sports benefits"],
      featured: true,
      image: "/blog-article-after-school-benefits-800x450-child-development.png"
    },
    {
      id: 3,
      title: "Walking Football: Health Benefits for Seniors",
      excerpt: "Explore how walking football provides excellent exercise and social opportunities for seniors aged 50+.",
      author: "Coach Lisa Williams",
      date: "2025-09-15",
      readTime: "6 min read",
      category: "Walking Football",
      tags: ["walking football", "senior health", "low-impact exercise"],
      featured: false,
      image: "/blog-article-walking-football-800x450-senior-health-benefits.png"
    },
    {
      id: 4,
      title: "Toddler Football: Building Confidence Through Play",
      excerpt: "Understand how toddler football classes help develop coordination, social skills, and confidence in young children.",
      author: "Coach Emma Davis",
      date: "2025-09-12",
      readTime: "4 min read",
      category: "Toddler Football",
      tags: ["toddler sports", "early development", "confidence building"],
      featured: false,
      image: "/blog-article-toddler-football-800x450-confidence-building.png"
    },
    {
      id: 5,
      title: "Holiday Football Camps: What to Expect",
      excerpt: "A comprehensive guide to what children can expect from our holiday football camps and how to prepare.",
      author: "Coach James Wilson",
      date: "2025-09-10",
      readTime: "5 min read",
      category: "Holiday Programs",
      tags: ["holiday camps", "football activities", "school holidays"],
      featured: false,
      image: "/blog-article-holiday-camps-800x450-what-to-expect.png"
    },
    {
      id: 6,
      title: "Choosing the Right Football Program for Your Child",
      excerpt: "Expert advice on selecting the most appropriate football program based on your child's age, skill level, and interests.",
      author: "Coach Sarah Johnson",
      date: "2025-09-08",
      readTime: "7 min read",
      category: "Parent Resources",
      tags: ["program selection", "child sports", "football coaching"],
      featured: false,
      image: "/blog-article-choosing-program-800x450-expert-advice.png"
    }
  ];

  const categories = [
    { name: "Football Development", count: 12, color: "bg-red-100 text-red-800" },
    { name: "Parent Resources", count: 8, color: "bg-blue-100 text-blue-800" },
    { name: "Walking Football", count: 6, color: "bg-green-100 text-green-800" },
    { name: "Toddler Football", count: 5, color: "bg-purple-100 text-purple-800" },
    { name: "Holiday Programs", count: 7, color: "bg-yellow-100 text-yellow-800" },
    { name: "Coaching Insights", count: 9, color: "bg-indigo-100 text-indigo-800" }
  ];

  const popularTags = [
    "football coaching", "youth development", "parent guide", "walking football",
    "toddler sports", "holiday camps", "skill training", "child fitness"
  ];

  return (
    <>
      <SEO
        title="TSS Multisports Blog"
        description="Expert articles and tips on football coaching, child development, sports programs, and community sports. Stay updated with the latest insights from our coaching team."
        keywords={[
          "TSS Multisports blog",
          "football coaching tips",
          "youth sports development",
          "parent resources",
          "walking football benefits",
          "toddler football classes",
          "holiday football camps",
          "children's sports programs",
          "sports coaching advice",
          "community sports"
        ]}
        ogTitle="TSS Multisports Blog"
        ogDescription="Expert articles and tips on football coaching, child development, sports programs, and community sports."
        ogImage="/blog-hero-1920x800-football-coaching-tips.png"
        canonicalUrl="/blog"
        breadcrumbs={[
          {
            position: 1,
            name: "Home",
            item: "https://tssmultisports.com/"
          },
          {
            position: 2,
            name: "Blog",
            item: "https://tssmultisports.com/blog"
          }
        ]}
      />

      <ContentStrategy />

      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-background to-muted flex items-center py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
              TSS Multisports Blog
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Expert insights, coaching tips, and valuable resources for parents, coaches, and sports enthusiasts. 
              Stay updated with the latest in youth football development and community sports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white gap-2">
                Latest Articles <TrendingUp className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="w-full py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {blogPosts.filter(post => post.featured).map((post) => (
                <Card key={post.id} className="h-full overflow-hidden">
                  <div className="aspect-video overflow-hidden rounded-lg">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                        <div className="text-white text-4xl font-bold">{post.title.charAt(0)}</div>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/blog/${post.id}`}>
                      <Button className="w-full gap-2">
                        Read More <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* All Posts */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="h-full hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden rounded-lg">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                        <div className="text-white text-2xl font-bold">{post.title.charAt(0)}</div>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/blog/${post.id}`}>
                      <Button className="w-full gap-2">
                        Read More <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Content Strategy Overview */}
        <section className="w-full py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Content Strategy</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Content Topics</h3>
                <div className="space-y-3">
                  {contentTopics.slice(0, 4).map((topic, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-background rounded-lg">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium">{topic.title}</h4>
                        <p className="text-sm text-muted-foreground">{topic.description}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground">
                            Priority: {topic.seoPriority}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Frequency: {topic.publishingFrequency}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Popular Categories</h3>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category, index) => (
                    <div key={index} className="p-3 bg-background rounded-lg">
                      <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${category.color}`}>
                        {category.name}
                      </div>
                      <p className="text-sm text-muted-foreground">{category.count} articles</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {popularTags.map((tag, index) => (
                  <Link key={index} href={`/blog/tag/${tag}`}>
                    <span className="px-3 py-1 bg-background border border-border rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                      {tag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="w-full py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest football tips, program updates, and exclusive content 
              delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded border-0 text-foreground"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}