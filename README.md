# BEAUTYBEBO.COM BACKEND

## About

- This is the backend of beautybebo.com
- In this backend you can get the follwing routes or endpoint
  - signup
  - login
  - get all users
  - get user by id
  - delete user
  - get all products
  - get product by id
  - update product details
  - delete product

## Files and Folder Structure

- ### controllers
  - [cartController.js](./controllers/cartController.js)
  - [navController.js](./controllers/navController.js)
  - [orderController.js](./controllers/orderController.js)
  - [productController.js](./controllers/productController.js)
  - [userController.js](./controllers/userController.js)
- ### middlewares
  - [verifyToken.js](./middlewares/verifyToken.js)
- ### models
  - [Cart.js](./models/Cart.js)
  - [Navbar.js](./models/Navbar.js)
  - [Order.js](./models/Order.js)
  - [Product.js](./models/Product.js)
  - [User.js](./models/User.js)
- ### routes
  - [carts.js](./routes/carts.js)
  - [navbar.js](./routes/navbar.js)
  - [orders.js](./routes/orders.js)
  - [products.js](./routes/products.js)
  - [users.js](./routes/users.js)
- ### .env
- ### .gitignore
- ### [index.js](./index.js)
- ### [package-lock.json](./package-lock.json)
- ### [package.json](./package.json)

## key need to add in .env file

- PORT
- MONGODB_URL
- JWT_SECRET
- PASS_SECRET
