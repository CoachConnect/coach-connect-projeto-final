import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { IUserRegisterForm } from "../../../context/RegisterAndLoginContext"
import Input from "../Input"
import { schemaRegister } from "../../../utils/schemas"


const RegisterForm = () => {

  const {register, handleSubmit, reset, formState: { errors }} = useForm<IUserRegisterForm>({
    mode: "onBlur",
    resolver: yupResolver(schemaRegister)
  })

  const submitRegister: SubmitHandler<IUserRegisterForm> = (data) => {
      const newDataRegister = {...data, isAdmin: false}
      console.log(newDataRegister)
  
    reset()
  }
    return(
      <form onSubmit={handleSubmit(submitRegister)}>
        <Input 
          type="text"
          label="Nome"
          error={errors.name}
          register={register("name")}
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

        <Input 
          type="radio"
          label="Plano Mensal"
          error={errors.monthlyPlan}
          register={register("monthlyPlan")}
          value="Plano Mensal" 
        />


        <Input 
          type="radio"
          label="Plano Semestral"
          error={errors.monthlyPlan}
          register={register("monthlyPlan")}
          value="Plano Semestral" 
        />
        <button type="submit">Cadastrar</button>
      </form>
    )
}
export default RegisterForm