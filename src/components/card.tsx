import styled from "styled-components"
import BackgroundImage from '../assets/rick-morty.png'
import ImageContainer from "./Image"
import { useNavigate } from 'react-router-dom'
import { Button, Text } from "../styles"
import breakpoint from "styled-components-breakpoint"
import { Character } from "../types"
import { setCharacter } from '../state/slices/character.slice'
import { useDispatch } from "react-redux"

const CardContainer = styled.div`
    height: 300px;
    width: 250px;
    border: 1.5px solid #000;
    padding: 10px;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;

    .details-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    ${breakpoint('mobile')`
        height: 270px;
        width: 300px; 
    `}

    ${breakpoint('tablet')`
        height: 300px;
        width: 250px; 
    `}

    a {
        text-decoration: none;
    }
`

interface CardProps {
    character: Character;
}

const Card = ({ character }: CardProps) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDetailSelect = () => {
        dispatch(setCharacter(character))
        navigate(`/episode/${character.id}`)
    }

    return (
        <CardContainer>
            <ImageContainer name={character.name} url={character.image} />

            <ul className="details-list" >
                <li>
                    <Text> {character.name} </Text>
                </li>
                <li>
                    <Text> {character.species} </Text>
                </li>
                <li>
                    <Text> {character.status} </Text>
                </li>
            </ul>

            <Button
                onClick={() => handleDetailSelect()}
                width="100%"
                color="grey"
            >
                Details
            </Button>

        </CardContainer>
    )
}

export default Card