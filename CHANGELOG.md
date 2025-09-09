# Changelog

All notable changes to this project will be documented in this file.

---

## [September 2025]

### Added

- Playwright end-to-end tests to cover login, adding items to cart, Stripe checkout, and receipt modal.
- Middleware for request validation, authentication checks, and centralized error handling.

---

## [May 2025]

### Added

- `Cloudinary` image upload functionality to support user profile image uploads.
- Inline function-level comments throughout backend for better documentation.
- README now includes clear project summary and link to this changelog.

### Changed

- Cleaned up backend route files, grouping logic by function.
- Improved error handling for Stripe payment and cart operations.
- Ensured all product and gallery data is fetched dynamically from the PostgreSQL database via Prisma.

---

## [November 2024]

### Added

- Auth0 integration for authentication (sign-up, login, logout).
- Persistent cart tied to authenticated users.
- REST API endpoints for:
  - `/api/items` — fetch items by category
  - `/api/cart` — manage cart operations
  - `/api/gallery` — display gallery images
  - `/create-payment-intent` — Stripe payment processing

### Changed

- Migrated from hardcoded data to seeded PostgreSQL tables.
- Separated backend (Express/Node) and frontend (React/CSS) into a full-stack structure.

---

## [July 2024]

### Added

- Add-to-cart functionality with quantity adjustment.
- Stripe checkout integration.
- Receipt modal showing itemized summary after successful payment.

---
