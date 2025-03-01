import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import * as Icon from 'react-icons/fi';
import * as MdIcon from 'react-icons/md';

import getContractById from '../../../../../../api/getContractById';
import { Contract } from '../../../../../../data/contract';
import { useAppContext } from '../../../../AppContext';
import Container from '../../../../../reusable/Container';
import { useConnectedMetaMask } from 'metamask-react';
import { ChainId } from '../../../../../MetamaskConnect';
import DeferredClient from '../../../../../../web3/DeferredClient';
import Paragraph from '../../../../../reusable/Paragraph';
import ProgressBar from '../../../../../reusable/ProgressBar';
import Link from '../../../../../reusable/Link';
import { Route } from '../../../../../../utils/routes';
import { Signature } from '../../../../../../api/api';
import Heading from '../../../../../reusable/Heading';
import ContractDocuments from './ContractDocuments';

import PropertyPlaceholder from '../../../../../../../assets/images/property-placeholder.webp';

interface Props {
  id: bigint;
  signature: Signature;
}

enum ContractActor {
  Buyer,
  Seller,
}

interface ContractStats {
  contract: Contract;
  actor: ContractActor;
  installments: number;
  progress: number;
}

const ContractCard = ({ id, signature }: Props) => {
  const { setAppError } = useAppContext();
  const { account, ethereum, chainId } = useConnectedMetaMask();
  const [contract, setContract] = React.useState<ContractStats>();

  const fetchContract = async (): Promise<ContractStats> => {
    const deferredClient = new DeferredClient(
      account,
      ethereum,
      chainId as ChainId,
    );

    const contract = await getContractById(id, signature);
    const deferredContract = await deferredClient.getContract(id);

    const isSeller = deferredContract.sellers.some(
      (seller) => seller.seller.toLowerCase() === account.toLowerCase(),
    );

    const actor = isSeller ? ContractActor.Seller : ContractActor.Buyer;

    const installments =
      deferredContract.tokenToId - deferredContract.tokenFromId + BigInt(1);

    const progress = await deferredClient.contractProgress(id);

    return {
      contract,
      actor,
      installments: Number(installments),
      progress: Number(progress),
    };
  };

  React.useEffect(() => {
    fetchContract()
      .then(setContract)
      .catch((error) => {
        setAppError('Failed to fetch contract');
        console.error(error);
      });
  }, [id]);

  if (!contract) {
    return <LoadingContract />;
  }

  const {
    contract: { realEstate, price, currency, expiration },
    actor,
    installments,
    progress,
  } = contract;

  return (
    <Container.Card className="!p-0">
      <Container.FlexCols className="items-start justify-center gap-8 w-full">
        <Container.Container className="w-full">
          <img
            src={realEstate.image ?? PropertyPlaceholder}
            alt={realEstate.name}
            className="w-full object-cover sm:h-[300px] rounded-t-lg"
            width={500}
            height={400}
          />
        </Container.Container>
        <Container.FlexCols className="px-4 pb-4 gap-2 justify-between h-full w-full">
          <Heading.H2 className="block text-brand text-lg font-semibold">
            {realEstate.name}
          </Heading.H2>
          <span className="text-gray-500">
            <Icon.FiDollarSign
              size={16}
              className="text-gray-500 mr-2 inline"
            />
            {price.toLocaleString('en-US', {
              style: 'currency',
              currency,
            })}
          </span>
          <span className="text-gray-500">
            <Icon.FiMapPin size={16} className="text-gray-500 mr-2 inline" />
            {realEstate.address}
          </span>
          {contract.contract.agency && (
            <span className="text-gray-500">
              <Icon.FiSearch size={16} className="text-gray-500 mr-2 inline" />
              <Link.Default
                href={Route.agentUrl(contract.contract.agency.owner)}
              >
                {contract.contract.agency.agent}
              </Link.Default>
            </span>
          )}
          <Container.Container className="grid grid-cols-2 sm:grid-cols-1">
            {realEstate.rooms !== undefined && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdBedroomParent
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                {realEstate.rooms} Rooms
              </Container.Container>
            )}
            {realEstate.square_meters !== undefined && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdSquareFoot
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                {realEstate.square_meters} Square Meters
              </Container.Container>
            )}
            {realEstate.bathrooms !== undefined && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdBathtub
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                {realEstate.bathrooms} Bathrooms
              </Container.Container>
            )}
            {realEstate.balconies !== undefined && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdBalcony
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                {realEstate.balconies} Balconies
              </Container.Container>
            )}
            {realEstate.garden === true && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdLocalFlorist
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                Garden
              </Container.Container>
            )}
            {realEstate.pool === true && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdPool
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                Swimming Pool
              </Container.Container>
            )}
            {realEstate.garage === true && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdGarage
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                Garage
              </Container.Container>
            )}
            {realEstate.parking === true && (
              <Container.Container className="text-sm text-gray-500">
                <MdIcon.MdLocalParking
                  size={16}
                  className="text-gray-500 mr-2 inline"
                />
                Outside Parking
              </Container.Container>
            )}
          </Container.Container>
          <Container.FlexCols className="w-full items-center justify-center px-8">
            <span className="text-text">Mortgage payment progress</span>
            <ProgressBar
              bgColor="bg-green-500"
              textColor="text-white"
              progress={progress}
              max={installments}
            />
          </Container.FlexCols>
          <Container.Container>
            <Paragraph.Center className="!text-sm">
              {actor === ContractActor.Seller
                ? 'The contract expires on'
                : 'You still have time to pay until'}{' '}
              <strong>{expiration.toLocaleDateString()}</strong>
            </Paragraph.Center>
          </Container.Container>
          <Container.FlexCols className="w-full items-center justify-center">
            <Link.Button href={Route.marketplaceContractUrl(id)}>
              View contract
              <Icon.FiArrowRight size={24} className="inline ml-2" />
            </Link.Button>
          </Container.FlexCols>
          <Container.Container>
            <ContractDocuments
              contract={id}
              documents={contract.contract.documents}
              signature={signature}
            />
          </Container.Container>
        </Container.FlexCols>
      </Container.FlexCols>
    </Container.Card>
  );
};

const LoadingContract = () => (
  <Container.Card hoverScale className="!p-0">
    <Skeleton height={400} />
    <Skeleton count={15} />
  </Container.Card>
);

export default ContractCard;
