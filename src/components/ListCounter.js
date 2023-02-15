import React, { useEffect } from "react";
import CustomCard from "./CustomCard";
import { Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";

const ListCounter = ({ movieList, removeMovie }) => {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    setDisplay(movieList);
  }, [setDisplay, movieList]);

  const filterMov = (type) => {
    if (type === "all") {
      setDisplay(movieList);
      return;
    }
    const filterMovie = movieList.filter((item) => item.type === type);
    setDisplay(filterMovie);
  };
  return (
    <div className="movie-list mt-5">
      <div className="mb-3">
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary" onClick={() => filterMov("all")}>
            All
          </Button>
          <Button variant="warning" onClick={() => filterMov("awesome")}>
            Awesome
          </Button>
          <Button variant="danger" onClick={() => filterMov("boring")}>
            Boring
          </Button>
        </ButtonGroup>
      </div>

      <div> {display.length} Movies Found!</div>
      <hr />

      <div className="list d-flex flex-wrap justify-content-around gap-2">
        {movieList.map((item, i) => (
          <CustomCard key={i} movie={item} removeDisplay={removeMovie} />
        ))}
      </div>
    </div>
  );
};

export default ListCounter;
