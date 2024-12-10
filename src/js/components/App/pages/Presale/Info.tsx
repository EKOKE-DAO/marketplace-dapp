import * as React from 'react';
import * as Icon from 'react-icons/fi';

import Container from '../../../reusable/Container';
import Paragraph from '../../../reusable/Paragraph';
import Heading from '../../../reusable/Heading';
import Input from '../../../reusable/Input';
import YoutubeVideo from '../../../reusable/YoutubeVideo';

const EKOKE_ADDRESS = '0x0';

const Info = () => {
  const [copied, setCopied] = React.useState(false);

  const onAddressCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(EKOKE_ADDRESS);
  };

  return (
    <Container.Container>
      <YoutubeVideo url="https://www.youtube.com/watch?v=R_B4AAOyARI" />
      <Container.FlexCols className="p-4 gap-4 w-full">
        <Container.FlexCols className="text-center">
          <Heading.H2 className="text-center">
            Add EKOKE token to your wallet
          </Heading.H2>
          <Container.FlexRow className="items-center justify-center gap-4 mb-2">
            <Input.Input
              id="ekoke-address"
              type="text"
              value={EKOKE_ADDRESS}
              readOnly
              className="!p-2 text-center text-xl sm:text-sm"
              containerClassName="mb-0"
            />
            <button onClick={onAddressCopy}>
              {copied ? (
                <Icon.FiCheck className="cursor-pointer" />
              ) : (
                <Icon.FiCopy className="cursor-pointer" />
              )}
            </button>
          </Container.FlexRow>
          <span className="block text-text text-lg">Decimals: 9</span>
        </Container.FlexCols>
        <Container.Container>
          <Paragraph.Default>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Duo
            Reges: constructio interrete. Quae cum dixisset paulumque
            institisset, Quid est? Quae cum essent dicta, discessimus. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Duo
            Reges: constructio interrete. Quae cum dixisset paulumque
            institisset, Quid est? Quae cum essent dicta, discessimus. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Duo
            Reges: constructio interrete. Quae cum dixisset paulumque
            institisset, Quid est? Quae cum essent dicta, discessimus.{' '}
          </Paragraph.Default>
        </Container.Container>
      </Container.FlexCols>
    </Container.Container>
  );
};

export default Info;
