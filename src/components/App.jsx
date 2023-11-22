import { HiBeaker } from 'react-icons/hi';
import { PilotList } from './PilotList/PilotList';
import pilots from '../pilots.json';

import styled from 'styled-components';
import { GlobalStyled } from './GlobalStyle';

const PageTitle = styled.h1`
margin-top: 0;
margin-bottom: 24px;
background-color: ${(props) => {
  switch (props.$variant) {
    case 'primary':
      return 'orange';
    case "secondary":
      return "green";
    default: 
      return "blue"
  }
}};
`;

export const App = () => {
  return (
    <div>
      <PageTitle $variant="primary">
        Top rated pilots <HiBeaker size={40} />
      </PageTitle>

      <PageTitle $variant="secondary">
        Secondary header example 
      </PageTitle>

      <PageTitle>
        Default header example 
      </PageTitle>
      <PilotList pilots={pilots} />
      
      <GlobalStyled/>
      </div>
  );
};