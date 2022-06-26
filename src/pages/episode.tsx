import styled from "styled-components"
import Header from "../components/header"
import { FiChevronLeft } from 'react-icons/fi'
import EpisodeDetails from "../components/EpisodeDetails"
import CharacterDetails from "../components/CharacterDetails"
import { Link, useParams } from 'react-router-dom'
import Tabs from "../components/Tabs"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../state'
import { useEffect } from "react"
import { getSingleCharacter } from "../state/actions/character.action"
import { deviceSize } from "../utils/mediaQueryBreakpoints"

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    height: calc(100vh - 100px);
    grid-gap: 0 2rem;
    padding: 10px;
    margin-top: 30px;
    
    .navigation-ctn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: blue;

        span {
            font-size: 32px;
        }

        p {
            font-size: 22px;
            padding-top: 2px;
            margin : 0;
        }

        &:hover {
            cursor: pointer;
        }
    }

    @media ${deviceSize.tablet} {
         display: flex;
         flex-direction: column;
         margin-top: 5px;

         .navigation-ctn {
            justify-content: flex-start;
         }
    }
`

// EDGE CASE: HANDLE SCENARIOS WHERE A USER NAVIGATES TO A NEW PAGE AND REFRESHES WHICH CLEARS OUT THE DATA

export default function Episode() {
    const { character } = useSelector((state: RootState) => state.characters)
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!character.name) {
            // @ts-ignore
            dispatch(getSingleCharacter(id))
        }
    }, [])

    return (
        <div>
            <Header />

            {character.name && <GridContainer>
                <Link to="/" className='navigation-ctn'>
                    <span>
                        <FiChevronLeft />
                    </span>
                    <p> Back </p>
                </Link>

                <div>
                    <section>
                        <CharacterDetails character={character} />
                    </section>
                    <br />
                    <br />
                    <br />
                    <section>
                        <h3> Episodes Info </h3>

                        <Tabs episodes={character.episode} />
                    </section>

                    <section>
                        <EpisodeDetails characterName={character.name} />
                    </section>
                </div>
            </GridContainer>}
        </div>
    )
}