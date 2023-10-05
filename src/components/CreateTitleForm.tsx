'use client';

import {FormEvent, useState} from 'react';
import {Button, Form, Row} from 'react-bootstrap';

const CreateTitleForm = () => {
    const [validated, setValidated] = useState(false);
    const [invalidTitle, setInvalidTitle] = useState(true);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;

        if (form.checkValidity()) {
            setInvalidTitle(false);
        } else {
            setInvalidTitle(true);
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Form noValidate onSubmit={handleSubmit} validated={validated}>
            <Row>
                <Form.Group>
                    <Form.Control required type='text' placeholder='제주도 여행 경비 정산' />
                    <Form.Control.Feedback type='invalid' data-invalid={invalidTitle}>
                        정산 목적을 입력해 주세요.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row>
                <Button type='submit'>저장</Button>
            </Row>
        </Form>
    );
};

export default CreateTitleForm;
