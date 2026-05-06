import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            error: "Only POST requests are allowed",
        });
    }

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: "Name, email, and message are required",
            });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Email to you
        await transporter.sendMail({
            from: `"HIVSmartCare Website" <${process.env.GMAIL_USER}>`,
            to: process.env.RECEIVE_EMAIL,
            replyTo: email,
            subject: `New Contact Message from ${name}`,
            html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        // Confirmation email to sender
        await transporter.sendMail({
            from: `"HIVSmartCare" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: "We received your message",
            html: `
        <p>Dear ${name},</p>
        <p>Thank you for contacting HIVSmartCare.</p>
        <p>We received your message and will get back to you soon.</p>
        <br/>
        <p>Best regards,<br/>HIVSmartCare Team</p>
      `,
        });

        return res.status(200).json({
            success: true,
            message: "Email sent successfully",
        });
    } catch (error) {
        console.error("Contact API error:", error);

        return res.status(500).json({
            success: false,
            error: "Failed to send email. Please try again later.",
        });
    }
}