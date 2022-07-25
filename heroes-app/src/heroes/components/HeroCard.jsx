import { Link } from "react-router-dom"


const CharacterByHero = ({alter_ego, characters}) => {
    if(alter_ego === characters) return (<></>)

    return <p>{characters}</p>
}


function HeroCard({ id, superhero, publisher, alter_ego, first_appearance, characters }) {


    const heroImg = `/assets/heroes/${id}.jpg`



    return (

        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">
                    <div className="col-4 ">
                        <img src={heroImg} className="card-img" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>

                        {/* {
                            (alter_ego !== characters) && (<p>{characters}</p>)
                        } */}

                        <CharacterByHero alter_ego={alter_ego} characters={characters}/>

                        <p className="card-text">
                            <small className="text-mutted">{first_appearance}</small>
                        </p>


                        <Link className="btn btn-primary" to={`/hero/${id}`}>
                            Mas info
                        </Link>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default HeroCard