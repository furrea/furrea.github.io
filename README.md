# Personal Website

A modern, responsive personal website built with HTML, CSS, and JavaScript, designed for GitHub Pages deployment.

## Features

- 🎨 Modern, clean design with gradient backgrounds
- 📱 Fully responsive layout for all devices
- ⚡ Smooth scrolling and animations
- 🧭 Interactive navigation with active link highlighting
- 📧 Contact section with social media links
- 🚀 Optimized for GitHub Pages deployment

## Sections

- **Hero**: Introduction with call-to-action buttons
- **About**: Personal information and skills showcase
- **Projects**: Featured projects with links to live demos and code
- **Contact**: Contact information and social media links

## Customization

### Personal Information
1. Update the name in `index.html` (replace "Fernanda Urrea" with your name)
2. Modify the hero subtitle to reflect your profession
3. Update the about section with your personal information
4. Replace placeholder contact information with your actual details

### Projects
1. Replace the placeholder projects in the projects section
2. Update project titles, descriptions, and links
3. Add or remove project cards as needed

### Contact Information
1. Update email address in the contact section
2. Replace social media links with your profiles
3. Add or remove contact methods as needed

### Styling
- Modify colors in `styles.css` to match your brand
- Update fonts by changing the Google Fonts import
- Adjust spacing and layout as needed

## Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

1. Push your code to a GitHub repository
2. Go to your repository settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The workflow will automatically deploy your site when you push to the main branch

### Method 2: Manual Deployment

1. Push your code to a GitHub repository
2. Go to your repository settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

Your site will be available at: `https://yourusername.github.io/repository-name`

## Custom Domain Setup

To use your custom domain with GitHub Pages:

1. Add a `CNAME` file to your repository root with your domain name
2. Configure your domain's DNS settings:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub's IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
3. Enable "Enforce HTTPS" in your repository's Pages settings

## File Structure

```
personal-page/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions workflow
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and customize it for your own use. If you have suggestions for improvements, please open an issue or submit a pull request.

---

**Happy coding!** 🚀
