import { useMemo } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroByID } from "../helpers/getHeroByID"

export const  HeroPage =() => {

    const navigate = useNavigate()

    const { id } = useParams()

    const hero = useMemo(() => getHeroByID(id), [id]); 



    function onNavigateBack() {
        navigate(-1)
    }


    if (!hero) {
        return <Navigate to='/marvel' />
    }

    return (
        <div className="row mt-5 animate__animated animate__fadeInLeft">
            <div className="col-4">
                <img src={`/assets/heroes/${id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail "
                />
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Publisher:{hero.alter_ego}</b> </li>
                    <li className="list-group-item"><b>Publisher:{hero.publisher}</b> </li>
                    <li className="list-group-item"><b>Publisher:{hero.first_appearance}</b> </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={onNavigateBack}
                >
                    Back
                </button>

            </div>


        </div>
    )
}

