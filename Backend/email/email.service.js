const axios = require("axios");

async function sendContactEmail({
    name,
    email,
    subject,
    message
}) {
    const response = await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        {
            sender: {
                name: "WhyLong",
                email: process.env.SUPPORT_EMAIL
            },

            to: [
                {
                    email: process.env.SUPPORT_EMAIL
                }
            ],

            replyTo: {
                email
            },

            subject: `New Contact Request — ${subject}`,

            htmlContent: `
                <div style="
                    margin: 0;
                    padding: 40px 20px;
                    background-color: #f5f5f5;
                    font-family: Arial, Helvetica, sans-serif;
                    color: #18181b;
                ">
                    <div style="
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        border: 1px solid #e4e4e7;
                        border-radius: 12px;
                        overflow: hidden;
                    ">

                        <!-- Header -->
                        <div style="
                            padding: 24px 30px;
                            background-color: #18181b;
                        ">
                            <div style="
                                font-size: 22px;
                                font-weight: 700;
                                color: #ffffff;
                            ">
                                WhyLong
                            </div>

                            <div style="
                                margin-top: 5px;
                                font-size: 13px;
                                color: #a1a1aa;
                            ">
                                Contact Request
                            </div>
                        </div>

                        <!-- Body -->
                        <div style="padding: 30px;">

                            <h2 style="
                                margin: 0 0 8px;
                                font-size: 22px;
                                color: #18181b;
                            ">
                                New message received
                            </h2>

                            <p style="
                                margin: 0 0 28px;
                                font-size: 14px;
                                line-height: 1.6;
                                color: #71717a;
                            ">
                                Someone has submitted a new message through
                                the WhyLong contact form.
                            </p>

                            <!-- Contact Details -->
                            <div style="
                                padding: 20px;
                                background-color: #fafafa;
                                border: 1px solid #e4e4e7;
                                border-radius: 8px;
                            ">

                                <p style="margin: 0 0 12px;">
                                    <strong>Name</strong><br>
                                    <span style="color: #52525b;">
                                        ${name}
                                    </span>
                                </p>

                                <p style="margin: 0 0 12px;">
                                    <strong>Email</strong><br>
                                    <span style="color: #52525b;">
                                        ${email}
                                    </span>
                                </p>

                                <p style="margin: 0;">
                                    <strong>Subject</strong><br>
                                    <span style="color: #52525b;">
                                        ${subject}
                                    </span>
                                </p>

                            </div>

                            <!-- Message -->
                            <div style="margin-top: 24px;">

                                <p style="
                                    margin: 0 0 10px;
                                    font-size: 14px;
                                    font-weight: 700;
                                ">
                                    Message
                                </p>

                                <div style="
                                    padding: 16px;
                                    background-color: #fafafa;
                                    border-left: 3px solid #eab308;
                                    border-radius: 4px;
                                    font-size: 14px;
                                    line-height: 1.7;
                                    color: #52525b;
                                ">
                                    ${message}
                                </div>

                            </div>

                            <p style="
                                margin: 28px 0 0;
                                font-size: 12px;
                                color: #a1a1aa;
                            ">
                                Reply directly to this email to respond to
                                ${name}.
                            </p>

                        </div>

                        <!-- Footer -->
                        <div style="
                            padding: 20px 30px;
                            background-color: #fafafa;
                            border-top: 1px solid #e4e4e7;
                            text-align: center;
                        ">
                            <p style="
                                margin: 0;
                                font-size: 12px;
                                color: #a1a1aa;
                            ">
                                © ${new Date().getFullYear()} WhyLong
                            </p>
                        </div>

                    </div>
                </div>
            `
        },
        {
            headers: {
                "api-key": process.env.BREVO_API_KEY,
                "Content-Type": "application/json"
            }
        }
    );

    return response.data;
}


async function sendPasswordResetEmail({
    email,
    resetUrl
}) {
    const response = await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        {
            sender: {
                name: "WhyLong",
                email: process.env.SUPPORT_EMAIL
            },

            to: [
                {
                    email
                }
            ],

            subject: "Reset your WhyLong password",

            htmlContent: `
                <div style="
                    margin: 0;
                    padding: 40px 20px;
                    background-color: #f5f5f5;
                    font-family: Arial, Helvetica, sans-serif;
                    color: #18181b;
                ">
                    <div style="
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        border: 1px solid #e4e4e7;
                        border-radius: 12px;
                        overflow: hidden;
                    ">

                        <!-- Header -->
                        <div style="
                            padding: 24px 30px;
                            background-color: #18181b;
                        ">
                            <div style="
                                font-size: 22px;
                                font-weight: 700;
                                color: #ffffff;
                            ">
                                WhyLong
                            </div>

                            <div style="
                                margin-top: 5px;
                                font-size: 13px;
                                color: #a1a1aa;
                            ">
                                Account Security
                            </div>
                        </div>

                        <!-- Body -->
                        <div style="padding: 32px 30px;">

                            <h2 style="
                                margin: 0 0 12px;
                                font-size: 24px;
                                color: #18181b;
                            ">
                                Reset your password
                            </h2>

                            <p style="
                                margin: 0 0 18px;
                                font-size: 14px;
                                line-height: 1.7;
                                color: #52525b;
                            ">
                                We received a request to reset the password
                                associated with your WhyLong account.
                            </p>

                            <p style="
                                margin: 0 0 28px;
                                font-size: 14px;
                                line-height: 1.7;
                                color: #52525b;
                            ">
                                If you made this request, click the button
                                below to choose a new password.
                            </p>

                            <!-- CTA -->
                            <div style="text-align: center; margin: 30px 0;">

                                <a
                                    href="${resetUrl}"
                                    style="
                                        display: inline-block;
                                        padding: 13px 24px;
                                        background-color: #eab308;
                                        color: #ffffff;
                                        text-decoration: none;
                                        font-size: 14px;
                                        font-weight: 700;
                                        border-radius: 7px;
                                    "
                                >
                                    Reset Password
                                </a>

                            </div>

                            <!-- Expiry -->
                            <div style="
                                padding: 15px 16px;
                                background-color: #fffbeb;
                                border: 1px solid #fde68a;
                                border-radius: 7px;
                            ">
                                <p style="
                                    margin: 0;
                                    font-size: 13px;
                                    line-height: 1.6;
                                    color: #92400e;
                                ">
                                    <strong>This link expires in 30 minutes.</strong>
                                    For your security, please complete the
                                    password reset before it expires.
                                </p>
                            </div>

                            <p style="
                                margin: 28px 0 0;
                                font-size: 13px;
                                line-height: 1.7;
                                color: #71717a;
                            ">
                                If you did not request a password reset,
                                no action is required. Your password will
                                remain unchanged.
                            </p>

                            <p style="
                                margin: 20px 0 0;
                                font-size: 13px;
                                line-height: 1.7;
                                color: #71717a;
                            ">
                                For your security, never share this link
                                with anyone.
                            </p>

                        </div>

                        <!-- Footer -->
                        <div style="
                            padding: 20px 30px;
                            background-color: #fafafa;
                            border-top: 1px solid #e4e4e7;
                            text-align: center;
                        ">
                            <p style="
                                margin: 0;
                                font-size: 12px;
                                color: #a1a1aa;
                            ">
                                This is an automated security email from WhyLong.
                            </p>

                            <p style="
                                margin: 6px 0 0;
                                font-size: 12px;
                                color: #a1a1aa;
                            ">
                                © ${new Date().getFullYear()} WhyLong
                            </p>
                        </div>

                    </div>
                </div>
            `
        },
        {
            headers: {
                "api-key": process.env.BREVO_API_KEY,
                "Content-Type": "application/json"
            }
        }
    );

    return response.data;
}

async function sendWelcomeEmail({
    username,
    email
}) {
    const year = new Date().getFullYear();
    const appUrl = process.env.FRONTEND_URL;

    await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        {
            sender: {
                email: process.env.SUPPORT_EMAIL,
                name: "WhyLong"
            },

            to: [
                {
                    email,
                    name: username
                }
            ],

            subject: "Welcome to WhyLong — Your Links, Your Way 🚀",

            htmlContent: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta name="color-scheme" content="light">
                    <title>Welcome to WhyLong</title>
                </head>

                <body style="
                    margin: 0;
                    padding: 0;
                    background-color: #f4f5f7;
                    font-family: Arial, Helvetica, sans-serif;
                    color: #111827;
                ">

                    <!-- Preheader -->
                    <div style="
                        display: none;
                        max-height: 0;
                        overflow: hidden;
                        opacity: 0;
                        color: transparent;
                    ">
                        Unlimited short links. Unlimited QR codes.
                        Discover everything you can do with WhyLong.
                    </div>

                    <table
                        role="presentation"
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        style="background-color: #f4f5f7;"
                    >
                        <tr>
                            <td align="center" style="padding: 32px 12px;">

                                <table
                                    role="presentation"
                                    width="600"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    style="
                                        width: 100%;
                                        max-width: 600px;
                                        background-color: #ffffff;
                                        border: 1px solid #e5e7eb;
                                        border-radius: 16px;
                                        overflow: hidden;
                                    "
                                >

                                    <!-- Brand Header -->
                                    <tr>
                                        <td style="
                                            padding: 30px 32px;
                                            background-color: #111827;
                                        ">
                                            <table
                                                role="presentation"
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                            >
                                                <tr>
                                                    <td>
                                                        <div style="
                                                            font-size: 27px;
                                                            line-height: 34px;
                                                            font-weight: 800;
                                                            letter-spacing: -0.8px;
                                                            color: #ffffff;
                                                        ">
                                                            Why<span style="color: #facc15;">Long</span>
                                                        </div>

                                                        <div style="
                                                            margin-top: 7px;
                                                            font-size: 13px;
                                                            line-height: 20px;
                                                            color: #d1d5db;
                                                        ">
                                                            Your links. Your QR codes. No limits.
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                    <!-- Hero -->
                                    <tr>
                                        <td style="padding: 36px 32px 20px;">

                                            <div style="
                                                display: inline-block;
                                                padding: 7px 12px;
                                                border-radius: 20px;
                                                background-color: #fef9c3;
                                                color: #854d0e;
                                                font-size: 12px;
                                                font-weight: 700;
                                                letter-spacing: 0.4px;
                                            ">
                                                WELCOME ABOARD
                                            </div>

                                            <h1 style="
                                                margin: 20px 0 12px;
                                                font-size: 30px;
                                                line-height: 1.25;
                                                letter-spacing: -0.7px;
                                                color: #111827;
                                            ">
                                                Hey ${escapeHtml(username)},<br>
                                                welcome to WhyLong! 👋
                                            </h1>

                                            <p style="
                                                margin: 0;
                                                font-size: 15px;
                                                line-height: 1.8;
                                                color: #4b5563;
                                            ">
                                                Your account is ready. It's time to
                                                simplify your links, create beautiful
                                                QR codes, and understand how people
                                                interact with what you share.
                                            </p>

                                        </td>
                                    </tr>

                                    <!-- Free Plan Highlight -->
                                    <tr>
                                        <td style="padding: 12px 32px 24px;">

                                            <table
                                                role="presentation"
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                style="
                                                    background-color: #fffbeb;
                                                    border: 1px solid #fde68a;
                                                    border-radius: 12px;
                                                "
                                            >
                                                <tr>
                                                    <td style="padding: 22px 20px;">

                                                        <div style="
                                                            font-size: 12px;
                                                            line-height: 18px;
                                                            font-weight: 800;
                                                            letter-spacing: 1.2px;
                                                            color: #92400e;
                                                        ">
                                                            YOUR LINKS, WITHOUT LIMITS
                                                        </div>

                                                        <div style="
                                                            margin-top: 10px;
                                                            font-size: 25px;
                                                            line-height: 32px;
                                                            font-weight: 800;
                                                            color: #111827;
                                                        ">
                                                            100% Free. Seriously.
                                                        </div>

                                                        <p style="
                                                            margin: 10px 0 0;
                                                            font-size: 14px;
                                                            line-height: 1.8;
                                                            color: #4b5563;
                                                        ">
                                                            Create unlimited short URLs and
                                                            unlimited QR codes without paying
                                                            for a subscription or worrying
                                                            about artificial creation limits.
                                                        </p>

                                                    </td>
                                                </tr>
                                            </table>

                                        </td>
                                    </tr>

                                    <!-- Features -->
                                    <tr>
                                        <td style="padding: 0 32px 28px;">

                                            <h2 style="
                                                margin: 0 0 8px;
                                                font-size: 21px;
                                                line-height: 29px;
                                                color: #111827;
                                            ">
                                                Everything you need to share smarter
                                            </h2>

                                            <p style="
                                                margin: 0 0 20px;
                                                font-size: 14px;
                                                line-height: 1.7;
                                                color: #6b7280;
                                            ">
                                                More than shortening links — here's
                                                what you can explore.
                                            </p>

                                            <!-- Feature 1 -->
                                            <table
                                                role="presentation"
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                style="margin-bottom: 12px;"
                                            >
                                                <tr>
                                                    <td
                                                        width="48"
                                                        valign="top"
                                                        style="padding: 2px 12px 12px 0;"
                                                    >
                                                        <div style="
                                                            width: 42px;
                                                            height: 42px;
                                                            line-height: 42px;
                                                            text-align: center;
                                                            border-radius: 10px;
                                                            background-color: #fef3c7;
                                                            font-size: 21px;
                                                        ">🔗</div>
                                                    </td>

                                                    <td valign="top" style="padding-bottom: 12px;">
                                                        <div style="
                                                            font-size: 15px;
                                                            line-height: 22px;
                                                            font-weight: 700;
                                                            color: #111827;
                                                        ">
                                                            Unlimited URL Shortening
                                                        </div>

                                                        <div style="
                                                            margin-top: 4px;
                                                            font-size: 13px;
                                                            line-height: 1.7;
                                                            color: #6b7280;
                                                        ">
                                                            Turn long URLs into clean,
                                                            shareable short links and
                                                            organize your links in one place.
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>

                                            <!-- Feature 2 -->
                                            <table
                                                role="presentation"
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                style="margin-bottom: 12px;"
                                            >
                                                <tr>
                                                    <td
                                                        width="48"
                                                        valign="top"
                                                        style="padding: 2px 12px 12px 0;"
                                                    >
                                                        <div style="
                                                            width: 42px;
                                                            height: 42px;
                                                            line-height: 42px;
                                                            text-align: center;
                                                            border-radius: 10px;
                                                            background-color: #fef3c7;
                                                            font-size: 21px;
                                                        ">📱</div>
                                                    </td>

                                                    <td valign="top" style="padding-bottom: 12px;">
                                                        <div style="
                                                            font-size: 15px;
                                                            line-height: 22px;
                                                            font-weight: 700;
                                                            color: #111827;
                                                        ">
                                                            Unlimited QR Codes
                                                        </div>

                                                        <div style="
                                                            margin-top: 4px;
                                                            font-size: 13px;
                                                            line-height: 1.7;
                                                            color: #6b7280;
                                                        ">
                                                            Generate QR codes for your links
                                                            and make it easy for people to
                                                            reach your content offline or online.
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>

                                            <!-- Feature 3 -->
                                            <table
                                                role="presentation"
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                style="margin-bottom: 12px;"
                                            >
                                                <tr>
                                                    <td
                                                        width="48"
                                                        valign="top"
                                                        style="padding: 2px 12px 12px 0;"
                                                    >
                                                        <div style="
                                                            width: 42px;
                                                            height: 42px;
                                                            line-height: 42px;
                                                            text-align: center;
                                                            border-radius: 10px;
                                                            background-color: #fef3c7;
                                                            font-size: 21px;
                                                        ">🎨</div>
                                                    </td>

                                                    <td valign="top" style="padding-bottom: 12px;">
                                                        <div style="
                                                            font-size: 15px;
                                                            line-height: 22px;
                                                            font-weight: 700;
                                                            color: #111827;
                                                        ">
                                                            Custom QR Design & Branding
                                                        </div>

                                                        <div style="
                                                            margin-top: 4px;
                                                            font-size: 13px;
                                                            line-height: 1.7;
                                                            color: #6b7280;
                                                        ">
                                                            Personalize QR colors, add your
                                                            logo, customize the design, and
                                                            include brand text to create a
                                                            more recognizable experience.
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>

                                            <!-- Feature 4 -->
                                            <table
                                                role="presentation"
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                style="margin-bottom: 12px;"
                                            >
                                                <tr>
                                                    <td
                                                        width="48"
                                                        valign="top"
                                                        style="padding: 2px 12px 12px 0;"
                                                    >
                                                        <div style="
                                                            width: 42px;
                                                            height: 42px;
                                                            line-height: 42px;
                                                            text-align: center;
                                                            border-radius: 10px;
                                                            background-color: #fef3c7;
                                                            font-size: 21px;
                                                        ">📊</div>
                                                    </td>

                                                    <td valign="top" style="padding-bottom: 12px;">
                                                        <div style="
                                                            font-size: 15px;
                                                            line-height: 22px;
                                                            font-weight: 700;
                                                            color: #111827;
                                                        ">
                                                            Click Analytics
                                                        </div>

                                                        <div style="
                                                            margin-top: 4px;
                                                            font-size: 13px;
                                                            line-height: 1.7;
                                                            color: #6b7280;
                                                        ">
                                                            Explore link activity and available
                                                            insights to better understand
                                                            how your links are being used.
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>

                                            <!-- Feature 5 -->
                                            <table
                                                role="presentation"
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                style="margin-bottom: 12px;"
                                            >
                                                <tr>
                                                    <td
                                                        width="48"
                                                        valign="top"
                                                        style="padding: 2px 12px 12px 0;"
                                                    >
                                                        <div style="
                                                            width: 42px;
                                                            height: 42px;
                                                            line-height: 42px;
                                                            text-align: center;
                                                            border-radius: 10px;
                                                            background-color: #fef3c7;
                                                            font-size: 21px;
                                                        ">🗂️</div>
                                                    </td>

                                                    <td valign="top" style="padding-bottom: 12px;">
                                                        <div style="
                                                            font-size: 15px;
                                                            line-height: 22px;
                                                            font-weight: 700;
                                                            color: #111827;
                                                        ">
                                                            Your Personal Workspace
                                                        </div>

                                                        <div style="
                                                            margin-top: 4px;
                                                            font-size: 13px;
                                                            line-height: 1.7;
                                                            color: #6b7280;
                                                        ">
                                                            Manage your links, revisit your
                                                            creations, and keep your
                                                            link-sharing workflow organized.
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>

                                            <!-- Feature 6 -->
                                            <table
                                                role="presentation"
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                            >
                                                <tr>
                                                    <td
                                                        width="48"
                                                        valign="top"
                                                        style="padding: 2px 12px 0 0;"
                                                    >
                                                        <div style="
                                                            width: 42px;
                                                            height: 42px;
                                                            line-height: 42px;
                                                            text-align: center;
                                                            border-radius: 10px;
                                                            background-color: #fef3c7;
                                                            font-size: 21px;
                                                        ">✨</div>
                                                    </td>

                                                    <td valign="top">
                                                        <div style="
                                                            font-size: 15px;
                                                            line-height: 22px;
                                                            font-weight: 700;
                                                            color: #111827;
                                                        ">
                                                            Built for Everyday Sharing
                                                        </div>

                                                        <div style="
                                                            margin-top: 4px;
                                                            font-size: 13px;
                                                            line-height: 1.7;
                                                            color: #6b7280;
                                                        ">
                                                            Share links across social media,
                                                            messages, websites, print
                                                            materials, and more.
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>

                                        </td>
                                    </tr>

                                    <!-- CTA -->
                                    <tr>
                                        <td style="padding: 4px 32px 36px;">

                                            <table
                                                role="presentation"
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                style="
                                                    background-color: #111827;
                                                    border-radius: 14px;
                                                "
                                            >
                                                <tr>
                                                    <td align="center" style="padding: 28px 22px;">

                                                        <h2 style="
                                                            margin: 0;
                                                            font-size: 22px;
                                                            line-height: 29px;
                                                            color: #ffffff;
                                                        ">
                                                            Ready to create your first link?
                                                        </h2>

                                                        <p style="
                                                            margin: 10px 0 22px;
                                                            font-size: 14px;
                                                            line-height: 1.7;
                                                            color: #d1d5db;
                                                        ">
                                                            Your next great share starts here.
                                                            No subscription required.
                                                        </p>

                                                        <table
                                                            role="presentation"
                                                            cellspacing="0"
                                                            cellpadding="0"
                                                            border="0"
                                                        >
                                                            <tr>
                                                                <td
                                                                    align="center"
                                                                    bgcolor="#facc15"
                                                                    style="border-radius: 8px;"
                                                                >
                                                                    <a
                                                                        href="${escapeHtml(appUrl)}"
                                                                        target="_blank"
                                                                        style="
                                                                            display: inline-block;
                                                                            padding: 14px 25px;
                                                                            font-size: 14px;
                                                                            line-height: 20px;
                                                                            font-weight: 700;
                                                                            color: #111827;
                                                                            text-decoration: none;
                                                                            border-radius: 8px;
                                                                        "
                                                                    >
                                                                        Explore WhyLong &rarr;
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>

                                                    </td>
                                                </tr>
                                            </table>

                                        </td>
                                    </tr>

                                    <!-- Closing -->
                                    <tr>
                                        <td style="padding: 0 32px 30px;">

                                            <p style="
                                                margin: 0;
                                                font-size: 14px;
                                                line-height: 1.8;
                                                color: #4b5563;
                                            ">
                                                Thanks for joining us, ${escapeHtml(username)}.
                                                We're excited to be part of your journey
                                                toward simpler, smarter sharing.
                                            </p>

                                            <p style="
                                                margin: 18px 0 0;
                                                font-size: 14px;
                                                line-height: 1.8;
                                                font-weight: 700;
                                                color: #111827;
                                            ">
                                                Here's to sharing smarter,<br>
                                                Team WhyLong 💛
                                            </p>

                                        </td>
                                    </tr>

                                    <!-- Footer -->
                                    <tr>
                                        <td align="center" style="
                                            padding: 24px 25px;
                                            background-color: #f9fafb;
                                            border-top: 1px solid #e5e7eb;
                                        ">

                                            <p style="
                                                margin: 0;
                                                font-size: 12px;
                                                line-height: 1.7;
                                                color: #6b7280;
                                            ">
                                                You're receiving this email because an
                                                account was created using this address.
                                            </p>

                                            <p style="
                                                margin: 10px 0 0;
                                                font-size: 12px;
                                                line-height: 1.7;
                                                color: #9ca3af;
                                            ">
                                                &copy; ${year} WhyLong. All rights reserved.
                                            </p>

                                        </td>
                                    </tr>

                                </table>

                            </td>
                        </tr>
                    </table>

                </body>
                </html>
            `
        },
        {
            headers: {
                "api-key": process.env.BREVO_API_KEY,
                "Content-Type": "application/json"
            }
        }
    );
}

function escapeHtml(value = "") {
    return String(value).replace(/[&<>"']/g, (char) => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        };

        return entities[char];
    });
}

module.exports = {
    sendContactEmail,
    sendPasswordResetEmail,
    sendWelcomeEmail
};