# To Run
Clone the repo and run:
npm install
npm run dev

# Transaction Widget Exercise
** Breakpoint Decisions and UI Behavior **
- Widget Placeholders on Smaller Screens:
The decision was made to hide widget placeholders for screens smaller than 1300px. This ensures a cleaner and more focused UI on smaller devices.

- Transaction Card Text Wrapping:
In the Transaction Card, if the token title, value, or address are too long, the text will wrap onto multiple lines. This avoids overflow and maintains layout integrity.

- Username Truncation:
For the header, if the username is too long, it will be truncated with an ellipsis when it reaches the end of the parent element. This prevents layout breaks and ensures that the header remains clean and readable.

** Additional Notes **
The project uses a modular approach for components, skeleton loaders, and utility functions.
All strings have been centralized in constants for future translation support.
Responsive design is achieved using media queries with clearly defined breakpoints to ensure a seamless experience across devices.