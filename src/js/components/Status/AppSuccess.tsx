import * as React from 'react';
import * as Icon from 'react-feather';

import Container from '../reusable/Container';
import { useAppContext } from '../App/AppContext';
import ProgressBar from '../reusable/ProgressBar';

const AppSuccess = () => {
  const { appSuccess, setAppSuccess } = useAppContext();
  const [dismissInterval, setDismissInterval] =
    React.useState<NodeJS.Timeout>();
  const [progress, setProgress] = React.useState<number>(0);

  const onDismiss = () => {
    setAppSuccess(undefined);
  };

  React.useEffect(() => {
    return () => {
      if (dismissInterval) {
        clearInterval(dismissInterval);
      }
    };
  }, []);

  React.useEffect(() => {
    setDismissInterval(
      setInterval(() => {
        if (progress < 5000) {
          setProgress(progress + 10);
        } else {
          onDismiss();
          clearInterval(dismissInterval);
        }
      }, 10),
    );
  }, [appSuccess]);

  if (appSuccess) {
    return (
      <Container.FlexCols>
        <Container.FlexRow className="top-4 fixed mx-auto border shadow-lg z-50 right-0 left-0 w-fit items-center gap-4 justify-between p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 animate__animated animate__slideInDown">
          <Container.Container>
            <Icon.Info size={16} className="text-green-800 inline mr-2" />
            <span className="text-xs">{appSuccess}</span>
          </Container.Container>
          <Container.Container>
            <Icon.X size={16} className="text-green-800" onClick={onDismiss} />
          </Container.Container>
        </Container.FlexRow>
        <ProgressBar progress={progress} max={5000} />
      </Container.FlexCols>
    );
  } else {
    return null;
  }
};

export default AppSuccess;
