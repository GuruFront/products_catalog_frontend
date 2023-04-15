import React, {useEffect, useState} from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface CheckBoxProps {
    values: String[]
    onChange: Function
}

const CheckboxList = (props: CheckBoxProps) => {

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

    return <FormGroup >
        {values?.map((i, index) => {
            return <FormControlLabel onChange={handleCheckBoxClick.bind(null, i)}
                                     control={<Checkbox/>}
                                     key={index}
                                     label={i}/>
        })}
    </FormGroup>
}

export default CheckboxList