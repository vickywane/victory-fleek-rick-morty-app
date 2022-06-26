import React from 'react'
import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'
import { deviceSize } from '../utils/mediaQueryBreakpoints'

const Head = styled.header`
    nav {
        height: 60px;
        width: 100%;
        border-bottom: 1.5px solid #000;
        text-align: center;
        display: flex;
        justify-content: center;

        .menu-ctn {
            
            display: none;
        }

        img {
            height: 50px;
            width: 300px;
            margin-top: 5px;
            object-fit: cover;
        }


        @media ${deviceSize.tablet} {
         justify-content: space-between;

         img {
            height: 40px;
            width: 200px;
            margin-top: 10px;
         }

        .menu-ctn {
            padding-left: 10px;
            display: flex;
            font-size: 35px;
            display: flex;
            place-items: center;

            &:hover {
                cursor: pointer;
            }
        } 
        }
    }
`

const Header = () => (
    <Head>
        <nav>
            <div className="menu-ctn" >
                <FiMenu />
            </div>


            <img alt="Rick and Morty" src={require("../assets/rick-morty.png")} />

            <p style={{ color: '#000' }} > . </p>
        </nav>
    </Head>
)

export default Header