# Deployment Guide - GRADA Website

Complete step-by-step guide to deploy your Next.js website to Vercel and configure your custom domain.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [x] Project builds successfully (`npm run build` ✅)
- [x] Code committed to Git ✅
- [ ] GitHub account created
- [ ] GitHub repository created
- [ ] Vercel account created (sign up via GitHub)
- [ ] GoDaddy account access (for DNS)

---

## 🚀 Part 1: Push to GitHub

### Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in (or create account)

2. **Click the "+" icon** (top right) → "New repository"

3. **Repository settings:**
   - **Name:** `grada-website`
   - **Description:** "GRADA customer insight & strategy website"
   - **Visibility:** Private (recommended) or Public
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)

4. **Click "Create repository"**

### Step 2: Push Your Code

You'll see instructions on GitHub. In your terminal:

```bash
cd /Users/mrp/Cursor/grada/grada-website

# Add GitHub as remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/grada-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Enter your credentials when prompted** (or use personal access token)

**Success!** Your code is now on GitHub. Refresh the GitHub page to see your files.

---

## 🌐 Part 2: Deploy to Vercel

### Step 1: Sign Up for Vercel

1. **Go to vercel.com**

2. **Click "Sign Up"**

3. **Choose "Continue with GitHub"** (easiest option - links accounts automatically)

4. **Authorize Vercel** to access your GitHub account

### Step 2: Import Your Project

1. **On Vercel Dashboard,** click **"Add New..." → "Project"**

2. **Select "grada-website" repository** from the list

3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected ✅)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)

4. **Environment Variables** (leave empty for now - add later):
   - We'll add `MAILCHIMP_API_KEY` later when you set up email

5. **Click "Deploy"**

### Step 3: Wait for Deployment

- Vercel will install dependencies
- Build your site
- Deploy globally
- Usually takes **1-2 minutes**

**Success Screen:**
- You'll see confetti 🎉
- Your site is live at: `grada-website-xyz123.vercel.app`

### Step 4: Test Your Deployment

1. **Click "Visit"** to open your live site

2. **Test everything:**
   - [ ] Homepage loads correctly
   - [ ] Navigation works
   - [ ] All pages accessible
   - [ ] Images display
   - [ ] Forms appear (won't send emails yet)
   - [ ] Mobile view works (resize browser)

---

## 🔗 Part 3: Configure Custom Domain (grada.com.au)

### Step 1: Add Domain in Vercel

1. **In Vercel Dashboard,** go to your project

2. **Click "Settings"** → **"Domains"**

3. **Add domain:**
   - Enter: `grada.com.au`
   - Click "Add"

4. **Add www subdomain:**
   - Enter: `www.grada.com.au`
   - Click "Add"

5. **Vercel will show DNS records** you need to add (keep this page open!)

**You'll see something like:**

```
A Record:
Name: @
Value: 76.76.19.19

CNAME Record:
Name: www
Value: cname.vercel-dns.com
```

### Step 2: Update DNS in GoDaddy

1. **Go to godaddy.com** and sign in

2. **Navigate to:** My Products → Domains → **grada.com.au** → DNS

3. **Add A Record:**
   - **Type:** A
   - **Name:** @ (means root domain)
   - **Value:** `76.76.19.19` (Vercel's IP)
   - **TTL:** 600 (default)
   - Click "Save"

4. **Add or Update CNAME Record:**
   - **Type:** CNAME
   - **Name:** www
   - **Value:** `cname.vercel-dns.com`
   - **TTL:** 3600
   - Click "Save"

5. **Remove conflicting records** (if they exist):
   - Old A records pointing to other IPs
   - Old CNAME records for @ or www
   - Parking page redirects

### Step 3: Verify in Vercel

1. **Back in Vercel** → Settings → Domains

2. **Click "Refresh"** next to each domain

3. **Status will show:**
   - ⏳ Pending (DNS not propagated yet)
   - ✅ Valid (DNS configured correctly!)

**DNS propagation can take:**
- **Fast:** 5-10 minutes
- **Normal:** 1-2 hours
- **Maximum:** 24-48 hours

### Step 4: Check Domain Status

**Use online tools:**
- **DNS Checker:** dnschecker.org
- **What's My DNS:** whatsmydns.net

Enter `grada.com.au` and check if A record shows `76.76.19.19`

**Test your domain:**
```bash
# In terminal
ping grada.com.au

# Should show: 76.76.19.19
```

### Step 5: Enable HTTPS (Automatic)

Once DNS is verified:
- Vercel **automatically** provisions SSL certificate
- HTTPS enabled within minutes
- All HTTP traffic redirects to HTTPS

**Your site is now live at:**
- ✅ https://grada.com.au
- ✅ https://www.grada.com.au

---

## 🔧 Part 4: Post-Deployment Configuration

### Add Environment Variables

When you're ready to enable newsletter signups:

1. **In Vercel Dashboard** → Your Project → Settings → **Environment Variables**

2. **Add variables:**

   **Key:** `MAILCHIMP_API_KEY`  
   **Value:** Your Mailchimp API key  
   **Environment:** Production

   **Key:** `MAILCHIMP_AUDIENCE_ID`  
   **Value:** Your Mailchimp Audience ID  
   **Environment:** Production

3. **Click "Save"**

4. **Redeploy:**
   - Go to Deployments
   - Click "..." on latest → "Redeploy"

### Configure Cal.com

Update your booking link:

1. **Edit locally:** `components/CalEmbed.tsx`

2. **Replace:** `your-cal-username` with your actual Cal.com username

3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Updated Cal.com booking link"
   git push
   ```

4. **Vercel auto-deploys** (30-60 seconds)

---

## 📊 Part 5: Setup Analytics & Monitoring

### Google Search Console

**Why:** Monitor search performance, fix errors, submit sitemap

1. **Go to:** search.google.com/search-console

2. **Click "Add Property"** → Domain property

3. **Enter:** `grada.com.au`

4. **Verify ownership** via DNS (add TXT record to GoDaddy)

5. **Submit sitemap:**
   - Property → Sitemaps
   - Enter: `https://grada.com.au/sitemap.xml`
   - Click "Submit"

### Google Analytics 4

**Why:** Track visitor behavior, traffic sources, conversions

1. **Go to:** analytics.google.com

2. **Create Property:**
   - Property Name: "GRADA Website"
   - Reporting timezone: Australia/Sydney
   - Currency: AUD

3. **Setup Data Stream:**
   - Web platform
   - Website URL: `https://grada.com.au`
   - Stream name: "GRADA Website"

4. **Get Measurement ID:** Looks like `G-XXXXXXXXXX`

5. **Add to website:**

   **Option A: Add to Vercel environment:**
   - Settings → Environment Variables
   - Key: `NEXT_PUBLIC_GA_ID`
   - Value: Your measurement ID

   **Option B: Add directly to code:**
   
   Create `app/googleanalytics.tsx`:
   ```typescript
   import Script from 'next/script';

   export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
     return (
       <>
         <Script
           strategy="afterInteractive"
           src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
         />
         <Script
           id="google-analytics"
           strategy="afterInteractive"
           dangerouslySetInnerHTML={{
             __html: `
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', '${GA_MEASUREMENT_ID}');
             `,
           }}
         />
       </>
     );
   }
   ```

   Update `app/layout.tsx`:
   ```typescript
   import GoogleAnalytics from './googleanalytics';

   // In the <body> tag:
   <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" />
   ```

### Vercel Analytics (Optional)

**Why:** Real-time visitors, Core Web Vitals

1. **In Vercel Project** → Analytics tab

2. **Enable Analytics** (click button)

3. **Free tier includes:**
   - Web Vitals tracking
   - Performance monitoring
   - Real-time visitors

---

## 🔄 Part 6: Continuous Deployment Workflow

Once everything is set up, your workflow is simple:

### Making Changes

1. **Edit code locally in Cursor**

2. **Test locally:**
   ```bash
   npm run dev
   # Check localhost:3000
   ```

3. **Commit changes:**
   ```bash
   git add .
   git commit -m "Descriptive message about what changed"
   git push
   ```

4. **Vercel automatically deploys** (30-60 seconds)

5. **Check live site:** https://grada.com.au

### Rollback If Needed

If something breaks:

1. **Go to Vercel Dashboard** → Deployments

2. **Find last working deployment**

3. **Click "..." → "Promote to Production"**

4. **Instant rollback!**

---

## ✅ Deployment Success Checklist

After deployment, verify:

### Functionality
- [ ] Homepage loads at grada.com.au
- [ ] All pages accessible (Contact, Terms, Privacy)
- [ ] Images display correctly
- [ ] Navigation works (desktop & mobile)
- [ ] Forms render (newsletter, booking)
- [ ] Links work (internal & external)
- [ ] Mobile responsive

### SEO & Performance
- [ ] Sitemap accessible: grada.com.au/sitemap.xml
- [ ] Robots.txt accessible: grada.com.au/robots.txt
- [ ] HTTPS enabled (green lock in browser)
- [ ] Google Search Console configured
- [ ] Google Analytics tracking
- [ ] PageSpeed score 90+ (check at pagespeed.web.dev)

### Domain & DNS
- [ ] grada.com.au works
- [ ] www.grada.com.au works
- [ ] HTTP redirects to HTTPS
- [ ] No SSL certificate warnings

---

## 🐛 Troubleshooting

### Domain Not Working

**Problem:** grada.com.au doesn't load

**Solutions:**
1. Check DNS propagation: dnschecker.org
2. Verify A record: `76.76.19.19`
3. Verify CNAME: `cname.vercel-dns.com`
4. Wait longer (DNS can take 24-48 hours)
5. Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)

### Deployment Failed

**Problem:** Vercel build fails

**Solutions:**
1. Check build logs in Vercel dashboard
2. Run `npm run build` locally - does it work?
3. Check for syntax errors
4. Verify all files committed to GitHub
5. Check environment variables are set

### Images Not Loading

**Problem:** Images show broken on live site

**Solutions:**
1. Check images committed to GitHub
2. Verify paths: `/images/...` (not `/public/images/...`)
3. Check file names match exactly (case-sensitive)
4. Check file formats (JPG, PNG, WebP supported)

### Forms Not Working

**Problem:** Newsletter signup doesn't work

**Solutions:**
1. Check environment variables set in Vercel
2. Check API route deployed: grada.com.au/api/newsletter
3. Check browser console (F12) for errors
4. Verify Mailchimp credentials are correct

### SSL Certificate Error

**Problem:** "Your connection is not private" warning

**Solutions:**
1. Wait - SSL cert takes 5-10 minutes after DNS verification
2. Check domain is verified in Vercel
3. Try different browser/incognito mode
4. Contact Vercel support if persists > 1 hour

---

## 📞 Support Resources

### Vercel
- **Documentation:** vercel.com/docs
- **Support:** vercel.com/support
- **Status:** vercel-status.com

### GoDaddy
- **DNS Help:** godaddy.com/help/dns
- **Support:** godaddy.com/contact-us

### Next.js
- **Documentation:** nextjs.org/docs
- **Discord:** nextjs.org/discord

---

## 🎉 Congratulations!

Your website is now:
- ✅ Deployed globally on Vercel
- ✅ Accessible at grada.com.au
- ✅ HTTPS secured
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Ready for Phase 2 (SEO strategy)

**Next Steps:**
1. Review `SEO_GUIDE.md` for Phase 2 strategy
2. Set up email newsletter (Mailchimp)
3. Configure Cal.com booking
4. Start creating blog content
5. Begin keyword research

---

You've successfully migrated from Squarespace to a modern, high-performance website with complete control. Well done! 🚀

