import * as React from 'react';
import * as Icon from 'react-icons/fi';

import Container from '../../../reusable/Container';
import Paragraph from '../../../reusable/Paragraph';
import Heading from '../../../reusable/Heading';
import Input from '../../../reusable/Input';

const EKOKE_ADDRESS = '0x0';

const Info = () => {
  const [copied, setCopied] = React.useState(false);

  const onAddressCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(EKOKE_ADDRESS);
  };

  return (
    <Container.Container>
      <Container.Container>
        <iframe
          className="w-full"
          height={420}
          src="https://www.youtube.com/embed/R_B4AAOyARI"
          title="Zelda but Literally EVERYTHING is Randomized (FULL RUN PART 2)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </Container.Container>
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
              className="!p-2 text-center text-xl"
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
