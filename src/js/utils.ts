export const validateIsNumber = (
  amount: string | number | readonly string[] | undefined,
): boolean => {
  if (typeof amount !== 'string') return false;

  return !isNaN(parseInt(amount));
};
