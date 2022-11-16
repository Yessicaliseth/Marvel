import { ListComponentStyle } from './styles';
import { P, Title3 } from 'core/components/atoms/'

export default function ListComponent({ list }){

    return(
        <ListComponentStyle>
           {
                list && 
                list.map((item, index) => {
                    return(
                        <div key={index} className='listComponent'>
                            
                            <P>{item?.name}</P>
                            <P>{item?.type}</P>
                        </div>
                        
                    )
                })
            }
        </ListComponentStyle>
    )
}