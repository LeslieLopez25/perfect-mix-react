<h1>The Perfect Mix :taco:</h1>

<h2>Welcome to The Perfect Mix, a captivating restaurant website meticulously crafted using React and CSS to provide a delightful culinary journey.</h2>

### Key Features

<p>
- Mobile Responsiveness: Enjoy a seamless experience on any device, whether it's a smartphone, tablet, or desktop.

- Custom Button: Experience our restaurant like never before with a thoughtfully designed custom button that adds a touch of elegance to your navigation.

- Diverse Menu Pages: Discover the plethora of culinary treasures our restaurant boasts with dedicated pages for each category of food, making your choices easier and more enjoyable.

- Captivating Gallery: Immerse yourself in the visual feast of our mouthwatering dishes through our gallery section. Get a glimpse of the culinary artistry that awaits you.

- Use this [link](https://docs.stripe.com/testing#international-cards) to use Stripe test cards, for placing your order, from different countries.

\*\* Updated as of July 2024:

- Enhanced Cart Functionality: Easily add items to your cart, adjust quantities, and view the total amount for each item with our intuitive add-to-cart feature.

\*\* Updated as of November 2024:

- Authentication: Integrated Auth0 to enable user account creation and login, allowing users to save items to their cart before checkout.

- Full-Stack Setup: Converted the project into a full-stack application with separate frontend and backend components.

- Backend and Database:

  - Hosted backend setup to manage data, Auth0 authentication, and Stripe payment processing.

  - Integrated PostgreSQL database with Prisma as the ORM for efficient database interaction.

  - Migrated product and gallery images to the database, seeding them through Prisma to replace hardcoded data.

  - Node.js: Powers the backend runtime environment, allowing JavaScript to run server-side for handling server operations and managing asynchronous requests efficiently.

  - Express: Provides the core web framework for routing and middleware management, serving dynamic API routes (e.g., item retrieval, cart management, payments) and static files like gallery images.

  - dotenv: Manages environment variables securely by loading sensitive data (e.g., Stripe secret key) from a .env file, keeping it out of the codebase for security.

  - CORS (Cross-Origin Resource Sharing): Enables secure cross-origin requests between the separately hosted frontend and backend, allowing them to communicate without security issues.

  - REST API: Defines structured endpoints (e.g., /api/items, /api/cart, /create-payment-intent) that enable data exchange with the frontend, following REST principles for handling user interactions and payment processing.

- Dynamic Content Fetching: Product and gallery data are now fetched directly from the database, making updates and scalability easier.

- Payment Processing: Implemented Stripe for secure payment processing, configured in both frontend and backend for seamless transactions.

- Receipt Modal: Upon successful payment, a receipt modal displays the user's name, list of items, and total amount paid, enhancing the checkout experience.

- Cart Management: Cart items persist across login sessions, allowing users to resume shopping without losing their selections.

- Frontend: Hosted on Render, making the user-facing interface accessible to the public and ensuring smooth interactions with the backend services.

- Backend: Also hosted on Render, allowing it to handle API requests, process payments, and manage authentication and cart functionalities, all accessible to the frontend.

- Database: Hosted on Neon, a cloud PostgreSQL database provider, which stores all product data, gallery images, and user cart information, ensuring secure and scalable data management for the app.
</p>

### Link

- Live Site: [The Perfect Mix](https://perfect-mix-react.onrender.com)

### Screenshots

<img src="/client/src/assets/screenshots/home.png" width="400"/>
<img src="/client/src/assets/screenshots/main.png" width="400"/>
<img src="/client/src/assets/screenshots/gallery.png" width="400"/>
<img src="/client/src/assets/screenshots/cart.png" width="400"/>

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
