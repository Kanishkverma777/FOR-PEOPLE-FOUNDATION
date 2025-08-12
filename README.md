# For People Foundation 🎓

**Empowering Minds, Building Futures**

A modern, responsive website for For People Foundation - a non-profit organization dedicated to transforming communities through quality education and sustainable learning opportunities for all children worldwide.

![For People Foundation](https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 🌟 About

For People Foundation, established in 2015, is committed to breaking the cycle of poverty through education. We believe every child deserves the opportunity to learn, grow, and succeed, regardless of their circumstances.

### Our Mission
To provide quality education and learning opportunities to underserved communities worldwide.

### Our Vision
A world where every child has access to education and the tools they need to build a better future.

## 🚀 Live Demo

Visit our website: [For People Foundation Website](https://your-domain.com)

## 📸 Screenshots

*Add screenshots of your website here*

## ✨ Features

### 🎯 Core Features
- **Responsive Design** - Works seamlessly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Multi-page Navigation** - Home, About, Programs, Donate, Contact pages
- **Interactive Components** - Engaging user interface elements
- **Donation System** - Multiple donation tiers and payment options
- **Program Showcase** - Detailed information about our educational programs
- **Impact Statistics** - Real-time display of our achievements
- **Contact Forms** - Easy ways for supporters to get in touch

### 📊 Our Programs
1. **Early Childhood Education** - 2,500+ children in 15 communities
2. **Digital Literacy Initiative** - 1,800+ students in 22 schools
3. **Teacher Training Program** - 850+ teachers in 35 schools
4. **Scholarship Fund** - 650+ scholars (National program)
5. **Community Libraries** - 5,000+ users in 28 libraries
6. **Adult Literacy Program** - 1,200+ adults in 18 centers

### 📈 Our Impact
- **15,000+** Students Reached
- **45** Communities Served
- **850+** Teachers Trained
- **8** Years of Impact

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern UI library
- **React Router DOM 7.8.0** - Client-side routing
- **Vite 7.1.2** - Fast build tool and dev server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React 0.344.0** - Beautiful icons

### Development Tools
- **ESLint 9.9.1** - Code linting and formatting
- **PostCSS 8.4.35** - CSS post-processing
- **Autoprefixer 10.4.18** - Automatic vendor prefixing

## 📁 Project Structure

```
FOR PEOPLE FOUNDATION/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── layout/        # Layout components
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   └── ui/            # UI components
│   │       ├── AboutSection.jsx
│   │       ├── Hero.jsx
│   │       ├── ImpactStats.jsx
│   │       └── ProgramsGrid.jsx
│   ├── data/
│   │   └── content.js     # Site content and data
│   ├── pages/             # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Donate.jsx
│   │   ├── Home.jsx
│   │   └── Programs.jsx
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── eslint.config.js       # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kanishkverma777/FOR-PEOPLE-FOUNDATION.git
   cd FOR-PEOPLE-FOUNDATION
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🔧 Configuration

### Customizing Content
All website content is centralized in `src/data/content.js`. You can easily update:
- Organization information
- Program details
- Impact statistics
- Contact information
- Donation tiers

### Styling
The project uses Tailwind CSS for styling. Customize the design by:
- Modifying `tailwind.config.js`
- Updating component styles
- Adding custom CSS in `src/index.css`

### Environment Variables
Create a `.env` file for environment-specific configurations:
```env
VITE_API_URL=your_api_url
VITE_DONATION_API=your_donation_api
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1024px and above)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🔒 Security

- All dependencies are regularly updated
- Security vulnerabilities are automatically fixed
- Input validation on all forms
- Secure coding practices followed

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Content Management

### Adding New Programs
1. Open `src/data/content.js`
2. Add new program object to the `programs` array
3. Include: id, title, description, image, beneficiaries, locations

### Updating Impact Statistics
1. Modify the `impact` array in `src/data/content.js`
2. Update values and labels as needed

### Changing Contact Information
1. Update the `contact` object in `src/data/content.js`
2. Modify address, phone, email, and hours

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**For People Foundation**
- **Website**: [forpeoplefoundation.org](https://forpeoplefoundation.org)
- **Email**: info@forpeoplefoundation.org
- **Phone**: +1 (555) 123-4567
- **Address**: 123 Education Street, Learning City, LC 12345

### Social Media
- [Facebook](#)
- [Twitter](#)
- [Instagram](#)
- [LinkedIn](#)

## 🙏 Acknowledgments

- Thanks to all our volunteers and supporters
- Special recognition to our partner organizations
- Gratitude to the communities we serve
- Appreciation for all contributors to this project

## 📊 Project Status

- ✅ **Build Status**: Passing
- ✅ **Security**: No vulnerabilities
- ✅ **Code Quality**: ESLint passing
- ✅ **Dependencies**: Up to date

---

**Made with ❤️ for education and community empowerment**

*Last updated: August 12, 2025*
