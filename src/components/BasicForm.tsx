import { FormEvent } from "react";
import useInput from "../hooks/useInput";
import Input from "./Input";

const BasicForm = () => {
    // name
    const name = useInput('', 'Name must not be empty', (e) => e.trim() === '')

    // lastname
    const lastName = useInput('', 'Last name must not be empty', (e) => e.trim() === '')

    // lastname
    const email = useInput('', 'Invalid email address', (e) => !e.includes('@'))

    const invalidForm = name.invalid || lastName.invalid || email.invalid;

    const submitForm = (e: FormEvent) => {
        e.preventDefault()

        if (invalidForm) {
            return;
        }

        name.reset()
        lastName.reset()
        email.reset()
    }

    return (
        <form onSubmit={submitForm}>
            <div className='control-group'>
                <Input
                    id="name"
                    type="text"
                    value={name.value}
                    error={name.error}
                    onChange={name.onChangeHandler}
                    onBlur={name.onBlurHandler}
                />
                <Input
                    id="lastname"
                    type='text'
                    value={lastName.value}
                    error={lastName.error}
                    onChange={lastName.onChangeHandler}
                    onBlur={lastName.onBlurHandler}
                />
                <Input
                    id="email"
                    type='email'
                    value={email.value}
                    error={email.error}
                    onChange={email.onChangeHandler}
                    onBlur={email.onBlurHandler}
                />
            </div>
            <div className='form-actions'>
                <button disabled={!invalidForm}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
