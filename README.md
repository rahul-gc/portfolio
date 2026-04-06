# Rahul GC Portfolio

A modern, responsive portfolio website with a fully functional contact form backend system.

## Features

- **Modern Design**: Clean, minimalist design with custom cursor effects
- **Responsive**: Works perfectly on all devices
- **Interactive Elements**: Smooth animations and transitions
- **Contact Form**: Fully functional backend with email notifications
- **Project Showcase**: Dynamic project cards with live links
- **Skills Section**: Animated skill bars

## Backend Features

- **Node.js/Express Server**: Robust backend for contact form processing
- **Email Notifications**: Automatic email sending to your inbox
- **Auto-Reply**: Instant confirmation email to visitors
- **Form Validation**: Client and server-side validation
- **Error Handling**: Comprehensive error handling with user feedback

## Setup Instructions

### Prerequisites
- Node.js installed on your system
- Gmail account for email functionality

### 1. Install Dependencies
```bash
npm install
```

### 2. Email Configuration
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Configure Gmail settings:
   - Go to your Gmail account settings
   - Enable 2-Step Verification
   - Generate an App Password (Google Account Settings > Security > App Passwords)
   - Update `.env` file with your credentials:
     ```
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     ```

### 3. Run the Backend Server
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

### 4. Access Your Portfolio
Open your browser and navigate to:
- Portfolio: http://localhost:3000
- Backend API: http://localhost:3000/send-message

## Deployment

### Local Deployment
1. Install dependencies: `npm install`
2. Configure environment variables
3. Run: `npm start`

### Production Deployment (Vercel/Heroku)
1. Push code to GitHub
2. Connect your repository to Vercel/Heroku
3. Set environment variables in deployment platform
4. Deploy

## File Structure

```
Myprotfolio/
├── index.html          # Main portfolio page
├── style.css           # Styling and animations
├── script.js           # Frontend JavaScript
├── server.js           # Backend server
├── package.json        # Node.js dependencies
├── .env.example        # Environment variables template
└── README.md           # This file
```

## API Endpoints

### POST /send-message
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! I'll get back to you soon."
}
```

## Customization

### Updating Contact Email
Change the receiving email in `server.js`:
```javascript
to: 'your-email@example.com', // Line ~47
```

### Modifying Design
- Edit `style.css` for visual changes
- Update `index.html` for content changes
- Modify `script.js` for interactive features

### Adding New Projects
Update the projects section in `index.html`:
```html
<div class="proj-row reveal dX">
  <div class="proj-n">XX</div>
  <div class="proj-info">
    <p class="proj-tag">TECH · STACK</p>
    <h3 class="proj-name">PROJECT NAME</h3>
    <p class="proj-desc">Project description</p>
    <a href="https://your-project-url.com" target="_blank" class="proj-link">View Live Project →</a>
  </div>
  <div class="proj-arrow">↗</div>
</div>
```

## Technologies Used

### Frontend
- HTML5
- CSS3 with custom animations
- Vanilla JavaScript
- Font Awesome icons

### Backend
- Node.js
- Express.js
- Nodemailer for email functionality
- CORS for cross-origin requests

## Support

For any issues or questions:
- Email: gcrahul561@gmail.com
- GitHub: https://github.com/rahul-gc
- LinkedIn: https://www.linkedin.com/in/rahul-gc-1a10452b7/

## License

MIT License - feel free to use this for your own portfolio!
