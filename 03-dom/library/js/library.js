const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];

const ul = document.createElement('ul'); // detached DOM node

for (let i = 0; i < books.length; i++) {
  const book = books[ i ];
  const item = document.createElement('li');
  item.innerText = `${ book.title } by ${ book.author }`;
  if (book.alreadyRead) {
    item.className = 'already-read';
  }
  ul.appendChild( item );
}

document.body.appendChild(ul);
