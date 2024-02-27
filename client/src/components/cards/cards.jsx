import Card from '../card/card';

import './cards.css';

function Cards({allDogs}) {
  const dogsList = allDogs;

  return (
    <div className="cards-list">
      {dogsList?.map((dog)=> (
        <Card dog = {dog} />
      ))}
    </div>
  );
}

export default Cards;