import * as React from 'react';
import * as Icon from 'react-icons/fi';

import Container from './Container';

const Danger = (props: React.HTMLProps<HTMLDivElement>) => (
  <div
    className={`${props.className} p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50`}
    role="alert"
  >
    <Container.FlexResponsiveRow className="items-center gap-8">
      <Container.Container>
        <Icon.FiX size={32} />
      </Container.Container>
      <Container.Container>{props.children}</Container.Container>
    </Container.FlexResponsiveRow>
  </div>
);

const Info = (props: React.HTMLProps<HTMLDivElement>) => (
  <div
    className={`${props.className} p-4 mb-4 text-sm text-blue-800 bg-blue-50 rounded-lg`}
    role="alert"
  >
    <Container.FlexResponsiveRow className="items-center gap-8">
      <Container.Container>
        <Icon.FiInfo size={32} />
      </Container.Container>
      <Container.Container>{props.children}</Container.Container>
    </Container.FlexResponsiveRow>
  </div>
);

const Warning = (props: React.HTMLProps<HTMLDivElement>) => (
  <div
    className={`${props.className} p-4 mb-4 text-sm text-yellow-800 bg-yellow-50 rounded-lg`}
    role="alert"
  >
    <Container.FlexResponsiveRow className="items-center gap-8">
      <Container.Container>
        <Icon.FiAlertTriangle size={32} />
      </Container.Container>
      <Container.Container>{props.children}</Container.Container>
    </Container.FlexResponsiveRow>
  </div>
);

export default {
  Danger,
  Info,
  Warning,
};
