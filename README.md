# Shafqat Nadeem - Portfolio ⚡️

[![Live Site](https://img.shields.io/badge/Live-shafqat.netlify.app-00C7B7?style=for-the-badge&logo=netlify)](https://shafqat.netlify.app/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Flutter](https://img.shields.io/badge/Flutter-7%2B_Years-02569B?style=for-the-badge&logo=flutter)](https://flutter.dev/)

> **High-Performance Modern Portfolio** for **Shafqat Nadeem** — Senior Flutter Software Engineer with 7+ years of experience and 20+ production mobile applications delivered.

---

## 🚀 Key Highlights & Architectural Features

- ⚡ **Fast Builds**: React + Vite build, inline SVG icons, and no external font dependency.
- 🎨 **Modern Aesthetics**: Dual-theme support (Sleek Glassmorphic Dark Mode & Crisp Light Mode) with smooth CSS transitions.
- 📱 **Mobile & Cross-Platform Showcase**: Detailed technical highlights for flagship applications (**WithU**, **BikeFixup**, **Imamia Jantri**, **Emed Ghana**, **Hasbati**, **Irish Virtual DJ**).
- 🏆 **Quantifiable Impact**: Highlights 100K+ downloads, 60 FPS zero-jank custom rendering, and 60% APK size reduction via AWS CloudFront CDN asset streaming.
- 📦 **Open Source**: Direct links to published JazzCash payment gateway plugin on `pub.dev`.
- 📄 **Direct Resume Access**: Includes latest PDF resume (`Shafqat_Nadeem_Resume.pdf`) available for instant download and browser preview.
- 💬 **Interactive Contact & WhatsApp**: Embedded contact form, direct email, and instant WhatsApp chat integration.
- 🌐 **27 Languages**: Language selection in the navigation, saved preference, and RTL layout for Arabic and Urdu.
- 📊 **Analytics**: Google Tag Manager page views and custom interaction events, including resume downloads, project links, and contact actions.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Bundler & Tooling**: Vite 6
- **Styling**: Modern Modular CSS with CSS Custom Properties & Glassmorphism
- **Deployment**: Netlify Continuous Deployment (`netlify.toml`)
- **Assets**: Inline Vector SVGs, zero external font blockers

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/MrShafqatNadeem/portfolio-template.git
cd portfolio-template

# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The site loads the `GTM-TNM5R45V` container. In Google Tag Manager, configure a Google tag with the GA4 Measurement ID `G-0CX3H01X0M` on all pages; it handles page views. To send app interactions, add a GA4 Event tag using the built-in `{{Event}}` variable as the event name and a Custom Event trigger matching `interaction`, `resume_download`, `project_click`, `social_click`, `whatsapp_click`, `contact_submit`, `language_change`, and `theme_toggle`. Map any desired event parameters from the data layer, then publish the container for events to appear in GA4.

---

## 🌐 Live Deployment

Hosted and automatically deployed on Netlify:  
👉 **[https://shafqat.netlify.app/](https://shafqat.netlify.app/)**
