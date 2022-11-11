import { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";

type Result<T> = [ 
    T, 
    string|undefined, 
    boolean, 
    ChangeEventHandler<HTMLInputElement>,
    ()=> void,
    ()=> void,
]

export default function useInput<T>(
    initialVal: T, 
    errorMessage: string, 
    validator: (val: T) => boolean,
    transform: (val: string) => T
) : Result<T> {
    const [value, setValue] = useState(initialVal);
    const [touched, setTouched] = useState(false);

    const invalid = validator(value);
    const error = (invalid && touched) ? errorMessage : undefined;

    const touchHandler = ()=> setTouched(true)
    const valueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(transform(e.target.value))
    const reset = () => {
        setTouched(false);
        setValue(initialVal)
    }

    return [
        value,
        error,
        invalid,
        valueChangeHandler,
        touchHandler,
        reset
    ]
}