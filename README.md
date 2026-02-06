# Souvik Basak • Portfolio Website

A modern, performant portfolio website showcasing my technical skills, projects, and experience as a **Software Developer** specializing in frontend and backend engineering. Built with React, TypeScript, and modern web technologies, this site features smooth animations, interactive components, and optimized performance.

🔗 **Live Site**: [https://souvik-basak.vercel.app/](https://souvik-basak.vercel.app/)

## Technologies Used

### Core Technologies
- **React 18**: Modern React with hooks and concurrent features
- **Vite**: Next-generation frontend tooling for blazing fast development
- **SASS**: CSS pre-processor for maintainable styling
- **React Router DOM**: Client-side routing and navigation

### Animation & Visual Effects
- **Framer Motion**: Production-ready motion library for React
- **GSAP**: Professional-grade animation platform
- **React Spring**: Spring-physics based animations
- **Animate.css**: Cross-browser CSS animations
- **Loaders.css**: Pre-loader animations
- **React Parallax Tilt**: 3D tilt effects
- **Vanta.js**: Animated 3D backgrounds
- **Three.js**: 3D graphics library

### UI Components & Icons
- **Font Awesome**: Comprehensive icon library (brands & solid icons)
- **React Icons**: Popular icon library collection
- **React Leaflet**: Interactive maps with Leaflet

### Backend & Services
- **Supabase**: Backend-as-a-Service for database and authentication
- **EmailJS**: Contact form email service
- **Vercel Analytics**: Real-time web analytics

### Performance & SEO
- **Web Vitals**: Core Web Vitals monitoring
- **React Hot Toast**: Notifications system
- **React Intersection Observer**: Lazy loading and visibility tracking

### Development Tools
- **ESLint**: Code quality and consistency
- **Vitest**: Fast unit testing framework
- **Testing Library**: React component testing

## Features

- **⚡ Blazing Fast Performance**: Built with Vite for optimal load times and Core Web Vitals
- **🎨 Animated Landing Page**: Smooth, eye-catching animations with Framer Motion and GSAP
- **💼 Skills Showcase**: Interactive skills section with drag-and-drop animations
- **📁 Projects Gallery**: Detailed showcase of professional projects with filtering
- **📧 Contact Form**: Direct messaging via EmailJS integration
- **📍 Interactive Map**: Location display using React Leaflet
- **👁️ Visitor Counter**: Real-time visitor tracking powered by Supabase
- **🎭 3D Effects**: Parallax tilt effects for enhanced user engagement
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **🔍 SEO Optimized**: Meta tags, Open Graph, and structured data for better discoverability
- **♿ Accessible**: Built with accessibility best practices
- **🌙 Background Music**: Optional ambient background music
- **⚡ Code Splitting**: Lazy-loaded routes for optimal performance

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version >= 18.x recommended)
- npm (comes with Node.js) or yarn

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/souvik-basak/portfolio.git
cd portfolio
```

2. **Install the dependencies**:

```bash
npm install
# or
yarn install
```

3. **Start the development server**:

```bash
npm run dev
# or
yarn dev
```

The site will be running on `http://localhost:5173/` (Vite's default port).

### Build for Production

To create a production-ready build of the portfolio, run:

```bash
npm run build
# or
yarn build
```

This will generate a `dist` folder with optimized static files ready for deployment.

### Configuration

#### EmailJS Setup

For the contact form to work, you need to configure **EmailJS**:

1. Go to [EmailJS](https://www.emailjs.com/) and create an account.
2. Create a new email service and template
3. Copy the **Service ID**, **Template ID**, and **Public Key**
4. The integration is already set up in `index.html`:

```javascript
// EmailJS is initialized in index.html
emailjs.init({
  publicKey: "YOUR_PUBLIC_KEY",
});
```

#### Supabase Setup (Optional)

For the visitor counter feature:

1. Create a [Supabase](https://supabase.com/) project
2. Set up your database table for visitor tracking
3. Add your Supabase credentials to `.env`:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Available Scripts

- **`npm run dev`**: Starts the Vite development server with hot module replacement
- **`npm run build`**: Creates an optimized production build in the `dist/` folder
- **`npm run preview`**: Preview the production build locally
- **`npm run lint`**: Run ESLint to check code quality
- **`npm test`**: Run tests with Vitest

## Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── souvik.svg         # Favicon and logo
│   ├── bgsound.mp3        # Background music
│   └── og-cover.png       # Open Graph image
├── src/
│   ├── assets/            # Images, fonts, and static files
│   ├── components/        # Reusable React components
│   │   ├── About/         # About page component
│   │   ├── Contact/       # Contact form component
│   │   ├── Portfolio/     # Portfolio showcase
│   │   └── ...
│   ├── context/           # React context providers
│   ├── data/              # Static data and configuration
│   ├── utils/             # Helper functions
│   ├── Sidebar/           # Navigation sidebar
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Application entry point
│   ├── routes.js          # Route configuration
│   ├── seo.js             # SEO utilities
│   ├── globals.scss       # Global styles
│   └── index.css          # Base styles
├── api/                   # Serverless API functions (Vercel)
├── .env                   # Environment variables (not committed)
├── .gitignore             # Git ignore rules
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML entry point
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
├── vercel.json            # Vercel deployment config
├── OPTIMIZATION.md        # Performance optimization guide
└── README.md              # This file
```

## Key Dependencies

Here are the main libraries and dependencies used:

### Core & Framework
- [**React 18**](https://reactjs.org/) - Modern React with concurrent features
- [**Vite**](https://vitejs.dev/) - Next-generation frontend tooling
- [**React Router DOM**](https://reactrouter.com/) - Declarative routing

### Styling & Animation
- [**SASS**](https://sass-lang.com/) - CSS preprocessor
- [**Framer Motion**](https://www.framer.com/motion/) - Production-ready animations
- [**GSAP**](https://greensock.com/gsap/) - Professional animation library
- [**React Spring**](https://www.react-spring.dev/) - Spring physics animations
- [**Animate.css**](https://animate.style/) - CSS animations

### UI & Components
- [**Font Awesome**](https://fontawesome.com/) - Icon library
- [**React Icons**](https://react-icons.github.io/react-icons/) - SVG icons
- [**React Leaflet**](https://react-leaflet.js.org/) - Maps integration
- [**React Loaders**](https://github.com/jonjaques/react-loaders) - Loading animations
- [**React Parallax Tilt**](https://www.npmjs.com/package/react-parallax-tilt) - 3D tilt effects
- [**React Hot Toast**](https://react-hot-toast.com/) - Toast notifications

### Backend & Services
- [**Supabase**](https://supabase.com/) - Backend as a Service
- [**EmailJS**](https://www.emailjs.com/) - Email service
- [**Vercel Analytics**](https://vercel.com/analytics) - Web analytics

### Performance & Quality
- [**Web Vitals**](https://web.dev/vitals/) - Performance monitoring
- [**ESLint**](https://eslint.org/) - Code linting
- [**Vitest**](https://vitest.dev/) - Unit testing framework
- [**React Testing Library**](https://testing-library.com/react) - Component testing

## Performance Optimization

This portfolio is heavily optimized for performance and follows best practices:

- ⚡ **Code Splitting**: Routes are lazy-loaded to reduce initial bundle size
- 🎯 **Smart Prefetching**: Routes prefetch on hover for instant navigation
- 📦 **Optimized Bundling**: Manual chunk splitting with Vite
- 🖼️ **Image Optimization**: Using AVIF/WebP formats with lazy loading
- 🔄 **React Performance**: Memoization with `useMemo` and `useCallback`
- 📊 **Bundle Analysis**: Terser minification and tree-shaking
- 🚀 **Resource Hints**: Preconnect, DNS-prefetch, and preload strategies

For detailed performance optimizations, see [OPTIMIZATION.md](OPTIMIZATION.md).

### Performance Targets
- Lighthouse Score: **90+**
- First Contentful Paint: **< 1.5s**
- Time to Interactive: **< 2.5s**

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com/):

1. **Connect your repository** to Vercel
2. **Configure environment variables** in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - Other sensitive keys
3. **Deploy**: Vercel will automatically build and deploy on every push to main

### Vercel Configuration

The project includes `vercel.json` for:
- API routes configuration
- Headers and redirects
- Build settings

### Alternative Deployment Platforms

You can also deploy to:
- **Netlify**: Drop the `dist/` folder or connect your repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3 + CloudFront**: For enterprise hosting
- **Firebase Hosting**: Google's hosting platform

## Contributing

This is a personal portfolio website, so contributions are not currently accepted. However, feel free to:

- 🍴 **Fork** the repository and build your own version
- ⭐ **Star** the project if you find it useful
- 📝 **Report bugs** via GitHub Issues
- 💡 **Share feedback** or suggestions

## Author

**Souvik Basak**
- Portfolio: [souvik-basak.vercel.app](https://souvik-basak.vercel.app/)
- GitHub: [@souvik-basak](https://github.com/souvik-basak)
- LinkedIn: [linkedin.com/in/souvik-basak](https://www.linkedin.com/in/souvik-basak)
- Twitter: [@souvik_basak](https://twitter.com/souvik_basak)

## Acknowledgments

- Vanta.js for background effects
- Three.js for 3D graphics
- All the amazing open-source libraries used in this project

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using React and Vite**
