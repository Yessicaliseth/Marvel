import { DetailHeaderStyle } from './styles';
import  DetailHeaderComics from './comics'
import  DetailHeaderStories from './stories'

export default function DetailHeader(){
    return(
        <DetailHeaderStyle>
            <DetailHeaderStories></DetailHeaderStories>
            <DetailHeaderComics></DetailHeaderComics>
        </DetailHeaderStyle>
    )
}