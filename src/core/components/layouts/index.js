import { Header } from 'core/components/molecules'
import { SectionLayout } from './styles'


const MainLayout = ({ children }) => {
    return(
        <SectionLayout>
            <Header/>
            {children}
        </SectionLayout>
    )
}

export default MainLayout