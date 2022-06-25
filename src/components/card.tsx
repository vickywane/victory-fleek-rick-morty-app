import styled from "styled-components"
import BackgroundImage from '../assets/rick-morty.png'
import ImageContainer from "./Image"
import { Link } from 'react-router-dom'
import { Button, Text } from "../styles"
import breakpoint from "styled-components-breakpoint"
import { Character } from "../pages/home"


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

const Card = ({ character }: CardProps) => (
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

        <Link to={`/episode/${character.name}`} >
            <Button width="100%" color="grey" >
                Details
            </Button>
        </Link>

    </CardContainer>
)

export default Card