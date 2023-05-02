import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Bernardina',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    /* 
 {
   _id: '5',
   name: 'Nike Slim shirt',
   slug: 'nike-slim-shirt',
   category: 'Shirts',
   image: '/images/p1.jpg', //679px x 829px
   price: 120,
   countInStock: 10,
   brand: 'Nike',
   rating: 4.5,
   numReviews: 10,
   description: 'high quality shirt',
 },
 {
    _id: '6',
   name: 'Adidas Fit Shirt',
   slug: 'adidas-fit-shirt',
   category: 'Shirts',
   image: '/images/p2.jpg', //679px x 829px
   price: 250,
   countInStock: 20,
   brand: 'Adidas',
   rating: 4.0,
   numReviews: 10,
   description: 'high quality product',
 },
 {
 _id: '7',
   name: 'Nike Slim Pant',
   slug: 'nike-slim-pant',
   category: 'Pants',
   image: '/images/p3.jpg', //679px x 829px
   price: 25,
   countInStock: 15,
   brand: 'Nike',
   rating: 4.5,
   numReviews: 14,
   description: 'high quality product',
 },
 {
 _id: '8',
   name: 'Adidas Fit Pant',
   slug: 'adidas-fit-pant',
   category: 'Pants',
   image: '/images/p4.jpg', //679px x 829px
   price: 65,
   countInStock: 5,
   brand: 'Adidas',
   rating: 4.5,
   numReviews: 10,
   description: 'high quality product',
 },
 {
 _id: '9',
   name: 'Cartier Diamond Ring',
   slug: 'diamond-ring',
   category: 'Rings',
   image: '/images/p5.jpg',
   price: 1130,
   countInStock: 10,
   brand: 'Cartier',
   rating: 4.5,
   numReviews: 10,
   description: 'high quality ring',
 },
 {
 _id: '10',
   name: 'Cartier Diamond Earrings',
   slug: 'diamond-earrings',
   category: 'Earrings',
   image: '/images/p6.jpg',
   price: 8400,
   countInStock: 20,
   brand: 'Cartier',
   rating: 4.0,
   numReviews: 10,
   description: 'high quality earrings',
 },
 {
 _id: '11',
   name: 'Bvlgari Serpenti Diamond Necklace',
   slug: 'diamond-necklace',
   category: 'Necklaces',
   image: '/images/p7.jpg',
   price: 4280,
   countInStock: 15,
   brand: 'Bvlgari',
   rating: 4.5,
   numReviews: 14,
   description: 'high quality necklace',
 },
 {
 _id: '12',
   name: 'Bvlgari Serpenti Viper Bracelet',
   slug: 'diamond-bracelet',
   category: 'Bracelets',
   image: '/images/p8.jpg',
   price: 9100,
   countInStock: 5,
   brand: 'Bvlgari',
   rating: 4.5,
   numReviews: 10,
   description: 'high quality bracelet',
 }, */
    {
      //_id: '1',
      name: 'Tribble in Quadrotriticale Sack',
      slug: 'tribble',
      category: 'Collectible',
      image: '/images/p9.jpg',
      price: 15,
      countInStock: 10,
      brand: 'Cartier',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality collectible',
    },
    {
      //_id: '2',
      name: 'Circuit Board Pencil Holder',
      slug: 'pencil-holder',
      category: 'Office',
      image: '/images/p10.jpg',
      price: 70,
      countInStock: 20,
      brand: 'Cartier',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality pencil holder',
    },
    {
      //_id: '3',
      name: 'Please Delete My Browser History Bracelet',
      slug: 'funny-gift',
      category: 'Jewelry',
      image: '/images/p11.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Bvlgari',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality bracelet',
    },
    {
      //_id: '4',
      name: "There's No Place Like Home Sign",
      slug: 'home-sign',
      category: 'Home Decor',
      image: '/images/p12.jpg',
      price: 9,
      countInStock: 5,
      brand: 'Bvlgari',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality sign',
    },
  ],
};
export default data;
