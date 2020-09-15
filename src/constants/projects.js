import { v1 as uuidv1 } from 'uuid';
import chemi1 from '../assets/images/chemi1.png';
import chemi2 from '../assets/images/chemi2.png';
import chemi3 from '../assets/images/chemi3.png';
import food1 from '../assets/images/food1.png';
import food2 from '../assets/images/food2.png';
import food3 from '../assets/images/food3.png';
import martha1 from '../assets/images/martha1.png';
import martha2 from '../assets/images/martha2.png';
import martha3 from '../assets/images/martha3.png';
import stacks1 from '../assets/images/stacks1.png';
import stacks2 from '../assets/images/stacks2.png';
import stacks3 from '../assets/images/stacks3.png';
import friends1 from '../assets/images/friends1.png';
import friends2 from '../assets/images/friends2.png';
import friends3 from '../assets/images/friends3.png';

const PROJECTS = [
  { id: uuidv1(), 
    title: 'Chemisearch', 
    stacks: ['HTML', 'SASS'], 
    description: 'This is a search engine called Chemisearch, where you can search for chemical companies that sell these products.', 
    liveLink: 'https://raw.githack.com/MuriloRoque/chemisearch/master/index.html', 
    repo: 'https://github.com/MuriloRoque/chemisearch',
    images: [chemi1, chemi2, chemi3] },
  { id: uuidv1(), 
    title: 'Food Tracker', 
    stacks: ['Ruby on Rails', 'HTML', 'CSS'], 
    description: 'In this app, you can control the total amount of food you consumed from a specific group in a certain period of time.', 
    liveLink: 'https://murilo-food-tracker.herokuapp.com/', 
    repo: 'https://github.com/MuriloRoque/food_tracker_app',
    images: [food1, food2, food3] },
  { id: uuidv1(), 
    title: "Martha's Rescue", 
    stacks: ['Javascript', 'Phaser 3'], 
    description: "This is a shooter game featuring Martha, a battle aircraft pilot who's trying to rescue her father. In this app, you will be able to help her by shooting and destroying the enemy's aircraft.", 
    liveLink: 'https://marthas-rescue.netlify.app/', 
    repo: 'https://github.com/MuriloRoque/marthas_rescue_shooter_game',
    images: [martha1, martha2, martha3] },
  { id: uuidv1(), 
    title: "Stacks Tracker", 
    stacks: ['Ruby on Rails', 'React', 'Bootstrap', 'Redux'], 
    description: "In this app, you are able to track which languages you already know. You can choose which ones you are currently learning and see your learning progress, based on a goal you set.", 
    liveLink: 'https://murilo-stacks-tracker.herokuapp.com/', 
    repo: 'https://github.com/MuriloRoque/stacks_tracker_app',
    images: [stacks1, stacks2, stacks3] },
  { id: uuidv1(), 
    title: "Friends Catalog", 
    stacks: ['React', 'Redux'], 
    description: "This is a catalog for the Friends TV Show. In this website, you can browse through your favorite characters and episodes details.", 
    liveLink: 'https://friends-catalog.netlify.app/', 
    repo: 'https://github.com/MuriloRoque/friends_catalog',
    images: [friends1, friends2, friends3] },
];

export default PROJECTS;