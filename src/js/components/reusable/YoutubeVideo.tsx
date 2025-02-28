import * as React from 'react';
import Container from './Container';

interface Props {
  url: string;
  width?: number;
}

const getWindowWidth = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth;
  }

  return 0;
};

const getVideoId = (url: string) => {
  if (url.includes('v=')) {
    return url.split('v=')[1];
  }

  if (url.startsWith('https://youtu.be/')) {
    return url.split('https://youtu.be/')[1];
  }

  return '';
};

const YoutubeVideo = ({ width, url }: Props) => {
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

  const videoId = getVideoId(url);

  const useWidth = windowWidth < 768 ? '100%' : (width ?? '100%');

  return (
    <Container.Container>
      <iframe
        width={useWidth}
        height={windowWidth < 768 ? '315' : '420'}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Container.Container>
  );
};

export default YoutubeVideo;
