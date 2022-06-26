import styled from "styled-components"
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi'
import { useEffect, useLayoutEffect, useState } from "react"
import { UlList } from "../styles"
import { useDispatch } from "react-redux"
import { getCharacters } from "../state/actions/character.action"
import { createPaginationRange } from "../utils/paginationRange"


const Paginate = styled.div`
    display: flex;
    justify-content: flex-end;

    .pagination-container {
        border: 1px solid #7D7D80;
        border-radius: 8px;
        height: 50px;
        display: flex;
        flex-direction: row;
    }
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
    const [paginators, setPaginators] = useState([0, 9])
    const [paginationRange, setPaginationRange] = useState<Array<number>>(createPaginationRange(paginators[0], paginators[1]))


    useEffect(() => {
        // @ts-ignore
        dispatch(getCharacters({ currentPage }))
    }, [currentPage])

    useEffect(() => {
        console.log(
            currentPage,
            (paginationRange[0] + 1),
            paginators[0]
        );

        if (
            currentPage === (paginationRange[0] + 1)
        ) {
            console.log("FIRST ITEM IN ARRAY");

            setPaginators(state => {

                console.log(paginators);


                return [
                    state[0] === 0 ? 0 : state[0] - 9,

                    state[1] === 9 ? 9 : state[1] - 9,

                    // state[1] - 9
                ]
            })
        }

        if (currentPage === (paginationRange[paginationRange.length - 1] + 1)) {
            setPaginators(state => [state[0] + 9, state[1] + 9])
        }

    }, [currentPage])

    useEffect(() => {
        setPaginationRange(createPaginationRange(paginators[0], paginators[1]))
    }, [paginators])

    return (
        <Paginate>
            <div className="pagination-container">
                <PaginationItem onClick={() => {
                    setPage(current => current > 1 ? current - 1 : current)
                }}
                >
                    <FiChevronsLeft />
                </PaginationItem>

                <UlList
                    flexDirection="row"
                >
                    {
                        paginationRange.map((item, index: number) => (
                            <PaginationItem
                                key={index}
                                active={(item + 1) === currentPage}
                                onClick={() => setPage(item + 1)}
                                className="pagination-item"
                            >
                                {item + 1}
                            </PaginationItem>
                        ))
                    }
                </UlList>

                <PaginationItem onClick={() =>
                    setPage(current => current < itemSize ? current + 1 : current)
                }>
                    <FiChevronsRight />
                </PaginationItem>
            </div>

        </Paginate>
    )
}
export default Paginator