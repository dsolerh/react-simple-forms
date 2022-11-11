import { FormEvent } from "react";
import useInput from "../hooks/useInput";
import Input from "./Input";

interface SimpleInputProps {

}

const SimpleInput = (props: SimpleInputProps) => {
  // name
  const [
    name,
    nameError,
    nameInvalid,
    nameChangeHandler,
    nameBlurHandler,
    resetName
  ] = useInput('', 'Name must not be empty', (e) => e.trim() === '', (v) => v)

  // email
  const [
    email,
    emailError,
    emailInvalid,
    emailChangeHandler,
    emailBlurHandler,
    resetEmail,
  ] = useInput('', "Email must contain an '@' caracter", (e) => !e.includes('@'), (v) => v)

  // form validation
  const formIsValid = !nameInvalid && !emailInvalid;

  const submit = (e: FormEvent) => {
    e.preventDefault()

    if (!formIsValid) {
      return;
    }

    resetName();
    resetEmail();
  }
  return (
    <form onSubmit={submit}>
      <Input
        id="name"
        label="Name"
        type="text"
        value={name}
        error={nameError}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
      />
      <Input
        id="email"
        label="Email"
        type="email"
        value={email}
        error={emailError}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
      />
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
