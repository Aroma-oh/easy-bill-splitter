'use client';

import {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';

type ReturnTypes = [
    string,
    (e: ChangeEvent<HTMLInputElement>) => void,
    Dispatch<SetStateAction<string>>,
];

export const useInput = (initial: string): ReturnTypes => {
    const [input, setInput] = useState(initial);

    const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value.trim();

        const numericValue = parseFloat(text.replace(/,/g, ''));

        if (!isNaN(numericValue)) {
            setInput(numericValue.toLocaleString());
        } else {
            setInput(text);
        }
    };

    return [input, inputChange, setInput];
};
