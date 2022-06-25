import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../state"
import { Text } from '../styles/'
import { getEpisodeDetails } from "../state/actions/episode.action"

const Details = styled.div`
    list-style: none;

    li {
        margin: 1rem 0;
    }
`

interface EpisodeDetailsProps {
    characterName: string;
}

const EpisodeDetails = ({ characterName }: EpisodeDetailsProps) => {
    const dispatch = useDispatch()
    const { episode } = useSelector((state: RootState) => state.episodes)

    useEffect(() => {

        // @ts-ignore
        dispatch(getEpisodeDetails({ character: characterName }))
    }, [])

    return (
        <Details  >
            <li>
                <Text>  {episode.id}</Text>
            </li>
            <li>
                <Text>  {episode.name}</Text>
            </li>
            <li>
                <Text>  {new Date(episode.air_date).toLocaleDateString()} </Text>
            </li>
            <li>
                <Text>  {episode.episode}</Text>
            </li>
        </Details>
    )
}

export default EpisodeDetails