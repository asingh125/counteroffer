import Card from "react-bootstrap/Card";
import { useState } from "react";
import NavBar from "react-bootstrap/NavBar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./HomePage.css";

const HomePage = () => {
  const [games, setGames] = useState([
    { gameName: "1", amount: "$50" },
    { gameName: "2", amount: "$25" },
    { gameName: "3", amount: "-$10" },
  ]);

  const Game = (props) => {
    return (
      <Card>
        <h1>Game Name {props.gameName}</h1>
        <h1>Amount Won {props.amount}</h1>
      </Card>
    );
  };

  let balance = 10;
  return (
    <div className="HomePage">
      <h1 className="h"> Your Dashboard</h1>

      <Card className="balacne" style={{ color: "blue" }}>
        Your current balance: {balance}
      </Card>
      <Card className="mx-auto" style={{ width: "50rem" }}>
        <Card.Body>
          <Container>
            {" "}
            <Row>
              <Col>
                <Card.Text>Game won: 1 </Card.Text>
              </Col>
              <Col>
                <Card.Text>Amount: 5 </Card.Text>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <Card className="mx-auto" style={{ width: "50rem" }}>
        <Card.Body>
          <Container>
            {" "}
            <Row>
              <Col>
                <Card.Text>Game won: 1 </Card.Text>
              </Col>
              <Col>
                <Card.Text>Amount: 5 </Card.Text>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <Card className="mx-auto" style={{ width: "50rem" }}>
        <Card.Body>
          <Container>
            {" "}
            <Row>
              <Col>
                <Card.Text>Game won: 1 </Card.Text>
              </Col>
              <Col>
                <Card.Text>Amount: 5 </Card.Text>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <Card className="mx-auto" style={{ width: "50rem" }}>
        <Card.Body>
          <Container>
            {" "}
            <Row>
              <Col>
                <Card.Text>Game won: 1 </Card.Text>
              </Col>
              <Col>
                <Card.Text>Amount: 5 </Card.Text>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <Card className="mx-auto" style={{ width: "50rem" }}>
        <Card.Body>
          <Container>
            {" "}
            <Row>
              <Col>
                <Card.Text>Game won: 1 </Card.Text>
              </Col>
              <Col>
                <Card.Text>Amount: 5 </Card.Text>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePage;
