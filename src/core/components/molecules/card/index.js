import { CardStyle } from './styles';
import { Button, Title1 } from '../../atoms'

export default function Card(){
    return(
        <CardStyle>
            <div className='div'></div>
            <Button variant='outlined' className='button-hero'>HERO</Button>
            <Title1 className='title-card'>Capitan América</Title1>
            <Button variant='contained' className='button-seemore'>Ver más</Button>
        </CardStyle>
    )
}