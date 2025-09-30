# Simple Node.js HTTP Server (Native `http` Module)

This is a basic web server built using the native **Node.js `http` module**. It demonstrates simple routing logic to serve different content based on the requested URL.

## ✨ Features

- **Routing:** Handles three main routes: `/`, `/about`, and `/contact`.
- **Home Page (`/`):** Serves **HTML content** with inline CSS and navigation links.
- **Content Type:** Explicitly sets the `Content-Type` header to `text/html` for the home page.
- **404 Handling:** Provides a simple "404 page not found" response for all other routes.
