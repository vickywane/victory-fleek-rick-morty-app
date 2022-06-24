import styled from "styled-components"
import BackgroundImage from '../assets/rick-morty.png'

interface ImageProps {
    name: string;
    url: string;
    height?: string;
    width?: string;
}

const Image = styled.div`
    height: ${(props: { height?: string }) => props.height ? props.height : "120px" };
    background-size: cover;
    background-image: url(${BackgroundImage});
`

const ImageContainer = ({ name, url, height, width }: ImageProps) => (
    <Image height={height} >
        <img alt={name} src={url} />
    </Image>
)

export default ImageContainer