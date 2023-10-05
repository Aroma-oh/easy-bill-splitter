import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateTitle from '@/components/CreateTitle';

const renderComponent = () => {
    render(<CreateTitle />);

    const input = screen.getByPlaceholderText('제주도 여행 경비 정산');
    const saveButton = screen.getByText('저장');
    const errorMessage = screen.queryByText('정산 목적을 입력해 주세요.');

    return {
        input,
        saveButton,
        errorMessage,
    };
};

describe('정산 타이틀 생성 페이지', () => {
    test('타이틀 입력 컴포넌트 렌더링을 검사한다.', () => {
        const {input, saveButton} = renderComponent();

        expect(input).not.toBeNull();
        expect(saveButton).not.toBeNull();
    });

    test('타이틀을 입력하지 않고 "저장" 버튼 클릭시 에러 메시지를 노출한다.', async () => {
        const {saveButton, errorMessage} = renderComponent();

        await userEvent.click(saveButton);
        expect(errorMessage).toHaveAttribute('data-invalid', 'true');
    });

    test('타이틀 입력 후 "저장" 버튼을 클릭시 저장 성공을 검사한다.', async () => {
        const {input, saveButton, errorMessage} = renderComponent();

        await userEvent.type(input, '타이틀 입력 검사');
        await userEvent.click(saveButton);

        expect(errorMessage).toHaveAttribute('data-invalid', 'false');
    });
});
