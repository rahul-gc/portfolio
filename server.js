const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Contact form endpoint
app.post('/send-message', async (req, res) => {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({ 
            success: false, 
            message: 'Please fill in all fields' 
        });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ 
            success: false, 
            message: 'Please enter a valid email address' 
        });
    }

    try {
        // Check if email is configured
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.log('Email not configured. Message received but not sent:');
            console.log({ name, email, message });
            return res.status(200).json({ 
                success: true, 
                message: 'Message received! (Email not configured - check server logs)' 
            });
        }

        // Create transporter (using Gmail as example)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email options
        const mailOptions = {
            from: email,
            to: 'gcrahul561@gmail.com', // Your receiving email
            subject: `New Portfolio Message from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #E3FF00; background: #1e1c1c; padding: 20px; margin: 0;">
                        New Contact Form Submission
                    </h2>
                    <div style="background: #F0F0EC; padding: 20px; color: #1e1c1c;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong></p>
                        <div style="background: white; padding: 15px; border-left: 4px solid #E3FF00; margin: 10px 0;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                        <p style="margin-top: 20px; font-size: 12px; color: #666;">
                            Sent from your portfolio contact form
                        </p>
                    </div>
                </div>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Auto-reply to sender
        const autoReplyOptions = {
            from: 'gcrahul561@gmail.com',
            to: email,
            subject: 'Thank you for contacting Rahul GC',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #E3FF00; background: #1e1c1c; padding: 20px; margin: 0;">
                        Thank You!
                    </h2>
                    <div style="background: #F0F0EC; padding: 20px; color: #1e1c1c;">
                        <p>Hi ${name},</p>
                        <p>Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.</p>
                        <p>Best regards,<br>Rahul GC</p>
                        <div style="margin-top: 20px; padding: 15px; background: #1e1c1c; color: #F0F0EC;">
                            <p style="margin: 5px 0;">📧 gcrahul561@gmail.com</p>
                            <p style="margin: 5px 0;">💼 <a href="https://www.upwork.com/freelancers/~0109f1891b3815e801" style="color: #E3FF00;">Upwork</a></p>
                            <p style="margin: 5px 0;">🔗 <a href="https://github.com/rahul-gc" style="color: #E3FF00;">GitHub</a></p>
                            <p style="margin: 5px 0;">💼 <a href="https://www.linkedin.com/in/rahul-gc-1a10452b7/" style="color: #E3FF00;">LinkedIn</a></p>
                        </div>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(autoReplyOptions);

        res.status(200).json({ 
            success: true, 
            message: 'Message sent successfully! I\'ll get back to you soon.' 
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send message. Please email me directly at gcrahul561@gmail.com' 
        });
    }
});

// Serve the portfolio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Portfolio available at: http://localhost:${PORT}`);
});
