import React from 'react';
import LoadingGearGif from '../images/gif/loading-gear.gif';

export default function Loading() {
  return (
    <div className="loading">
      <img src={LoadingGearGif} alt="loading..." />
      <h4>Rooms data loading...</h4>
    </div>
  );
}
