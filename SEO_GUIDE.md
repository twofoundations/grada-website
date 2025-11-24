# GRADA Website - SEO Strategy & Maintenance Guide

Your complete guide to understanding and improving your website's search engine performance.

---

## 📖 Table of Contents

1. [Understanding SEO Basics](#understanding-seo-basics)
2. [What's Already Implemented](#whats-already-implemented)
3. [Phase 2: Keyword Research](#phase-2-keyword-research)
4. [Competitor Analysis](#competitor-analysis)
5. [Content Optimization](#content-optimization)
6. [Technical SEO Checklist](#technical-seo-checklist)
7. [Monthly Maintenance](#monthly-maintenance)
8. [Tools & Resources](#tools--resources)
9. [Measuring Success](#measuring-success)

---

## 🎯 Understanding SEO Basics

### What is SEO?

**SEO (Search Engine Optimization)** is the practice of improving your website so:
1. Search engines can find and understand it
2. It ranks higher in search results
3. More potential customers discover your services

### How Google Works

**3-Step Process:**

1. **Crawling** - Google's bots visit your site and follow links
2. **Indexing** - Google stores and analyzes your pages
3. **Ranking** - Google decides which pages to show for each search

### What Affects Rankings?

**On-Page SEO** (What you control):
- Content quality and relevance
- Keywords in titles, headings, and text
- Page speed and mobile-friendliness
- Internal linking

**Off-Page SEO** (External factors):
- Backlinks from other websites
- Brand mentions
- Social signals

**Technical SEO** (Behind the scenes):
- Site structure
- Structured data
- Performance
- Security (HTTPS)

### Timeline Expectations

**Be patient!** SEO is a long-term strategy:

- **Month 1-3:** Getting indexed, appearing for brand searches
- **Month 4-6:** Ranking for long-tail keywords (low competition)
- **Month 7-12:** Ranking for competitive keywords
- **Month 12+:** Consistent organic traffic growth

---

## ✅ What's Already Implemented

Your new site already has solid SEO foundations:

### Meta Tags
- ✅ Title tags optimized with keywords
- ✅ Meta descriptions for all pages
- ✅ Open Graph tags (social media sharing)
- ✅ Twitter Card tags

### Technical SEO
- ✅ Sitemap.xml (auto-generated)
- ✅ Robots.txt (search engine instructions)
- ✅ Structured data (Organization & LocalBusiness schemas)
- ✅ Semantic HTML (proper heading hierarchy)
- ✅ Mobile-responsive design
- ✅ Fast loading (Next.js optimization)
- ✅ HTTPS/SSL (via Vercel)

### On-Page SEO
- ✅ Keyword-optimized headings
- ✅ Alt text for images
- ✅ Internal linking structure
- ✅ Clean URLs
- ✅ Scroll-smooth navigation

**These foundations put you ahead of 80% of small business websites!**

---

## 🔍 Phase 2: Keyword Research

### Understanding Keywords

**Keywords** = Words and phrases people type into Google

**Example for your business:**
- "customer insight consultant" ← keyword
- "customer strategy Sydney" ← keyword + location
- "how to improve customer loyalty" ← informational keyword

### Types of Keywords

#### 1. Primary Keywords (High volume, high competition)
- "customer insight"
- "customer strategy"
- "customer experience consulting"

**Use these:** Homepage, main headings

#### 2. Long-Tail Keywords (Lower volume, easier to rank)
- "customer insight consultant Sydney"
- "how to improve customer loyalty programs"
- "customer journey mapping services Australia"

**Use these:** Blog posts, service descriptions

#### 3. Local Keywords (Geography-specific)
- "customer strategy consultant Sydney"
- "business consultant Sydney Australia"

**Use these:** Contact page, footer, local content

#### 4. Industry Keywords (Niche-specific)
- "higher education student experience"
- "retail customer experience strategy"
- "pharmaceutical patient journey mapping"

**Use these:** Industry-specific pages/content

### Keyword Research Process

#### Step 1: Brainstorm (Free - 1 hour)

Make a list of:
- Your services
- Problems you solve
- What clients ask about
- Industry terms

**Example:**
```
Services: customer insight, customer strategy, design thinking
Problems: low customer satisfaction, poor retention, unclear value prop
Questions: "how to understand customers better"
```

#### Step 2: Use Free Tools (2-3 hours)

**Google Keyword Planner:**
1. Go to ads.google.com/home/tools/keyword-planner
2. Click "Discover new keywords"
3. Enter your brainstormed terms
4. Export results

**Google Search:**
- Type your keyword
- Note the autocomplete suggestions
- Scroll to "People Also Ask"
- Scroll to "Related Searches" at bottom

**Google Search Console** (after setup):
- See what keywords you already rank for
- Identify opportunities

#### Step 3: Use Paid Tools (Optional - 4-6 hours)

**Ahrefs** ($99/month OR $7 for 7-day trial):
1. Go to ahrefs.com/keywords-explorer
2. Enter seed keywords
3. Sort by:
   - Keyword Difficulty (KD) < 30 (easier to rank)
   - Search Volume > 10 (worth targeting)
4. Export 200+ keywords
5. Group by topic

**What to look for:**
- **KD (Keyword Difficulty) 0-20:** Easy targets
- **KD 21-40:** Medium targets
- **KD 40+:** Long-term goals
- **Search Volume 10-1000:** Good for niche B2B

### Organizing Your Keywords

Create a spreadsheet with columns:

| Keyword | Search Volume | Difficulty | Intent | Target Page |
|---------|--------------|------------|--------|-------------|
| customer insight Sydney | 50 | 25 | Commercial | Homepage |
| customer journey mapping | 100 | 35 | Informational | Services |
| how to improve loyalty | 200 | 15 | Informational | Blog post |

**Search Intent:**
- **Informational:** Learning/researching ("what is customer insight")
- **Commercial:** Comparing options ("best customer consultants Sydney")
- **Transactional:** Ready to buy/contact ("hire customer consultant")
- **Navigational:** Finding specific company ("GRADA Sydney")

### Target: 200+ Keywords

**Breakdown:**
- 10-20 primary keywords (homepage, main pages)
- 50-100 long-tail keywords (services, sub-pages)
- 50-100 industry keywords (industry-specific content)
- 50+ informational keywords (blog content)

---

## 🔎 Competitor Analysis

### Why Analyze Competitors?

Learn from those already ranking:
- What keywords they target
- What content works
- What gaps exist (your opportunities)
- What backlinks they have

### Finding Competitors

**Method 1: Google Search**
1. Search your main keywords
2. Note top 5-10 results (exclude ads)
3. Focus on similar businesses (not marketplaces/directories)

**Example search:** "customer strategy consultant Sydney"

### What to Analyze

#### For Each Competitor:

**1. Keywords They Rank For**
- Use Ahrefs Site Explorer
- Or manually check their page titles, headings

**2. Content Structure**
- What pages do they have?
- How detailed is each page?
- Do they have a blog?
- What topics do they cover?

**3. On-Page SEO**
- Check their page titles (right-click → View Page Source)
- Note their meta descriptions
- See their heading structure (H1, H2, H3)

**4. Backlinks** (if using Ahrefs)
- Who links to them?
- What pages get the most links?

### Competitive Analysis Template

```markdown
## Competitor: [Name]
**URL:** example.com
**Domain Authority:** 35 (from Ahrefs)

### Keywords:
- customer insight (Position 5)
- customer strategy Sydney (Position 8)
- [etc...]

### Content:
- Homepage: Brief overview, 3 services
- Services page: Detailed descriptions
- Blog: 20+ articles
- Case studies: 5

### Strengths:
- Strong blog content
- Good backlinks from industry sites

### Weaknesses/Gaps:
- No industry-specific pages
- Thin service descriptions
- Slow loading speed

### Opportunities for GRADA:
- Create industry-specific content
- More detailed service pages
- Faster site (Next.js advantage!)
```

**Repeat for top 5 competitors**

### Tools for Competitive Analysis

**Free:**
- Manual Google searches
- View page source (right-click on page)
- Ubersuggest (free limited searches)

**Paid:**
- Ahrefs ($99/mo or $7 trial)
- SEMrush ($119/mo)
- Moz ($99/mo)

**Already have:**
- Firecrawl MCP in Cursor (scrape competitor content)

---

## ✍️ Content Optimization

### Homepage Optimization

**Current Status:** ✅ Already optimized with:
- Primary keyword in H1: "Customer insight & strategy"
- Keywords in meta title and description
- Structured content with clear sections

**Ongoing:** Keep refining based on keyword research

### Adding New Content Pages

When you create new pages/sections:

#### 1. Plan the Page

- **Target Keyword:** What's the main keyword?
- **User Intent:** What does the searcher want?
- **Content Depth:** How detailed should it be?

#### 2. Optimize Elements

**Title Tag** (50-60 characters):
```
Template: [Primary Keyword] | [Secondary Keyword] | GRADA
Example: "Customer Journey Mapping Services | Sydney | GRADA"
```

**Meta Description** (150-160 characters):
```
Template: [Benefit] + [Keywords] + [Call to Action]
Example: "Expert customer journey mapping in Sydney. Transform your customer experience with data-driven insights. Book a consultation today."
```

**H1 Heading** (One per page):
```
Include primary keyword naturally
Example: "Customer Journey Mapping Services in Sydney"
```

**H2/H3 Headings** (Multiple):
```
Include secondary and long-tail keywords
Example H2: "Why Customer Journey Mapping Matters"
Example H3: "Benefits for Retail Businesses"
```

**Content** (1000+ words for main pages):
- Use keywords naturally (don't force it!)
- Answer user questions thoroughly
- Include examples and specifics
- Add internal links to other pages
- Use bullet points and lists (like this!)

**Images:**
- Descriptive file names: `customer-research-workshop.jpg`
- Alt text with keywords: "Customer research workshop with GRADA team in Sydney"

### Content Quality Checklist

For each page/post:

- [ ] Answers the user's question completely
- [ ] Primary keyword in title, H1, first paragraph
- [ ] Secondary keywords in H2/H3 headings
- [ ] 1000+ words for main pages, 1500+ for blog posts
- [ ] Easy to scan (headings, bullets, short paragraphs)
- [ ] Includes relevant images with alt text
- [ ] Links to related pages on your site
- [ ] Has a clear call-to-action
- [ ] Mobile-friendly (test on phone)
- [ ] Loads fast (check PageSpeed Insights)

### Blog Content Strategy

**Why Blog?**
- Target more keywords
- Establish expertise
- Earn backlinks
- Engage potential clients

**Content Calendar:** 1-2 posts per month

**Topics to Cover:**

**How-To Guides:**
- "How to Conduct Customer Research on a Budget"
- "5 Steps to Create a Customer Journey Map"
- "How to Measure Customer Satisfaction Effectively"

**Industry-Specific:**
- "Customer Experience Trends in Higher Education"
- "Improving Patient Journey in Healthcare"
- "Retail Customer Loyalty Best Practices"

**Thought Leadership:**
- "Why Most Customer Strategies Fail"
- "The ROI of Customer Insight Research"
- "Beyond NPS: Better Ways to Measure Customer Value"

**Article Structure:**

```markdown
# Title with Primary Keyword (H1)

## Introduction
- Hook (interesting stat or question)
- Preview what they'll learn

## Main Point 1 (H2 - with keyword)
Content here...

### Supporting Detail (H3)
More specifics...

## Main Point 2 (H2)
Content here...

## Main Point 3 (H2)
Content here...

## Conclusion
- Summarize key points
- Clear call-to-action (Book a call, Subscribe, etc.)

## Related Articles
- Link to 2-3 related posts
```

---

## 🔧 Technical SEO Checklist

### Already Implemented ✅

- [x] HTTPS/SSL certificate
- [x] Mobile-responsive design
- [x] Fast page load (Next.js optimization)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Structured data (Schema.org)
- [x] Semantic HTML
- [x] Alt text for images
- [x] Clean URLs
- [x] Internal linking

### Monthly Technical Checks

#### 1. Page Speed (Monthly)

**Tool:** Google PageSpeed Insights (pagespeed.web.dev)

1. Enter your URL
2. Check both Mobile and Desktop scores
3. Aim for 90+ (you should be there with Next.js!)

**If score drops:**
- Check image sizes
- Review recent code changes
- Check if new dependencies are large

#### 2. Core Web Vitals (Monthly)

**In Google Search Console:**

1. Go to "Core Web Vitals" section
2. Check for any "Poor" or "Needs Improvement" URLs
3. Click "Open Report" for details

**Target Metrics:**
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

#### 3. Mobile-Friendliness (Monthly)

**Tool:** Google Mobile-Friendly Test (search.google.com/test/mobile-friendly)

Test all main pages:
- Homepage
- Contact page
- Each service page (when you add them)

#### 4. Crawl Errors (Monthly)

**In Google Search Console:**

1. Check "Coverage" report
2. Fix any errors (404s, server errors)
3. Validate fixes

#### 5. Broken Links (Quarterly)

**Tool:** Screaming Frog (free up to 500 URLs)

1. Download and install
2. Crawl your site
3. Check "Response Codes" tab
4. Fix any 404s or broken links

---

## 📊 Monthly Maintenance

### Week 1: Review Performance

**Google Search Console (30 minutes)**

Check (last 28 days vs. previous):
- Total impressions (how often you showed in search)
- Total clicks (how many people clicked)
- Average position (where you ranked)
- CTR (click-through rate)

**Google Analytics (30 minutes)**

Check:
- Organic traffic (users from search engines)
- Top landing pages (which pages get most traffic)
- Bounce rate (people leaving immediately)
- Conversions (newsletter signups, calls booked)

**Action Items:**
- Note what's working (pages gaining traffic)
- Identify problems (pages losing traffic)
- Look for opportunities (high impressions, low clicks = improve title/description)

### Week 2: Content Tasks

**Add New Content (2-3 hours)**

Options:
1. Write 1 blog post (1500+ words)
2. Expand an existing page (add 500+ words)
3. Add a new service page
4. Create an industry-specific page

**Update Existing Content (1 hour)**

- Refresh old content (update stats, examples)
- Add internal links to new content
- Improve underperforming pages

### Week 3: Technical Tasks

**Run Audits (1 hour)**

- [ ] PageSpeed Insights (all main pages)
- [ ] Mobile-Friendly Test
- [ ] Check Search Console for errors
- [ ] Review Core Web Vitals

**Fix Issues:**
- Address any errors found
- Optimize slow pages
- Fix broken links

### Week 4: Strategy & Planning

**Analyze Rankings (30 minutes)**

Use Ahrefs or Google Search Console:
- Which keywords improved?
- Which declined?
- New keywords you're ranking for?

**Plan Next Month (30 minutes)**

- Content topics to create
- Pages to optimize
- Keywords to target
- Backlink opportunities

**Update Documentation:**
- Note what worked
- Track keyword positions
- Log major changes

---

## 🛠 Tools & Resources

### Essential (Free)

**Google Search Console**
- **What:** Monitor search performance, indexing, errors
- **Setup:** search.google.com/search-console
- **Frequency:** Check weekly

**Google Analytics 4**
- **What:** Track visitor behavior, traffic sources
- **Setup:** analytics.google.com
- **Frequency:** Check weekly

**Google PageSpeed Insights**
- **What:** Test page speed and performance
- **Use:** pagespeed.web.dev
- **Frequency:** Monthly

**Google Keyword Planner**
- **What:** Basic keyword research
- **Use:** ads.google.com/home/tools/keyword-planner
- **Frequency:** As needed

### Recommended (Paid)

**Ahrefs** - $99/month (or $7 for 7-day trial)
- Comprehensive keyword research
- Competitor analysis
- Backlink tracking
- Rank tracking
- **Best for:** Serious SEO work

**Alternative:** SEMrush ($119/mo) or Moz ($99/mo)

### Already Have (Cursor MCP)

**Perplexity MCP**
- AI-powered research
- Keyword ideas
- Content research

**Firecrawl MCP**
- Scrape competitor sites
- Content analysis
- Structure review

### Learning Resources

**Free Courses:**
- Google SEO Starter Guide
- Moz Beginner's Guide to SEO
- Ahrefs SEO Blog

**Communities:**
- r/SEO on Reddit
- SEO communities on Facebook
- Twitter #SEO hashtag

---

## 📈 Measuring Success

### Key Performance Indicators (KPIs)

#### 1. Organic Traffic
**What:** Visitors from search engines
**Where:** Google Analytics → Acquisition → All Traffic → Channels → Organic
**Target:** 20% growth month-over-month (after initial 3 months)

#### 2. Keyword Rankings
**What:** Your position in search results
**Where:** Google Search Console → Performance → Queries
**Target:** 
- Month 3: Top 30 for primary keywords
- Month 6: Top 10 for 5-10 keywords
- Month 12: Top 5 for primary keywords

#### 3. Impressions
**What:** How often you appear in search results
**Where:** Google Search Console → Performance
**Target:** Consistent growth (means more visibility)

#### 4. Click-Through Rate (CTR)
**What:** % of people who click when they see you
**Where:** Google Search Console → Performance
**Target:** 
- Position 1-3: 20-35%
- Position 4-10: 5-15%

#### 5. Conversions
**What:** Desired actions (newsletter signup, call booked)
**Where:** Google Analytics → Events/Conversions
**Target:** 2-5% of organic visitors

### 3-Month Goals

After your first 3 months:
- [ ] 50+ keywords indexed
- [ ] 100+ organic visitors/month
- [ ] Average position top 30 for primary keywords
- [ ] Core Web Vitals all green
- [ ] 5+ quality backlinks

### 6-Month Goals

- [ ] 100+ keywords indexed
- [ ] 300+ organic visitors/month
- [ ] Top 10 for 5-10 keywords
- [ ] 3+ leads from organic search
- [ ] 10+ quality backlinks

### 12-Month Goals

- [ ] 200+ keywords indexed
- [ ] 1000+ organic visitors/month
- [ ] Top 5 for primary keywords
- [ ] 10+ leads/month from organic
- [ ] 20+ quality backlinks
- [ ] Featured in industry publications

### Monthly Tracking Spreadsheet

Create a Google Sheet with tabs:

**Tab 1: Monthly Metrics**
| Month | Organic Traffic | Impressions | Avg Position | Conversions | Notes |
|-------|----------------|-------------|--------------|-------------|-------|
| Jan 2025 | 50 | 1,200 | 45 | 0 | Launched |
| Feb 2025 | 120 | 3,500 | 35 | 1 | First lead! |

**Tab 2: Keyword Tracking**
| Keyword | Jan | Feb | Mar | Apr | Target |
|---------|-----|-----|-----|-----|--------|
| customer insight Sydney | - | 42 | 35 | 28 | Top 10 |
| customer strategy | - | 68 | 65 | 58 | Top 20 |

**Tab 3: Content Calendar**
| Date | Title | Keywords | Status | Traffic (1mo) |
|------|-------|----------|--------|---------------|
| 2/15 | How to... | keyword1, keyword2 | Published | 50 visits |

---

## ⚡️ Quick Wins

Easy improvements you can make right now:

### 1. Optimize Existing Images
- Add descriptive alt text to all images
- Include keywords naturally
- Example: "Customer insight workshop GRADA Sydney"

### 2. Add Internal Links
- Link from homepage to service pages
- Link related content together
- Use descriptive anchor text

### 3. Improve Meta Descriptions
- Make them compelling (not just keyword-stuffed)
- Include call-to-action
- Stay within 160 characters

### 4. Create FAQ Section
- Answer common questions
- Use question as heading (H2 or H3)
- People often search questions

### 5. Add Location Info
- Mention Sydney in relevant places
- Add to footer
- Update structured data

---

## 🚨 Common SEO Mistakes to Avoid

### 1. Keyword Stuffing
**Don't:** "Customer insight customer strategy customer consulting customer services"
**Do:** Use keywords naturally in well-written content

### 2. Duplicate Content
**Don't:** Copy text from other sites
**Don't:** Use same content on multiple pages
**Do:** Write original, unique content for each page

### 3. Ignoring Mobile
**Don't:** Only test on desktop
**Do:** Test all changes on mobile devices

### 4. Slow Loading
**Don't:** Upload huge unoptimized images
**Do:** Compress images, use Next.js Image component

### 5. No Internal Links
**Don't:** Create isolated pages
**Do:** Link related pages together

### 6. Thin Content
**Don't:** Create pages with only 200 words
**Do:** Provide comprehensive, valuable content (1000+ words)

### 7. Forgetting Alt Text
**Don't:** Leave images without descriptions
**Do:** Add descriptive alt text to every image

---

## 📋 SEO Audit Checklist

Run this quarterly:

### On-Page SEO
- [ ] All pages have unique titles (50-60 chars)
- [ ] All pages have unique meta descriptions (150-160 chars)
- [ ] One H1 per page with primary keyword
- [ ] H2/H3 headings use secondary keywords
- [ ] All images have alt text
- [ ] Internal linking between related pages
- [ ] URLs are clean and descriptive
- [ ] Content is 1000+ words for main pages

### Technical SEO
- [ ] Site loads in < 3 seconds
- [ ] Mobile-friendly (test on real devices)
- [ ] HTTPS enabled
- [ ] Sitemap.xml accessible and submitted
- [ ] Robots.txt configured correctly
- [ ] No broken links (404 errors)
- [ ] Structured data validates (schema.org validator)
- [ ] Core Web Vitals all green

### Content SEO
- [ ] Content is original and valuable
- [ ] Answers user questions thoroughly
- [ ] Keywords used naturally
- [ ] Updated within last 6-12 months
- [ ] Includes multimedia (images, video)
- [ ] Easy to read and scan
- [ ] Has clear call-to-action

### Local SEO
- [ ] Business name, address consistent
- [ ] Location mentioned in content
- [ ] Local structured data
- [ ] Google Business Profile created (if applicable)

---

## 🎓 Learning Path

### Month 1: Foundations
- Read Google SEO Starter Guide
- Set up Google Search Console
- Set up Google Analytics
- Complete initial keyword research

### Month 2: Content
- Learn content writing for SEO
- Create 2-4 blog posts
- Optimize existing pages
- Study top-ranking competitors

### Month 3: Technical
- Deep dive into Core Web Vitals
- Learn structured data
- Understand crawling and indexing
- Master internal linking

### Month 4-6: Advanced
- Link building strategies
- Advanced keyword research
- Content promotion
- Conversion optimization

---

## 💡 Pro Tips

1. **Be Patient:** SEO takes 3-6 months to show significant results
2. **Quality > Quantity:** One great page beats ten mediocre ones
3. **User First:** Write for people, optimize for search engines
4. **Stay Consistent:** Regular updates matter more than occasional big pushes
5. **Track Everything:** You can't improve what you don't measure
6. **Learn Continuously:** SEO changes constantly
7. **Focus on Value:** If it helps users, it helps SEO

---

This guide is your SEO roadmap. Bookmark it, refer to it often, and update it as you learn. SEO success comes from consistent effort over time. You've got this! 🚀

