# GRADA Website - Development Guide

This guide explains how to work with your new Next.js website, from making simple content changes to deploying updates.

---

## 📁 Project Structure

```
grada-website/
├── app/                    # Pages and routes
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Site-wide layout (Header/Footer)
│   ├── contact/           # Contact page
│   ├── terms/             # Terms & Conditions
│   ├── privacy/           # Privacy Policy
│   ├── api/               # API endpoints
│   │   └── newsletter/    # Newsletter signup
│   ├── sitemap.ts         # Auto-generated sitemap
│   └── robots.ts          # Search engine instructions
├── components/             # Reusable UI components
│   ├── Header.tsx         # Site header/navigation
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Homepage hero section
│   ├── Section.tsx        # Wrapper for consistent spacing
│   ├── BenefitCard.tsx    # Benefit display cards
│   ├── Accordion.tsx      # Services accordion menu
│   ├── TestimonialCard.tsx # Customer testimonials
│   ├── IndustryCard.tsx   # Industry experience cards
│   ├── NewsletterForm.tsx # Email signup form
│   ├── CalEmbed.tsx       # Cal.com booking embed
│   └── StructuredData.tsx # SEO structured data
├── content/                # Content data files
│   ├── benefits.ts        # Engagement benefits list
│   ├── services.ts        # Services menu items
│   ├── testimonials.ts    # Customer testimonials
│   └── industries.ts      # Industry experience
├── public/                 # Static files (images, etc.)
│   └── images/            # Organized image folders
└── package.json           # Project dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** installed
- **Git** installed  
- Code editor (you're using Cursor ✅)

### Running Locally

1. **Open Terminal in Cursor** (Cmd+J or Ctrl+J)

2. **Navigate to project:**
   ```bash
   cd /Users/mrp/Cursor/grada/grada-website
   ```

3. **Install dependencies** (first time only):
   ```bash
   npm install
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:** http://localhost:3000

The site will automatically reload when you save changes!

### Build for Production

Test that everything builds correctly:

```bash
npm run build
```

If this succeeds, your changes are ready to deploy.

---

## ✏️ Making Changes

### Editing Text Content

Content is stored in TypeScript files in the `/content` folder. These are structured data files that are easy to edit.

#### Benefits

**File:** `content/benefits.ts`

```typescript
{
  id: 'fast-engagement',
  title: 'Fast engagement',
  description: 'Agree on the brief and get on with the job.',
  icon: 'clock'  // Options: clock, play, chart, user, bolt, check
}
```

#### Services

**File:** `content/services.ts`

```typescript
{
  id: 'customer-insights',
  title: 'Customer insights',
  description: 'Fast actionable customer insights...'
}
```

#### Testimonials

**File:** `content/testimonials.ts`

```typescript
{
  id: '1',
  quote: 'I really appreciated the no jargon clarity...',
  author: 'CMO'
}
```

#### Industries

**File:** `content/industries.ts`

```typescript
{
  id: 'higher-education',
  title: 'Higher Education',
  description: 'The transition to university...',
  image: '/images/industries/education.jpg'
}
```

### Editing Page Text

Main page content is in `app/page.tsx`. Look for the text in quotes and edit:

```typescript
<h2 className="...">
  Customer insight & strategy  // ← Edit this
</h2>
```

### Adding/Changing Images

1. **Add image file to `public/images/`**
   - Hero images: `public/images/hero/`
   - Industry images: `public/images/industries/`
   - Etc.

2. **Reference in code:**
   ```typescript
   image: '/images/industries/your-image.jpg'
   ```

**Image Best Practices:**
- Use `.jpg` for photos
- Use `.png` for logos/graphics
- Optimize before uploading (aim for < 500KB)
- Use descriptive filenames: `customer-research-team.jpg`

### Editing SEO Metadata

**Homepage SEO:** Edit `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Customer Insight & Strategy | GRADA Sydney",
  description: "Expert customer strategy consulting...",
  keywords: ["customer insight", "strategy", ...],
}
```

**Other Pages:** Edit the `metadata` export in each page file:
- `app/contact/page.tsx`
- `app/terms/page.tsx`
- `app/privacy/page.tsx`

---

## 🔧 Common Tasks

### Adding a New Benefit

1. Open `content/benefits.ts`
2. Add new object to the array:
   ```typescript
   {
     id: 'new-benefit',  // unique ID
     title: 'Benefit Title',
     description: 'Description here',
     icon: 'check'  // clock, play, chart, user, bolt, check
   }
   ```
3. Save file → auto-reloads

### Adding a New Service

1. Open `content/services.ts`
2. Add new object:
   ```typescript
   {
     id: 'new-service',
     title: 'Service Name',
     description: 'Detailed description'
   }
   ```
3. Save → done!

### Adding a New Testimonial

1. Open `content/testimonials.ts`
2. Add to array:
   ```typescript
   {
     id: '7',  // increment number
     quote: 'What the customer said',
     author: 'Their title/role'
   }
   ```

### Updating Cal.com Booking Link

**File:** `components/CalEmbed.tsx`

Replace `your-cal-username` with your actual Cal.com username:

```typescript
data-cal-link="your-actual-username"
```

---

## 📧 Newsletter Integration

The newsletter form is set up but needs email service connection.

**Current Status:** Form works, but emails are logged to console (not sent).

**To Connect Email Service:**

1. **Choose a provider:**
   - Mailchimp (recommended, free up to 500 subscribers)
   - ConvertKit
   - SendGrid

2. **Get API credentials** from your provider

3. **Add to environment variables:**

   Create `.env.local` file:
   ```
   MAILCHIMP_API_KEY=your-key-here
   MAILCHIMP_AUDIENCE_ID=your-audience-id
   ```

4. **Update `app/api/newsletter/route.ts`:**
   - Uncomment Mailchimp integration code
   - Add your actual API calls

**Need help?** The code comments in `route.ts` have example Mailchimp integration.

---

## 🚀 Deploying Changes

### Via Vercel (Automatic)

Once connected to Vercel:

1. **Make your changes** in Cursor
2. **Commit to GitHub:**
   ```bash
   git add .
   git commit -m "Updated homepage content"
   git push
   ```
3. **Vercel auto-deploys** (30-60 seconds)
4. **Check https://grada.com.au**

### Via Vercel Dashboard (Manual)

1. Go to vercel.com/dashboard
2. Select your project
3. Click "Deployments"
4. Click "..." on latest → "Redeploy"

---

## 🐛 Troubleshooting

### Build Fails

```bash
npm run build
```

Read the error message. Common issues:
- **Syntax error:** Missing bracket, comma, quote
- **Type error:** Check TypeScript types match
- **Missing file:** Check image/file paths

### Local Dev Server Not Working

```bash
# Kill any running processes
pkill -f "next dev"

# Reinstall dependencies
rm -rf node_modules .next
npm install

# Start again
npm run dev
```

### Changes Not Showing

1. **Hard refresh browser:** Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
2. **Clear Next.js cache:**
   ```bash
   rm -rf .next
   npm run dev
   ```

### Images Not Loading

- Check file path starts with `/public/images/...`
- Reference should be `/images/...` (no `/public`)
- Check file name matches exactly (case-sensitive)

---

## 📚 Learning Resources

### Next.js Basics
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn) (interactive tutorial)

### React Concepts
- [React Documentation](https://react.dev)
- [React Components Guide](https://react.dev/learn/your-first-component)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- You'll pick it up as you go!

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

---

## 🆘 Getting Help

### Within This Project
1. Check comments in code files
2. Review this documentation
3. Check `SEO_GUIDE.md` for SEO questions

### External Resources
- Next.js Discord: https://nextjs.org/discord
- Stack Overflow: tag `next.js`
- Search your error message on Google

---

## 🔐 Environment Variables

Create `.env.local` for secrets (never commit this file):

```bash
# Email Service
MAILCHIMP_API_KEY=your-api-key
MAILCHIMP_AUDIENCE_ID=your-audience-id

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics

# Other services as needed
```

**Note:** Variables starting with `NEXT_PUBLIC_` are visible to the browser.

---

## ⚡️ Performance Tips

### Images
- Use Next.js `<Image>` component (already implemented)
- Optimize before uploading
- Use appropriate formats (JPG for photos, PNG for graphics)

### Code
- Keep components small and focused
- Don't import unused dependencies
- Test build time: `npm run build`

### Monitoring
- Check Google PageSpeed Insights
- Monitor Core Web Vitals in Google Search Console

---

## ✅ Pre-Deployment Checklist

Before deploying major changes:

- [ ] Run `npm run build` successfully
- [ ] Test on mobile (Chrome DevTools)
- [ ] Check all links work
- [ ] Verify images load
- [ ] Test forms work
- [ ] Check console for errors (F12)
- [ ] Review text for typos

---

## 🔄 Git Workflow

### Basic Workflow

```bash
# Check status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Descriptive message about changes"

# Push to GitHub
git push

# Vercel automatically deploys
```

### Good Commit Messages

✅ Good:
- "Updated homepage testimonials"
- "Added new service: Digital transformation"
- "Fixed mobile menu styling"

❌ Bad:
- "updates"
- "stuff"
- "asdfasdf"

---

## 📞 Support Contacts

- **Domain (GoDaddy):** https://godaddy.com/help
- **Hosting (Vercel):** https://vercel.com/help
- **Code Repository (GitHub):** https://github.com/support

---

This is your website now! Don't be afraid to experiment. You can always revert changes with Git. Happy coding! 🚀

