import { MainCharacterStyle, DateContainer } from './styles';
import { Button, P, Title1,  Title3 } from 'core/components/atoms'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { format } from 'date-fns'

export default function MainCharacter({ characterData }){

    console.log('characterData',)
    return(
        <MainCharacterStyle>
                <DateContainer className='rigth '>
                    <P>Last update</P>
                    <Title3 >{format(new Date(characterData.modified), 'MM/dd/yyyy')}</Title3>
                </DateContainer>
                <Button className='center' href='/'><AiOutlineArrowLeft/>Back</Button>
                <Title1 className='nameCharacter center'> {characterData?.name} </Title1>
                <Title3>Descripción</Title3>
                <P>{characterData?.description || 'Without description'}</P>
                <Button variant='outlined' className='rigth bottom'>HERO</Button>
        </MainCharacterStyle>
    )
}
