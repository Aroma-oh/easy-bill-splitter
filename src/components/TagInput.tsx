'useClient';

import {ChangeEvent} from 'react';

interface TagInputInterface {
    value: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    addPayer: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    deletePayer: (idx: number, event: React.MouseEvent<HTMLButtonElement>) => void;
    payerList: string[];
    empty: boolean;
    invalidText: string;
}

const TagInput = ({
    value,
    placeholder,
    onChange,
    addPayer,
    deletePayer,
    payerList,
    empty,
    invalidText,
}: TagInputInterface) => {
    return (
        <div className='max-w-lg m-6'>
            <div className='relative'>
                <input
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className='appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
                />
                <button onClick={addPayer}>add</button>
                <div className='inline-flex gap-x-1 items-center text-sm rounded mt-2 mr-1 overflow-hidden'>
                    {payerList.length > 0 &&
                        payerList.map((payer, idx) => (
                            <div key={idx} className='bg-blue-100 '>
                                <span className='ml-2 mr-1 leading-relaxed truncate max-w-xs px-1'>
                                    {payer}
                                </span>
                                <button
                                    onClick={event => deletePayer(idx, event)}
                                    className='w-6 h-8 inline-block align-middle text-gray-500 bg-blue-200 focus:outline-none'
                                >
                                    <svg
                                        className='w-6 h-6 fill-current mx-auto'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z'
                                        />
                                    </svg>
                                </button>
                            </div>
                        ))}
                </div>
                <p
                    data-invalid={empty}
                    className={`text-stone-500 ml-2 mt-1 text-sm ${empty ? '' : 'hidden'}`}
                >
                    {invalidText}
                </p>
            </div>
        </div>
    );
};

export default TagInput;
