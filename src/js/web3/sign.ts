import { Signature } from '../api/api';

const MESSAGE = 'Sign this message to view your contracts';

export const signMessage = async (
  address: string,
  ethereum: any,
): Promise<Signature> => {
  const msgHex = Buffer.from(MESSAGE, 'utf8').toString('hex');

  const signature = await ethereum.request({
    method: 'personal_sign',
    params: [msgHex, address],
  });

  return {
    message: MESSAGE,
    signature,
  };
};
