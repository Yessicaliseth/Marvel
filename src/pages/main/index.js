import { Slider, CharacterList } from 'core/components/organisms';
import MainLayout from 'core/components/layouts'

export default function Main(){
    return(
        <MainLayout>
            <Slider/>
            <CharacterList/>                
        </MainLayout>
    )
}