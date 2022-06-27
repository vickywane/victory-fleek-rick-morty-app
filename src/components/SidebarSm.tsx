import styled from 'styled-components'
import { FiX } from 'react-icons/fi'
import { deviceSize } from '../utils/mediaQueryBreakpoints'
import Sidebar from './sidebar'
import { ESCAPE_KEY, useKeyboardKey } from '../utils/useKeyboardKey'

const SidebarContainer = styled.div`
    display: none;

    @media ${deviceSize.tablet} {
        display: flex;
    }

    .container {
        position: absolute;
        z-index: 1;
        width: 100%;
        display: grid;
        grid-template-columns: 85% 15%;
        transition: all 300ms;
        height: calc(100vh - 60px);
        left: 0;
    }

    .sidebar-ctn {
        border-right: 1.5px solid #000;
        padding-top: 30px;
        background: #fff;
    }

    .right-icon-ctn {
        text-align: center;        
        font-size: 50px;
        background: #fff;
        opacity: 70%;
    }

    .icon-ctn {
        &:hover {
            cursor: pointer;
        }
    }
`

interface SidebarSmProps {
    closeSidebar: () => void;
}

const SidebarSm = ({ closeSidebar }: SidebarSmProps) => {
    useKeyboardKey({
        callback: () => closeSidebar(),
        keyMatch: ESCAPE_KEY
    })

    return (
        <SidebarContainer>
            <div className="container">
                <div className="sidebar-ctn" >
                    <Sidebar />
                </div>

                <div className="right-icon-ctn" >
                    <div className="icon-ctn">
                        <FiX onClick={() => closeSidebar()} />
                    </div>
                </div>
            </div>
        </SidebarContainer>
    )
}

export default SidebarSm