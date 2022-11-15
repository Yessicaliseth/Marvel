import { SliderStyle } from './styles';

export default function Slider(props){
    return(
        <SliderStyle className={props.className}>
            {props.children}
        </SliderStyle>
    )
}