# GRADA Website

Modern, SEO-optimized website for GRADA customer insight & strategy consulting, built with Next.js and deployed on Vercel.

---

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Access

- **Local:** http://localhost:3000
- **Production:** https://grada.com.au

---

## 📚 Documentation

- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Complete development guide, making changes, common tasks
- **[SEO_GUIDE.md](./SEO_GUIDE.md)** - SEO strategy, keyword research, optimization, monthly maintenance
- **[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)** - How to update content, add blog posts, manage forms

---

## 🛠 Technology Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first styling
- **React Hook Form** - Form validation
- **Heroicons** - Beautiful icons
- **Framer Motion** - Smooth animations

---

## 📁 Project Structure

```
├── app/                    # Pages and routes
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── api/               # API routes
│   └── [page-name]/       # Other pages
├── components/             # Reusable UI components
├── content/                # Content data files
├── public/                 # Static assets (images)
├── DEVELOPMENT.md         # Development guide
├── SEO_GUIDE.md           # SEO strategy guide
└── CONTENT_GUIDE.md       # Content management guide
```

---

## ✨ Features

### Performance
- ⚡️ Next.js automatic optimization
- 🖼️ Optimized images (WebP, lazy loading)
- 📦 Code splitting
- 🎯 90+ PageSpeed score

### SEO
- 🔍 Complete meta tags
- 📊 Structured data (Schema.org)
- 🗺️ Auto-generated sitemap
- 🤖 Robots.txt
- 📱 Mobile-first design

### User Experience
- 📱 Fully responsive
- ♿️ Accessible (WCAG compliant)
- 🎨 Modern, clean design
- ⚡️ Smooth animations
- 🔗 Internal linking

---

## 🔧 Environment Variables

Create `.env.local` for local development:

```bash
# Email Service (Newsletter)
MAILCHIMP_API_KEY=your-key-here
MAILCHIMP_AUDIENCE_ID=your-audience-id

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Cal.com (Optional)
NEXT_PUBLIC_CAL_USERNAME=your-username
```

---

## 📝 Content Management

### Quick Edits

**Benefits:** Edit `content/benefits.ts`
**Services:** Edit `content/services.ts`  
**Testimonials:** Edit `content/testimonials.ts`  
**Industries:** Edit `content/industries.ts`

See [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for detailed instructions.

---

## 🚀 Deployment

### Automatic (Recommended)

1. Push to GitHub
2. Vercel automatically deploys
3. Live in 30-60 seconds

### Manual

```bash
# Build locally
npm run build

# Test production build
npm start

# Deploy via Vercel CLI
vercel --prod
```

---

## 📊 Monitoring

### Tools Setup

- **Google Search Console:** Search performance, indexing
- **Google Analytics 4:** Traffic, user behavior
- **Vercel Analytics:** Web vitals, performance

### Monthly Checks

- Review SEO metrics (Search Console)
- Check performance (PageSpeed Insights)
- Monitor errors (Vercel dashboard)
- Review analytics (GA4)

---

## 🆘 Support

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Project Docs
- [DEVELOPMENT.md](./DEVELOPMENT.md) - Development questions
- [SEO_GUIDE.md](./SEO_GUIDE.md) - SEO questions
- [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) - Content questions

---

## 📋 Maintenance Checklist

### Weekly
- [ ] Check Google Search Console for errors
- [ ] Monitor Vercel deployment status

### Monthly
- [ ] Add new content (1-2 blog posts)
- [ ] Review SEO metrics
- [ ] Run PageSpeed Insights
- [ ] Check for broken links
- [ ] Update dependencies: `npm update`

### Quarterly
- [ ] Full SEO audit
- [ ] Competitor analysis
- [ ] Content refresh (update old posts)
- [ ] Review and update strategies

---

## 📜 License

© 2025 GRADA. All rights reserved.

---

## 🎯 Goals

### Phase 1: Migration ✅
- [x] Modern Next.js website
- [x] All content migrated
- [x] SEO foundations
- [x] Deployed to Vercel

### Phase 2: SEO Strategy (In Progress)
- [ ] Keyword research (200+ keywords)
- [ ] Competitor analysis
- [ ] Content expansion
- [ ] Backlink building
- [ ] Monthly optimization

### Long-term Goals
- 1000+ organic visitors/month
- Top 5 rankings for primary keywords
- Consistent lead generation
- Industry thought leadership

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
