import styled from 'styled-components'

import { Props } from '.';


export const P = styled.p <Props>`
  line-height:22px;
  color:${(props ) => (props.tipo === 'principal' ? '#282A35' : '#949494')};
  font-size:'14px';
`