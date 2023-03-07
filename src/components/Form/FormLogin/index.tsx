import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { IUserLoginForm } from "../../../context/RegisterAndLoginContext"
import Input from "../Input"
import { schemaLogin } from "../../../utils/schemas"

const FormLogin = () => {

    const {register, handleSubmit, reset, formState: {errors }} = useForm<IUserLoginForm>({
        mode: "onBlur",
        resolver: yupResolver(schemaLogin)
    })

    const submitLogin: SubmitHandler<IUserLoginForm> = (data) => {
        console.log(data)
        reset()
    }
    return(
        <form onSubmit={handleSubmit(submitLogin)}>
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

            <button type="submit">Entrar</button>
        </form>
    )
}

export default FormLogin 