import {Container, Row} from 'react-bootstrap';
import CreateTitleForm from './CreateTitleForm';

const CreateTitle = () => {
    return (
        <Container>
            <Row>
                <h2>무엇을 정산할까요?</h2>
            </Row>
            <CreateTitleForm />
        </Container>
    );
};

export default CreateTitle;
