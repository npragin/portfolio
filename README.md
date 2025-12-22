# Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS. This project provides a clean and professional way to showcase your experience, projects, and skills.

## Purpose

This portfolio website is designed to serve as a personal showcase for project-oriented professionals. It features a sleek single-page layout with sections for about information, work experience, and featured projects. It includes a project archive page to display non-featured projects and a link to a full resume. The design emphasizes readability and visual appeal, making it easy for visitors to learn about your background and accomplishments.

## Using This Project for Your Own Content

The project uses a component-based architecture with reusable UI elements, making it easy to customize and extend.

To customize the content of the portfolio for your own use:

1. **Update Personal Information**: Edit `constants/index.js` to modify:
   - `NAME` - Your full name
   - `DESIGNATION` - Your title or current role
   - `BLURB` - A short description about yourself
   - `SOCIAL_LINKS` - Your email, GitHub, and LinkedIn

2. **Add Your Experience**: Update the `EXPERIENCE` array in `constants/index.js` with your work history.

3. **Showcase Your Projects**: Modify the `PROJECTS` array in `constants/index.js` with your projects. Update the `SELECTED_PROJECTS` array to specify which projects should be featured on the home page.

5. **Add Your Resume**: Replace `public/resume.pdf` with your own resume file.
