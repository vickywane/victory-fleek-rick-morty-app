import styled from "styled-components"
import { Character } from "../types"
import { deviceSize } from "../utils/mediaQueryBreakpoints"
import { Text } from '../styles/'
import ImageContainer from "./Image"

const DetailsGrid = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;

    .details-list {
        list-style: none;

        li {
            margin: 1rem 0;
        }
    }

    @media ${deviceSize.tablet} {
        display: flex;
        flex-direction: column;

        .details-list {
            margin: 0;
            padding: 0;
        }
   }
`

interface CharacterDetailsProps {
    character: Character
}

const CharacterDetails = ({ character }: CharacterDetailsProps) => (
    <DetailsGrid>
        <ImageContainer height='300px' name="Episode cover" url={character.image} />

        <ul className="details-list" >
            <li>
                <Text> {character.id} </Text>
            </li>
            <li>
                <Text> {character.name} </Text>
            </li>
            <li>
                <Text> {character.status} </Text>
            </li>
            <li>
                <Text> {character.species} </Text>
            </li>
            <li>
                <Text> {character.type} </Text>
            </li>
            <li>
                <Text> {character.gender} </Text>
            </li>
            <li>
                <Text> {character.origin.name} </Text>
            </li>
            <li>
                <Text> {new Date(character.created).toLocaleDateString()} </Text>
            </li>
        </ul>
    </DetailsGrid>
)

export default CharacterDetails