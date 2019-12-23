import '../styles/main.scss';

import firebase from 'firebase';
import 'bootstrap';

import apiKeys from './helpers/apiKeys.json';
import projectCards from './components/projectCards/projectCards';

console.error('this will be my site');

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  projectCards.displayProjectCards();
};

init();
