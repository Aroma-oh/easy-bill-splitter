'use client';

import {ChangeEvent, FormEvent, useState} from 'react';

const CreateTitleForm = () => {
    const [invalidTitle, setInvalidTitle] = useState(true);
    const [title, setTitle] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: API 통신
    };

    const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value.trim();

        if (text) {
            setTitle(text);
            setInvalidTitle(false);
        } else {
            setInvalidTitle(true);
        }
    };

    return (
        <form className='max-w-md mx-auto ' onSubmit={handleSubmit}>
            <div className='mb-2'>
                <input
                    type='text'
                    name='title'
                    placeholder='제주도 여행 경비 정산'
                    className='block w-full rounded-md border-2 border-gray-300 py-2 px-3 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring focus:ring-blue-200'
                    onChange={inputChange}
                />
            </div>
            <p
                data-invalid={invalidTitle}
                className={`text-stone-500 ml-2 text-sm ${invalidTitle ? '' : 'hidden'}`}
            >
                정산 목적을 입력해 주세요.
            </p>
            <button
                type='submit'
                className='bg-blue-500 text-white w-full py-2 px-4 mt-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200'
            >
                저장
            </button>
        </form>
    );
};

export default CreateTitleForm;
