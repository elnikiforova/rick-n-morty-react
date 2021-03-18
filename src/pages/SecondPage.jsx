import React from 'react';
import { useSelector } from 'react-redux';
import CharDetails from '../components/CharDetails';

export default function SecondPage() {
  const state = useSelector((state) => state);

  return (
    <div className="cards-wrapper">

      {!state.char && <span>No character selected</span>}

      {state.char && (
      <CharDetails
        title={state.char.name}
        image={state.char.image}
        gender={state.char.gender}
        status={state.char.status}
        location={state.char.location}
      />
      )}
    </div>
  );
}
