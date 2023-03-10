import { useContext } from "react";
import { RegisterAndLoginContext } from "../../context/RegisterAndLoginContext";
import { WorkoutForm } from "../../components/Form/workoutCreateForm";
import { WorkoutsList } from "../../components/WorkoutList";
import { HeaderPage, MainPage, ProfileSection, FormSection } from "./style";
import { AdminContext } from "../../context/AdminContext";
import { WorkoutEditForm } from "../../components/Form/WorkoutEditForm";

export const AdminPage = () => {
  const { user } = useContext(RegisterAndLoginContext);
  const { logout } = useContext(AdminContext);

  return (
    <MainPage>
      <HeaderPage>
        <nav>
          <h1>CoachConnect</h1>
          <button onClick={logout}>Sair</button>
        </nav>
      </HeaderPage>
      <ProfileSection>
        <span> Seja bem-vindo {user?.name}</span>
      </ProfileSection>
      <div>
        <FormSection>
          <h3>Treinos</h3>
        </FormSection>
        <WorkoutForm />
      </div>

      <section>
        <WorkoutsList />
        <WorkoutEditForm/>
      </section>
    </MainPage>
  );
};


