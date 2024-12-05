export const EKOKE_DECIMALS = 8;
export const USDT_DECIMALS = 6;

export const convertToHumanReadable = (
  value: bigint,
  decimals: number,
  hideDecimals: boolean = false,
): string => {
  if (value === BigInt(0)) {
    return '0';
  }

  const divisor = BigInt(10 ** decimals);

  const wholePart = value / divisor;

  if (hideDecimals) {
    return wholePart.toString();
  }

  const fractionalPart = value % divisor;

  const fractionalString = fractionalPart.toString().padStart(decimals, '0');

  return `${wholePart.toString()}.${fractionalString}`;
};
