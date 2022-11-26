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
      //_id: '1',
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
      //_id: '2',
      name: 'Cartier Diamond Earrings',
      slug: 'diamond-earrings',
      category: 'Earrings',
      image: '/images/p6.jpg',
      price: 8400,
      countInStock: 0,
      brand: 'Cartier',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality earrings',
    },

    {
      //_id: '3',
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
      //_id: '4',
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
    },
  ],
};
export default data;
