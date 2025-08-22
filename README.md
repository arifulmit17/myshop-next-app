Live link: https://a10-myshop-next-app.vercel.app/

Project description: This is a small tech related ecommerce project built with next.js

Setup and installation: 

1. First install next.js 15,
2. After that in the app directory create necessary files for project
3. commit to git repository
4. npm run build for production deploy
5. vercel --prod for deployment

Route summery:
Route (app)                         Size  First Load JS    
┌ ○ /                            5.23 kB         132 kB
├ ○ /_not-found                      0 B         127 kB
├ ƒ /api/auth/[...nextauth]          0 B            0 B
├ ƒ /api/products                    0 B            0 B
├ ƒ /dashboard                       0 B         127 kB
├ ○ /dashboard/add-product         743 B         128 kB
├ ○ /login                         529 B         128 kB
├ ○ /products                        0 B         127 kB
└ ƒ /products/[id]                   0 B         127 kB
+ First Load JS shared by all     139 kB
  ├ chunks/47a465164401cb79.js   17.1 kB
  ├ chunks/569f8ca39997ccda.js   21.7 kB
  ├ chunks/6e584c2edc767513.js   12.9 kB
  ├ chunks/811c82e360775988.js   59.2 kB
  ├ chunks/16587a8c4b39e359.css  11.6 kB
  └ other shared chunks (total)  16.9 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand