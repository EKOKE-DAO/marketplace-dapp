import deferredDataRequest, { makeQueryArgs, Signature } from './api';
import { mockDocumentData } from './mock';

interface DocumentData {
  mimeType: string;
  data: Uint8Array;
}

const getDocument = async (
  contractId: bigint,
  documentId: bigint,
  signature?: Signature,
): Promise<DocumentData> => {
  const url = `/contract/${contractId}/document/${documentId}?${makeQueryArgs(signature ?? {})}`;

  return await deferredDataRequest('GET', url, mockDocumentData());
};

export default getDocument;
