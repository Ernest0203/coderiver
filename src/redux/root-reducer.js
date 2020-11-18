import { combineReducers } from 'redux';
import layout from './layout';

import userAvatar1 from '../assets/images/avatar1.png';
import userAvatar2 from '../assets/images/avatar2.png';
import userAvatar3 from '../assets/images/avatar3.png';
import userAvatar4 from '../assets/images/avatar4.png';
import userAvatar5 from '../assets/images/avatar5.png';
import friendAvatar1 from '../assets/images/friendAvatar1.png';
import friendAvatar2 from '../assets/images/friendAvatar2.png';
import friendAvatar3 from '../assets/images/friendAvatar3.png';

const initialState = {
  users: [
    { name: 'user 1', avatar: userAvatar1 },
    { name: 'Jordan Jackson', avatar: userAvatar2 },
    { name: 'user 2', avatar: userAvatar3 },
    { name: 'user 3', avatar: userAvatar4 },
    { name: 'user 4', avatar: userAvatar5 },
  ],
  friends: [
    { name: 'Caroline',  profession: '', status: 'online', avatar: friendAvatar1, messages: 2},
    { name: 'Claire',  profession: 'Designer', status: 'online', avatar: friendAvatar2},
    { name: 'Lina',  profession: 'Sales Manager', status: 'idle', avatar: friendAvatar3},
    { name: 'Jason',  profession: 'CTO', status: 'online', avatar: ''},
    { name: 'Dash',  profession: 'Design Lead', status: 'idle', avatar: ''},
    { name: 'Jessica',  profession: 'Designer', status: 'online', avatar: ''},
  ]
};

const general = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  general,
  layout,
});
