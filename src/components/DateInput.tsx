'use client';

import {Dispatch, SetStateAction} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateInputInterface {
    placeholder: string;
    date: Date | null;
    setDate: Dispatch<SetStateAction<Date | null>>;
}

const DateComponent = ({placeholder, date, setDate}: DateInputInterface) => {
    return (
        <div>
            <DatePicker
                placeholderText={placeholder}
                dateFormat='yyyy.MM.dd'
                closeOnScroll={true}
                shouldCloseOnSelect
                selected={date}
                onChange={date => setDate(date)}
                className='block w-full rounded-md border-2 border-gray-300 py-2 px-3  placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring focus:ring-blue-200'
            />
        </div>
    );
};

export default DateComponent;
