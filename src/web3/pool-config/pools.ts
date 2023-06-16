import {v4 as uuid} from 'uuid';

import usdmny from './usdmny.json';
import usdy from './usdy.json';
import {PoolLogicAbi} from "@/web3/abi";

export type Pool = {
  id: typeof uuid;
  chainId?: number;
  symbol?: string;
  address?: string;
  description?: string;
}

export const POOLS: Pool[] = [{id: uuid, ...usdmny}, {id: uuid, ...usdy}];

export const usdmnyContract = {
  address: usdmny.address,
  abi: PoolLogicAbi
}

export const usdyContract = {
  address: usdy.address,
  abi: PoolLogicAbi
}
