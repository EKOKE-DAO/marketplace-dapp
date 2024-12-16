import * as React from 'react';
import Container from '../../../../reusable/Container';
import { PRESALE_END_DATE } from '../../Presale';

const formatRemainingTime = (millis: number) => {
  const seconds = Math.floor((millis / 1000) % 60);
  const minutes = Math.floor((millis / (1000 * 60)) % 60);
  const hours = Math.floor((millis / (1000 * 60 * 60)) % 24);
  const days = Math.floor(millis / (1000 * 60 * 60 * 24));

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const RemainingTime = () => {
  const [remainingTime, setRemainingTime] = React.useState<number>(0);
  const [remainingTimeInterval, setRemainingTimeInterval] =
    React.useState<NodeJS.Timeout>();

  React.useEffect(() => {
    if (!remainingTimeInterval) {
      const interval = setInterval(() => {
        const remaining = Math.max(0, PRESALE_END_DATE.getTime() - Date.now());
        setRemainingTime(remaining);
      }, 1000);

      setRemainingTimeInterval(interval);
    }

    return () => {
      if (remainingTimeInterval) {
        clearInterval(remainingTimeInterval);
      }
    };
  }, []);

  if (remainingTime === 0) {
    return null;
  }

  return (
    <Container.Container className="mt-2">
      <span className="block text-lg">
        Presale ends in <strong>{formatRemainingTime(remainingTime)}</strong>
      </span>
    </Container.Container>
  );
};

export default RemainingTime;
