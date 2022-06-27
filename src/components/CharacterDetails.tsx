import styled from "styled-components"
import { Character } from "../types"
import { deviceSize } from "../utils/mediaQueryBreakpoints"
import { Text } from '../styles/'
import ImageContainer from "./Image"

const DetailsGrid = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;

    .details-list {
        list-style: none;
        li {
            margin: 1rem 0;
        }
    }

    .img-container {}

    img {
        height: 350px;
        width: 350px;
        object-fit: contain;
    }

    @media ${deviceSize.tablet} {
        display: flex;
        flex-direction: column;

        .details-list {
            margin: 0;
            padding: 0;
        }

        .img-container {
            display: flex;
            justify-content: center;
        }

        img {
            height: 170px;
            width: 200px;
            object-fit: contain;
        }
   }
`

interface CharacterDetailsProps {
    character: Character
}

const CharacterDetails = ({ character }: CharacterDetailsProps) => (
    <DetailsGrid>
        <div className="img-container">
          <img alt={`${character.name} cover`} src={character.image} />
        </div>

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