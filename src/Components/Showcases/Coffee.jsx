import React from "react";

import { Card, Button } from "react-bootstrap";

const Coffee = ({ prd, rcp, prc, isrc }) => {
  return (
    <Card style={{ width: "18rem", padding: "1px", margin: "5px" }}>
      <Card.Img variant="top" src={`${isrc}`} />
      <Card.Body>
        <Card.Title style={{ minHeight: "30px" }}>{`${prd}`}</Card.Title>
        <Card.Text style={{ minHeight: "150px" }}>{`${rcp}`}</Card.Text>
        <Button variant="primary">{`${prc}`} ريال</Button>
      </Card.Body>
    </Card>
  );
};

export default Coffee;
