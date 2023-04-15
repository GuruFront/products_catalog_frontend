import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SelectMui, {SelectChangeEvent} from '@mui/material/Select';
import {Box} from "@mui/material";

type Props = {
    onChange: (e: string) => void,
    values: string[] | number[],
    title?: string
}

const Select = (props: Props) => {
    const {values, onChange, title = 'Select'} = props;
    const defaultSelect: string = 'Without sort'

    const handleChange = (e: SelectChangeEvent<any>) => {
        if (e.target.value === defaultSelect) {
            onChange('')
            return
        }
        onChange(e.target.value);
    }

    return <Box sx={{textAlign:'right', mb:4}}>
        <FormControl fullWidth size="small" sx={{maxWidth: 300}}>
            <InputLabel id="demo-simple-select-label">{title}</InputLabel>
            <SelectMui
                sx={{textAlign:'left'}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                defaultValue={defaultSelect}
                onChange={(e) => handleChange(e)}
            >
                <MenuItem value={defaultSelect}>{defaultSelect}</MenuItem>
                {values.map((i,) => <MenuItem value={i} key={i}>{i}</MenuItem>)}
            </SelectMui>
        </FormControl>
    </Box>
}
export default Select