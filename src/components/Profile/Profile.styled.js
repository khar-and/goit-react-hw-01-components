import { styled } from 'styled-components';

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  margin-top: 50px;
  width: min-content;
`;

export const Description = styled.div`
  /* position: relative; */
  text-align: center;

  width: 100%;
  padding: 16px;

  border-radius: 28px;
  background: #ffffff;
  /* border: 10px, solid, blue; */
  box-shadow: 10px 0px 10px rgba(89, 213, 189, 0.45);
`;

export const Avatar = styled.img`
  width: 300px;
`;
export const AvatarName = styled.p`
  margin-left: 30px;
  color: #161414b5;
  font-size: 30px;
  font-weight: 700;
`;
export const AvatarTag = styled.p`
  color: #161414b5;
  font-size: 20px;
  font-weight: 400;
`;
export const AvatarLocation = styled.p`
  color: #161414b5;
  font-size: 20px;
  font-weight: 400;
`;
export const ProfStats = styled.ul`
  list-style: none;
  display: flex;
  padding: 12px;
  margin: 0;
`;
export const ProfStatsItem = styled.li`
  display: flex;
  width: 120px;
  justify-items: center;
  :not(:last-child) {
    border-right: 1px solid #999999;
  }
`;

export const StatsLabel = styled.span`
  font-weight: 400;
  font-size: 12px;

  margin-bottom: 10px;
  color: #999999;
`;
export const StatsQuantity = styled.span`
  font-weight: 700;
  font-size: 24px;

  color: #000000;
`;
