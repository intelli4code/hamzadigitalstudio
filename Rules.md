# Hamza Digital Studio - Project Rules & Guidelines

## 1. Design Philosophy
-   **Aesthetics**: "Smooth and Fluffy". Use soft shadows, rounded corners (`rounded-2xl`, `rounded-3xl`), and glassmorphism (`backdrop-blur`).
-   **Colors**:
    -   Primary: Teal/Cyan (as seen in TransformSection) or Orange (Premium).
    -   Backgrounds: Clean White (Light Mode) / Deep Navy/Slate (Dark Mode).
    -   Gradients: Use subtle, smooth gradients.
-   **Typography**: Modern, distinct fonts (`font-display` for headers).
-   **Interactions**:
    -   Smooth transitions (Framer Motion).
    -   Magnetic Cursors (Desktop only).
    -   Buttons should have "juice" (hover effects, scale).
    -   **Interactive Backgrounds**: Use "Cyan/Teal Blobs" (blurred, moving) **outside** the main cards.
    -   **Rainbow Borders**: Use `animate-rainbow` with `bg-gradient-to-r` (pink-purple-cyan-pink) for active moving borders.

## 2. Component Guidelines
-   **Buttons**: Always **fully rounded** (`rounded-full`) or highly rounded components.
    -   **Primary Button Hover**: Light mode: white bg, cyan text. Dark mode: secondary bg, cyan text.
    -   **Outline Button Hover**: Keep text visible (use `hover:text-foreground`), subtle bg change.
-   **Icons**: Use `lucide-react`. Minimalist usage.
-   **Images**: High-quality, abstract, 3D-ish, "fluffy" textures.
-   **Dark Mode**:
    -   All components MUST support Dark Mode.
    -   Use `dark:` tailwind modifiers.
    -   Toggle must be accessible (Fixed bottom-left).

## 3. Coding Standards
-   **Framework**: React + Vite + TypeScript.
-   **Styling**: Tailwind CSS.
-   **State**: React Hooks or Context.
-   **File Structure**:
    -   `src/components/ui`: Generic UI components.
    -   `src/pages`: Route pages.
    -   `src/contexts`: Global state.

## 4. Specific Component Rules
-   **Auth Page**:
    -   Split Layout (Form / Visual).
    -   Smooth bi-directional transitions for Login/Signup.
    -   Google Sign-In button with Logo.
    -   No decorative icons next to headers.
-   **Navigation**:
    -   Fixed Header.
    -   Smooth Scroll to sections.
    -   "Start Project" redirects to `/start-project`.

**DO NOT DELETE THIS FILE.** Refer to it for all future styling decisions.
