import { CardAvatarStyle, AvatarStyle, CardAvatarContainer } from './styles';
import { Button, Title } from 'core/components/atoms'
import { ImgCharacter } from 'core/components/organisms/sectionSearchResult/styles'

export default function CardAvatar({imgSrc}){
    return(
        <CardAvatarContainer>
            <CardAvatarStyle>
                <ImgCharacter size={150} src={imgSrc}/>
            </CardAvatarStyle>
        </CardAvatarContainer>
    )
}