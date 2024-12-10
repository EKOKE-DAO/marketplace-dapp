import * as React from 'react';
import * as Icon from 'react-icons/fi';
import { useConnectedMetaMask } from 'metamask-react';
import Skeleton from 'react-loading-skeleton';

import Wrapper from '../Wrapper';
import Container from '../../../../reusable/Container';
import TokenLogo, { Token } from '../../../../reusable/TokenLogo';
import DeferredClient from '../../../../../web3/DeferredClient';
import { ChainId } from '../../../../MetamaskConnect';
import Link from '../../../../reusable/Link';
import { Route } from '../../../../../utils/routes';
import Alerts from '../../../../reusable/Alerts';
import Button from '../../../../reusable/Button';
import { useAppContext } from '../../../AppContext';
import Paragraph from '../../../../reusable/Paragraph';

const MAX_TOKENS_PER_PAGE = 12;

interface CollectedToken {
  id: bigint;
  contract: bigint;
}

const CollectedPage = () => (
  <Wrapper>
    <Collected />
  </Wrapper>
);

export const Collected = () => {
  const { setAppError } = useAppContext();
  const { account, ethereum, chainId } = useConnectedMetaMask();

  const [tokens, setTokens] = React.useState<CollectedToken[]>([]);
  const [balance, setBalance] = React.useState<bigint>();
  const [pagedId, setPagedId] = React.useState<bigint>(BigInt(0));
  const [loading, setLoading] = React.useState<boolean>(false);

  const fetchTokens = async () => {
    if (balance === undefined) return;
    setLoading(true);
    const lowerCaseAddress = account.toLowerCase();

    const deferredClient = new DeferredClient(
      account,
      ethereum,
      chainId as ChainId,
    );
    const userTokens: CollectedToken[] = [];

    let fetchedTokens = 0;
    let i = pagedId;

    while (userTokens.length < MAX_TOKENS_PER_PAGE && fetchedTokens < balance) {
      const tokenId = BigInt(i);
      const owner = await deferredClient.ownerOf(tokenId);
      const contract = await deferredClient.tokenContract(tokenId);
      console.log(owner);

      if (owner.toLowerCase() === lowerCaseAddress) {
        userTokens.push({ id: tokenId, contract: contract.contractId });
      }

      i++;
      fetchedTokens++;
    }

    // set the paged id to the last token id
    setPagedId(BigInt(i));

    console.log(userTokens);

    setTokens([...tokens, ...userTokens]);
    setLoading(false);
  };

  const loadMore = () => {
    fetchTokens().catch((error) => {
      setAppError('Failed to fetch tokens');
      console.error(error);
    });
  };

  React.useEffect(() => {
    const deferredClient = new DeferredClient(
      account,
      ethereum,
      chainId as ChainId,
    );

    deferredClient.balanceOf(account).then(setBalance).catch(console.error);
  });

  React.useEffect(() => {
    if (balance === undefined) return;

    // get supply
    fetchTokens().catch((error) => {
      setAppError('Failed to fetch tokens');
      console.error(error);
    });
  }, [balance]);

  return (
    <Container.Container>
      {balance !== undefined && (
        <span className="block text-lg">{balance.toString()} items</span>
      )}
      {balance !== undefined && balance > BigInt(0) && tokens.length === 0 && (
        <Alerts.Warning>Loading tokens could take a while</Alerts.Warning>
      )}
      <Container.Container className="grid grid-cols-4 xl:grid-cols-6 sm:grid-cols-2 gap-4">
        {balance !== undefined &&
          balance > BigInt(0) &&
          tokens.length > 0 &&
          tokens.map((token) => (
            <Container.Card
              key={token.id.toString()}
              hoverScale
              className="p-0"
            >
              <Container.FlexCols className="items-center justify-center gap-4">
                <TokenLogo token={Token.Deferred} width={150} height={150} />
                <Container.Container>
                  <span className="block text-lg">
                    Token <strong>#{token.id.toString()}</strong>
                  </span>
                </Container.Container>
                <Container.Container>
                  <Link.Button
                    href={Route.marketplaceContractUrl(token.contract)}
                  >
                    View contract
                  </Link.Button>
                </Container.Container>
              </Container.FlexCols>
            </Container.Card>
          ))}

        {balance !== undefined &&
          balance > BigInt(0) &&
          tokens.length === 0 &&
          [...Array(MAX_TOKENS_PER_PAGE)].map((_, i) => (
            <Container.Card key={i} hoverScale className="px-4">
              <Skeleton count={5} />
            </Container.Card>
          ))}
      </Container.Container>

      {balance !== undefined && tokens.length < balance && (
        <Container.FlexCols className="items-center justify-center w-full py-4">
          <Button.Alternative
            disabled={loading}
            onClick={loadMore}
            className={`${loading ? '!bg-gray-200 hover:bg-gray-200' : ''}`}
          >
            Load more
            {loading ? (
              <Icon.FiLoader
                className="text-text animate-spin inline ml-2"
                size={24}
              />
            ) : (
              <Icon.FiArrowDownCircle className="inline ml-2" size={24} />
            )}
          </Button.Alternative>
        </Container.FlexCols>
      )}
      {balance !== undefined && balance === BigInt(0) && (
        <Paragraph.Center>You have no items</Paragraph.Center>
      )}
    </Container.Container>
  );
};

export default CollectedPage;
