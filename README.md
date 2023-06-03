# MERN AMAZONIA

# MERN Stack ECommerce Website

A fully functional e-commerce website, built using the MERN stack (MongoDB, ExpressJS, React, Node.JS).

## Used:

- HTML5, CSS3: Semantic Elements, CSS Grid, Flexbox
- React: Components, Props, Events, Hooks, Router, Axios
- Context API: Store, Reducers, Actions
- Node & Express: Web API, Body Parser, File Upload, JWT
- MongoDB: Mongoose, Aggregation
- Development: ESLint, Babel, Git, GitHub
- Deployment:

## Run locally

### 1. Clone repo

...
$ git clone git@github.com:basir/mern-amazona.git
$ cd mern-amazona
...

### 2. Create .env file

- duplicate .env.example from frontend folder into backend folder and rename .env

### 3. Setup MongoDB

- Local MongoDB
  -Install from https://www.mongodb.com/try/downlaod/community
  -In .env file update MONGODB_URI=mongodb://localhost/amazona
- Atlas Cloud MongoDB
  -Create database at https://cloud.mongodb.com
  -In .env file update MONGODB_URI=mongodb+srv://your-db-connection

### 4. Run backend

$ cd backend
$ npm install
$ npm start

### 5. Run frontend

$ cd frontend
$ npm install
$ nom start

### 6. Seed users and products

http://localhost:5000/api/seed

# Building Steps

1. Install tools
2. Config VS Code - Prettier Extension
3. Create React App
4. Push to GitHub
5. List Products
   - create products array
   - add product images
   - render products
   - style products
6. Add Routing
   - npm install react-router-dom
   - create route for homeScreen
   - create route for productScreen
7. Create Node.JS Server
   - npm init in root folder
   - update package.json set type: module
   - add .js to imports
   - npm install express
   - create server.js
   - add start command as node backend/server.js
   - require express
   - create route for '/' return backend is ready
   - move product.js from frontend to backend
   - create route for '/api/products'
   - return products
   - npm start
8. Fetch Products From Backend
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
11. Create Product And Rating Component
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
    - implement addToCart button click handler
    - check item exist in cart
    - check stock count in backend
15. Create Cart Screen
    - create 2 columns
    - display item list
    - create action column
    - click handler for increase/decrease items in cart
    - click handler for remove item from cart
    - click handler for checkout
16. Create Signin Screen
    - create signin form
    - add email and password
    - add signin button
17. Connect To MongoDB
    - create atlas mongodb database
    - install local mongodb database
    - npm install mongoose
    - connect to mongodb database
18. Seed Products
    - create product model
    - create user model
    - create seed route
    - use route in server.js
    - seed products
19. Create Users
    - create user model
    - seed users
20. Create Signin Backend API
    - create signin api
    - npm install jsonwebtoken
    - define generateToken
21. Create Signin Screen
    - handle submit action
    - save token in store and local storage
    - show user name in header
22. Create Shipping Screen
    - create form inputs
    - handle saveShippingAddress
    - add checkout wizard bar
23. Create Signup Screen
    - create input forms
    - handle submit
    - create backend api
24. Create PaymentMethod Screen
    - create input forms
    - handle submit
25. Create PreviewOrder Screen
    - show cart items, payment, and address
    - calculate order summary
26. Implement Place Order Action
    - handle placeOrder action
    - create create order api
27. Create Order Screen
    - create backend api for 'order/:id'
    - fetch order api in frontend
    - show order information in two columns
28. Implement Pay With PayPal
    - generate paypal client id
    - create api to return client id
    - install react-paypal-js
    - use paypal scrpit provider in index.js
    - use paypal script reducer in orderscreen
    - implement loadpaypalscript function
    - render paypal button
    - implement onapprove payment function
    - create pay order api in backend
29. Display Order History
    - create orderHistory screen
    - create order history api
    - use api in the frontend
30. Create Profile Screen
    - get user info from context
    - show user information
    - create user update api
    - update user info
31. Publish To Render.Com
    - create and config node project
    - serve build folder in frontend folder
    - create render.com account
    - connect it to github
    - set database connection in render.com env variables
    - commit and push
32. Add Sidebar and Search Box
    - add sidebar
    - add search box
33. Create Search Screen
    - show filters
    - create api for searching products
    - display results
34. Create Admin Menu
    - define protected route component
    - define admin route component
    - add menu for admin in header
35. Create Dashboard Screen
    - create dashboard ui
    - implement backend ui
    - connect ui to backend
36. Create Products Screen
    - create products list ui
    - implement backend api
    - fetch data
    - create product button
    - implement backend api
    - handle on click
37. Create Edit Product Screen
    - create edit button
    - create edit product ui
    - display product info in input boxes
38. Implement Update Product
    - create edit product backend api
    - handle update click
39. Implement Upload Product Image
    - create cloudinary account
    - use the api key in env file
    - handle uplaod file
    - implement backend api to upload
40. Implement Delete Product
    - show delete button
    - implement backend api
    - handle on click
41. Create List Orders Screen
    - implement backend api
    - fetch and display orders
42. Implement Deliver Order
    - add deliver button
    - handle click action
    - implement backend api for deliver
43. Implement Delete Order
    - add delete button to admin/orders page
    - handle click action
    - implement backend api for delete
44. Create User List Screen
    - implement backend api
    - fetch and display users
45. Implement Edit User
    - add edit button to admin/user page
    - implement backend api
    - handle edit click
46. Implement Delete User
    - add delete button to admin/user page
    - handle click action
    - implement backend api for delete
47. Implement Choose Address Using Google Maps
    - create google maps credentials
    - update .env file with google api key
    - create api to send google api to frontend
    - create map screen
    - fetch google api
    - get user location
    - install @react-google-maps/api
    - apply map to checkout screen
48. Email Order Reciept Using Mailgun
    - create mailgun account
    - add and verify your domain to mailgun
    - install mailgun.js
    - set api key in env file
    - change pay order in orderRouter
    - email order receipt
49. Implement Product Reviews
    - create review form
    - handle submit
    - implement backend api for review
50. Implement Upload Multiple Images
    - add images to product model
    - get images in edit screen
    - show images in product screen
51. Update to React18 (If Needed)
    - install node-check-updates
    - ncu -u
    - remove package-lock.json
    - npm install
    - replace render with createRoot
    - fix LinkContainer error
52. Forget And Reset Password
    - set base url and mailgun key in .env file
    - set editor config in vs code setting
    - set port to 4000 to prevent issue in macos:
      server.js
      `const port = process.env.PORT || 4000;`
      frontend/package.json
      `"proxy": "http://localhost:4000",`
    - create baseUrl function in utils.js
    - create forget/reset password backend api
    - add forget password link to signinScreen
    - create forget password screen
    - create reset password screen
    - add resetToken field to userModel
    - add routes in app.js
