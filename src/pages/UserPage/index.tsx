import { useContext } from "react"
import { RegisterAndLoginContext } from "../../context/RegisterAndLoginContext"
import { StyledUserPage } from "./styles"


const UserPage = () => {

    const {user, userLogout} = useContext(RegisterAndLoginContext)

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
                        <p>{user?.name}</p>
                        <p>{user?.email}</p>
                    </div>
                </div>
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