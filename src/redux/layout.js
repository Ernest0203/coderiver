import avatar from '../assets/images/avatar-big.png';

const initialState = {
  statistics: [
    { type: 'new orders', quantity: '3,594', diff: 13 },
    { type: 'total sales', quantity: '105,990', diff: 4 },
    { type: 'total paid out', quantity: '$50,890', diff: -21 },
    { type: 'new customers', quantity: '453', diff: -5 },
  ],
  table: [
    { type: 'Direct, email, IM', views: 54, sales: 12, conversion: 10.5, total: 50 },
    { type: 'note.com', views: 96, sales: 24, conversion: 25, total: 10 },
    { type: 'Recommended', views: 5, sales: 5, conversion: 100, total: 10 },
    { type: 'dribbble.com', views: 1, sales: 0, conversion: 0.0, total: 0 },
    { type: 'google.co.uk', views: 5, sales: 0, conversion: 0.0, total: 0 },
    { type: 'google.com.tr', views: 2, sales: 0, conversion: 0.0, total: 0 },
    { type: 'mail.google.com', views: 1, sales: 0, conversion: 0.0, total: 0 },
    { type: 'facebook.com', views: 5, sales: 0, conversion: 0.0, total: 0 },
  ],
  profile: {
    avatar: avatar,
    name: 'Jordan Jackson',
    profession: 'beta tester',
    rights: 'ultimate user',
    email: 'jordan.jackson@dashboard.com',
    mobile: '+44 (0) 7887 665 588',
    level: 'senior (50k+)',
    limit: '450',
    bio: 'Jordan graduated from Cornell University in 2004 with a Bachelor degree in computer science and a specialization in mathematics. While there, he published two articles on Code-project.',
    skills: [
      { name: 'photography', background: '#0474C8' },
      { name: 'teacher', background: '#45B854' },
      { name: 'traveler', background: '#8191A6' },
      { name: 'photography', background: '#F86B67' },
    ]
  },
  events: [
    { name: 'Super Photography 2016', date: 'January 13th, Vienna - 6:30 PM', label: 'photography', background: '#0474C8'},
    { name: 'Super Photography 2016', date: 'January 13th, Vienna - 6:30 PM', label: 'design', background: '#37ACC1'},
  ]
};

export default function files(state = initialState, action) {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
}