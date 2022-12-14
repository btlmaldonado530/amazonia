# MERN AMAZONIA

# MERN Stack ECommerce Website

# Steps

1. Install tools
2. Config VS Code
3. Create React App
4. Push to GitHub
5. List Products
   - create products array
   - add product images
   - render products
   - style products
6. Add Routing
   - npm install react-router-dom
   - create route for home screen
   - create router for product screen
7. Create Node.JS Server
   - run npm init in root folder
   - update package,json set type: module
   - add .js to imports
   - npm install express
   - create server.js
   - add start command as node backend/server.js
   - require express
   - create route for / return backend is ready
   - move product.js from frontend to backend
   - create route for /api/products
   - return products
   - run npm start
8. Fetch Products from Backend
   - set proxy in package.json
   - npm install axios
   - use state hook
   - use effect hook
   - use reducer hook
9. Manage State By Reducer Hook
   - define reducer
   - update fetch data
   - get state from useReducer
10. Add Bootstrap UI Framework
    - npm install react-bootstrap bootstrap
    - update App.js
11. Create Product and Rating Component
    - create rating component
    - create product component
    - use rating component in product component
12. Create Product Details Screen
    - fetch product from backend
    - create 3 columns (image, info, action)
13. Create Loading and Message Components
    - create loading component
    - use spinner component
    - create message component
    - create utils.js to define getError function
14. Implement Add To Cart
    - create react context
    - define reducer
    - create store provider
    - implement add to cart button click handler
15. Complete Add To Cart
    - check item exist in cart
    - check stock count in backend
16. Create Cart Screen
    - create 2 columns
    - display item list
    - create action column
17. Complete Cart Screen
    - click handler for increase/decrease itme in cart
    - click handler for remove itme from cart
    - click handler for checkout
18. Create Signin Screen
    - create signin form
    - add email and password
    - add signin button
19. Connect to MongoDB
    - create atlas mongoDB database
    - install local mongodb database
    - npm install mongoose
    - connect to mongodb database
20. Seed Sample Products
    - create product model
    - create user model
    - create seed route
    - use route in server.js
    - seed sample product
21. Create Sample users
    - create user model
    - seed sample users
22. Create Signin Backend API
    - create signin api
    - npm install jsonwebtoken
    - define generateToken
23. Complete Signin screen
    - handle submit action
    - save token in store and local storage
    - show user name in header
24. Create Shipping Screen
    - create form inputs
    - handle save shipping address
    - add checkout wizard bar
25. Create Sign Up Screen
    - create input forms
    - handle submit
    - create backend api
26. Implement Select Payment Method Screen
    - create input forms
    - handle submit
27. Create Place Order Screen
    - show cart items, payment, and address
    - calculate order summary
28. Implement Place Order Action
    - handle place order action
    - create order create api
29. Create Order Screen
    - create backend api for order/:id
    - fetch order api in frontend
    - show order information in two columns
30. Pay Order By PayPal
    - generate paypal client id
    - create api to return client id
    - install react-paypal-js
    - use paypal scrpit provider in index
    - use paypal script reducer in order screen
    - implement load paypal script function
    - render paypal button
    - implement onapprove payment function
    - create pay order api in backend
31. Display Order History
    - create order screen
    - create order history api
    - use api in the frontend
32. Create Profile Screen
    - get user info from context
    - show user information
    - create user update api
    - update user info
33. Publish to Heroku (ended up removing from Heroku - no longer free)
    - create and config node project
    - serve build folder in frontend folder
    - create heroku account
    - connect it to github
    - create mongodb atlas database
    - set database connection in heroku env variables
    - commit and push
34. Add Sidebar and Search Box
    - add sidebar
    - add search box
35. Create Search Screen
    - show filters
    - create api for searching products
    - display results
36. Create Admin Menu
    - define protected route component
    - define admin route component
    - add menu for admin in header
37. Upgrade to React 18
    - upgrade all packages in fromntend folder
    - remove package-lock.json and node_modules
    - install upgraded packages
    - replace render with create root
    - fix LinkContainer to props error
