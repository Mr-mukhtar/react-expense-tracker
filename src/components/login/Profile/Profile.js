import React, { useContext, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

import AuthContext from '../../Context/AuthContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Profile = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredURL, setEnteredURL] = useState('');
  const authCtx = useContext(AuthContext);
  const idToken = authCtx.idToken;
  let empty = true;

  const CancelHandler = () => {
    history.push('/');
  };

  if (enteredName !== '' && enteredURL !== '') {
    empty = false;
  }

  const NameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const URLChangeHandler = (event) => {
    setEnteredURL(event.target.value);
  };

  const SubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA91ErKO8Nrqrc-QuZKSABBU-WXT2EpVbw',
        {
          method: 'POST',
          body: JSON.stringify({
            idToken: idToken,
            displayName: enteredName,
            photoUrl: enteredURL,
            returnSecureToken: true,
          }),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (response.ok) {
        alert('Your details have been updated');
      } else {
        throw new Error('Something went wrong here!');
      }

      
      const res = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyA91ErKO8Nrqrc-QuZKSABBU-WXT2EpVbw',
        {
          method: 'POST',
          body: JSON.stringify({ idToken: idToken }),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (!res.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await res.json();
      setEnteredName(data.users[0].displayName);
      setEnteredURL(data.users[0].photoUrl);

      console.log(data);
    } catch (err) {
      alert(err.message);
    }
  };

  const EditDetailsHandler = () => {
    setEnteredName('');
    setEnteredURL('');
  };

  return (
    <div>
      <div>
        <p>Winners never quit, quitters never win</p>
        <hr />
      </div>
      <div className=' d-flex justify-content-end '>
        <Card className='w-50 mx-4 mb-5'>
          <Card.Body>
            <Row className='mb-3'>
              <Col>
                <h6 className='font-monospace' style={{ fontSize: '20px' }}>
                  Contact Details
                </h6>
              </Col>
              <Col className='d-flex justify-content-end'>
                <Button variant='secondary' onClick={CancelHandler}>
                  🔙
                </Button>
              </Col>
            </Row>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label>Full Name:</Form.Label>
                {empty && (
                  <Form.Control
                    type='text'
                    value={enteredName}
                    onChange={NameChangeHandler}
                    placeholder='Enter your full name'
                  />
                )}
                {!empty && (
                  <Form.Control plaintext readOnly defaultValue={enteredName} />
                )}
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Profile Photo URL:</Form.Label>
                {empty && (
                  <Form.Control
                    type='url'
                    value={enteredURL}
                    onChange={URLChangeHandler}
                    placeholder='Enter profile photo URL'
                  />
                )}
                {!empty && (
                  <Form.Control plaintext readOnly defaultValue={enteredURL} />
                )}
              </Form.Group>

              <Card.Footer>
                <Row className='mt-3'>
                  <Col>
                    <Button
                      variant='primary'
                      type='submit'
                      onClick={SubmitHandler}
                    >
                      Update
                    </Button>
                  </Col>
                  <Col>
                    <Button variant='secondary' onClick={EditDetailsHandler}>
                      Edit Details
                    </Button>
                  </Col>
                </Row>
              </Card.Footer>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
