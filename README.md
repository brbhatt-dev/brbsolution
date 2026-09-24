# www.brbhatta.com — Official Software & Technology Website

Modern, high-performance software engineering portfolio and technology website for **BR Bhatta**, built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Quick Start (Local Development)

To run the development server locally:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

To generate an optimized production build:

```bash
npm run build
npm run start
```

---

## 📁 Project Architecture

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Custom styling, dark/light CSS variables & glow effects
│   │   ├── layout.tsx       # Root layout with SEO metadata for www.brbhatta.com
│   │   ├── page.tsx         # Main landing page assembling all components
│   │   ├── robots.ts        # Automated robots.txt generator for search engines
│   │   └── sitemap.ts       # Automated XML sitemap for SEO indexing
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky navigation, mobile drawer & theme toggle
│   │   ├── ThemeProvider.tsx# Persistent dark/light mode state management
│   │   ├── Hero.tsx         # Tech headline, live status badge & terminal card
│   │   ├── About.tsx        # Engineering philosophy & core pillars
│   │   ├── TechStack.tsx    # Categorized & interactive skills toolbelt
│   │   ├── Projects.tsx     # Featured software systems, case studies & demo links
│   │   ├── Experience.tsx   # Professional experience & career milestones
│   │   ├── Contact.tsx      # Interactive contact form & direct reach-out options
│   │   └── Footer.tsx       # Domain branding, copyright & back-to-top anchor
│   └── lib/
│       └── utils.ts         # Utility class merging helper (clsx + twMerge)
├── tailwind.config.js       # Custom teal/cyan brand palette and dark mode
└── package.json             # Next.js, React, Tailwind, Lucide React dependencies
```

---

## 🌐 Connecting Your Domain: `www.brbhatta.com`

### Step 1: Deploy to Vercel (Zero Cost & Fast)
1. Push this folder to a GitHub repository (e.g. `github.com/your-username/brbhatta-website`).
2. Log into [vercel.com](https://vercel.com) and click **"Add New" > "Project"**.
3. Import your GitHub repository. Vercel automatically detects Next.js.
4. Click **Deploy**. Your site will be live within seconds on a `.vercel.app` URL.

### Step 2: Configure Custom Domain on Vercel
1. Go to your project on Vercel > **Settings** > **Domains**.
2. Add both:
   - `brbhatta.com`
   - `www.brbhatta.com`
3. Vercel will prompt you with the exact DNS records to enter.

### Step 3: Update DNS at Domain Registrar
Log into the registrar where you purchased `brbhatta.com` (e.g., Namecheap, GoDaddy, Cloudflare, Google Domains):

| Type | Name / Host | Target / Value | TTL |
| :--- | :--- | :--- | :--- |
| **A Record** | `@` (or leave blank) | `76.76.21.21` | Automatic / 3600 |
| **CNAME** | `www` | `cname.vercel-dns.com` | Automatic / 3600 |

*Once added, Vercel will automatically provision a free SSL certificate (HTTPS), and `www.brbhatta.com` will be live globally!*

---

## 🛠 Customizing Content

- **Personal Info & Bio**: Edit [`src/components/Hero.tsx`](file:///c:/Users/aabir/OneDrive/Desktop/BRbhatta%20website/src/components/Hero.tsx) and [`src/components/About.tsx`](file:///c:/Users/aabir/OneDrive/Desktop/BRbhatta%20website/src/components/About.tsx).
- **Projects**: Update the project array in [`src/components/Projects.tsx`](file:///c:/Users/aabir/OneDrive/Desktop/BRbhatta%20website/src/components/Projects.tsx) with your real GitHub repositories and live URLs.
- **Skills**: Adjust skills and categories in [`src/components/TechStack.tsx`](file:///c:/Users/aabir/OneDrive/Desktop/BRbhatta%20website/src/components/TechStack.tsx).
- **Contact Details**: Update email address and social links in [`src/components/Contact.tsx`](file:///c:/Users/aabir/OneDrive/Desktop/BRbhatta%20website/src/components/Contact.tsx) and [`src/components/Navbar.tsx`](file:///c:/Users/aabir/OneDrive/Desktop/BRbhatta%20website/src/components/Navbar.tsx).
