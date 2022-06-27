import styled from 'styled-components'
import { FiMenu, FiX } from 'react-icons/fi'
import { deviceSize } from '../utils/mediaQueryBreakpoints'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import SidebarSm from './SidebarSm'

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

interface HeaderProp {
    showMenu: boolean;
}

const Header = ({ showMenu }: HeaderProp) => {
    const [isSidebarOpen, setSidebarState] = useState<boolean>(false)

    return (
        <Head>
            <nav>

                <div className="menu-ctn" >
                    {
                        showMenu && (
                            <FiMenu onClick={() => setSidebarState(!isSidebarOpen)} />
                        )
                    }
                </div>


                <Link to="/" >
                    <img alt="Rick and Morty" src={require("../assets/rick-morty.png")} />
                </Link>

                {/* visually hidden element */}
                <p style={{ color: '#fff' }} > . </p>
            </nav>

            {
                isSidebarOpen && (
                    <SidebarSm
                        closeSidebar={() => setSidebarState(false)}
                    />
                )
            }

        </Head>
    )
}

export default Header