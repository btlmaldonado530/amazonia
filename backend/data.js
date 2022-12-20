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
    {
      //_id:'1',
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
      //_id:'2',
      name: 'Circuit Board Pencil holder',
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
      //_id:'3',
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
      //_id:'4',
      name: "There's no place like home Sign",
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
