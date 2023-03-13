import { useContext } from "react"
import { IWorkout, UserContext } from "../../context/UserContext"

interface IUserWorkoutsProps{
    item:IWorkout
}

export const UserWorkouts = ({item}:IUserWorkoutsProps) =>{

    const {setViewContent} = useContext(UserContext)

    return(
        <li onClick={()=> setViewContent(item)}>
            <div className="div-circle">{item.workout_type}</div>
            <p>{item.workout}</p>
            <p>{item.repetitions} X {item.series} Sets</p>
        </li>
    )
}