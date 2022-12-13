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
29. Create Order Screen
    i. create backend api for order/:id
    ii. fetch order api in frontend
    iii. show order information in two columns
30. Pay Order By PayPal
    i. generate paypal client id
    ii. create api to return client id
    iii. install react-paypal-js
    iv. use paypal scrpit provider in index
    v. use paypal script reducer in order screen
    vi. implement load paypal script function
    vii. render paypal button
    viii. implement onapprove payment function
    ix. create pay order api in backend
31. Display Order History
    i. create order screen
    ii. create order history api
    iii. use api in the frontend
32. Create Profile Screen
    i. get user info from context
    ii. show user information
    iii. create user update api
    iv. update user info
