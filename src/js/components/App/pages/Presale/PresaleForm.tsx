import { PresaleStats } from '../Presale';
import Container from '../../../reusable/Container';
import ProgressBar from '../../../reusable/ProgressBar';
import Heading from '../../../reusable/Heading';
import BuyForm from './BuyForm';
import WaitForMetamask from '../../../reusable/WaitForMetamask';
import MetamaskConnect from '../../../MetamaskConnect';
import Paragraph from '../../../reusable/Paragraph';
import RemainingTime from './PresaleForm/RemainingTime';
import ClaimForm from './ClaimForm';

const BASE_PRICE_USD = 1;

const PresaleForm = (stats: PresaleStats) => {
  const softCap = Number(stats.softCap);
  const usdtRaised = Number(stats.usdtRaised);
  const tokensSold = Number(stats.tokensSold);
  const softCapReached = usdtRaised >= softCap;
  const capToUse = softCapReached ? Number(stats.presaleCap) : softCap;
  const progressToUse = softCapReached ? tokensSold : usdtRaised;

  const usdtProgress = (
    <>
      {stats.usdtRaised.toLocaleString('en-US', {
        maximumFractionDigits: 0,
        currency: 'USD',
        style: 'currency',
      })}{' '}
      /{' '}
      {capToUse.toLocaleString('en-US', {
        maximumFractionDigits: 0,
        currency: 'USD',
        style: 'currency',
      })}
    </>
  );

  const progressBarDescription = softCapReached ? (
    <strong>
      {stats.tokensSold}/ {stats.presaleCap} EKOKE - {usdtProgress}
    </strong>
  ) : (
    <strong>{usdtProgress}</strong>
  );

  if (!stats.isOpen) {
    return (
      <Container.Container>
        <Heading.H2 className="text-brand font-bold text-center">
          🎉 Presale has ended 🎉
        </Heading.H2>
        <Paragraph.Leading className="!text-center">
          The presale was a <strong>success</strong>! We've raised a total of{' '}
          <strong>
            {stats.usdtRaised.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </strong>{' '}
          and sold a total of <strong>{stats.tokensSold} EKOKE</strong> tokens.
        </Paragraph.Leading>
        <Paragraph.Leading className="!text-center">
          You can claim your tokens with the <strong>form below</strong>.
        </Paragraph.Leading>
        <WaitForMetamask otherwise={<LoginWithMetamask />}>
          <ClaimForm />
        </WaitForMetamask>
      </Container.Container>
    );
  }

  return (
    <Container.Container>
      <Container.FlexCols>
        <Container.Container>
          <Heading.H2 className="text-brand font-bold">
            Presale - Step {stats.step} (Next Price{' '}
            {Number(stats.nextPrice).toLocaleString('en-US', {
              maximumFractionDigits: 2,
              currency: 'USD',
              style: 'currency',
            })}
            )
          </Heading.H2>
          <RemainingTime />
        </Container.Container>
        <Container.Container>
          <Container.FlexRow className="gap-2">
            <ProgressBar
              hideLabel
              progress={progressToUse}
              max={capToUse}
              className="h-[64px]"
            />
            <span className="w-2/6">{progressBarDescription}</span>
          </Container.FlexRow>
        </Container.Container>
        <Container.Container className="p-8 text-center">
          <Container.Container className="grid grid-cols-2 gap-2 justify-center items-center">
            <Container.Container>
              <span className="block text-lg text-text">Presale Price</span>
              <span className="block text-xl font-bold text-brandRed">
                {BASE_PRICE_USD.toLocaleString('en-US', {
                  maximumFractionDigits: 2,
                  currency: 'USD',
                  style: 'currency',
                })}{' '}
              </span>
            </Container.Container>
            <Container.Container>
              <span className="block text-lg text-text">Presale Goal</span>
              <span className="block text-xl font-bold text-brandRed">
                {Number(stats.softCap).toLocaleString('en-US', {
                  maximumFractionDigits: 0,
                  currency: 'USD',
                  style: 'currency',
                })}
              </span>
            </Container.Container>
            <Container.Container>
              <span className="block text-lg text-text">Listing Price</span>
              <span className="block text-xl font-bold text-brandRed">
                {(stats.tokenPrice / BigInt(1_000_000)).toLocaleString(
                  'en-US',
                  {
                    maximumFractionDigits: 2,
                    currency: 'USD',
                    style: 'currency',
                  },
                )}{' '}
              </span>
            </Container.Container>
            <Container.Container>
              <span className="block text-lg text-text">
                Tokens Before Next Price Increase
              </span>
              <span className="block text-xl font-bold text-brandRed">
                {stats.tokensBeforeNextPriceIncrease}
              </span>
            </Container.Container>
          </Container.Container>
        </Container.Container>
        <WaitForMetamask otherwise={<LoginWithMetamask />}>
          <BuyForm tokenPrice={stats.tokenPrice} />
        </WaitForMetamask>
      </Container.FlexCols>
    </Container.Container>
  );
};

const LoginWithMetamask = () => (
  <Container.FlexCols className="items-center">
    <Paragraph.Default className="!text-center text-lg">
      Please login with <strong>Metamask</strong> to join the presale.
    </Paragraph.Default>
    <MetamaskConnect />
  </Container.FlexCols>
);

export default PresaleForm;
