import Header from '../components/header'
import styled from 'styled-components'
import Sidebar from '../components/sidebar'
import Card from '../components/card'
import Paginator from '../components/Paginator'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../state'
import { useEffect } from 'react'
import { getCharacters } from '../state/actions/character.action'
import { Text } from '../styles/index'
import { Character } from '../types'
import { deviceSize } from '../utils/mediaQueryBreakpoints'
import FAB from '../components/fab'


const GridContainer = styled.div`
    display: grid;
    height: calc(100vh - 90px);
    grid-template-columns: 1fr 70%;
    grid-gap: 0 1rem;
    max-width: 1500px;
    margin: 0 auto;
    padding: 10px;

    .sidebar-ctn {
        border-right: 1.5px solid #000;
    }
       
    .grid-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .grid-items {
        height: calc(100vh - 170px);
        overflow: auto;
        margin-bottom: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        place-items: center;
        grid-gap: 1rem 1rem;
    }

    .fab-ctn {
        position: relative;
    }

    @media ${deviceSize.tablet} {
        grid-template-columns: 1fr;

        .sidebar-ctn {
            display: none;
        }
    }
`

const Home = () => {
    const { resultsInfo, characters, loading: loadingCharacters } = useSelector((state: RootState) => state.characters)
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
            <Header showMenu />

            <div
                style={{
                    background: "#f9f9f9"
                }}
            >
                <GridContainer>
                    <div className="sidebar-ctn" >
                        <Sidebar />
                    </div>

                    <div className='grid-container' >
                        {
                            loadingCharacters ?
                                <Text > One second, grabbing all Rick 'n' Mortys! </Text>
                                :
                                <div>
                                    <div id="characters" className="grid-items">
                                        {
                                            characters.map((character: Character, index: number) => (
                                                <Card
                                                    key={index}
                                                    character={character}
                                                />
                                            ))
                                        }
                                    </div>

                                    <div className="fab-ctn">
                                        <FAB />
                                    </div>

                                    <Paginator itemSize={resultsInfo.pages} />
                                </div>
                        }
                    </div>
                </GridContainer>
            </div>

        </div>
    )
}
export default Home