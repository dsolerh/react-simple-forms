import { FormEvent, useState } from "react";
import Input from "./Input";

interface SimpleInputProps {

}

const SimpleInput = (props: SimpleInputProps) => {
  // name
  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false)
  const nameInvalid = name.trim() === ''
  const nameError = (nameInvalid && nameTouched) ? "Name must not be empty" : undefined;

  // email
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false)
  const emailInvalid = !email.includes('@')
  const emailError = (emailInvalid && emailTouched) ? "Email must contain an '@' caracter" : undefined;

  // form validation
  const formIsValid = !nameInvalid && !emailInvalid;

  const submit = (e: FormEvent) => {
    e.preventDefault()

    if (!formIsValid) {
      return;
    }

    setName('');
    setNameTouched(false);

    setEmail('');
    setEmailTouched(false);
  }
  return (
    <form onSubmit={submit}>
      <Input
        id="name"
        label="Name"
        type="text"
        value={name}
        error={nameError}
        onChange={(e) => setName(e.target.value)}
        onBlur={() => setNameTouched(true)}
      />
      <Input
        id="email"
        label="Email"
        type="email"
        value={email}
        error={emailError}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => setEmailTouched(true)}
      />
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
