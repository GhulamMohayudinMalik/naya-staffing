# BreezyRecruit Frontend Clone Implementation Plan

## Goal Description
The objective is to create a high-fidelity frontend clone of `breezyrecruit.com` and its associated pages (Job Seekers, Employer Services, specific service pages, About Us, etc.). We will use Next.js for the framework and Vanilla CSS for styling to ensure maximum flexibility and a rich aesthetic. Missing images and videos will be replaced with high-quality placeholders. The backend will be implemented at a later stage; for now, all data will be mocked on the frontend.

## User Review Required
> [!IMPORTANT]
> Please review the technology choice and the list of pages below. 
> 
> 1. Is **Next.js with Vanilla CSS (CSS Modules)** acceptable for this project? (We are avoiding Tailwind CSS as per standard best practices unless you specifically request it).
> 2. Are there any specific subdomains or hidden pages you want prioritized that aren't in the main navigation?

## Proposed Changes

### Project Setup
- Initialize a fresh Next.js project using the App Router.
- Set up global CSS variables for colors, typography, and spacing to match BreezyRecruit's branding.
- Setup standard placeholder assets (e.g., generic team images, placeholder videos) in the `public` directory.

### Core Components
- **Navbar**: Responsive top navigation with dropdowns for services.
- **Footer**: Detailed footer with links, newsletter signup, and contact info.
- **Buttons & Forms**: Standardized interactive elements with hover states and micro-animations.
- **Section Layouts**: Hero sections, feature grids, and testimonial carousels.

### Pages to Implement
We will systematically build the following route structure:

1. **Home Page (`/`)**: Main landing page with hero, services overview, and testimonials.
2. **Employer Services (`/employer-services`)**: Targeted landing page for employers.
3. **Job Seekers Portal (`/jobs`)**: Cleaned up route for the job portal (replacing the original `/wp-job-portal-jobseeker-controlpanel/jobs/full-time_111/`).
4. **Service Specific Pages**:
   - `/recruitment-process-outsourcing`
   - `/reverse-recruitment`
   - `/contract-to-hire`
   - `/temporary-staffing`
   - `/executive-search`
5. **Company Pages**:
   - `/about-us`
   - `/testimonials`
6. **Blog Layout**:
   - `/blog` (listing)
   - `/blog/[slug]` (individual article layout)

## Verification Plan

### Manual Verification
1. **Local Development Server**: Run `npm run dev` and navigate through all routes.
2. **Visual Comparison**: Open `breezyrecruit.com` and `localhost:3000` side-by-side to visually inspect typography, spacing, and colors.
3. **Responsiveness Check**: Use browser developer tools to verify the layout on mobile (375px), tablet (768px), and desktop (1024px+).
4. **Interactive Elements**: Hover over buttons, open mobile menus, and interact with sliders to ensure smooth animations and correct states.
