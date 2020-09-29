import room1 from './images/details-1.jpeg';
import room2 from './images/details-2.jpeg';
import room3 from './images/details-3.jpeg';
import room4 from './images/details-4.jpeg';
import img1 from './images/room-1.jpeg';
import img2 from './images/room-2.jpeg';
import img3 from './images/room-3.jpeg';
import img4 from './images/room-4.jpeg';
import img5 from './images/room-5.jpeg';
import img6 from './images/room-6.jpeg';
import img7 from './images/room-7.jpeg';
import img8 from './images/room-8.jpeg';
import img9 from './images/room-9.jpeg';
import img10 from './images/room-10.jpeg';
import img11 from './images/room-11.jpeg';
import img12 from './images/room-12.jpeg';

const extras = [
  'Free Wi-Fi',
  'Wellness Facilities',
  'Concierge',
  'Daily Housekeeping',
  'Entertainment',
  "Kids' Club",
  'Parking',
  'Comfy beds',
  'Barbeque',
  'Private Garden',
  'Safe deposit box',
  'Luxuriously stocked mini-bars',
  'Private area on the beach with personal sunbeds & umbrella',
];

export default [
  {
    sys: {
      id: '1',
    },
    fields: {
      name: 'studio suite',
      slug: 'studio-suite',
      type: 'studio',
      price: 100,
      size: 200,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        'A 10-minutes walk from an International Airport, Modern balconies and free Wi-Fi. Upgraded units add ocean views, and some have up to 5 bedrooms. Free breakfast, pets friendly and there is a top class kitchen, a beachside restaurant. Spa, as well as a fitness area and an outdoor and indoor swimming pool with a bar, free parking facility, indoor entertainment, air conditioning and private garden, a free airport shuttle service.',
      extras,
      images: [
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '2',
    },
    fields: {
      name: 'quad suite',
      slug: 'quad-suite',
      type: 'quad',
      price: 150,
      size: 250,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        'A 10-minutes walk from an International Airport, Modern balconies and free Wi-Fi. Upgraded units add ocean views, and some have up to 5 bedrooms. Free breakfast, pets friendly and there is a top class kitchen, a beachside restaurant. Spa, as well as a fitness area and an outdoor and indoor swimming pool with a bar, free parking facility, indoor entertainment, air conditioning and private garden, a free airport shuttle service.',
      extras,
      images: [
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '3',
    },
    fields: {
      name: 'triple standard',
      slug: 'triple-standard',
      type: 'triple',
      price: 250,
      size: 300,
      capacity: 1,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        'A 10-minutes walk from an International Airport, Modern balconies and free Wi-Fi. Upgraded units add ocean views, and some have up to 5 bedrooms. Free breakfast, pets friendly and there is a top class kitchen, a beachside restaurant. Spa, as well as a fitness area and an outdoor and indoor swimming pool with a bar, free parking facility, indoor entertainment, air conditioning and private garden, a free airport shuttle service.',
      extras,
      images: [
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '4',
    },
    fields: {
      name: 'mini suite',
      slug: 'mini-suite',
      type: 'mini',
      price: 300,
      size: 400,
      capacity: 1,
      pets: true,
      breakfast: true,
      featured: false,
      description:
        'A 10-minutes walk from an International Airport, Modern balconies and free Wi-Fi. Upgraded units add ocean views, and some have up to 5 bedrooms. Free breakfast, pets friendly and there is a top class kitchen, a beachside restaurant. Spa, as well as a fitness area and an outdoor and indoor swimming pool with a bar, free parking facility, indoor entertainment, air conditioning and private garden, a free airport shuttle service.',
      extras,
      images: [
        {
          fields: {
            file: {
              url: img4,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '5',
    },
    fields: {
      name: 'master suite',
      slug: 'master-suite',
      type: 'master',
      price: 200,
      size: 300,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        'A 10-minutes walk from an International Airport, Modern balconies and free Wi-Fi. Upgraded units add ocean views, and some have up to 5 bedrooms. Free breakfast, pets friendly and there is a top class kitchen, a beachside restaurant. Spa, as well as a fitness area and an outdoor and indoor swimming pool with a bar, free parking facility, indoor entertainment, air conditioning and private garden, a free airport shuttle service.',
      extras,
      images: [
        {
          fields: {
            file: {
              url: img5,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '6',
    },
    fields: {
      name: 'twin suite',
      slug: 'twin-suite',
      type: 'twin',
      price: 250,
      size: 350,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        'A 10-minutes walk from an International Airport, Modern balconies and free Wi-Fi. Upgraded units add ocean views, and some have up to 5 bedrooms. Free breakfast, pets friendly and there is a top class kitchen, a beachside restaurant. Spa, as well as a fitness area and an outdoor and indoor swimming pool with a bar, free parking facility, indoor entertainment, air conditioning and private garden, a free airport shuttle service.',
      extras,
      images: [
        {
          fields: {
            file: {
              url: img6,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '7',
    },
    fields: {
      name: 'king suite',
      slug: 'king-suite',
      type: 'king',
      price: 300,
      size: 400,
      capacity: 2,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        'A 10-minutes walk from an International Airport, Modern balconies and free Wi-Fi. Upgraded units add ocean views, and some have up to 5 bedrooms. Free breakfast, pets friendly and there is a top class kitchen, a beachside restaurant. Spa, as well as a fitness area and an outdoor and indoor swimming pool with a bar, free parking facility, indoor entertainment, air conditioning and private garden, a free airport shuttle service.',
      extras,
      images: [
        {
          fields: {
            file: {
              url: img7,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '8',
    },
    fields: {
      name: 'queen suite',
      slug: 'queen-suite',
      type: 'queen',
      price: 400,
      size: 500,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        'A 10-minutes walk from an International Airport, Modern balconies and free Wi-Fi. Upgraded units add ocean views, and some have up to 5 bedrooms. Free breakfast, pets friendly and there is a top class kitchen, a beachside restaurant. Spa, as well as a fitness area and an outdoor and indoor swimming pool with a bar, free parking facility, indoor entertainment, air conditioning and private garden, a free airport shuttle service.',
      extras,
      images: [
        {
          fields: {
            file: {
              url: img8,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '9',
    },
    fields: {
      name: 'double suite',
      slug: 'double-suite',
      type: 'double',
      price: 300,
      size: 500,
      capacity: 3,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        'A 10-minutes walk from an International Airport, Modern balconies and free Wi-Fi. Upgraded units add ocean views, and some have up to 5 bedrooms. Free breakfast, pets friendly and there is a top class kitchen, a beachside restaurant. Spa, as well as a fitness area and an outdoor and indoor swimming pool with a bar, free parking facility, indoor entertainment, air conditioning and private garden, a free airport shuttle service.',
      extras,
      images: [
        {
          fields: {
            file: {
              url: img9,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '10',
    },
    fields: {
      name: 'single suite',
      slug: 'single-suite',
      type: 'single',
      price: 350,
      size: 550,
      capacity: 4,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        'A 10-minutes walk from an International Airport, Modern balconies and free Wi-Fi. Upgraded units add ocean views, and some have up to 5 bedrooms. Free breakfast, pets friendly and there is a top class kitchen, a beachside restaurant. Spa, as well as a fitness area and an outdoor and indoor swimming pool with a bar, free parking facility, indoor entertainment, air conditioning and private garden, a free airport shuttle service.',
      extras,
      images: [
        {
          fields: {
            file: {
              url: img10,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '11',
    },
    fields: {
      name: 'family suite',
      slug: 'family-suite',
      type: 'family',
      price: 400,
      size: 600,
      capacity: 5,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        'A 10-minutes walk from an International Airport, Modern balconies and free Wi-Fi. Upgraded units add ocean views, and some have up to 5 bedrooms. Free breakfast, pets friendly and there is a top class kitchen, a beachside restaurant. Spa, as well as a fitness area and an outdoor and indoor swimming pool with a bar, free parking facility, indoor entertainment, air conditioning and private garden, a free airport shuttle service.',
      extras,
      images: [
        {
          fields: {
            file: {
              url: img11,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '12',
    },
    fields: {
      name: 'super deluxe',
      slug: 'super-deluxe',
      type: 'super',
      price: 500,
      size: 700,
      capacity: 6,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        'A 10-minutes walk from an International Airport, Modern balconies and free Wi-Fi. Upgraded units add ocean views, and some have up to 5 bedrooms. Free breakfast, pets friendly and there is a top class kitchen, a beachside restaurant. Spa, as well as a fitness area and an outdoor and indoor swimming pool with a bar, free parking facility, indoor entertainment, air conditioning and private garden, a free airport shuttle service.',
      extras,
      images: [
        {
          fields: {
            file: {
              url: img12,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '13',
    },
    fields: {
      name: 'presidential',
      slug: 'presidential-room',
      type: 'presidential',
      price: 600,
      size: 1000,
      capacity: 10,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        'A 10-minutes walk from an International Airport, Modern balconies and free Wi-Fi. Upgraded units add ocean views, and some have up to 5 bedrooms. Free breakfast, pets friendly and there is a top class kitchen, a beachside restaurant. Spa, as well as a fitness area and an outdoor and indoor swimming pool with a bar, free parking facility, indoor entertainment, air conditioning and private garden, a free airport shuttle service.',
      extras,
      images: [
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
];
