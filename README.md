# Reshmi Dey · Digital Marketing Executive Portfolio

Professional portfolio of **Reshmi Dey** (MCA, B.Voc) showcasing performance marketing achievements, Google & Meta Ads case studies, SEO strategies, technical audits, and contact links.

---

## 🚀 How to Publish on Vercel

You can publish this portfolio to Vercel in 2 easy ways:

### Option 1: Via GitHub (Recommended & Free)

1. **Push your code to GitHub**:
   - Create a new repository on [GitHub](https://github.com/new) (e.g., `reshmi-dey-portfolio`).
   - Push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit of Reshmi Dey portfolio"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/reshmi-dey-portfolio.git
     git push -u origin main
     ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in (or sign up with your GitHub account).
   - Click **"Add New..."** → **"Project"**.
   - Under **"Import Git Repository"**, choose your repository `reshmi-dey-portfolio`.
   - Vercel automatically detects **Vite**:
     - **Framework Preset**: `Vite`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - Click **"Deploy"**.
   - In less than 1 minute, your portfolio will be live at a custom URL like `reshmi-dey-portfolio.vercel.app`! Every time you push a change to GitHub, Vercel will automatically redeploy it.

---

### Option 2: Using Vercel CLI (Directly from Terminal)

If you have Node.js installed locally on your computer:

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Inside the project folder, run:
   ```bash
   vercel
   ```

3. Follow the on-screen prompts:
   - Log in with your email or GitHub.
   - Set up and deploy? → `Y`
   - Link to existing project? → `N`
   - Project name? → `reshmi-dey-portfolio`
   - In which directory is your code located? → `./`
   - Want to modify settings? → `N`

4. When ready to publish to production:
   ```bash
   vercel --prod
   ```

---

## 🌐 Custom Domain (Optional)

On Vercel, you can connect your own domain (e.g., `reshmidey.com` or `reshmidey.in`):
1. In the Vercel Dashboard, go to your project → **Settings** → **Domains**.
2. Type your domain name and click **Add**.
3. Follow the simple DNS records (CNAME/A records) instructions provided by Vercel.
