import { TitleDetailStyle } from './styles';
import { Title1, Title } from '../../atoms'

export default function TitleDetail({ title }){
    return(
        <TitleDetailStyle>
            <Title>{title}</Title>
            <Title1>137</Title1>
        </TitleDetailStyle>
    )
}