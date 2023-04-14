import React, {useEffect, useState} from "react";

interface CheckBoxProps {
    values: String[]
    onChange: Function
}

const CheckboxListView = (props: CheckBoxProps) => {

    const [checkedValues, setCheckedValues] = useState<String[]>([])
    const {values, onChange} = props;

    const handleCheckBoxClick = (i: String) => {
        if (checkedValues.includes(i)) {
            setCheckedValues(checkedValues.filter(j => j !== i));
            return;
        }
        setCheckedValues([...checkedValues, i])
    }

    useEffect(() => {
        onChange(checkedValues);
    }, [checkedValues])

    return <ul
        className="w-48 text-sm font-medium text-gray-900 bg-white
                border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {values?.map((i, index) => {
            return <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                       key={index}>
                <div className="flex items-center pl-3" onClick={handleCheckBoxClick.bind(null, i)}>
                    <input type="checkbox"
                           checked={checkedValues.includes(i)}
                           readOnly
                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
                            focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700
                            dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 mr-2"/>
                    <label
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {i}
                    </label>
                </div>
            </li>
        })}
    </ul>
}

export default CheckboxListView