import React from 'react'
import styled from 'styled-components'

const Head = styled.header`
    nav {
        height: 60px;
        width: 100%;
        border-bottom: 2px solid #000;
        text-align: center;

        img {
            height: 50px;
            width: 300px;
            margin-top: 5px;
            object-fit: cover;
        }
    }
`

const Header = () => (
    <Head>
        <nav>
            <div >
                <img alt="Rick and Morty" src={require("../assets/rick-morty.png")} />
            </div>
        </nav>
    </Head>
)

export default Header