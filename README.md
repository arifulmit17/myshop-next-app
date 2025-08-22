Live link: https://a10-myshop-next-app.vercel.app/

Project description: This is a small tech related ecommerce project built with next.js

Setup and installation: 

1. First install next.js 15,
2. After that in the app directory create necessary files for project
3. commit to git repository
4. npm run build for production deploy
5. vercel --prod for deployment

Route summery:
src
 ┣ app
 ┃ ┣ (authpages)
 ┃ ┃ ┗ login
 ┃ ┃ ┃ ┗ page.jsx
 ┃ ┣ api
 ┃ ┃ ┣ auth
 ┃ ┃ ┃ ┗ [...nextauth]
 ┃ ┃ ┃ ┃ ┗ route.js
 ┃ ┃ ┗ products
 ┃ ┃ ┃ ┗ route.js
 ┃ ┣ Components
 ┃ ┃ ┣ Navbar.jsx
 ┃ ┃ ┗ ProductHighlights.jsx
 ┃ ┣ dashboard
 ┃ ┃ ┣ add-product
 ┃ ┃ ┃ ┣ Formproduct.jsx
 ┃ ┃ ┃ ┗ page.jsx
 ┃ ┃ ┣ layout.jsx
 ┃ ┃ ┗ page.jsx
 ┃ ┣ products
 ┃ ┃ ┣ [id]
 ┃ ┃ ┃ ┗ page.jsx
 ┃ ┃ ┗ page.jsx
 ┃ ┣ favicon.ico
 ┃ ┣ globals.css
 ┃ ┣ layout.js
 ┃ ┗ page.js
 ┗ lib
 ┃ ┣ products
 ┃ ┃ ┗ page.jsx
 ┃ ┣ mongodb.js
 ┃ ┗ products.jsx