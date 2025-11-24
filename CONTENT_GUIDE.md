# GRADA Website - Content Management Guide

A simple guide for updating website content, adding blog posts, and managing forms without needing deep technical knowledge.

---

## 📖 Table of Contents

1. [Quick Content Updates](#quick-content-updates)
2. [Adding Images](#adding-images)
3. [Creating Blog Posts](#creating-blog-posts)
4. [Updating Forms](#updating-forms)
5. [Managing Cal.com Booking](#managing-calcom-booking)
6. [Email Newsletter Setup](#email-newsletter-setup)
7. [Common Questions](#common-questions)

---

## ✏️ Quick Content Updates

### Editing Benefits

**File:** `content/benefits.ts`

**Structure:**
```typescript
{
  id: 'unique-id',           // Unique identifier (no spaces)
  title: 'Benefit Title',    // Short, catchy title
  description: 'Description text',  // 1-2 sentences
  icon: 'clock'              // Options: clock, play, chart, user, bolt, check
}
```

**Example - Adding a New Benefit:**

1. Open `content/benefits.ts`
2. Add a new object to the array:

```typescript
export const benefits: Benefit[] = [
  // ... existing benefits ...
  {
    id: 'transparent-pricing',
    title: 'Transparent pricing',
    description: 'No hidden fees. Know exactly what you're paying for.',
    icon: 'check'
  }
];
```

3. Save the file
4. Check localhost:3000 - it updates automatically!

---

### Editing Services

**File:** `content/services.ts`

**Structure:**
```typescript
{
  id: 'service-name',
  title: 'Service Title',
  description: 'Detailed description of the service'
}
```

**Example - Editing a Service:**

1. Open `content/services.ts`
2. Find the service you want to edit
3. Update the text:

```typescript
{
  id: 'customer-insights',
  title: 'Customer insights',  // ← Change this
  description: 'Your new description here'  // ← Or this
}
```

4. Save → Done!

---

### Editing Testimonials

**File:** `content/testimonials.ts`

**Structure:**
```typescript
{
  id: '1',                   // Sequential number as string
  quote: 'The testimonial text',
  author: 'Job Title or Name'
}
```

**Example - Adding a Testimonial:**

```typescript
export const testimonials: Testimonial[] = [
  // ... existing testimonials ...
  {
    id: '7',  // Increment from last number
    quote: 'GRADA transformed how we understand our customers.',
    author: 'Director of Customer Experience'
  }
];
```

---

### Editing Industries

**File:** `content/industries.ts`

**Structure:**
```typescript
{
  id: 'industry-name',
  title: 'Industry Title',
  description: 'Detailed industry experience description',
  image: '/images/industries/image-name.jpg'
}
```

**Example - Adding an Industry:**

1. Add your industry image to `public/images/industries/`
2. Open `content/industries.ts`
3. Add the new industry:

```typescript
{
  id: 'fintech',
  title: 'Financial Technology',
  description: 'Experience in digital banking, payment systems, and financial services innovation.',
  image: '/images/industries/fintech.jpg'
}
```

---

## 🖼️ Adding Images

### Where to Put Images

```
public/images/
├── hero/           # Hero/banner images
├── industries/     # Industry card backgrounds
├── benefits/       # Benefit icons (if custom)
└── blog/           # Blog post images
```

### Step-by-Step

1. **Prepare your image:**
   - Format: JPG for photos, PNG for graphics/logos
   - Size: Resize large images (width: 1920px max)
   - Optimize: Use tinypng.com or similar (target < 500KB)
   - Name: Use descriptive names: `customer-research-workshop.jpg`

2. **Add to project:**
   - Drag image into appropriate `public/images/` subfolder
   - Or use terminal: `cp ~/Downloads/image.jpg public/images/hero/`

3. **Reference in code:**

   **In content files:**
   ```typescript
   image: '/images/industries/your-image.jpg'
   ```

   **In component/page files:**
   ```typescript
   <Image 
     src="/images/hero/your-image.jpg"
     alt="Descriptive text for SEO"
     width={1200}
     height={800}
   />
   ```

### Image Best Practices

✅ **Do:**
- Use descriptive file names: `sydney-customer-workshop.jpg`
- Optimize file size (aim for < 500KB)
- Add alt text for SEO
- Use consistent dimensions for similar images

❌ **Don't:**
- Use spaces in filenames (use hyphens)
- Upload huge unoptimized images (5MB+)
- Use generic names: `IMG_1234.jpg`
- Forget alt text

---

## 📝 Creating Blog Posts

### Step 1: Create Blog Structure (One-time)

If blog doesn't exist yet:

```bash
cd /Users/mrp/Cursor/grada/grada-website
mkdir -p app/blog content/blog
```

### Step 2: Create Blog Data File

**File:** `content/blog/posts.ts`

```typescript
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
  content: string;
  image?: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Improve Customer Loyalty Programs',
    description: 'Learn proven strategies to boost customer retention and loyalty.',
    date: '2025-01-15',
    author: 'GRADA Team',
    slug: 'how-to-improve-customer-loyalty',
    image: '/images/blog/customer-loyalty.jpg',
    keywords: ['customer loyalty', 'customer retention', 'loyalty programs'],
    content: `
# How to Improve Customer Loyalty Programs

Customer loyalty is the cornerstone of sustainable business growth...

## Why Loyalty Matters

[Your content here...]

## 5 Proven Strategies

### 1. Understand What Customers Value

[More content...]
    `
  }
];
```

### Step 3: Create Blog List Page

**File:** `app/blog/page.tsx`

```typescript
import Link from 'next/link';
import Section from '@/components/Section';
import { blogPosts } from '@/content/blog/posts';

export const metadata = {
  title: 'Blog | GRADA',
  description: 'Customer insight and strategy articles, guides, and best practices.',
};

export default function BlogPage() {
  return (
    <main className="pt-20">
      <Section>
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
              {post.image && (
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-6">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h2 className="text-xl font-bold mt-2 mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
```

### Step 4: Create Individual Post Pages

**File:** `app/blog/[slug]/page.tsx`

```typescript
import { notFound } from 'next/navigation';
import Section from '@/components/Section';
import { blogPosts } from '@/content/blog/posts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) return {};
  
  return {
    title: `${post.title} | GRADA`,
    description: post.description,
    keywords: post.keywords,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) notFound();
  
  return (
    <main className="pt-20">
      <Section>
        <article className="max-w-3xl mx-auto">
          <time className="text-sm text-gray-500">{post.date}</time>
          <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{post.description}</p>
          
          {post.image && (
            <img src={post.image} alt={post.title} className="w-full rounded-lg mb-8" />
          )}
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </Section>
    </main>
  );
}
```

### Step 5: Add Link to Navigation

**File:** `components/Header.tsx`

Add blog link to navigation:

```typescript
<Link href="/blog" className="text-gray-700 hover:text-gray-900">
  Blog
</Link>
```

### Adding New Blog Posts

Once setup is complete, just edit `content/blog/posts.ts`:

```typescript
{
  id: '2',  // Increment ID
  title: 'Your New Post Title',
  description: 'Brief description for preview',
  date: '2025-02-01',
  author: 'GRADA Team',
  slug: 'your-post-url-friendly-title',
  image: '/images/blog/your-image.jpg',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  content: `
# Your Post Title

Your markdown content here...

## Section 1

Content...

## Section 2

More content...
  `
}
```

**Post shows up automatically!**

---

## 📧 Updating Forms

### Newsletter Form

**Current Status:** Form works, emails logged to console (not sent to inbox).

**To Connect Email Service:**

#### Option A: Mailchimp (Recommended)

1. **Sign up at mailchimp.com** (free up to 500 subscribers)

2. **Get API key:**
   - Account → Settings → Extras → API keys
   - Create new key → Copy it

3. **Get Audience ID:**
   - Audience → All contacts → Settings → Audience name and defaults
   - Copy "Audience ID"

4. **Add to environment:**

   Create/edit `.env.local`:
   ```
   MAILCHIMP_API_KEY=your-key-abc123xyz
   MAILCHIMP_AUDIENCE_ID=your-audience-id
   ```

5. **Update code:**

   **File:** `app/api/newsletter/route.ts`

   Uncomment the Mailchimp code:

   ```typescript
   const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
   const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
   const MAILCHIMP_DC = MAILCHIMP_API_KEY?.split('-')[1];

   const response = await fetch(
     `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
     {
       method: 'POST',
       headers: {
         Authorization: `apikey ${MAILCHIMP_API_KEY}`,
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         email_address: email,
         status: 'subscribed',
       }),
     }
   );

   if (!response.ok) {
     throw new Error('Mailchimp API error');
   }
   ```

6. **Test it:**
   - Run `npm run dev`
   - Submit form with your email
   - Check Mailchimp dashboard for new subscriber

#### Option B: ConvertKit

1. **Sign up at convertkit.com**
2. **Get API key:** Settings → API
3. **Create form:** Get Form ID
4. **Similar integration** (ConvertKit has good docs)

#### Option C: SendGrid

1. **Sign up at sendgrid.com**
2. **Get API key**
3. **Use SendGrid Node.js SDK**

---

## 📅 Managing Cal.com Booking

### Setup Cal.com

1. **Sign up at cal.com** (free tier available)
2. **Configure your availability:**
   - Settings → Availability
   - Set your working hours
3. **Create event type:**
   - Event Types → New
   - "Discovery Call" (30 min)
   - Set buffer times, questions, etc.
4. **Get your username:**
   - Settings → Profile
   - Your username: `yourname`

### Update Website

**File:** `components/CalEmbed.tsx`

Replace placeholder:

```typescript
// Change this line:
data-cal-link="your-cal-username"

// To this:
data-cal-link="your-actual-username"
```

Also update the fallback link:

```typescript
<a href="https://cal.com/your-actual-username">
  Click here to book a call
</a>
```

### Customize Appearance

**In Cal.com dashboard:**
- Settings → Appearance
- Choose colors, logo
- Preview changes

**On website (CalEmbed.tsx):**

Change layout:
```typescript
data-cal-config='{"layout":"month_view"}'  // or "column_view"
```

Add brand color:
```typescript
data-cal-config='{"theme":"light","branding":{"brandColor":"#000000"}}'
```

---

## 📊 Email Newsletter Setup

### Best Practices

**Subject Lines:**
- Keep under 50 characters
- Use numbers: "5 ways to..."
- Ask questions
- Create urgency: "Last chance..."

**Content:**
- Short paragraphs (2-3 sentences)
- Use bullet points
- Include one clear call-to-action
- Add images (but not too many)
- Mobile-friendly (test on phone)

**Frequency:**
- Start with monthly
- Be consistent
- Don't spam

### Email Templates

#### Welcome Email Template

```
Subject: Welcome to GRADA Insights

Hi [Name],

Thanks for subscribing! You'll receive:

• Monthly customer strategy insights
• Industry trends and analysis  
• Practical tips you can implement
• Exclusive resources

Our next newsletter goes out [date].

In the meantime, check out our latest post:
[Link to recent blog post]

Best,
[Your name]
GRADA Team

---
Prefer less email? Update preferences | Unsubscribe
```

#### Monthly Newsletter Template

```
Subject: [Month] Customer Insights: [Compelling Topic]

## This Month's Insight

[One key insight - 2-3 sentences]

## Recent Articles

📝 [Article Title]
Brief description...
[Read more →]

📝 [Article Title 2]  
Brief description...
[Read more →]

## Quick Tip

[One actionable tip they can use this week]

## Industry News

[1-2 relevant news items with brief commentary]

---

Ready to discuss your customer strategy?
[Book a call →]

Thanks for reading!
[Your name]

---
Update preferences | Unsubscribe
```

---

## ❓ Common Questions

### How do I change the homepage hero text?

**File:** `components/Hero.tsx`

Find and edit:
```typescript
<h1 className="...">
  Customer insight & strategy  // ← Edit this
</h1>
```

### How do I add a new page?

1. Create folder: `app/your-page-name/`
2. Create file: `app/your-page-name/page.tsx`
3. Add content:

```typescript
import Section from '@/components/Section';

export const metadata = {
  title: 'Page Title | GRADA',
  description: 'Page description',
};

export default function YourPage() {
  return (
    <main className="pt-20">
      <Section>
        <h1 className="text-4xl font-bold mb-8">Page Title</h1>
        <p>Your content here...</p>
      </Section>
    </main>
  );
}
```

4. Add to navigation in `components/Header.tsx`

### How do I change colors?

**File:** `tailwind.config.js`

Add custom colors:
```javascript
theme: {
  extend: {
    colors: {
      'grada-primary': '#your-color',
      'grada-secondary': '#another-color',
    }
  }
}
```

Then use in components:
```typescript
className="bg-grada-primary text-white"
```

### Where is my logo?

**File:** `public/images/logo.png`

Replace this file with your new logo (same name, or update references in `Header.tsx` and `Footer.tsx`)

### How do I remove a section from homepage?

**File:** `app/page.tsx`

Comment out or delete the section:
```typescript
// <TestimonialsSection />  ← This section won't show
```

### How do I change footer links?

**File:** `components/Footer.tsx`

Edit the links:
```typescript
<Link href="/your-page">Your Link Text</Link>
```

### How do I test before deploying?

```bash
# Run locally
npm run dev

# Test production build
npm run build
npm start
```

Check localhost:3000 in browser

---

## 📋 Content Update Checklist

Before publishing changes:

- [ ] Content is spell-checked
- [ ] Links work (click them!)
- [ ] Images load properly
- [ ] Text is readable on mobile
- [ ] SEO title and description set
- [ ] Alt text added to images
- [ ] Page loads fast
- [ ] Forms work (test submission)
- [ ] No console errors (F12 in browser)

---

## 🆘 Help & Troubleshooting

### Content not showing?

1. Check file is saved
2. Refresh browser (Cmd/Ctrl + R)
3. Check for typos in file names
4. Check terminal for errors

### Image not loading?

1. Check file path: `/images/folder/file.jpg`
2. Check file name matches exactly (case-sensitive)
3. Make sure image is in `public/images/`

### Form not working?

1. Check console (F12) for errors
2. Verify API route exists
3. Check environment variables in `.env.local`
4. Test with simple console.log

### Need more help?

1. Check `DEVELOPMENT.md`
2. Check `SEO_GUIDE.md`  
3. Search error message on Google
4. Check Next.js docs: nextjs.org/docs

---

Content management doesn't have to be complicated! With this guide, you can update your website confidently. Remember: save often, test locally, then deploy. You've got this! 🚀

