# 📧 EmailJS Setup Instructions

Follow these steps to configure your contact form to receive emails at **dishantnakrani410@gmail.com**

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **Sign Up** (it's FREE!)
3. Sign up using your Google account or email

## Step 2: Add Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** as your email service
4. Click **Connect Account** and authorize with your Gmail (dishantnakrani410@gmail.com)
5. Click **Create Service**
6. **Copy your Service ID** (looks like: `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

### Template Settings:
- **Template Name**: Portfolio Contact Form

### Email Template Content:
```
Subject: New Message from {{name}}

From: {{name}}
Email: {{email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

### Template Variables:
Make sure these variables are present:
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email
- `{{message}}` - The message

4. In the **Settings** tab:
   - **To Email**: dishantnakrani410@gmail.com
   - **From Name**: Portfolio Contact
   - **Reply To**: {{email}}

5. Click **Save**
6. **Copy your Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (looks like: `xxxxxxxxxxxxxxx`)
3. **Copy it**

## Step 5: Update Your Code

Open `src/components/Contact.jsx` and replace these placeholders (around line 30-33):

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

### Example:
```javascript
const serviceId = 'service_abc1234';
const templateId = 'template_xyz5678';
const publicKey = 'aBcDeFgHiJkLmNoPqR';
```

## Step 6: Test Your Form

1. Save the file
2. Your dev server should auto-reload
3. Go to the Contact section of your portfolio
4. Fill out the form and click **Send Message**
5. Check your email at **dishantnakrani410@gmail.com**

## 🎉 That's It!

Your contact form will now send all messages directly to your email!

## Troubleshooting

### Not receiving emails?
- Check your spam/junk folder
- Verify all IDs are correct in Contact.jsx
- Make sure template has {{name}}, {{email}}, {{message}} variables
- Check EmailJS dashboard for any errors

### Need Help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- Free tier limit: 200 emails/month (more than enough for a portfolio!)

## Security Note
Your EmailJS keys are public keys - they're safe to commit to GitHub. EmailJS handles the security on their end.
