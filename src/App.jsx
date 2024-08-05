import { useState } from 'react';
import { pirateList } from './data.js';
import  './App.css';

function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < pirateList.length - 1;
  const hasBack = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
}


  function handleBackClick() {
    if (hasBack) {
      setIndex(index - 1);
    } else {
      setIndex(pirateList.length - 1);
    }
}

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let pirate = pirateList[index];
  return (
    <>
   
   <div className="container">
   <div>
    
   <img 
        height={200}
        src={pirate.url}
        alt={pirate.alt}
      /> 
   </div>

      <div>
      <button onClick={handleNextClick} className='btn'>
        Next
      </button> 
      <button onClick={handleBackClick}>
      back
      </button>
      </div>

      <div>
      <h2>
        <i>{pirate.name} </i> <br />
        <i>bounty: {pirate.bounty}</i> <br />
        <i>title:{pirate.title}</i>
      </h2>
      </div>

     <div>
     <h3>
        ({index + 1} of {pirateList.length})
      </h3>
     </div>

      <div>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      </div>

      <div>
      {showMore && <p>{pirate.description}</p>}

      </div>

    </div>
    </>
  );
}

export default App
