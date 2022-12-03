# MERN AMAZONIA

# MERN Stack ECommerce Website

# Steps

1. Install tools
2. Config VS Code
3. Create React App
4. Push to GitHub
5. List Products
   i. create products array
   ii. add product images
   iii. render products
   iv. style products
6. Add Routing
   i. npm install react-router-dom
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
8. Fetch Products from Backend
   i. set proxy in package.json
   ii. npm install axios
   iii. use state hook
   iv. use effect hook
   v. use reducer hook
9. Manage State By Reducer Hook
   i. define reducer
   ii. update fetch data
   iii. get state from useReducer
10. Add Bootstrap UI Framework
    i. npm install react-bootstrap bootstrap
    ii. update App.js
11. Create Product and Rating Component
    i. create rating component
    ii. create product component
    iii. use rating component in product component
12. Create Product Details Screen
    i. fetch product from backend
    ii. create 3 columns (image, info, action)
13. Create Loading and Message Components
    i. create loading component
    ii. use spinner component
    iii. create message component
    iv. create utils.js to define getError function
14. Implement Add To Cart
    i. create react context
    ii. define reducer
    iii. create store provider
    iv. implement add to cart button click handler
15. Complete Add To Cart
    i. check item exist in cart
    ii. check stock count in backend
16. Create Cart Screen
    i. create 2 columns
    ii. display item list
    iii. create action column
17. Complete Cart Screen
    i. click handler for increase/decrease itme in cart
    ii. click handler for remove itme from cart
    iii. click handler for checkout
18. Create Signin Screen
    i. create signin form
    ii. add email and password
    iii. add signin button
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
21. Create Sample users
    i. create user model
    ii. seed sample users
22. Create Signin Backend API
    i. create signin api
    ii. npm install jsonwebtoken
    iii. define generateToken
23. Complete Signin screen
    i. handle submit action
    ii. save token in store and local storage
    iii. show user name in header
24. Create Shipping Screen
    i. create form inputs
    ii. handle save shipping address
    iii. add checkout wizard bar
25. Create Sign Up Screen
    i. create input forms
    ii. handle submit
    iii. create backend api
26. Implement Select Payment Method Screen
    i. create input forms
    ii. handle submit
27. Create Place Order Screen
    i. show cart items, payment, and address
    ii. calculate order summary
28. Implement Place Order Action
    i. handle place order action
    ii. create order create api
