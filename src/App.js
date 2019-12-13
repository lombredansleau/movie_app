import React from 'react';
import PropTypes from "prop-types";

const ramens = [
  {id : 1,name : "짜파게티",hotLv : "0",rating:3.9 },
  {id : 2,name : "신라면",hotLv : "3",rating:4.7 },
  {id : 3,name : "틈새라면",hotLv : "6",rating:4.3}
];

function Ramen({name, hotLv, rating}) {
return (
        <div> 
          <h1>I Like {name} !! this food HotLevel is {hotLv}</h1>
          <h3>{rating}/5.0</h3>
        </div>
       ); 
}

Ramen.propTypes = {
  name : PropTypes.string.isRequired,
  hotLv : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};

function App() {
  return  (
            <div className="App" >
              {ramens.map(
                  ramen => <Ramen key={ramen.id} name={ramen.name} hotLv={ramen.hotLv} rating={ramen.rating} />
              )}
            </div>
          );
}

export default App;
