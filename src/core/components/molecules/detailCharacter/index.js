import { useState } from 'react'
import { SectionContainer } from './styles';
import { ListStories, TitleDetail} from '..'
import styled from 'styled-components'
import SubMenu from 'core/components/molecules/subMenu';
import { ITEMS_MENU } from 'core/const/ui'

const SectionLayout = styled.div`
    background-color: var(--black-dark-bg);
    height: calc(100vh - 200px);
    overflow-y: scroll;
`


const COMPONENTS = {
    stories:ListStories,
    comics:ListStories
}

export default function CharacterSections(){

    const [ view, setView ] = useState(Object.keys(ITEMS_MENU)[0])
    const ContentComponent = COMPONENTS[view] || <p>Not component to render</p>

    return(
        <SectionLayout>
            <SectionContainer>
                <SubMenu 
                    itemsMenu={ITEMS_MENU}
                    handleClick={setView}
                />
                <TitleDetail title={ITEMS_MENU[view].uiName}/>
                <ContentComponent/>
            </SectionContainer>
        </SectionLayout>
    )
}