import styled from "styled-components"
import BackgroundImage from '../assets/rick-morty.png'
import { useNavigate } from "@reach/router"

const CardContainer = styled.div`
    height: 300px;
    width: 250px;
    border: 1.5px solid #000;
    padding: 10px;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;

    .img-container {
        height: 120px;
        background-size: cover;
        background-image: url(${BackgroundImage});
    }

    .details-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`

const Button = styled.button`
    height: 40px;
    font-size: 16px;
    width: ${(props: { width?: string }) => props.width};
    color: ${(props: { color?: string }) => props.color};
    border: 1px solid ${(props: { color?: string }) => props.color};
    &:hover {
        cursor: pointer;
    }
`

interface CardProps {
    name: string;
    specie: string;
    status: string;
    slug: string
}

const Card = ({ name, specie, status, slug }: CardProps) => {
    const navigate = useNavigate()

    return (
        <CardContainer>
            <div className="img-container" >
                <img alt={name} src="https://broke" />
            </div>

            <ul className="details-list" >
                <li>
                    <p> {name} </p>
                </li>
                <li>
                    <p> {specie} </p>
                </li>
                <li>
                    <p> {status} </p>
                </li>
            </ul>

            <Button onClick={() => navigate(`/${slug}`)} width="100%" color="grey" >
                Details
            </Button>
        </CardContainer>
    )
}

export default Card