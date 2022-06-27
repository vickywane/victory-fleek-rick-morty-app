import styled from 'styled-components'
import { Text } from '../styles/'
import { deviceSize } from '../utils/mediaQueryBreakpoints'

const FABContainer = styled.div`
    border: 1.5px solid #000;
    background: #fff;
    border-radius: 100%;
    width: 60px;
    height: 60px;

    display: none;
    place-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 20px;
    margin-bottom: 10px;

    @media ${deviceSize.tablet} {
         display: flex;
    }
`

const FAB = () => (
    <FABContainer onClick={() => {
        document.getElementById("characters")?.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }} >
        <Text> go top </Text>
    </FABContainer>
)

export default FAB