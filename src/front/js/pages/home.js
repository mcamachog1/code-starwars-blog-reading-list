import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import { MyCard } from "../component/mycard";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Example from "../component/example";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    try {
      //"https://www.swapi.tech/api/people";
      let url = "https://www.swapi.tech/api/people";
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        setPeople(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Good!
    getPeople();
  }, []);

  return (
    <div>
      {console.log(JSON.stringify(people, null, 2))}
      {people.map((item, index) => {
        return <MyCard item={item} key={index} />;
      })}
    </div>
  );
};
