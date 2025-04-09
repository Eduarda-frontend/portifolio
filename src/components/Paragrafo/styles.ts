import styled from 'styled-components'

import { Props } from '.';


export const P = styled.p <Props>`
  line-height:22px;
  color:${(props ) => (props.tipo === 'principal' ? props.theme.corPrincipal : props.theme.corSecundaria)};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
`