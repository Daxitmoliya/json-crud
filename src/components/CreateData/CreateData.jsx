import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { createUser } from '../../services/action/user.action';
import { useNavigate } from 'react-router';

const CreateData = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        phone: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(inputData));
        navigate('/viewData');
    }

    return (
        <Container>
            <h2 className='text-center mt-5'>Form</h2>
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
                            <Form.Label>Image</Form.Label>
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

export default CreateData;
