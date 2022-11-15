import { MenuContainer, WrapperMenu } from './styles';
import { Title2, Button} from 'core/components/atoms'

export default function SubMenu({ itemsMenu, handleClick }){
    return(
        <WrapperMenu>
            {
                itemsMenu && 
                Object.keys(itemsMenu).map((itemKey, index) => {
                    const itemMenu = itemsMenu[itemKey]
                    return(
                        <MenuContainer key={index} color={itemMenu.color} onClick={() => handleClick(itemKey)}>
                                <Title2>
                                    {itemMenu.uiName}
                                </Title2>
                        </MenuContainer>
                    )
                })
            }
        </WrapperMenu>
    )
}
{/* <Button variant='contained' >162</Button> */}