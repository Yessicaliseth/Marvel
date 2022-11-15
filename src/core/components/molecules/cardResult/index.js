import { CardResultStyle } from './styles';

export default function CardResult(props){
    return(
        <CardResultStyle>
            {props.children}
        </CardResultStyle>
    )
}