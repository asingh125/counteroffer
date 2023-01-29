import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Alert from 'react-bootstrap/Alert';

const LoginPage = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [displayAlert, setDisplayAlert] = useState(false)

  const onClick = () => {
    // Log in API

    const success = false //hard-coded in for now

    // If response is 'username already exists': 
    if (!success) {
      setDisplayAlert(true)
    }

    // Else, sign up correctly and redirect to homepage
    else {
      // Log in API request
      navigate('/')
    }

  }

  return (
    <div style={{margin:"auto", width:"50%", padding:"10%"}}>
      <Card style={{padding:"10%"}}>

        <Card.Title><h2>Log In</h2></Card.Title>

        <Card.Body>
          <Form>
            <Form.Group>
              <FloatingLabel label="Username">
              <Form.Control type="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
              </FloatingLabel>
              {/* <Form.Label> <h6>Username</h6></Form.Label> */}
            </Form.Group>

            <br/>

            <Form.Group>
            <FloatingLabel label="Password">
              <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            </FloatingLabel>
              {/* <Form.Label> <h6>Password</h6> </Form.Label> */}
            </Form.Group>

            <br/>

            <Button variant="primary" onClick={onClick}>
              Log in
            </Button>
          </Form>
          
        </Card.Body>
      </Card>

      <br/>
      {
        displayAlert ? <Alert dismissible variant="danger" onClose={() => setDisplayAlert(false)}><b>ERROR</b>: That username/password combination does not exist.</Alert> : <></>
      }

    </div>
  )
}

export default LoginPage
