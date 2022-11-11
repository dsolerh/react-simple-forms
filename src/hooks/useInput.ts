import { Dispatch, SetStateAction, useState } from "react";

type Result<T> = [ T, string|undefined, boolean, Dispatch<SetStateAction<T>>, Dispatch<SetStateAction<boolean>>]

export default function useInput<T>(
    initialVal: T, 
    errorMessage: string, 
    validator: (val: T) => boolean
) : Result<T> {
    const [value, setValue] = useState(initialVal);
    const [touched, setTouched] = useState(false);

    const invalid = validator(value);
    const error = (invalid && touched) ? errorMessage : undefined;

    return [
        value,
        error,
        invalid,
        setValue,
        setTouched
    ]
}