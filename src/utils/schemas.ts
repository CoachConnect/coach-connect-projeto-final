import * as yup from "yup"

export const schemaRegister = yup.object({
    name: yup
    .string()
    .required("Nome de usuário obrigatório")
    .min(3, "Nome com no mínimo 3 caracteres")
    .max(50, "Seu nome já está grande parça, releva aí"),
    email: yup
    .string()
    .email("Formato de email inválido")
    .required("Email inválido"),
    password: yup
    .string()
    .required("Insira uma senha")
    .matches(/.{6,}/, "Deve conter no mínimo 6 caracteres"),
    confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf(
        [yup.ref("password")],
        "As senhas não correspondem"),
    monthlyPlan: yup 
    .string()
    .required("Selecione seu plano"),
    photo: yup
    .string()
    .url("Este não é um formato válido")
}).required()


export const schemaLogin = yup.object({
    email: yup
    .string()
    .email("Formato de email inválido")
    .required("Email inválido"),
    password: yup
    .string()
    .required("Senha inválida")
}).required()


export const schemaRegisterNewWorkout = yup.object({
    workout_type: yup 
    .string()
    .required("Inserir tipo de treino")
    .max(60, "O tipo de treino não precisa ser uma bíblia")
    .min(1, "Uma letra no mínimo"),
    muscle_group: yup
    .string()
    .required("Grupo que pertence o treino")
    .min(3, "Mínimo 3 letras")
    .max(60, "Seu nome já ta grandinho parça, não tem músculo com tudo isso não, releva"),
    workout: yup
    .string()
    .required("Nome do exercício obrigatório")
    .min(3, "Mínimo 3 letras")
    .max(60, "Seu nome já ta grandinho parça, não tem exercício com tudo isso não, releva"),
    series: yup 
    .string()
    .required("Número de séries obrigatório"),
    repetitions: yup
    .string()
    .required("Repetições obrigatória"),
    charge: yup
    .string()   
}).required()
