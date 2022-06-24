import styled from "styled-components"
import ImageContainer from "./Image"

const Details = styled.div`
    list-style: none;

    li {
        margin: 1rem 0;
    }
`

const EpisodeDetails = () => (
    <Details  >
        <li>
            Episode Id
        </li>
        <li>
            Episode Name
        </li>
        <li>
            Episode Air Date
        </li>
        <li>
            Episode
        </li>
    </Details>
)

export default EpisodeDetails