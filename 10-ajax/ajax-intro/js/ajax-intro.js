const fetchFact = function () {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
  xhr.send(); // asynchronous

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return; // exit the function, the data isn't available yet.

    const p = document.createElement('p');
    const data = JSON.parse( xhr.responseText );
    p.innerHTML = data.text; // just the fact

    document.body.appendChild( p );
  };
};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact();
