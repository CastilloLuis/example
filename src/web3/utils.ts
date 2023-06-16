import {utils} from "ethers";

export const formatToken = (tokenPrice: bigint, decimals: number): string => {
  return `${parseFloat(utils.formatUnits(tokenPrice, decimals)).toFixed(5)}`;
}
export const isValidAddress = (address: string): boolean => {
  try {
    const validAddress = utils.getAddress(address);
    return validAddress !== address.toLowerCase();
  } catch (error) {
    return false;
  }
}
export const shortenAddress = (address = "", skipShort?: boolean): string => {
  if (!address) {
    return "";
  }
  address = utils.getAddress(address);
  if (skipShort) {
    return address;
  }
  return `${address.substr(0, 6)}...${address.substr(-6)}`;
};

