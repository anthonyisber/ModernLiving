// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'Villa',
    name: 'Isber Villa',
    description:
      'Spacious 3-Bedroom Villa with Pool: This expansive villa offers five beautifully designed bedrooms, making it the perfect retreat for large families or groups. Enjoy the luxury of your own private pool, along with ample space to relax and unwind.',
    image: House1,
    imageLg: House1Lg,
    country: 'Lebanon',
    address: 'Kousba,El Koura North of Lebanon',
    bedrooms: '6',
    bathrooms: '3',
    surface: '2000 m2',
    year: '2016',
    price: '110',
    agent: {
      image: Agent1,
      name: 'Anthony Isber',
      phone: '76 102700',
    },
  },
  {
    id: 2,
    type: 'Villa',
    name: 'Villa Barakat',
    description:
      'Charming Villa with Authentic Local Character: Immerse yourself in the local culture and charm of your destination with this charming villa. With traditional architectural details and a cozy atmosphere, this villa provides an authentic and memorable vacation experience.',
    image: House2,
    imageLg: House2Lg,
    country: 'Lebanon',
    address: 'Bsarma , El Koura Liban Nord',
    bedrooms: '6',
    bathrooms: '3',
    surface: '1500 m2',
    year: '2016',
    price: '140',
    agent: {
      image: Agent2,
      name: 'Serge Barakat',
      phone: '78 837612',
    },
  },
  {
    id: 3,
    type: 'Villa',
    name: 'Villa faraya',
    description:
      'Family-Friendly 3-Bedroom Villa with Pool: Catering to the needs of families, this villa offers three spacious bedrooms suitable for all members. The inviting pool guarantees hours of fun and relaxation, creating lasting memories for everyone.',
    image: House3,
    imageLg: House3Lg,
    country: 'Lebanon',
    address: 'Faraya Lebanon,street number 32',
    bedrooms: '6',
    bathrooms: '3',
    surface: '1200 m2',
    year: '2016',
    price: '170',
    agent: {
      image: Agent3,
      name: 'Georges El Helou',
      phone: '76 501 103',
    },
  },
  {
    id: 4,
    type: 'villa',
    name: 'Dib Residence',
    description:
      'Beachfront Villa with Direct Access to the Sand: Wake up to the sound of waves and step onto the sandy beach right from your doorstep. This beachfront villa offers unparalleled convenience and the ultimate beach vacation experience.',
    image: House4,
    imageLg: House4Lg,
    country: 'Lebanon',
    address: 'Beirut, Hazmieh Beirut street number 23',
    bedrooms: '6',
    bathrooms: '3',
    surface: '1300 m2',
    year: '2016',
    price: '200',
    agent: {
      image: Agent4,
      name: 'Christelle Dib',
      phone: '76 321332',
    },
  },
  {
    id: 5,
    type: 'Villa',
    name: 'jabbaari house',
    description:
      'Modern 4-Bedroom Villa with Pool: Experience contemporary elegance in this modern villa boasting four beautifully designed bedrooms. The sleek pool area complements the stylish interiors, creating a harmonious atmosphere for a truly luxurious stay.',
    image: House5,
    imageLg: House5Lg,
    country: 'Lebanon',
    address: 'Ashrafieh, Beirut front of Macdonalds',
    bedrooms: '5',
    bathrooms: '3',
    surface: '1500 m2',
    year: '2015',
    price: '210',
    agent: {
      image: Agent5,
      name: 'mohammad jabbaari',
      phone: '76 832123',
    },
  },
  {
    id: 6,
    type: 'villa',
    name: 'Villa soufi',
    description:
      'Grand 7-Bedroom Villa, Prepare to be impressed by this grand villa featuring seven luxurious bedrooms. With a sprawling pool area, multiple living spaces, and upscale amenities, this villa is designed for an unforgettable and indulgent stay.',
    image: House6,
    imageLg: House6Lg,
    country: 'Lebanon',
    address: 'Sayda, South of Lebanon',
    bedrooms: '6',
    bathrooms: '3',
    surface: '1488 m2',
    year: '2014',
    price: '220',
    agent: {
      image: Agent6,
      name: 'Karen Sofi',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament Naser',
    description:
      'Cozy and Charming Apartment with Character,Discover the charm of this cozy apartment filled with character and unique details. From exposed brick walls to vintage furnishings, this apartment offers a warm and inviting atmosphere that feels like a home away from home.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Lebanon',
    address: 'Jbeil, street number 35 Floor 5',
    bedrooms: '2',
    bathrooms: '1',
    surface: '320 m2',
    year: '2012',
    price: '20',
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Douglas Apartment',
    description:
      'Beachfront 2-Bedroom Apartment with Ocean Views: Embrace coastal living in this beachfront 2-bedroom apartment offering stunning ocean views. Wake up to the sound of waves, relax on the balcony, and enjoy direct access to the beach for a truly unforgettable seaside getaway.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'Lebanon',
    address: 'Tripoli, Dam & Farez street Floor 2',
    bedrooms: '3',
    bathrooms: '1',
    surface: '260 m2',
    year: '2011',
    price: '30',
    agent: {
      image: Agent8,
      name: 'Juana Douglass',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Merheb apartment',
    description:
      'Modern and Stylish Apartment in the Heart of the City: Experience urban living at its finest in this sleek and contemporary apartment located in the vibrant city center. With modern amenities, trendy decor, and convenient access to local attractions, this apartment is perfect for those seeking a dynamic city lifestyle.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'Lebanon',
    address: 'Tripoli, 200 street First  Floor',
    bedrooms: '2',
    bathrooms: '1',
    surface: '190 m2',
    year: '2011',
    price: '40',
    agent: {
      image: Agent9,
      name: 'Michel Merheb',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'Villa',
    name: 'Villa Maroun',
    description:
      'Stylish 2-Bedroom Villa with Pool: Ideal for a small group or a romantic escape, this stylish villa offers two well-appointed bedrooms. The private pool sets the stage for a romantic ambiance, ensuring a memorable and intimate vacation.',
    image: House7,
    imageLg: House7Lg,
    country: 'Lebanon',
    address: 'Dahr l 3en, North Of lebanon',
    bedrooms: '5',
    bathrooms: '3',
    surface: '1125 m2',
    year: '2015',
    price: '117',
    agent: {
      image: Agent10,
      name: 'Vera Maroun',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'Villa',
    name: 'Villa Khawly',
    description:
      'Serenity and Luxury in a Hilltop Villa: Revel in breathtaking panoramic views from this stunning hilltop villa. With luxurious amenities, a private infinity pool, and a serene atmosphere, this villa promises a peaceful and indulgent retreat.',
    image: House8,
    imageLg: House8Lg,
    country: 'Lebanon',
    address: 'Beirut, Ashrafieh Street number 15',
    bedrooms: '7',
    bathrooms: '2',
    surface: '1200 m2',
    year: '2019',
    price: '145',
    agent: {
      image: Agent11,
      name: 'Sofia khawly',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'Villa',
    name: 'House Harb',
    description:
      'Spacious Family Villa with Resort-Like Amenities: Treat your family to an unforgettable vacation in this spacious villa designed with families in mind. Enjoy resort-like amenities such as a pool, playground, and game room, ensuring everyone has a fantastic time.',
    image: House9,
    imageLg: House9Lg,
    country: 'Lebanon',
    address: 'Hasroun, Mountain of Lebanon street number 32',
    bedrooms: '4',
    bathrooms: '4',
    surface: '1463 m2',
    year: '2015',
    price: '139',
    agent: {
      image: Agent12,
      name: 'Raymond Harb',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'Villa',
    name: 'Villa Isber',
    description:
      'Quaint 2-Bedroom Villa with Pool: Discover the charm of this quaint villa offering two cozy bedrooms. The private pool provides a peaceful retreat, allowing you to unwind and enjoy a serene vacation in a picturesque setting.',
    image: House10,
    imageLg: House10Lg,
    country: 'Lebanon',
    address: 'Kousba el Koura, North of lebanon ',
    bedrooms: '5',
    bathrooms: '2',
    surface: '2000 m2',
    year: '2014',
    price: '180',
    agent: {
      image: Agent1,
      name: 'Anthony Isber',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'Villa',
    name: 'Villa Barakat',
    description:
      'Luxurious 6-Bedroom Villa with Pool: Step into luxury with this expansive villa featuring six opulent bedrooms. With a generous pool area and ample indoor and outdoor living spaces, this villa is perfect for hosting large gatherings or special events.',
    image: House11,
    imageLg: House11Lg,
    country: 'Lebanon',
    address: 'Bsarma el Koura , North of Lebanon',
    bedrooms: '5',
    bathrooms: '2',
    surface: '1900 m2',
    year: '2011',
    price: '213',
    agent: {
      image: Agent2,
      name: 'Serge Barakat',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'Villa',
    name: 'Villa Habib',
    description:
      'Luxurious 4-Bedroom Villa, Step into luxury with this expansive villa featuring six opulent bedrooms. With a generous pool area and ample indoor and outdoor living spaces, this villa is perfect for hosting large gatherings or special events.',
    image: House12,
    imageLg: House12Lg,
    country: 'Lebanon',
    address: 'Amioun, North of Lebanon street number 12',
    bedrooms: '4',
    bathrooms: '3',
    surface: '1655 m2',
    year: '2013',
    price: '221',
    agent: {
      image: Agent3,
      name: 'Jad Habib',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Apartament',
    name: 'Apartament Younes',
    description:
      'Luxurious Penthouse Apartment with Panoramic Views, Indulge in luxury and breathtaking views from this exquisite penthouse apartment. With floor-to-ceiling windows, a private terrace, and upscale amenities, this apartment offers a truly elevated living experience.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Lebanon',
    address: 'Batroun, Kfaraabida Street next to Hilmis',
    bedrooms: '2',
    bathrooms: '1',
    surface: '800 m2',
    year: '2011',
    price: '21',
    agent: {
      image: Agent4,
      name: 'Kaity Younes',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Apartament',
    name: 'Apartament Barakat',
    description:
      'Affordable Studio Apartment with Smart Design. Enjoy a comfortable and budget-friendly stay in this smartly designed studio apartment. With its well-utilized space, modern amenities, and a convenient location, this apartment offers great value for solo travelers or couples looking for a cozy and affordable accommodation.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'Lebanon',
    address: 'Beirut, Hamra Street next to village town',
    bedrooms: '3',
    bathrooms: '1',
    surface: '200 m2',
    year: '2012',
    price: '32',
    agent: {
      image: Agent5,
      name: 'Salim Barakat',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Apartament',
    name: 'Apartament Sarkis',
    description:
      'Executive 1-Bedroom Apartment with Business-Friendly Amenities: Designed for business travelers, this executive 1-bedroom apartment provides a range of amenities tailored for productivity and comfort. From a dedicated workspace to high-speed internet.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Lebanon',
    address: 'daher El 3en, north of lebanon',
    bedrooms: '3',
    bathrooms: '1',
    surface: '300 m2',
    year: '2010',
    price: '38',
    agent: {
      image: Agent6,
      name: 'Antoinette Sarkis',
      phone: '0123 456 78910',
    },
  },
];
