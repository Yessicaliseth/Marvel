import { SectionDetailCharacterStyle, DetailStyle } from './styles';
import { CardAvatar, MainCharacter, CharacterSections } from 'core/components/molecules'
import { useParams } from 'react-router-dom';
import { useContext } from 'react'
import StateContext from 'core/context/store'

export default function SectionDetailCharacter(props){

    const { state } = useContext(StateContext)
    const { itemId } = useParams()
    const characterData = state?.characters[itemId]
    const imgSrc = `${characterData?.thumbnail?.path}.${characterData?.thumbnail?.extension}`
    console.log('characterData', characterData)

    return(
        <SectionDetailCharacterStyle>
            <DetailStyle className='detailStyle'>
                <CardAvatar imgSrc={imgSrc}/>
                <MainCharacter characterData={characterData} />
                <CharacterSections/>
            </DetailStyle>
        </SectionDetailCharacterStyle>
    )
}