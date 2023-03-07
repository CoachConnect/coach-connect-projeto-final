import { InputHTMLAttributes } from "react"
import { FieldError, UseFormRegisterReturn } from "react-hook-form"


interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    type: "text" | "password" | "radio"
    label: string,
    error?: FieldError | undefined,
    value?: string | undefined,
    register: UseFormRegisterReturn<string>
}

const Input = ({label, type, error, value,register} : IInputProps) => {

    return(
        <fieldset>
            <label>{label}</label>
            <input value={value} type={type} {...register}/>
            {error? <p>{error.message}</p>: null}
        </fieldset>
    )
}

export default Input 