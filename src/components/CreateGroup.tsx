'use client';
import {FormEvent} from 'react';
import {Button, Container, Form, Row, Alert} from 'react-bootstrap';

const CreateGroup = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity()) {
        }
    };
    return (
        <Container>
            <Alert variant='warning'>무엇을 정산할지 입력해 주세요.</Alert>
            <Form noValidate onSubmit={handleSubmit}>
                <Form.Control required type='text' placeholder='제주도 여행 경비' />
            </Form>
            <Button type='submit'>저장</Button>
        </Container>
    );
};

export default CreateGroup;
