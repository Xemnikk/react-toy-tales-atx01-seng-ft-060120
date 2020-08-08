import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      {props.data.map((toy) => (
        <ToyCard toy={toy} key={toy.id} />
      ))}
    </div>
  );
}

export default ToyContainer;
