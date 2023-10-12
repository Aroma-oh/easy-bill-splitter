import {ChangeEvent} from 'react';

interface InputInterface {
    value?: string;
    placeholder: string;
    empty: boolean;
    invalidText: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({placeholder, value, empty, invalidText, onChange}: InputInterface) => {
    return (
        <div className='mb-2'>
            <input
                type='text'
                value={value}
                placeholder={placeholder}
                className='block w-full rounded-md border-2 border-gray-300 py-2 px-3  placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring focus:ring-blue-200'
                onChange={onChange}
                required
            />
            <p
                data-invalid={empty}
                className={`text-stone-500 ml-2 mt-1 text-sm ${empty ? '' : 'hidden'}`}
            >
                {invalidText}
            </p>
        </div>
    );
};

export default Input;
