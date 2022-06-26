import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../state"
import { getEpisodeDetails } from "../state/actions/episode.action"
import { setCurrentEpisode } from '../state/slices/episode.slice'
import { deviceSize } from "../utils/mediaQueryBreakpoints"

const Tabs = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 2px solid #000;
`

const Tab = styled.li`
    border: 1px solid #000;
    width: 100px;
    display: flex;
    place-items: center;
    justify-content: center;
    height: 35px;
    border-radius: 10px 15px 0px 0; 
    transition: all 300ms;

    background : ${(props: { active: boolean }) => props.active ? "grey" : "transparent"};
    font-weight: ${(props: { active: boolean }) => props.active && "bold"};

    &:hover {
        cursor: pointer;
        background : grey;
    }

    @media ${deviceSize.mobileL} {
        font-size: 13px;
    }
`

interface EpisodeTabsProps {
    episodes: Array<string>
}

const EpisodeTabs = ({ episodes }: EpisodeTabsProps) => {
    const dispatch = useDispatch()
    const { currentEpisodeTab } = useSelector((state: RootState) => state.episodes)


    const handleTabChange = (index: number) => {
        dispatch(setCurrentEpisode(index))

        // @ts-ignore
        dispatch(getEpisodeDetails({ episodeId: currentEpisodeTab }))
    }

    return (
        <Tabs>
            {episodes?.slice(0, 5).map((_, index: number) => {
                return (
                    <Tab
                        onClick={() => handleTabChange(index + 1)}
                        active={currentEpisodeTab === index + 1}
                    >
                        Episode {index + 1}
                    </Tab>
                )
            })}
        </Tabs>
    )
}

export default EpisodeTabs