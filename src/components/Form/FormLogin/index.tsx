import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { IUserLoginForm, RegisterAndLoginContext } from "../../../context/RegisterAndLoginContext"
import Input from "../Input"
import { schemaLogin } from "../../../utils/schemas"
import { useContext } from "react"
import StyledFormLogin from "./formLogin"
import { StyledButton } from "../../../styles/buttons"

const FormLogin = () => {

    const { userLogin } = useContext(RegisterAndLoginContext)

    const {register, handleSubmit, reset, formState: {errors }} = useForm<IUserLoginForm>({
        mode: "onBlur",
        resolver: yupResolver(schemaLogin)
    })

    const submitLogin: SubmitHandler<IUserLoginForm> = (data) => {
        userLogin(data)
        reset()
    }
    return(
        <StyledFormLogin onSubmit={handleSubmit(submitLogin)}>
           <div className="contentInputs">
                <Input 
                    type="text"
                    label="Email"
                    error={errors.email}
                    register={register("email")}
                />

                <Input           
                    type="password"
                    label="Senha"
                    error={errors.password}
                    register={register("password")}
                />
           </div>

            <StyledButton type="submit">Entrar</StyledButton>
        </StyledFormLogin>
    )
}

export default FormLogin 