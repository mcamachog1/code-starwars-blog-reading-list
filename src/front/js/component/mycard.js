import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../styles/mycard.css";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const MyCard = (props) => {
  console.log("Donde esta el id del personaje?");
  console.log(props);
  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.item.uid}.jpg`}
        alt={`Imagen de ${props.item.name}`}
      />
      <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
