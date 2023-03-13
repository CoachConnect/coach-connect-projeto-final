import { useContext } from "react"
import { RegisterAndLoginContext } from "../../context/RegisterAndLoginContext"

import { StyledTrainingModal, StyledUserPage } from "./styles"

import { UserContext } from "../../context/UserContext"
import { EditProfileForm } from "../../components/Form/EditProfileForm"
import { UserWorkouts } from "../../components/UserWorkouts"



const UserPage = () => {

    const { userLogout} = useContext(RegisterAndLoginContext)
    const {newUser, setEditProfile, workouts, viewContent, setViewContent} = useContext(UserContext)

    return(
        <StyledUserPage>
            <header className="container">
                <h2>CoachConnect</h2>
                <button onClick={userLogout}>Sair</button>
            </header>
            <div className="div-green"></div>
            <main className="container">
                <div className="div-user">
                    <div className="div-user-info">
                        <div className="div-img"><img src={newUser?.photo}/></div>
                        <p>{newUser?.name}</p>
                        <p>{newUser?.email}</p>
                    </div>
                </div>
                <section>
                    <button onClick={() => setEditProfile(true) } >Alterar Perfil</button>
                    <EditProfileForm/>
                </section>
                <ul>
                   {
                    workouts && workouts.map((item)=>(
                        <UserWorkouts key={item.id} item={item} />
                    ))
                   }
                   
                </ul>
             

            </main>
            {viewContent && 
                <StyledTrainingModal >
                    <div>
                    <header>
                        <h1>Treino {viewContent.workout_type}</h1>
                        <button onClick={() => setViewContent(null)}>X</button>
                    </header>
                    <main>
                        <div> 
                            <h1>Nome do exercicio:<span>{viewContent.workout}</span></h1> 
                            <h3>Carga: <span>{viewContent.charge} Kg</span></h3>
                        </div>
                        <section>

                        </section>
                    </main>
                    </div>
                </StyledTrainingModal>}
        </StyledUserPage>
    )
}

export default UserPage