import React from "react";
import MoviesData from "./MoviesData";

const Movies = () => {
  return (
    <>
      <h1 className="text-center bg-info">TOP RATING MOVIES</h1>
      <div className="container">
        <div className="row">
          {MoviesData.map((currentValue, Index) => {
            return <>
            <div className="col-md-4">
            <h1 className="bg-warning">{currentValue.rating}</h1>
            <div className="card">
            <img src={currentValue.cover} alt={currentValue.cover}/>
            <h1>NAME:{currentValue.name}</h1>
            <p>DURATION:{currentValue.duration}</p>
            <p>RELEASE:{currentValue.release}</p>
            
            
            </div>
            </div>
            
            
            </>;
          })}
        </div>
      </div>
    </>
  );
};

export default Movies;
