import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    label?: string
    error?: string
}

function Input(props: InputProps) {
    return (
        <div className={`form-control${props.error ? ' invalid' : ''}`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input {...props}/>
            {props.error && <p className="error-text">{props.error}</p>}
        </div>
    );
}

export default Input;