import { useMemo } from "react"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import HeroCard from "./HeroCard"

function HeroList({ publisher }) {

    const heroes = useMemo(()=>getHeroesByPublisher(publisher), [publisher]) 

    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-3">
                {heroes.map(hero => (
                    <li key={hero.id}>
                        <HeroCard
                            {...hero}
                        />
                    </li>

                ))}
            </div>
        </>

    )
}
export default HeroList