import * as Icon from 'react-icons/md';
import byteSize from 'byte-size';

import Container from '../../../../../../reusable/Container';
import { ContractDocument } from '../../../../../../../data/contract';
import getDocument from '../../../../../../../api/getDocument';
import { useAppContext } from '../../../../../AppContext';
import Heading from '../../../../../../reusable/Heading';

interface Props {
  contract: bigint;
  documents: ContractDocument[];
}

const ContractDocuments = ({ contract, documents }: Props) => {
  const { setAppError } = useAppContext();

  const downloadDocument = (doc: ContractDocument) => {
    console.log('downloading document', doc);
    getDocument(contract, doc.id)
      .then((response) => {
        const blob = new Blob([response.data], { type: response.mimeType });

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = doc.name;
        document.body.appendChild(a);

        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('failed to download document', doc, error);
        setAppError('Failed to download document');
      });
  };

  return (
    <Container.Container>
      <Heading.H2>Documents</Heading.H2>
      <Container.Container className="grid grid-cols-4 sm:grid-cols-2 gap-4">
        {documents.map((document) => (
          <Container.Card
            key={document.id}
            hoverScale
            className="hover:bg-gray-100 hover:cursor-pointer"
            onClick={() => downloadDocument(document)}
          >
            <Container.Container>
              <Icon.MdOutlineAttachment size={32} className="inline mr-2" />
              <span>{document.name}</span>
            </Container.Container>
            <Container.Container>
              <span className="text-text text-sm">{document.mimeType}</span>
            </Container.Container>
            <Container.Container>
              <span className="text-text text-sm">
                {byteSize(document.size).toString()}
              </span>
            </Container.Container>
          </Container.Card>
        ))}
      </Container.Container>
    </Container.Container>
  );
};

export default ContractDocuments;
