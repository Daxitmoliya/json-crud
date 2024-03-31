import React, { useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUser, singleUser } from '../../services/action/user.action';
import { useNavigate } from 'react-router';


const ViewData = () => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.usersReducer);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getUser());
    }, []);

    const handleEdit = async (id) => {
        await dispatch(singleUser(id)); 
        navigate('/updateData')
    }

    const handleDelete = async (id) => {
      await  dispatch(deleteUser(id));
    }

    return (
        <Container>
            <h2>View User</h2>
            <Row>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Avatar</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td><img src={user.image} alt="user avatar" style={{ width: '50px', height: '50px' }} /></td>
                                        <td>
                                            <Button variant='info' onClick={() => handleEdit(user.id)}>
                                                Edit
                                            </Button>
                                            ‎ 
                                            <Button variant='danger' onClick={() => handleDelete(user.id)} className='ms-3'>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

export default ViewData;
