import styled from "styled-components"
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi'
import { useEffect, useState } from "react"
import { UlList } from "../styles"
import { useDispatch } from "react-redux"
import { getCharacters } from "../state/actions/character.action"

const Paginate = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1px solid #7D7D80;
    border-radius: 8px;
`

const PaginationItem = styled.li`
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #7D7D80;
    border-left: 1px solid #7D7D80;
    font-size: 18px;
    background: ${(props: { active?: boolean }) => props.active ? "#0D99FF" : 'transparent'};
    color: ${(props: { active?: boolean }) => props.active ? "#fff" : '#0D99FF'};
    transition: all 300ms;

    &:nth-child(1): {
        border-left: 0;
    }

    &:hover {
        cursor: pointer;
        background: #0D99FF;
        color: #fff;
    }
`

interface PaginatorProps {
    itemSize: number
}

const Paginator = ({ itemSize }: PaginatorProps) => {
    const [currentPage, setPage] = useState<number>(1)
    const dispatch = useDispatch() 

    useEffect(() => {
        // @ts-ignore
        dispatch(getCharacters({currentPage}))
    }, [currentPage])

    return (
        <Paginate>
            <PaginationItem onClick={() => {
                setPage(current => current > 1 ? current - 1 : current)
            }}
            >
                <FiChevronsLeft />
            </PaginationItem>

            <UlList
                flexDirection="row"
                style={{
                    // width: "400px",
                }}
            >
                {
                    Array(itemSize).fill(0).map((_, index) => (
                        <PaginationItem
                            style={{
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                            }}
                            active={(index + 1) === currentPage}
                            onClick={() => setPage(index + 1)}
                            className="pagination-item"
                        >
                            {index + 1}
                        </PaginationItem>
                    ))
                }
            </UlList>

            <PaginationItem onClick={() =>
                setPage(current => current < itemSize ? current + 1 : current)
            }>
                <FiChevronsRight />
            </PaginationItem>
        </Paginate >
    )
}
export default Paginator