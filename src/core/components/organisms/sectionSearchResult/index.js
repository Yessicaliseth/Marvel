import { SectionSearchResultStyle, ResultStyle, ImgCharacter, SearchBar } from './styles';
import { CardResult } from 'core/components/molecules'
import { Title1, WrapperList, P, Input } from 'core/components/atoms'
import { Link } from "react-router-dom";
import { isEmpty } from 'lodash'
import { useContext } from 'react'
import StateContext from 'core/context/store'
import useActions from 'core/context/actions'
import { useObserver } from "core/hooks/useObserver";


export default function CharacterList(){

    const { state } = useContext(StateContext)
    const actions = useActions()
    const characterList = state?.characters
    const renderList = isEmpty(state?.search) ? Object.keys(state?.characters) : state?.search

    const onChange = ({ target:{ value } }) => actions.searchCharacter(value);

    return(
        <SectionSearchResultStyle>
            <ResultStyle>
                <SearchBar>
                    <Title1>characters</Title1>
                    <Input 
                        placeholder={'Search'}
                        onChange={onChange}
                        value={state.searchValue}
                    />
                </SearchBar>

                <WrapperList offset={renderList.length}>
                    {
                        !isEmpty(renderList) && renderList.map((character, index) => {
                            const currentCharacter = characterList[character]
                            const imgSrc = `${currentCharacter?.thumbnail?.path}.${currentCharacter?.thumbnail?.extension}`
                            return(
                                <Link key={index} to={`${currentCharacter?.id}`}>
                                    <CardResult >
                                        <ImgCharacter src={imgSrc}/>
                                        <Title1 size={'medium'}>{currentCharacter?.name}</Title1>
                                        <P className="right" color="var(--green)">See more</P>
                                    </CardResult>
                                </Link>
                            )
                        })
                    }
                </WrapperList>
                
            </ResultStyle>
        </SectionSearchResultStyle>
    )
}