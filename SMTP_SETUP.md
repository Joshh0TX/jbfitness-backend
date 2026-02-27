# Gmail SMTP Setup (JBFitness Backend)

Use these environment variables for OTP email delivery:

- `SMTP_SERVICE=gmail`
- `SMTP_USER=your_gmail_address@gmail.com`
- `SMTP_PASS=your_16_char_gmail_app_password`
- `SMTP_FROM=your_gmail_address@gmail.com`

## 1) Create Gmail App Password

1. Open your Google account settings.
2. Enable **2-Step Verification**.
3. Go to **App passwords**.
4. Create a new app password (Mail).
5. Copy the generated 16-character password.

## 2) Set Variables in Deployment (Railway/Render/etc.)

Set the four variables above in your backend service environment settings.

Important:
- Do **not** use your regular Gmail account password.
- Use the app password only.

## 3) Local Development

Set the same values in `jbfitness-backend/.env.development`.

## 4) Verify

- Attempt login from the frontend.
- You should receive a 6-digit OTP email.
- Enter OTP on `/two-factor-auth` to complete sign-in.

If SMTP variables are missing, backend currently falls back to direct login (2FA bypass) to avoid blocking access.
