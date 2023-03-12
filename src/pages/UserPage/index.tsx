import { useContext, useState } from "react"
import { AdminContext } from "../../context/AdminContext"
import { RegisterAndLoginContext } from "../../context/RegisterAndLoginContext"

import { StyledTrainingModal, StyledUserPage } from "./styles"

import { UserContext } from "../../context/UserContext"
import { EditProfileForm } from "../../components/Form/EditProfileForm"



const UserPage = () => {

    const {user, userLogout} = useContext(RegisterAndLoginContext)

    const [ openModal, setOpenModal] = useState(false)
    const { training, trainings} = useContext(AdminContext)

    //ta errado puxar do contexto do admin o estado que armazena os treinos, existe uma rota na api que faz esse get e o user comum é autorizado
    
    console.log(training)
    console.log(trainings)

    const {newUser} = useContext(UserContext)
    const {setEditProfile} = useContext(UserContext)


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
                        <div className="div-img"><img/></div>
                        <p>{newUser?.name}</p>
                        <p>{newUser?.email}</p>
                    </div>
                </div>
                <section>
                    <button onClick={() => setEditProfile(true) } >Alterar Perfil</button>
                    <EditProfileForm/>
                </section>
                <ul>
                    <li onClick={() => setOpenModal(true)}>
                        <div className="div-circle">A</div>
                        <p>Treino A</p>
                        <p>Grupo muscular:Costas e biceps</p>
                    </li>
                    <li>
                        <div className="div-circle">A</div>
                        <p>Treino A</p>
                        <p>Grupo muscular:Costas e biceps</p>
                    </li>
                    <li>
                        <div className="div-circle">A</div>
                        <p>Treino A</p>
                        <p>Grupo muscular:Costas e biceps</p>
                    </li>
                    <li>
                        <div className="div-circle">A</div>
                        <p>Treino A</p>
                        <p>Grupo muscular:Costas e biceps</p>
                    </li>
                   
                </ul>
             

            </main>
            {openModal && 
                <StyledTrainingModal >
                    <div>
                    <header>
                        <h1>Treino</h1>
                        <button onClick={() => setOpenModal(false)}>X</button>
                    </header>
                    <main>
                        <div> 
                            <h1>A</h1> 
                            <h3>Treino A</h3>
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