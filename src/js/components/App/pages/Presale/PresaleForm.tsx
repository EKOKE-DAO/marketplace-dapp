import * as React from 'react';
import { PresaleStats } from '../Presale';
import Container from '../../../reusable/Container';
import ProgressBar from '../../../reusable/ProgressBar';
import Heading from '../../../reusable/Heading';
import BuyForm from './BuyForm';

const BASE_PRICE_USD = 1;

const PresaleForm = (stats: PresaleStats) => {
  const capToUse = Number(stats.softCap);

  return (
    <Container.Container>
      <Container.FlexCols className="text-center">
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
        </Container.Container>
        <Container.Container>
          <Container.FlexRow className="gap-2">
            <ProgressBar
              hideLabel
              progress={Number(stats.tokensSold)}
              max={capToUse}
              className="h-[64px]"
            />
            <span className="text-brandRed w-2/6">
              <strong>
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
              </strong>
            </span>
          </Container.FlexRow>
        </Container.Container>
        <Container.Container className="p-8">
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
        <BuyForm tokenPrice={stats.tokenPrice} />
      </Container.FlexCols>
    </Container.Container>
  );
};

export default PresaleForm;
