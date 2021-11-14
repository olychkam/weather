import { bindActionCreators } from "redux"
import { useDispatch } from 'react-redux'
import { refetchCitiesWeatherThunk, setCities} from "../redux/weatherReducer";


const useAction = () => {
    const dispatch = useDispatch()
    
    return bindActionCreators({
        setCities,refetchCitiesWeatherThunk
    }, dispatch)
}

export default useAction