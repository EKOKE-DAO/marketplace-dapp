import * as React from 'react';
import { PresaleStats } from '../Presale';
import Container from '../../../reusable/Container';
import ProgressBar from '../../../reusable/ProgressBar';
import Heading from '../../../reusable/Heading';
import BuyForm from './BuyForm';
import WaitForMetamask from '../../../reusable/WaitForMetamask';
import MetamaskConnect from '../../../MetamaskConnect';
import Paragraph from '../../../reusable/Paragraph';
import { PRESALE_END_DATE } from '../Presale';

const BASE_PRICE_USD = 1;

const formatRemainingTime = (millis: number) => {
  const seconds = Math.floor((millis / 1000) % 60);
  const minutes = Math.floor((millis / (1000 * 60)) % 60);
  const hours = Math.floor((millis / (1000 * 60 * 60)) % 24);
  const days = Math.floor(millis / (1000 * 60 * 60 * 24));

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const PresaleForm = (stats: PresaleStats) => {
  const [remainingTime, setRemainingTime] = React.useState<number>(0);
  const [remainingTimeInterval, setRemainingTimeInterval] =
    React.useState<NodeJS.Timeout>();

  const softCap = Number(stats.softCap);
  const usdtRaised = Number(stats.usdtRaised);
  const tokensSold = Number(stats.tokensSold);
  const softCapReached = usdtRaised >= softCap;
  const capToUse = softCapReached ? Number(stats.presaleCap) : softCap;
  const progressToUse = softCapReached ? tokensSold : usdtRaised;

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
          {remainingTime > 0 && (
            <Container.Container className="mt-2">
              <span className="block text-lg">
                Presale ends in{' '}
                <strong>{formatRemainingTime(remainingTime)}</strong>
              </span>
            </Container.Container>
          )}
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
