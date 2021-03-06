import styled from "styled-components"
import BackgroundImage from '../assets/rick-morty.png'

interface ImageProps {
    name: string;
    url: string;
    height?: string;
    width?: string;
}

const Image = styled.div`
    height: ${(props: { height?: string }) => props.height ? props.height : "130px" };
    background-size: cover;
    background-image: url(${BackgroundImage});

    img {
        height: ${(props: { height?: string }) => props.height ? props.height : "130px" };
        width: 100%;
        object-fit: fill;
    }
`

const ImageContainer = ({ name, url, height, width }: ImageProps) => (
    <Image className="img-container" height={height} >
        <img alt={name} src={url} />
    </Image>
)

export default ImageContainer