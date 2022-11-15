import { DetailHeaderComicsStyle } from './styles';
import { Title2, Button} from '../../../atoms'

export default function DetailHeaderComics(){
    return(
        <DetailHeaderComicsStyle>
            <Title2>Comics</Title2>
            <Button variant='contained' color='var(--purple)'>162</Button>
        </DetailHeaderComicsStyle>
    )
}