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
  const [planets, setPlanets] = useState([]);

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
  const getPlanets = async () => {
    try {
      //"https://www.swapi.tech/api/planets";
      let url = "https://www.swapi.tech/api/planets";
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        setPlanets(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Good!
    getPeople();
    getPlanets();
  }, []);

  return (
    <div>
      <div className="contenedor-subtitulo container mb-3">
        <h2>Personajes</h2>
      </div>
      <div className="contenedor-personajes container">
        {console.log(JSON.stringify(people, null, 2))}
        {people.map((item, index) => {
          return <MyCard item={item} type="characters" key={index} />;
        })}
      </div>
      <div className="contenedor-subtitulo container my-3">
        <h2>Planetas</h2>
      </div>
      <div className="contenedor-planetas container mb-3">
        {console.log(JSON.stringify(planets, null, 2))}
        {planets.map((item, index) => {
          return <MyCard item={item} type="planets" key={index} />;
        })}
      </div>
    </div>
  );
};
