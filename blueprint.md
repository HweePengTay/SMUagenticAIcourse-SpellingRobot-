# Project Blueprint: SpellingRobot

## Overview

This document outlines the plan for creating a new React application called "SpellingRobot" based on the provided HTML mockups. The application is a spelling practice tool for children, with separate interfaces for parents and children.

## Key Features

*   **Parent Dashboard:** Allows parents to monitor their children's progress, view recent activity, and manage child profiles.
*   **Child Dashboard:** A central hub for children to access their assignments, view their progress, and see their rewards.
*   **Word List Management:** Parents can create and review spelling lists by uploading photos of word sheets.
*   **Spelling Tests:** Children can take spelling tests based on the assigned word lists.
*   **Progress Tracking:** The application provides detailed analytics on test results, including accuracy, time spent, and common error patterns.
*   **User Profiles:** Separate profiles for parents and children, with a secure login process.

## Design and Styling

*   **UI Framework:** React with Vite
*   **Styling:** Tailwind CSS with a custom theme based on the provided color palette and typography.
*   **Fonts:** Quicksand from Google Fonts.
*   **Icons:** Material Symbols from Google Fonts.
*   **Design Aesthetic:** The application will have a modern, playful, and tactile design, with a clean and intuitive user interface.

## Implementation Plan

1.  **Project Setup:**
    *   Initialize a new React project using Vite.
    *   Install and configure Tailwind CSS.
    *   Install `react-router-dom` for navigation.

2.  **Component Structure:**
    *   Create a `src/pages` directory to house the main page components.
    *   Create the following page components, translating the provided HTML into JSX:
        *   `SplashScreen.tsx`
        *   `ParentDashboard.tsx`
        *   `ChildHome.tsx`
        *   `UploadWordList.tsx`
        *   `ReviewWordList.tsx`
        *   `TestIntro.tsx`
        *   `SpellingTest.tsx`
        *   `WellDone.tsx`
        *   `TestResults.tsx`
        *   `ProgressAnalytics.tsx`
        *   `ChildLogin.tsx`
        *   `ChildProfileCreation.tsx`
        *   `ChildTestDashboard.tsx`
        *   `AssignTest.tsx`
        *   `AssignmentNotification.tsx`
    *   Create shared components (e.g., `Header`, `BottomNav`) as needed.

3.  **Routing:**
    *   Set up client-side routing in `src/App.tsx` using `react-router-dom`.
    *   The default route will be the `SplashScreen`.
    *   Implement navigation between all pages as shown in the mockups.

4.  **Styling:**
    *   Update `index.html` to include the Google Fonts links.
    *   Configure `tailwind.config.js` with the custom color palette, fonts, and other theme extensions from the provided HTML.
    *   Ensure all Tailwind CSS classes from the mockups are correctly applied in the JSX.

5.  **Interactivity:**
    *   Implement the JavaScript-driven micro-interactions and animations from the original HTML mockups using React hooks (`useState`, `useEffect`).

## Next Steps

*   Create the `blueprint.md` file.
*   Install `react-router-dom`.
*   Update `index.html` with Google Fonts.
*   Create the page components.
*   Configure `tailwind.config.js`.
*   Set up routing in `App.tsx`.
