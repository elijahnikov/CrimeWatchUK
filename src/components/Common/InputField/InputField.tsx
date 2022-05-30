import React, { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label?: string;
    icon?: any;
    placeholder: string;
    onChangeHandler: Function;
};

const InputField = ({ size: _, ...props }: InputFieldProps) => {
    let iconTag = props.icon ? props.icon : null;
    return (
        <div className='text-left'>
            {props.label && (
                <div>
                    <label className=' mb-2 text-sm font-bold text-white'>
                        {props.label}
                    </label>
                </div>
            )}
            <input
                className='w-full rounded border-gray-800 bg-scBlack-100 py-2 px-3 text-white'
                {...props}
                spellCheck={false}
                type='text'
                placeholder={props.placeholder}
                onChange={(e) => props.onChangeHandler(e)}
            />
        </div>
    );
};

export default InputField;
