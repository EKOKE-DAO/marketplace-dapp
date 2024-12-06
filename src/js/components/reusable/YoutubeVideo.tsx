import * as React from 'react';
import Container from './Container';

interface Props {
  url: string;
}

const getWindowWidth = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth;
  }

  return 0;
};

const YoutubeVideo = ({ url }: Props) => {
  const [windowWidth, setWindowWidth] = React.useState(getWindowWidth());

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (typeof window !== 'undefined')
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  const videoId = url.split('v=')[1];

  return (
    <Container.Container>
      <iframe
        width={windowWidth < 768 ? '100%' : '560'}
        height={windowWidth < 768 ? '315' : '315'}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Container.Container>
  );
};

export default YoutubeVideo;
