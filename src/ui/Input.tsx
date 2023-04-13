import React from "react";

type InputProps = {
    type?: string
    placeholder?: string
    onChange: (value: string) => void
}

const Input = (props: InputProps) => {
    const {onChange, type = 'text', placeholder = ''} = props;

    const handleChange = (value: string) => {
        onChange(value)
    }

    return <input onChange={(e) => handleChange(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg
                  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700
                  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder={placeholder} required/>
}

export default Input