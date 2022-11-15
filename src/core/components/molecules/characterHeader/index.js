import { CharacterHeaderStyle } from './styles';

export default function CharacterHeader(props){
    return(
        <CharacterHeaderStyle>
            {props.children}
        </CharacterHeaderStyle>
    )
}