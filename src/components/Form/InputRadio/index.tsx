import { InputHTMLAttributes } from "react"
import { FieldError, UseFormRegisterReturn } from "react-hook-form"
import StyledFieldsetRadio from "./inputRadio"


interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    type: "text" | "password" | "radio" | "url"
    label: string,
    error?: FieldError | undefined,
    value?: string | undefined,
    register: UseFormRegisterReturn<string>
}

const InputRadio = ({label, type, error, value, register}: IInputProps) => {

    return(
        <StyledFieldsetRadio>          
            <label>
                <input value={value} type={type} {...register}/>
                <span>{label}</span>
            </label>    
           
            {error? <p>{error.message}</p>: null}
        </StyledFieldsetRadio>
    )
}

export default InputRadio 