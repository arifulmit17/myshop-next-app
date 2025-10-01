Live link: https://a10-myshop-next-app.vercel.app/

Project description: This is a small tech related ecommerce project built with next.js

Features:
1. Next auth login
2. Admin panel with auth
3. Details page for products
4. 

Route summery:
Pages
•	/ → Landing Page
o	Contains Navbar, Hero, Product Highlights, and Footer.
o	Links to /login and /products.
o	Public.
•	/login → Login Page with NextAuth
o	Supports Google or credential login.
o	Redirects to /products on success.
o	Public.
•	/products → Product List Page
o	Shows product list (name, price, description, details button).
o	Data fetched from a mock backend or MongoDB.
o	Public.
•	/products/[id] → Product Details Page
o	Shows full details of a single product.
o	Dynamic route (id).
o	Public.
•	/dashboard/add-product → Add Product Page
o	Protected (requires login).
o	Form to add new product into MongoDB.
o	Redirects unauthenticated users to /login.
API Routes (under /app/api/)
•	/api/auth/[...nextauth] → NextAuth handler
o	Handles authentication (Credentials login).
•	/api/products → Products API
o	POST → add new product to MongoDB.


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
