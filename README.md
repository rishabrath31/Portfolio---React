# Rishab Rath - Modern Portfolio

A modern, responsive portfolio website built with React, Vite, and TailwindCSS featuring smooth animations, dark/light themes, and optimized performance.

## ✨ Features

### 🎨 Modern Design
- **Clean & Professional**: Modern UI with glassmorphism effects
- **Responsive Design**: Mobile-first approach with optimized layouts for all devices  
- **Dark/Light Themes**: System-aware theme switching with smooth transitions
- **Smooth Animations**: Framer Motion powered animations and micro-interactions

### 🚀 Performance Optimized
- **Lazy Loading**: Images load only when in viewport
- **Optimized Builds**: Tree-shaking and code splitting with Vite
- **Fast Loading**: Optimized assets and minimal bundle size
- **SEO Ready**: Proper meta tags and semantic HTML structure

### 📱 Interactive Components
- **Hero Section**: Dynamic introduction with animated elements
- **Skills Showcase**: Interactive skill cards with progress indicators
- **Project Portfolio**: Filterable project showcase with live demos
- **Experience Timeline**: Professional experience with expandable details
- **Contact Form**: Functional contact form with validation
- **Company Collaborations**: Showcase of partnerships and contributions

### 🛠️ Technical Features
- **Modern Tech Stack**: React 19, Vite 7, TailwindCSS 3
- **Component Architecture**: Reusable, modular components
- **TypeScript Ready**: Easy migration to TypeScript
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Mobile Optimized**: Touch-friendly interactions and responsive design

## 🏗️ Architecture

### Component Structure
```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── button.jsx   # Button component with variants
│   │   ├── card.jsx     # Card component for layouts
│   │   ├── input.jsx    # Form input component
│   │   └── textarea.jsx # Textarea component
│   ├── Header.jsx       # Navigation header with theme toggle
│   ├── Hero.jsx         # Hero section with CTA buttons
│   ├── About.jsx        # About section with expandable content
│   ├── Skills.jsx       # Skills showcase with categories
│   ├── Projects.jsx     # Project portfolio with filters
│   ├── Experience.jsx   # Professional experience timeline
│   ├── Companies.jsx    # Company collaborations
│   ├── Contact.jsx      # Contact form and information
│   ├── Footer.jsx       # Footer with social links
│   └── LazyImage.jsx    # Performance optimized image component
├── hooks/
│   └── use-theme.jsx    # Theme management hook
├── lib/
│   └── utils.js         # Utility functions
└── styles/
    └── globals.css      # Global styles and utilities
```

### Key Features Implementation

#### 🎨 Theme System
- System preference detection
- Smooth transitions between themes
- Persistent theme storage
- CSS variables for consistent theming

#### 📱 Responsive Design
- Mobile-first CSS utility classes
- Breakpoint-specific layouts
- Touch-optimized interactions
- Performance-conscious mobile animations

#### ⚡ Performance Optimizations
- Intersection Observer for lazy loading
- Optimized animation triggers
- Reduced motion for accessibility
- Efficient bundle splitting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/rishabrath31/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 📝 Customization

### Personal Information
Update personal details in the following components:
- `Hero.jsx` - Name, title, description, social links
- `About.jsx` - Bio, stats, skills
- `Experience.jsx` - Work experience and achievements
- `Contact.jsx` - Contact information and form

### Content Management
- **Projects**: Update project data in `Projects.jsx`
- **Skills**: Modify skill categories and levels in `Skills.jsx`
- **Companies**: Update collaborations in `Companies.jsx`
- **Images**: Replace images in `public/images/`
- **Resume**: Replace PDF in `public/files/`

### Styling
- **Colors**: Modify CSS variables in `globals.css`
- **Components**: Update TailwindCSS classes for styling
- **Animations**: Customize Framer Motion animations in components

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite 7
- **Styling**: TailwindCSS 3, Framer Motion 12
- **UI Components**: Radix UI, Lucide React
- **Build Tool**: Vite with optimized bundling
- **Deployment**: Vercel/Netlify ready

## 📦 Dependencies

### Core Dependencies
- **react**: UI library
- **framer-motion**: Animation library
- **lucide-react**: Icon library
- **tailwind-merge**: Utility for merging Tailwind classes
- **class-variance-authority**: Component variant handling

### Development Dependencies
- **@vitejs/plugin-react**: React plugin for Vite
- **tailwindcss**: Utility-first CSS framework
- **tailwindcss-animate**: Animation utilities
- **postcss**: CSS processing
- **autoprefixer**: CSS vendor prefixing

## 🎯 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.0s

## 📱 Mobile Optimization

### Performance Features
- Reduced animations on mobile for better performance
- Touch-optimized button sizes (44px minimum)
- Optimized image loading with lazy loading
- Mobile-first responsive design approach

### UX Improvements
- Thumb-friendly navigation
- Swipe-friendly interactions  
- Optimized typography for mobile reading
- Fast tap responses without 300ms delay

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality
- ESLint configuration for React best practices
- Consistent code formatting
- Component-based architecture
- Reusable utility functions

## 📈 SEO & Accessibility

### SEO Features
- Semantic HTML structure
- Proper heading hierarchy
- Meta tags for social sharing
- Structured data markup ready

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Reduced motion preferences

## 🚀 Deployment

The portfolio is deployment-ready for:
- **Vercel**: Zero-config deployment
- **Netlify**: Drag-and-drop deployment
- **GitHub Pages**: Static site hosting
- **Custom hosting**: Build output in `dist/`

### Environment Variables
No environment variables required for basic functionality. Add as needed for:
- Contact form backend integration
- Analytics tracking
- CMS integration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Rishab Rath**
- Email: rishab.rath@example.com
- LinkedIn: [linkedin.com/in/rishabrath31](https://linkedin.com/in/rishabrath31)
- GitHub: [github.com/rishabrath31](https://github.com/rishabrath31)
- Portfolio: [rishabrath.dev](https://rishabrath.dev)

---

Built with ❤️ using React and modern web technologies.