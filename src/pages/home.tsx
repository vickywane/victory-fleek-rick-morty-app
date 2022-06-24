import Header from '../components/header'
import styled from 'styled-components'
import Sidebar from '../components/sidebar'
import Card from '../components/card'
import Paginator from '../components/Paginator'

const GridContainer = styled.div`
    margin: 16px;
    display: grid;
    height: calc(100vh - 100px);
    grid-template-columns: auto 1fr ;
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
`

// const fakeItems = [{}, {}]
const fakeItems = [{}, {}, {}, {}, {}, {}]

const Home = () => (
    <div>
        <Header />

        <GridContainer>
            <Sidebar />

            <div className='grid-container' >
                <div className="grid-items">
                    {
                        fakeItems.map(() => (
                            <Card
                                slug="morty"
                                status="dead"
                                specie="test specie"
                                name="Just a Card Here"
                            />
                        ))
                    }
                </div>
                 
                <Paginator  itemSize={fakeItems.length} />
            </div>
        </GridContainer>
    </div>
)

export default Home