import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { updateUser } from '../../services/action/user.action';

const UpdateData = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.usersReducer);
    const [inputData, setInputData] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(updateUser(inputData.id, inputData));
        navigate('/viewData');
    }

    return (
        <Container>
            <h2 className='text-center mt-5'>Update  Data</h2>
            <Row>
                <Form onSubmit={handleSubmit} className='mt-4'>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter Name" value={inputData.name} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" value={inputData.email} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" name='phone' placeholder="Enter phone" value={inputData.phone} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Avatar</Form.Label>
                            <Form.Control type="text" name='image' placeholder="Enter image URL" value={inputData.image} onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Row>
        </Container>
    );
}

export default UpdateData;
