import { TitleDetailStyle } from './styles';
import { Title1, Title } from '../../atoms'

export default function TitleDetail({ title, amount }){
    
    return(
        <TitleDetailStyle>
            <Title>{title}</Title>
            <Title1 className='number'>{amount}</Title1>
        </TitleDetailStyle>
    )
}