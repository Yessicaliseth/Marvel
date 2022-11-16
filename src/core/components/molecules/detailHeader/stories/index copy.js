import { DetailHeaderStyle } from './styles';
import { Title2, Button} from '../../atoms'

export default function DetailHeader(){
    return(
        <DetailHeaderStyle>
            <Title2>Stories</Title2>
            <Button variant='contained' >345</Button>
            <Title2>Comics</Title2>
            <Button variant='contained' color='var(--purple)'>162</Button>
        </DetailHeaderStyle>
    )
}