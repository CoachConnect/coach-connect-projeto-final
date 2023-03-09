import { useContext } from "react";
import { RegisterAndLoginContext } from "../../context/RegisterAndLoginContext";
import { WorkoutForm } from "../workoutForm";
import { WorkoutsList } from "../workoutList";
import { HeaderPage, MainPage, ProfileSection, FormSection } from "./style";
import { AdminContext } from "../../context/AdminContext";

export const PageAdm = () => {
  const { user } = useContext(RegisterAndLoginContext);
  const {logout} = useContext(AdminContext)

  return (
    <MainPage>
      <HeaderPage>
        <nav>
          <h1>CoachConnect</h1>
          <button onClick={logout} >Sair</button>
        </nav>
      </HeaderPage>
      <ProfileSection>
        <span> Seja bem Vindo {user?.name}</span>
        <span>{user?.email}</span>
      </ProfileSection>
      <div>
        <FormSection>
          <h3>Treinos</h3>
        </FormSection>
        <WorkoutForm />
      </div>

      <section>
        <WorkoutsList />
      </section>
    </MainPage>
  );
};
