import React, { useState } from 'react';

const Search = (props) => {
  const [username, setUsername] = useState(''); // array destructuring

  const _handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/details/${ username }`);
  };

  return (
    <div>
      <h2>Search Github by username</h2>
      <form onSubmit={ _handleSubmit }>
        <label>
          <input type="search" onInput={ (e) => setUsername(e.target.value) }/>
        </label>
        <button>Search { username ? 'for ' + username : '' }</button>
      </form>
    </div>
  );
}

export default Search;
