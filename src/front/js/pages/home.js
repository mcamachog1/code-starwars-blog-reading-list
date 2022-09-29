import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Example from "../component/example";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    try {
      let url = "https://www.swapi.tech/api/people";
      let response = await fetch(url);
      let data = await response.json();
      setPeople(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Good!
    getPeople();
  }, []);

  return (
    <Card style={{ width: "18rem" }}>
      <div>
        {console.log(JSON.stringify(people, null, 2))}
        {/* {console.log(Object.values(people).map(e))};
        {Object.values(people).map((i) =>
          <p key={i.uid}>{i.name}</p>
          console.log(i)
        )} */}
      </div>

      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
