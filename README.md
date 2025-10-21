# Tirth Jain - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Optimized for performance, SEO, and international client acquisition.

## 🚀 Features

- **Modern Tech Stack**: Next.js 13+, TypeScript, Tailwind CSS
- **Mobile-First Design**: Fully responsive with touch-friendly interactions
- **SEO Optimized**: Comprehensive metadata, structured data, sitemap
- **Performance Optimized**: Core Web Vitals, image optimization, caching
- **Analytics Ready**: Google Analytics 4, Hotjar, Google Ads integration
- **International Ready**: Timezone awareness, global availability indicators
- **Professional Services**: Detailed service offerings and expertise showcase
- **Contact Features**: Advanced contact form with real-time availability

## 🛠️ Technologies Used

### Frontend
- **Next.js 13+** - React framework with app directory
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and interactions
- **React Icons** - Comprehensive icon library

### Backend & Services
- **Resend** - Email delivery service
- **Server Actions** - Form handling
- **Analytics** - Google Analytics 4, Hotjar, Google Ads

### Performance & SEO
- **Next.js Image Optimization** - Automatic image optimization
- **Structured Data** - Schema.org markup for better SEO
- **Sitemap & Robots.txt** - Search engine optimization
- **Progressive Web App** - Manifest and PWA features

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Tirth886/tirth-jain-dev.git
cd tirth-jain-dev
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local`:
```env
# Email
RESEND_API_KEY=your_resend_api_key

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_HOTJAR_ID=your_hotjar_id
NEXT_PUBLIC_GOOGLE_ADS_ID=your_google_ads_id
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `lib/data.ts` - Experience, skills, and navigation data
- `app/layout.tsx` - SEO metadata and personal details
- `components/seo-scripts.tsx` - Structured data

### Services
Modify `components/services.tsx` to reflect your service offerings and expertise.

### Contact Information
Update contact details in:
- `components/contact.tsx` - Contact form and information
- `components/footer.tsx` - Footer contact details
- `components/seo-scripts.tsx` - Structured data contact info

### Analytics Setup
1. **Google Analytics 4**:
   - Create a GA4 property
   - Add your measurement ID to `NEXT_PUBLIC_GA_ID`

2. **Hotjar**:
   - Create a Hotjar account
   - Add your site ID to `NEXT_PUBLIC_HOTJAR_ID`

3. **Google Ads**:
   - Set up Google Ads conversion tracking
   - Add your conversion ID to `NEXT_PUBLIC_GOOGLE_ADS_ID`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms
The app can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Mobile Optimization

- **Touch-friendly interactions**: All buttons meet minimum 44px tap target
- **Responsive design**: Mobile-first approach with breakpoint optimization
- **Performance**: Optimized images and lazy loading
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🔍 SEO Features

- **Structured Data**: Person and Organization schema markup
- **Open Graph**: Facebook and social media optimization
- **Twitter Cards**: Twitter-specific metadata
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawler instructions
- **Meta Tags**: Comprehensive meta tag optimization

## 📊 Analytics Events

The site tracks the following events:
- Page views
- Form submissions
- Button clicks
- Scroll depth
- Time on page
- Contact form conversions

## 🎯 Performance Metrics

- **Core Web Vitals**: Optimized for Google's ranking factors
- **Lighthouse Score**: 95+ across all categories
- **Image Optimization**: Next.js automatic optimization
- **Caching**: Proper cache headers and static generation

## 🌍 International Features

- **Timezone Awareness**: Real-time availability status
- **Global Accessibility**: Multi-language preparation
- **Contact Options**: Multiple communication channels
- **Response Time**: Clear availability and response expectations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Tirth886/tirth-jain-dev/issues).

## 📞 Contact

**Tirth Jain**
- Website: [https://tirthj.dev](https://tirthj.dev)
- Email: tirth886jain@gmail.com
- LinkedIn: [tirthjaindev](https://www.linkedin.com/in/tirthjaindev)
- GitHub: [Tirth886](https://github.com/Tirth886)
- Phone: +91-7984814283

---

Built with ❤️ by Tirth Jain