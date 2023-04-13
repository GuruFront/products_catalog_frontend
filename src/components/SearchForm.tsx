import Input from "../ui/Input";
import React, {useState} from "react";
import Button from "../ui/Button";

type Props = {
    onSumbit: (e: string) => void
}

const SearchForm = (props: Props) => {
    const [value, setValue] = useState<string>('')

    const {onSumbit} = props;

    const onSearchTextChanged = (e: string) => {
        setValue(e);
    }

    const handleSubmit = () => {
        onSumbit(value)
    }

    return <div style={{
        display: 'flex'
    }}>
        <Input onChange={onSearchTextChanged} placeholder={'Search'}/>
        <Button onClick={handleSubmit}>Apply</Button>
    </div>
}

export default SearchForm