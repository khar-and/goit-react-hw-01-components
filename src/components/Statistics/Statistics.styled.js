import { styled } from 'styled-components';
import { getRandomHexColor } from './GetRandomColor';
export const StatSection = styled.section`
  /* width: 300px; */
  margin: 24px auto;
  padding: 12px;
  background: rgba(142, 227, 212, 0.22);
  border-radius: 18px;
`;

export const Title = styled.h2`
  display: block;
  margin-right: auto;
  margin-left: auto;
  font-size: 30px;
  margin: 0;
  margin-bottom: 18px;
  color: #000000;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatItem = styled.li`
  display: grid;
  justify-items: center;
  background-color: ${getRandomHexColor()};

  padding: 6px;
  :first-of-type {
    border-radius: 12px 0 0 12px;
  }
  :last-child {
    border-radius: 0 12px 12px 0;
  }
`;

export const StatName = styled.span`
  font-weight: 400;
  font-size: 20px;
  color: #dcdcd5;
`;

export const StatPercent = styled.span`
  font-weight: 700;
  font-size: 30px;
  color: #ffffff;
`;
