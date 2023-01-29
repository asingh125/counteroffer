import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const CaseCard = (props) => {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)

  const r = {name: "Zero-Sum Salary", 
  id: "1",
  summary: "Negotiation on base pay between new grad and hiring manager.",
  instructions: "You are an employee at Google. You are a new grad negotiating your salary.",
  money: "$150k available to give out", 
  parties: "2 parties: employer and employee",
  role1: "Hiring Manager",
  role2: "New Graduate",
  sum1: "You are a hiring manager at Google who has recently hired a new grad for your team. You would like to compensate them fairly, but you know that for every dollar you give them, your boss will take it out of your bonus.", 
  sum2: "You are a recent grad who has made it through the interview process at Google. You would like to get as high a salary as possible without tarnishing your reputation with your new manager.",
  rules: "Zero-sum game (for every dollar that one person gains, the other person has to give up). If the parties do not come to agreement, both get nothing."
  }

  // onClick takes in the num of the role, sends API req to join game, and redirects to game page
  const onClick = (role) => () => {
    // Send API request for joining
    const success = true
    if (success) {
      // redirect
      navigate(`/case/${props.id}/${role}`)
    }
  }

  return (
    <>
    <Card onClick={() => setModalOpen(true)}>
      <Card.Title><h3>{props.name}</h3></Card.Title>
      <br/>
      <Card.Body>
        <p>{props.summary}</p>
      </Card.Body>

    </Card>

    <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
      <Modal.Header closeButton><Modal.Title><h3>{props.name}</h3></Modal.Title></Modal.Header>
      <Modal.Body>
      <Container>
          <Row>

            <Col>
              <h6>{props.role1}</h6>
              <p>{props.sum1}</p>
              <Button onClick={onClick(1)}>Play as {props.role1}</Button>
            </Col>

            <Col>
              <h6>{props.role2}</h6>
              <p>{props.sum2}</p>
              <Button onClick={onClick(2)}>Play as {props.role2}</Button>
            </Col>

          </Row>
        </Container>
      </Modal.Body>
    </Modal>
    
    </>
    

  )



}

export default CaseCard