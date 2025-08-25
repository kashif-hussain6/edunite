# Edunite - AI-Powered School Management Platform

A modern, TypeScript-based Next.js application for comprehensive school management with AI-powered features.

## 🚀 Features

- **AI Question Generation**: Automatically generate diverse question sets for exams
- **Smart Timetable Creation**: AI-powered scheduling with conflict detection
- **Automated Reports**: Generate comprehensive academic reports
- **Real-time Analytics**: Live insights and performance tracking
- **Student Management**: Complete lifecycle management from admission to graduation
- **Secure & Compliant**: Enterprise-grade security with FERPA compliance

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Custom scroll animations with Intersection Observer
- **Build Tool**: Turbopack

## 📁 Project Structure

```
edunite/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── sections/          # Page sections
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   └── Features.tsx
│   └── ui/               # UI components
│       └── Button.tsx
├── data/                 # Centralized data files
│   ├── hero.ts          # Hero section data
│   ├── features.ts      # Features data
│   └── navigation.ts    # Navigation configuration
├── hooks/               # Custom React hooks
│   └── useScrollAnimation.ts
├── types/               # TypeScript type definitions
│   └── index.ts
├── constants/           # Application constants
│   └── index.ts
├── lib/                 # Utility functions
│   └── utils.ts
└── public/             # Static assets
```

## 🎯 Key Improvements Made

### 1. **Centralized Data Management**
- All content moved to dedicated data files in `/data/`
- Type-safe data structures with proper TypeScript interfaces
- Easy content updates without touching components

### 2. **Improved Type Safety**
- Comprehensive TypeScript interfaces for all data structures
- Strict type checking enabled
- Better IntelliSense and error catching

### 3. **Better Folder Structure**
- Hooks moved to root-level `/hooks/` directory
- Constants centralized in `/constants/`
- Clear separation of concerns

### 4. **Performance Optimizations**
- Turbopack for faster development builds
- Optimized image loading with Next.js Image component
- Efficient scroll animations with Intersection Observer

### 5. **Best Practices**
- App Router architecture
- Server and client components properly separated
- Consistent naming conventions
- Proper TypeScript configuration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd edunite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Data Management

### Adding New Content

1. **Create data file** in `/data/` directory
2. **Define TypeScript interface** in `/types/index.ts`
3. **Import and use** in components

Example:
```typescript
// data/newSection.ts
export const newSectionData = {
  title: "New Section",
  items: [...]
};

// types/index.ts
export interface NewSectionData {
  title: string;
  items: string[];
}

// components/sections/NewSection.tsx
import { newSectionData } from "@/data/newSection";
```

## 🎨 Styling

The project uses Tailwind CSS v4 with custom utilities:

- **Responsive design** with mobile-first approach
- **Custom animations** with CSS transitions
- **Consistent spacing** using Tailwind's spacing scale
- **Dark mode ready** (can be easily implemented)

## 🔧 Configuration

### Next.js Config
- Optimized for performance and SEO
- Image optimization enabled
- Security headers configured
- Turbopack for faster builds

### TypeScript Config
- Strict mode enabled
- Path aliases configured
- Modern ES2022 target
- Comprehensive type checking

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🔒 Security

- Security headers configured
- XSS protection enabled
- Content type sniffing disabled
- Frame options set to deny

## 🚀 Deployment

The application is ready for deployment on:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@edunite.com or create an issue in the repository.
