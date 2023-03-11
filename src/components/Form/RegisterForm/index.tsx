import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { IUserRegisterForm, RegisterAndLoginContext } from "../../../context/RegisterAndLoginContext"
import Input from "../Input"
import { schemaRegister } from "../../../utils/schemas"
import { useContext } from "react"
import InputRadio from "../InputRadio"
import StyledFormRegister from "./registerForm"
import { StyledButton } from "../../../styles/buttons"


const RegisterForm = () => {

  const { userRegister } = useContext(RegisterAndLoginContext)

  const {register, handleSubmit, reset, formState: { errors }} = useForm<IUserRegisterForm>({
    mode: "onBlur",
    resolver: yupResolver(schemaRegister)
  })

  const submitRegister: SubmitHandler<IUserRegisterForm> = (data) => {
      const newDataRegister = {...data, isAdmin: false}
      userRegister(newDataRegister)
    reset()
  }
    return(
      <StyledFormRegister onSubmit={handleSubmit(submitRegister)}>
        <Input 
          type="text"
          label="Nome"
          error={errors.name}
          register={register("name")}
        />

        <Input 
          type="url"
          label="Foto de Perfil"
          error={errors.photo}
          register={register("photo")}
        />
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

        <Input 
          type="password"
          label="Confirmação de Senha"
          error={errors.confirmPassword}
          register={register("confirmPassword")}
        />
        <h3>Selecione um plano</h3>

        <div className="contentPlan">          
            <InputRadio 
              type="radio"
              label="Plano Mensal R$ 89,90 no crédito ou pix"
              error={errors.monthlyPlan}
              register={register("monthlyPlan")}
              value="Plano Mensal" 
            />

            <InputRadio 
              type="radio"
              label="Plano Semestral 6x R$ 76,50 no crédito ou pix"
              error={errors.monthlyPlan}
              register={register("monthlyPlan")}
              value="Plano Semestral" 
            />
        </div>
        <StyledButton type="submit">Cadastrar</StyledButton>
      </StyledFormRegister>
    )
}
export default RegisterForm