import { styled } from 'styled-components';

export const FrListItem = styled.li`
  position: relative;
  margin-right: 100px;
`;

export const FrListStatus = styled.span`
  position: absolute;
  right: 0px;
  top: 30px;
  bottom: 20px;
  display: block;

  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;

export const FrListAvatar = styled.img``;

export const FrListName = styled.p`
  margin-top: 0;
  margin-bottom: 6px;
`;
