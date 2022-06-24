import styled from "styled-components"
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi'

const Paginate = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1px solid #7D7D80;
    border-radius: 8px;

    .pagination-item {
        width: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #7D7D80;
        border-left: 1px solid #7D7D80;
        font-size: 18px;
        color: #0D99FF;
        background: transparent;
        transition: all 300ms;

        &:nth-child(1): {
            border-left: 0;
        }

        &:hover {
            cursor: pointer;
            background: #0D99FF;
            color: #fff;
        }
    }
`

interface PaginatorProps {
    itemSize: number
}

const Paginator = ({ itemSize }: PaginatorProps) => (
    <Paginate>
        <div className="pagination-item" > <FiChevronsLeft /> </div>

        {
            Array(itemSize).fill({}).map((_, index) => (
                <div className="pagination-item" > {index} </div>
            ))
        }

        <div className="pagination-item" > <FiChevronsRight /></div>
    </Paginate>
)

export default Paginator