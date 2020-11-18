import React from 'react';
import { Link } from 'react-router-dom';

import _ from 'underscore';

const Home = (props) => {

  const _gotoRandomUser = () =>{
    const students = ["sarahhae", "StaceyBros", "brittanylcrocker", "Forcebe", "gcrk", "Giti-mafakheri", "Justinmehmed", "BasilExpeditions", "lightgreener", "RobertStolehorst", "CullsGit", "rjbullough", "faridmasjedi", "JayOverall", "wrudder", "RaengC", "muhulbert85", "mjane668899"];
    const username = _(students).sample();
    props.history.push(`/details/${ username }`);
  }

  return (
    <div>
      <h1>Github Search</h1>
      <Link to="/search">
        <button>Search for a user</button>
      </Link>
      <button onClick={ _gotoRandomUser }>Random user</button>
    </div>
  )
}

export default Home;
