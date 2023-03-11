import { InputHTMLAttributes } from "react"
import { FieldError, UseFormRegisterReturn } from "react-hook-form"
import  StyledFieldset from "./input"


interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    type: "text" | "password" | "radio" | "url"
    label: string,
    error?: FieldError | undefined,
    value?: string | undefined,
    register: UseFormRegisterReturn<string>
}

const Input = ({label, type, error, value, register} : IInputProps) => {

    return(
        <StyledFieldset>
            <label>{label}</label>    
            <input value={value} type={type} {...register}/>
            {error? <p>{error.message}</p>: null}
        </StyledFieldset>
    )
}

export default Input 