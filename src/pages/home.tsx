import Header from '../components/header'
import styled from 'styled-components'
import Sidebar from '../components/sidebar'
import Card from '../components/card'
import Paginator from '../components/Paginator'
import breakpoint, { map } from 'styled-components-breakpoint';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../state/store'
import { useEffect } from 'react'
import { getCharacters } from '../state/store/character/action'
import { Text } from '../styles/index'

const GridContainer = styled.div`
    margin: 16px;
    display: grid;
    height: calc(100vh - 100px);
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;

    .grid-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .grid-items {
        height: calc(100vh - 170px);
        overflow: auto;
        margin-bottom: 30px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        place-items: center;
        grid-gap: 1rem 1rem;
    }

    ${breakpoint('mobile')`
        display: grid;
        grid-template-columns: 1fr;
        .sidebar-ctn {
            display: none;
        }
    `}

    ${breakpoint('tablet')`
        height: calc(100vh - 100px);
        grid-template-columns: auto 1fr;
        .sidebar-ctn {
            display: flex;
        }
    `}
`

export interface Character {
    created: string
    episode: Array<string>
    gender: string
    id: number
    image: string
    location: {
        name: string,
        url: string
    }
    name: string
    origin: {
        name: string,
        url: string
    }
    species: string
    status: string
    type: string
    url: string
}

const Home = () => {
    const { resultsInfo, characters, loading : loadingCharacters } = useSelector((state: RootState) => state.characters)
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch({
        //     type: "characters/getCharacters",

        //     action: getCharacters()
        // })

        // @ts-ignore
        dispatch(getCharacters())
    }, [])

    return (
        <div>
            <Header />

            <GridContainer>
                <div className="sidebar-ctn" >
                    <Sidebar />
                </div>

                <div className='grid-container' >

                    {
                        loadingCharacters ?
                            <Text > One sec, getting your data! </Text>
                            :
                            <div>
                                <div className="grid-items">
                                    {
                                        characters.map((character: Character, index: number) => (
                                            <Card
                                                key={index}
                                                character={character}
                                            />
                                        ))
                                    }
                                </div>

                                <Paginator itemSize={resultsInfo.pages} />
                            </div>
                    }

                </div>
            </GridContainer>
        </div>
    )
}
export default Home