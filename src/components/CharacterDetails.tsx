import styled from "styled-components"
import { Character } from "../types"
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
`

interface CharacterDetailsProps {
    character: Character
}

const CharacterDetails = ({ character }: CharacterDetailsProps) => (
    <DetailsGrid>
        <ImageContainer height='300px' name="Episode cover" url={character.image} />

        <ul className="details-list" >
            <li>
                {character.id}
            </li>
            <li>
                {character.name}
            </li>
            <li>
                {character.status}
            </li>
            <li>
                {character.species}
            </li>
            <li>
                {character.type}
            </li>
            <li>
                {character.gender}
            </li>
            <li>
                {character.origin.name}
            </li>
            <li>
                {new Date(character.created).toLocaleDateString()}
            </li>
        </ul>
    </DetailsGrid>
)

export default CharacterDetails