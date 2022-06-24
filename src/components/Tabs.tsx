import { useState } from "react"
import styled from "styled-components"

const mockTabs = [{}, {}, {}]

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
`

interface EpisodeTabsProps {

}

const EpisodeTabs = () => {
    const [activeTab, setActiveTab] = useState<string>("Episode 1")

    return (
        <Tabs>
            {mockTabs.map((_, index: number) => (
                <Tab
                    onClick={() => setActiveTab(`Episode ${index + 1}`)}
                    active={activeTab === `Episode ${index + 1}`}
                >
                    Episode {index + 1}
                </Tab>
            ))}
        </Tabs>
    )
}

export default EpisodeTabs