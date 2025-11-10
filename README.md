# Shafqat Nadeem - Portfolio ⚡️ 

[![GitHub](https://img.shields.io/github/license/MrShafqatNadeem/portfolio-template?color=blue)](https://github.com/MrShafqatNadeem/portfolio-template/blob/master/LICENSE) 
[![GitHub stars](https://img.shields.io/github/stars/MrShafqatNadeem/portfolio-template)](https://github.com/MrShafqatNadeem/portfolio-template/stargazers)
[![React](https://img.shields.io/badge/React-18.0+-61DAFB?logo=react)](https://reactjs.org/)
[![Node](https://img.shields.io/badge/Node-21.7.1-339933?logo=node.js)](https://nodejs.org/)

## Professional Portfolio Website for Flutter Developer

A modern, responsive, and feature-rich portfolio website built with React, showcasing professional experience, projects, and skills. Perfect for developers looking to create a stunning online presence.

<p align="center">
  <kbd>
    <img src="https://avatars.githubusercontent.com/u/36890044?v=4" width="200" alt="Shafqat Nadeem"/>
  </kbd>
</p>

## ✨ Features

✅ **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices  
✅ **Dark Mode** - Toggle between light and dark themes  
✅ **Animated Header** - Typewriter effect with professional title  
✅ **Professional Summary** - Well-structured about section with experience timeline  
✅ **Skills Showcase** - Visual skill bars with 20+ technologies  
✅ **Project Gallery** - Featured projects with App Store/Play Store links  
✅ **"See More" Functionality** - Shows 3 projects initially, expandable to view all 18  
✅ **Floating Avatar** - Circular profile picture in bottom-right corner  
✅ **Resume Download** - One-click resume download functionality  
✅ **Contact Form** - Integrated mailto contact form  
✅ **Social Links** - GitHub, LinkedIn, Instagram, Facebook integration  
✅ **Particle Effects** - Animated background with snow/particle effects  
✅ **AOS Animations** - Smooth scroll animations throughout  
✅ **SEO Optimized** - Proper meta tags and sitemap included  

## 🎯 Live Demo

**[View Live Portfolio →](https://mrshafqatnadeem.github.io/portfolio-template/)**

## 📋 Table of Contents
- [Sections](#-sections)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Customization](#-customization)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## 📑 Sections

1. **Header/Landing** - Full-screen intro with name and animated professional title
2. **Professional Summary** - About section with structured paragraphs and experience
3. **Skills** - Visual representation of technical skills and expertise
4. **Featured Projects** - Showcase of 18 mobile applications with store links
5. **Get in Touch** - Contact form with social media links and resume download

## 🛠 Tech Stack

- **Frontend Framework:** React 18
- **Styling:** Custom CSS with Bootstrap 5
- **Animations:** AOS (Animate On Scroll), Custom CSS animations
- **Particle Effects:** react-particles-js, tsparticles
- **Icons:** Font Awesome 5
- **Build Tool:** Create React App (react-scripts)
- **Version Control:** Git & GitHub

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v21.7.1 or higher) - [Download](https://nodejs.org/)
- **npm** (v10.8.0 or higher) - Comes with Node.js
- **Git** (v2.17.1 or higher) - [Download](https://git-scm.com/)

### Check Your Versions

```bash
node --version  # Should show v21.7.1 or higher
npm --version   # Should show 10.8.0 or higher
git --version   # Should show 2.17.1 or higher
```

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/MrShafqatNadeem/portfolio-template.git
cd portfolio-template
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Start Development Server

```bash
# For Node.js v21 or higher (OpenSSL compatibility)
export NODE_OPTIONS=--openssl-legacy-provider
npm start
```

The application will open automatically in your browser at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🎨 Customization

### Quick Start - Change Content

All content can be customized by editing `/src/profile.js`:

```javascript
// 1. Update Header Section
const header = {
  name: "Your Name",
  title: "Your Professional Title | Technologies | Experience"
};

// 2. Update About/Summary
const about = {
  paragraph: "Your professional summary here..."
};

// 3. Add/Edit Skills
const skillsBar = [
  { name: "Flutter", svg: "...", faClass: "fab fa-flutter" },
  // Add more skills
];

// 4. Add/Edit Projects
const projects = [
  {
    id: 1,
    name: "Project Name",
    url: "https://github.com/...",
    skills: ["Flutter", "Firebase", "AWS"],
    androidUrl: "https://play.google.com/...",
    iosUrl: "https://apps.apple.com/..."
  },
  // Add more projects
];

// 5. Update Contact Info
const contact = {
  pitch: "Your contact pitch message...",
  copyright: "Your Name"
};

// 6. Update Social Links
const social = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resume: "/Your_Resume.pdf"
};
```

### Styling Customization

#### Change Colors
Edit `/src/styles/style.css`:

```css
:root {
  --primary-color: #02569B;  /* Flutter Blue */
  --hover-color: #0277BD;    /* Darker Blue */
}
```

#### Update Images/Backgrounds
Edit `/src/styles/images.css`:

```css
.Photo {
  background-image: url('your-image-url');
}
```

#### Modify Layout
Edit `/src/styles/no-touch.min.css` for responsive layouts and animations.

### Add Your Resume

1. Add your resume PDF to `/public/` folder
2. Name it: `Your_Name_Resume.pdf`
3. Update in `src/profile.js`:
   ```javascript
   const social = {
     resume: "/Your_Name_Resume.pdf"
   };
   ```

## 📁 Project Structure

```
portfolio-template/
├── public/
│   ├── favicon.ico              # Browser tab icon
│   ├── index.html               # HTML template
│   ├── manifest.json            # PWA manifest
│   ├── Bootstrap5.css           # Bootstrap styles
│   ├── robots.txt               # SEO robots file
│   ├── sitemap.xml              # SEO sitemap
│   └── Shafqat_Nadeem_Resume.pdf # Resume file
│
├── src/
│   ├── components/
│   │   ├── layouts/
│   │   │   ├── HeaderButton.js  # Dark mode toggle
│   │   │   ├── Particles.js     # Background particles
│   │   │   ├── Project.js       # Project card component
│   │   │   └── Skills.js        # Skill bar component
│   │   └── section/
│   │       ├── Header.js        # Landing page header
│   │       ├── About.js         # Professional summary
│   │       ├── Works.js         # Projects showcase
│   │       └── Contact.js       # Contact form
│   │
│   ├── styles/
│   │   ├── style.css            # Main styles
│   │   ├── images.css           # Image backgrounds
│   │   └── no-touch.min.css     # Layout & animations
│   │
│   ├── profile.js               # 🔥 Main config file
│   ├── App.js                   # Root component
│   └── index.js                 # Entry point
│
├── package.json                 # Dependencies
├── README.md                    # This file
└── LICENSE                      # MIT License
```

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   "homepage": "https://yourusername.github.io/portfolio-template",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/MrShafqatNadeem/portfolio-template)

1. Fork this repository
2. Click the button above or go to [Netlify](https://netlify.com)
3. Connect your GitHub repository
4. Deploy with one click!

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this portfolio template:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some improvement'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Shafqat Nadeem**  
Senior Flutter Engineer | 6+ Years Experience | 30+ Apps Deployed

- GitHub: [@MrShafqatNadeem](https://github.com/MrShafqatNadeem)
- LinkedIn: [mistershafqatnadeem](https://www.linkedin.com/in/mistershafqatnadeem/)
- Email: shafqatnadeem2@gmail.com

## 🌟 Acknowledgments

- Original template inspiration from the React developer community
- Icons by [Font Awesome](https://fontawesome.com/)
- Particles by [tsparticles](https://particles.js.org/)
- Animations by [AOS](https://michalsnik.github.io/aos/)

## 💡 Features Roadmap

- [ ] Connect with GitHub API for automatic project updates
- [ ] Add blog section with Markdown support
- [ ] Integrate Google Analytics
- [ ] Add testimonials section
- [ ] Multi-language support
- [ ] Add project filtering by technology
- [ ] Progressive Web App (PWA) enhancements

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/MrShafqatNadeem">Shafqat Nadeem</a>
</p>

<p align="center">
  <sub>If this helped you, consider giving it a ⭐️</sub>
</p>
