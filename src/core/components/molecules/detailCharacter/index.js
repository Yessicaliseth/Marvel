import { useState } from 'react'
import { SectionContainer, SectionLayout, SubHeadContainer} from './styles';
import { ListComponent, TitleDetail} from 'core/components/molecules'
import SubMenu from 'core/components/molecules/subMenu';
import { ITEMS_MENU } from 'core/const/ui';
import { Title3 } from 'core/components/atoms'


export default function CharacterSections({ characterData }){

    const [ view, setView ] = useState(Object.keys(ITEMS_MENU)[0])
    const sourceList = characterData[view].items
    return(
        <SectionLayout>
            <SectionContainer>
                <SubMenu 
                    itemsMenu={ITEMS_MENU}
                    handleClick={setView}
                />
                <TitleDetail 
                    title={ITEMS_MENU[view].uiName} 
                    amount={characterData[view]?.items?.length}

                />
                <SubHeadContainer>
                    <Title3>Name</Title3>
                    <Title3>Type</Title3>
                </SubHeadContainer>
                <ListComponent list={sourceList} />
            </SectionContainer>
        </SectionLayout>
    )
}