import { useLocation, useParams } from "@reach/router"
import styled from "styled-components"
import Header from "../components/header"
import { FiChevronLeft } from 'react-icons/fi'
import { useNavigate } from '@reach/router'
import EpisodeDetails from "../components/EpisodeDetails"
import CharacterDetails from "../components/CharacterDetails"
import { Link } from 'react-router-dom'
import Tabs from "../components/Tabs"
import { useEffect, useState } from "react"
import { Character } from "./home"

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
`

export default function Episode() {
    const route = useLocation()
    const navigate = useNavigate()

    const [currentCharacter, setCurrentCharacter] = useState<Record<string, string>>({})

    useEffect(() => {
        // @ts-ignore
        const { character }: { character: Character } = route.state
        if (!character) {
            navigate("/")
            return
        }

        // @ts-ignore
        setCurrentCharacter(character)
    }, [])

    return (
        <div>
            <Header />

            <GridContainer>
                <Link to="/" className='navigation-ctn'>
                    <span>
                        <FiChevronLeft />
                    </span>
                    <p> Back </p>
                </Link>

                <div>
                    <section>
                        <CharacterDetails />
                    </section>
                    <br />
                    <br />
                    <br />
                    <section>
                        <h3> Episodes Info </h3>

                        <Tabs />
                    </section>

                    <section>
                        <EpisodeDetails />
                    </section>
                </div>
            </GridContainer>
        </div>
    )
}