import React from "react";

type Props = {
    onChange: (e: string) => void
    values: string[] | number[]
}

const Select = (props: Props) => {
    const {values, onChange} = props;
    const defaultSelect: string = 'Without sort'

    const handleChange = (e: string) => {
        if (e === defaultSelect) {
            onChange('')
            return
        }
        onChange(e)
    }

    return <div style={{maxWidth: 300}}>
        <label htmlFor="countries"
               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Sort</label>
        <select
            onChange={(e) => handleChange(e.target.value)}
            id="countries"
            defaultValue={defaultSelect}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                dark:focus:border-blue-500">
            <option>{defaultSelect}</option>
            {values.map((i) => <option selected>{i}</option>)}
        </select>
    </div>
}
export default Select