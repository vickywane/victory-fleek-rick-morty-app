import styled from "styled-components"
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

const CharacterDetails = () => (
    <DetailsGrid>
        <ImageContainer height='300px' name="Episode cover" url="https:.." />

        <div>
            <ul className="details-list" >
                <li>
                    Id
                </li>
                <li>
                    Name
                </li>
                <li>
                    Status
                </li>
                <li>
                    Specie
                </li>
                <li>
                    Type
                </li>
                <li>
                    Gender
                </li>
                <li>
                    Origin
                </li>
                <li>
                    Created
                </li>
            </ul>
        </div>
    </DetailsGrid>
)

export default CharacterDetails