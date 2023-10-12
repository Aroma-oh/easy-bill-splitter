import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page from '@/app/[expense]/page';

const renderComponent = () => {
    render(<Page />);

    const dateInput = screen.getByPlaceholderText(/결제한 날짜/i);
    const descInput = screen.getByPlaceholderText(/무엇을 결제/i);
    const amountInput = screen.getByPlaceholderText(/결제 금액/i);
    const payerInput = screen.getByPlaceholderText(/누가 결제/i);
    const addButton = screen.getByText('추가하기');

    return {
        dateInput,
        descInput,
        amountInput,
        payerInput,
        addButton,
    };
};

describe('정산 메인 페이지', () => {
    describe('비용 추가 컴포넌트', () => {
        test('비용 추가 컴포넌트 렌더링을 검사한다.', () => {
            const {dateInput, descInput, amountInput, payerInput, addButton} = renderComponent();

            expect(dateInput).toBeInTheDocument();
            expect(descInput).toBeInTheDocument();
            expect(amountInput).toBeInTheDocument();
            expect(payerInput).toBeInTheDocument();
            expect(addButton).toBeInTheDocument();
        });
        test('필수 값을 입력하지 않고 "추가하기" 버튼을 누르면 에러메시지를 노출한다.', async () => {
            const {addButton} = renderComponent();

            expect(addButton).toBeInTheDocument();
            await userEvent.click(addButton);

            const descErrorMessage = screen.getByText('무엇을 결제했는지 입력해주세요.');
            expect(descErrorMessage).toHaveAttribute('data-invalid', 'true');

            const payerErrorMessage = screen.getByText('결제한 사람을 선택해주세요.');
            expect(payerErrorMessage).toHaveAttribute('data-invalid', 'true');

            const amountErrorMessage = screen.getByText('결제한 금액을 입력해주세요.');
            expect(amountErrorMessage).toHaveAttribute('data-invalid', 'true');
        });

        test('필수 값을 입력하고 "추가하기" 버튼을 누르면 저장 성공을 검사한다.', async () => {
            const {descInput, amountInput, payerInput, addButton} = renderComponent();
            const payerAddButton = screen.getByText('add');

            await userEvent.type(descInput, '협재 해변 카페');
            await userEvent.type(amountInput, '30000');
            await userEvent.type(payerInput, '영숙이');
            await userEvent.click(payerAddButton);
            await userEvent.click(addButton);

            const descErrorMessage = screen.queryByText('무엇을 결제했는지 입력해주세요.');
            expect(descErrorMessage).toHaveAttribute('data-invalid', 'false');

            const payerErrorMessage = screen.queryByText('결제한 사람을 선택해주세요.');
            expect(payerErrorMessage).toHaveAttribute('data-invalid', 'false');

            const amountErrorMessage = screen.queryByText('결제한 금액을 입력해주세요.');
            expect(amountErrorMessage).toHaveAttribute('data-invalid', 'false');
        });
    });
});
