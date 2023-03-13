import { useContext } from "react";
import { IEditProfile, UserContext } from "../../../context/UserContext";
import Input from "../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { HeaderModal, ModalEditProfile } from "./style";
import { RegisterAndLoginContext } from "../../../context/RegisterAndLoginContext";

export const EditProfileForm = () => {
  const { editProfile, setEditProfile, updateProfile } = useContext(UserContext);
  const {user} = useContext(RegisterAndLoginContext)
  const { register, handleSubmit, reset } = useForm<IEditProfile>();

const onSubmitEditProfile: SubmitHandler<IEditProfile> = (data, ) => {
  if(!user) return
  updateProfile(data, user?.id)
  reset()
}



  return (
    <>
      {editProfile && (
        <ModalEditProfile>
          <div>
          <HeaderModal>
            <span>Alterar Perfil</span>
            <button onClick={() => setEditProfile(false)}>X</button>
          </HeaderModal>
          <form onSubmit={handleSubmit(onSubmitEditProfile)}>
            <Input label="Email" type="text" register={register("email")} />
            <Input label="Nome" type="text" register={register("name")} />
            <Input label="Senha" type="text" register={register("password")} />
            <Input
              label="Plano"
              type="text"
              register={register("monthlyPlan")}
            />
            <Input
              label="Foto do perfil"
              type="url"
              register={register("photo")}
            />
            <button type="submit">Editar Perfil</button>
          </form>
          </div>
        </ModalEditProfile>
      )}
    </>
  );
};
