import { SectionDetailCharacter, Slider } from 'core/components/organisms';
import MainLayout from 'core/components/layouts'

export default function Detail(){
    return(
        <MainLayout>
            <Slider className="withShadow"/>
            <SectionDetailCharacter/>
        </MainLayout>
    )
}