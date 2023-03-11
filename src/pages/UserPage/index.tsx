import { useContext } from "react"
import { RegisterAndLoginContext } from "../../context/RegisterAndLoginContext"
import { StyledUserPage } from "./styles"
import { UserContext } from "../../context/UserContext"
import { EditProfileForm } from "../../components/Form/EditProfileForm"


const UserPage = () => {

    const {user, userLogout} = useContext(RegisterAndLoginContext)
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
                    <li>
                        <div className="div-circle">A</div>
                        <p>Treino A</p>
                        <p>Grupo muscular:Costas e biceps</p>
                    </li>
                   
                </ul>
             
            </main>
        </StyledUserPage>
    )
}

export default UserPage