import Input from "../ui/Input";
import React, {useState} from "react";
import Button from "../ui/Button";

type Props = {
    onSumbit: (e: string) => void
}

const SearchForm = (props: Props) => {
    const [value, setValue] = useState<string>('')

    const {onSumbit} = props;

    return <div className={'flex'}>
        <Input onChange={(str) => setValue(str)} placeholder={'Search'}/>
        <Button onClick={() => onSumbit(value)}>Apply</Button>
    </div>
}

export default SearchForm