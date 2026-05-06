import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, message: "Only POST allowed" });
    }

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, email, and message are required",
            });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `"University Project" <${process.env.GMAIL_USER}>`,
            to: process.env.RECEIVE_EMAIL || process.env.GMAIL_USER,
            replyTo: email,
            subject: `New message from ${name}`,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
        });

        return res.status(200).json({
            success: true,
            message: "Email sent successfully",
        });
    } catch (error) {
        console.error("Email error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to send email",
        });
    }
}