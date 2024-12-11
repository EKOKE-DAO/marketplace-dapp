import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'property-information';
import * as Icon from 'react-icons/fa6';

import { useAppContext } from '../../AppContext';
import Container from '../../../reusable/Container';
import Wrapper from './Wrapper';
import Link from '../../../reusable/Link';

interface Props {
  githubUrl: string;
  url: string;
}

const redirectRelativeImgToGithub = (url: string, src: string) => {
  // get base of url
  let base = url.split('/').slice(0, -1).join('/');

  if (src.startsWith('./')) {
    // replace ./
    return src.replace('./', `${base}/`);
  }

  if (src.indexOf('../') === 0) {
    // resolve `../` by removing last part of base
    base = url;
    while (src.indexOf('../') === 0) {
      src = src.replace('../', '');
      base = base.split('/').slice(0, -1).join('/');
    }

    return `${base}/${src}`;
  }

  return src;
};

const redirectHref = (href: string) => {
  return href.replace('.md', '').toLowerCase();
};

const MdPage = ({ url, githubUrl }: Props) => {
  const { setAppError } = useAppContext();
  const [md, setMd] = React.useState('');

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setMd)
      .catch((err) => {
        console.error('Failed to load page', err);
        setAppError('Failed to load page');
      });
  }, [url]);

  return (
    <Wrapper>
      <Container.Container>
        <Container.FlexRow className="items-end justify-end w-full">
          <Container.Container>
            <Link.Button href={githubUrl} target="_blank">
              <Icon.FaGithub className="inline mr-2" size={24} /> View on GitHub
            </Link.Button>
          </Container.Container>
        </Container.FlexRow>
        <Container.Container className={'markdown'}>
          {md && (
            <ReactMarkdown
              components={{
                a: function ({ node, ...props }) {
                  if (!node) {
                    return null;
                  }
                  if (!node.properties.href) {
                    return null;
                  }
                  if (typeof node.properties.href !== 'string') {
                    return null;
                  }
                  const href = node.properties.href;

                  props.href = redirectHref(href);

                  return (
                    <a href={props.href} target={props.target}>
                      {props.children as unknown as any}
                    </a>
                  );
                },
                img: function ({ node, ...props }) {
                  if (!node) {
                    return null;
                  }
                  if (!node.properties.src) {
                    return null;
                  }
                  if (typeof node.properties.src !== 'string') {
                    return null;
                  }
                  const src = node.properties.src;

                  props.src = redirectRelativeImgToGithub(url, src);

                  return (
                    <img
                      src={props.src}
                      alt={props.alt}
                      width={props.width}
                      height={props.height}
                    />
                  );
                },
              }}
              remarkPlugins={[remarkGfm]}
            >
              {md}
            </ReactMarkdown>
          )}
        </Container.Container>
      </Container.Container>
    </Wrapper>
  );
};

export default MdPage;
