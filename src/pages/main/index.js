import { Slider, CharacterList } from 'core/components/organisms';
import { Card } from 'core/components/molecules'
import MainLayout from 'core/components/layouts'

export default function Main(){
    return(
        <MainLayout>
            <Slider>
                {/* <Card/> */}
            </Slider>
            <CharacterList/>                
        </MainLayout>
    )
}