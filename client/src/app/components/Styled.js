import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || 'center'};
  width: ${(props) => props.width || '100%'};
  flex-direction: ${(props) => props.flexDirection};
`;
