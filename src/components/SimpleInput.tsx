import { FormEvent } from "react";
import useInput from "../hooks/useInput";
import Input from "./Input";

interface SimpleInputProps {

}

const SimpleInput = (props: SimpleInputProps) => {
  // name
  const name = useInput('', 'Name must not be empty', (e) => e.trim() === '')

  // email
  const email = useInput('', "Email must contain an '@' caracter", (e) => !e.includes('@'))

  // form validation
  const formIsValid = !name.invalid && !email.invalid;

  const submit = (e: FormEvent) => {
    e.preventDefault()

    if (!formIsValid) {
      return;
    }

    name.reset();
    email.reset();
  }
  return (
    <form onSubmit={submit}>
      <Input
        id="name"
        label="Name"
        type="text"
        value={name.value}
        error={name.error}
        onChange={name.onChangeHandler}
        onBlur={name.onBlurHandler}
      />
      <Input
        id="email"
        label="Email"
        type="email"
        value={email.value}
        error={email.error}
        onChange={email.onChangeHandler}
        onBlur={email.onBlurHandler}
      />
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
