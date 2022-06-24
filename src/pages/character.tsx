import { useParams } from "@reach/router"
import Header from "../components/header"


const Character = () => {
    const params = useParams()

    return (
        <div>
            <Header />

            
            <p> Single Character Page  </p>
        </div>
    )
}

export default Character