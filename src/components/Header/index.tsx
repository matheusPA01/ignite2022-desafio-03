import { HeaderContainer } from "./styles";

import logoImg from '../../assets/logo.svg'
import leftHeader from '../../assets/left-header.svg'
import rightHeader from '../../assets/right-header.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={leftHeader} />
      <div>
        <img src={logoImg} />
      </div>
      <img src={rightHeader} />
    </HeaderContainer>
  )
}