import PropTypes from 'prop-types';
import { getRandomHexColor } from './GetRandomColor';
import {
  StatSection,
  Title,
  StatList,
  StatItem,
  StatName,
  StatPercent,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <StatName>{label}</StatName>
            <StatPercent>{percentage}</StatPercent>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
