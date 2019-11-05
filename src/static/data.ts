export const STARS = [
  {
    id: 1,
    name: 'Angular',
    description: 'The framework, written in pure JavaScript, was intended to decouple an application’s logic from ' +
      'DOM manipulation, and aimed at dynamic page updates. Still, it wasn’t very intrusive: you could have only a ' +
      'part of the page controlled by AngularJS. This framework introduced many powerful features allowing the developer ' +
      'to create rich, single-page applications quite easily.',
    type: 'FRONT',
    links: [2, 5]
  },
  {
    id: 2,
    name: 'Express',
    description: 'Express is a minimal and flexible Node.js web application framework that provides a robust set ' +
      'of features for web and mobile applications',
    type: 'BACK',
    links: [1, 4]
  },
  {
    id: 3,
    name: 'React',
    description: 'React makes it painless to create interactive UIs. Design simple views for each state in your ' +
      'application, and React will efficiently update and render just the right components when your data changes.' +
      'Declarative views make your code more predictable and easier to debug.',
    type: 'FRONT',
    links: [4, 6]
  },
  {
    id: 4,
    name: 'NextJs',
    description: 'With Next.js, server rendering React applications has never been easier, no matter where your data is coming from.',
    type: 'BACK',
    links: [3, 2]
  },
  {
    id: 5,
    name: 'Redux',
    description: 'Redux helps you write applications that behave consistently, run in different environments (client,' +
      ' server, and native), and are easy to test.',
    type: 'LIBRARY',
    links: [1]
  },
  {
    id: 6,
    name: 'Web progressive',
    description: 'A Progressive Web App (PWA) is a web app that uses modern web capabilities to deliver an ' +
      'app-like experience to users. ... You can deploy your app as a PWA as well as Native app and take advantage of ' +
      'both channels. Ionic allows you to ship your app to not only the app store, but also deploy to the mobile web ' +
      'as a PWA.',
    type: 'LIBRARY',
    links: [3]
  }
];
