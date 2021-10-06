import React, { useContext } from "react";

import { Container, Row } from "react-bootstrap";

import SimpleContext from "../Context/SimpleContext";
import Coffee from "./Coffee";

const CoffeeTable = () => {
  const context = useContext(SimpleContext);

  return (
    <Container>
      <Row>
        {context.coffees.map((cf) => (
          <Coffee
            key={cf.id}
            prd={cf.product}
            rcp={cf.recepie}
            prc={cf.price}
            isrc={cf.imgsrc}
          />
        ))}
      </Row>
    </Container>
  );
};

export default CoffeeTable;
