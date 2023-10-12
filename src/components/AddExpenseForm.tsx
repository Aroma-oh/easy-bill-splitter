'use client';

import {useInput} from '@/hooks/useInput';
import {ChangeEvent, FormEvent, useState} from 'react';
import Input from './Input';
import TagInput from './TagInput';
import DateComponent from './DateInput';

type Expense = {
    desc: string;
    amount: string;
    payer: string;
    date: Date | null;
};

const AddExpenseForm = () => {
    const [desc, descChange, setDesc] = useInput('');
    const [amount, amountChange, setAmount] = useInput('');
    const [date, setDate] = useState<Date | null>(null);
    const [validMessage, setValidMessage] = useState(false);

    const [payer, setPayer] = useState('');
    const [payerList, setPayerList] = useState<string[]>([]);

    const [expenses, setExpenses] = useState<Expense[]>([]);

    const submit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setValidMessage(true);

        const form = event.currentTarget;
        if (form.checkValidity()) {
            setValidMessage(false);
            const newExpense = {
                desc,
                amount,
                payer,
                date,
            };
            setExpenses([...expenses, newExpense]);
            setDesc('');
            setAmount('');
            // TODO: react-query 보내기
        }
        console.info('clicked');
    };

    const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value.trim();
        setPayer(text);
    };

    const addPayer = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setPayerList(prev => [...prev, payer]);
        setPayer('');
    };

    const deletePayer = (idx: number, event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setPayerList(prev => {
            const updatedList = [...prev];
            updatedList.splice(idx, 1);
            return updatedList;
        });
    };

    return (
        <form className='max-w-md mx-auto' noValidate onSubmit={submit}>
            <DateComponent placeholder='결제한 날짜를 선택해주세요' date={date} setDate={setDate} />
            <Input
                placeholder='무엇을 결제했나요?'
                invalidText='무엇을 결제했는지 입력해주세요.'
                value={desc}
                onChange={descChange}
                empty={validMessage && desc.trim().length === 0}
            />
            <TagInput
                value={payer}
                placeholder='누가 결제했나요?'
                invalidText='결제한 사람을 선택해주세요.'
                onChange={inputChange}
                addPayer={addPayer}
                deletePayer={deletePayer}
                payerList={payerList}
                empty={validMessage && payerList.length === 0}
            />
            <Input
                placeholder='결제 금액을 입력해주세요'
                invalidText='결제한 금액을 입력해주세요.'
                value={amount}
                onChange={amountChange}
                empty={validMessage && amount.trim().length === 0}
            />
            <button
                type='submit'
                className='text-white w-full py-2 px-4 mt-3 rounded-md bg-blue-700 hover:bg-blue-500 focus:outline-none'
            >
                추가하기
            </button>
        </form>
    );
};

export default AddExpenseForm;
