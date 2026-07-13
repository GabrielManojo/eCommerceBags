# eCommerce Bags

A responsive e-commerce interface built with React and Vite. Users can browse featured bags, select a product, review their order, and complete a simulated checkout flow.

> **Project status:** The current version is a front-end demonstration. Checkout submission is simulated and no real payments or orders are processed.

## Features

- Responsive product-focused homepage
- Featured bag collection
- Navigation between the storefront and checkout with React Router
- Selected-product data passed to the checkout page
- Checkout form for contact, shipping, and payment information
- Dynamic order summary and total calculation
- Fixed $10 delivery fee included in the final total
- Simulated order submission

## Built With

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vite.dev/)
- JavaScript
- CSS

## How It Works

1. Browse the featured products on the homepage.
2. Select **Buy Now** on a product.
3. Review the selected product and calculated total on the checkout page.
4. Enter contact, shipping, and payment information.
5. Submit the form to simulate placing an order.

## Run Locally

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/GabrielManojo/eCommerceBags.git
cd eCommerceBags
npm install
npm run dev
```

Open the local URL displayed by Vite, normally:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build
```

## Current Limitations

- Products are currently stored locally rather than loaded from a backend.
- The checkout does not process or store real payment information.
- Orders are not saved to a database.
- The application does not currently include user accounts or authentication.

## Planned Improvements

- Add a shopping cart with multiple products
- Add form validation and clearer error messages
- Connect the storefront to a backend API and database
- Add user registration and authentication
- Integrate Stripe test mode for payment processing
- Add automated component and calculation tests
- Deploy the application

## Author

**Gabriel Urtado**

- [GitHub](https://github.com/GabrielManojo)
- [LinkedIn](https://www.linkedin.com/in/gabriel-manojo/)

## License

This project was created for learning and portfolio purposes.
