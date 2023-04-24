import React from 'react'
import "./UserCard.css";
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../JS/Actions/user';

const UserCard = ({user}) => {

    const dispatch = useDispatch();

    const handleDelete = (e) => {
      e.preventDefault();
      dispatch(deleteUser(user._id));
      window.location.reload();
    };

  return (
    <div>
    <div className="orderCards">
      <Card>
        <Card.Body className='alg2'>
          <Card.Text>
            <span className="forms">First name :</span>
            {user.firstname}
          </Card.Text>
          <Card.Text>
            <span className="forms">Last name :</span>
            {user.name}
          </Card.Text>
          <Card.Text>
            <span className="forms">E-mail :</span>
            {user.email}
          </Card.Text>
          <Card.Text>
            <span className="forms">Phone:</span>
            {user.phone}
          </Card.Text>
          <Button variant="danger" onClick={handleDelete}>
            Delete user
          </Button>
        </Card.Body>
      </Card>
    </div>
  </div>
  )
}

export default UserCard