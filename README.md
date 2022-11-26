# MERN AMAZONIA

# MERN Stack ECommerce Website

# Steps

1. Install tools
2. Config VS Code
3. Create React App
4. Push to GitHub
5. List products
   i. create products array
   ii. add product images
   iii. render products
   iv. style products
6. Add routing
   i. npm i react-router-dom
   ii. create route for home screen
   iii. create router for product screen
7. Create Node.JS Server
   i. run npm init in root folder
   ii. update package,json set type: module
   iii. add .js to imports
   iv. npm install express
   v. create server.js
   vi. add start command as node backend/server.js
   vii. require express
   viii. create route for / return backend is ready
   ix. move product.js from frontend to backend
   x. create route for /api/products
   xi. return products
   xii. run npm start
8. Fetch products from backend
   i. set proxy in package.json
   ii. npm install axios
   iii. use state hook
   iv. use effect hook
   v. use reducer hook
9. Manage state by reducer hook
   i. define reducer
   ii. update fetch data
   iii. get state from useReducer
10. Add bootstrap UI Framework
    i. npm install react-bootstrap bootstrap
    ii. update App.js
11. Create product and rating component
    i. create rating component
    ii. create product component
    iii. use rating component in product component
12. Create product details screen
    i. fetch product from backend
    ii. create 3 columns (image, info, action)
13. Create loading and message components
    i. create loading component
    ii. use spinner component
    iii. create message component
    iv. create utils.js to define getError function
14. Implement add to cart
    i. create react context
    ii. define reducer
    iii. create store provider
    iv. implement add to cart button click handler
15. Complete add to cart
    i. check item exist in cart
    ii. check stock count in backend
16. Create cart screen
    i. create 2 columns
    ii. display item list
    iii. create action column
17. Complete cart screen
    i. click handler for increase/decrease itme in cart
    ii. click handler for remove itme from cart
    iii. click handler for checkout
18. Create sign in screen
    i. create sign in form
    ii. add email and password
    iii. add sign in button
19. Connect to MongoDB
    i. create atlas mongoDB database
    ii. install local mongodb database
    iii. npm install mongoose
    iv.connect to mongodb database
20. Seed Sample Products
    i. create product model
    ii.create user model
    iii. create seed route
    iv. use route in server.js
    v. seed sample product
21. Create sample users
    i. create user model
    ii. seed sample users
