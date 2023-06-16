import {createContext, useContext, useEffect, useState} from "react";
import {readContracts, useAccount} from 'wagmi'
import {PoolLogicAbi} from "@/web3/abi";
import axios from "axios";
import {utils} from "ethers";
import {Pool, POOLS, usdmnyContract, usdyContract} from "@/web3/pool-config/pools";
import {formatToken} from "@/web3/utils";

type PoolContractData = {
  price?: string;
  balance?: string;
  symbol?: string;
}
export type MainPool = Pool & PoolContractData;
type ContractReadsResponse = ({ error: Error; result?: undefined; status: "failure"; } | { error?: undefined; result: unknown; status: "success"; })[]

interface IPoolContext {
  usdmnyPool: PoolContractData,
  usdyPool: PoolContractData,
  pools: MainPool[]
}

const PoolContext = createContext({} as IPoolContext);

const PoolProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { address } = useAccount();

  const [etherUSD, setEtherUSD] = useState<number>(0);
  const [pools, setPools] = useState<MainPool[]>(POOLS);
  const [usdmnyPool, setUsdmnyPool] = useState<PoolContractData>({symbol: "USDmny"} as PoolContractData);
  const [usdyPool, setUsdyPool] = useState<PoolContractData>({symbol: "USDy"} as PoolContractData);

  const getTokensData = async () => {
    const [usdmnyPrice, usdmnyDecimals, usdyPrice, usdyDecimals]: ContractReadsResponse = await readContracts({
      contracts: [
        {
          ...usdmnyContract,
          functionName: 'tokenPrice',
        },
        {
          ...usdmnyContract,
          functionName: 'decimals',
        },
        {
          ...usdyContract,
          functionName: 'tokenPrice',
        },
        {
          ...usdyContract,
          functionName: 'decimals',
        },
      ]
    } as any)

    const usdmnyTokenPrice = formatToken(usdmnyPrice.result as bigint, usdmnyDecimals.result as number);
    const usdyTokenPrice = formatToken(usdyPrice.result as bigint, usdyDecimals.result as number);
    setUsdmnyPool((pool: PoolContractData) => ({ ...pool, price: usdmnyTokenPrice }));
    setUsdyPool((pool: PoolContractData) => ({ ...pool, price: usdyTokenPrice }));
  }

  const getBalanceByPool = async (address: string) => {
    const [usdmnyBalance, usdmnyDecimals, usdyBalance, usdyDecimals]: ContractReadsResponse = await readContracts({
      contracts: [
        {
          ...usdmnyContract,
          functionName: 'balanceOf',
          args: [address]
        },
        {
          ...usdmnyContract,
          functionName: 'decimals',
        },
        {
          ...usdyContract,
          functionName: 'balanceOf',
          args: [address]
        },
        {
          ...usdyContract,
          functionName: 'decimals',
        },
      ]
    } as any)

    const myUsdmnyBalance = formatToken(usdmnyBalance.result as bigint, usdmnyDecimals.result as number);
    const myUsdyBalance = formatToken(usdyBalance.result as bigint, usdyDecimals.result as number);
    setUsdmnyPool((pool: PoolContractData) => ({ ...pool, balance: myUsdmnyBalance }));
    setUsdyPool((pool: PoolContractData) => ({ ...pool, balance: myUsdyBalance }));
  }

  useEffect(() => {
    const updatedPools = POOLS.map(pool => {
      if (pool.symbol === usdyPool.symbol) {
        return {...pool, ...usdyPool}
      }
      if (pool.symbol === usdmnyPool.symbol) {
        return {...pool, ...usdmnyPool}
      }
    })
    setPools(updatedPools as MainPool[]);
  }, [usdyPool, usdmnyPool])

  useEffect(() => {
    getTokensData()
    if (!address) {
      setUsdmnyPool(data => ({...data, balance: undefined}));
      setUsdyPool(data => ({...data, balance: undefined}));
      return;
    }
    getBalanceByPool(address);
  }, [address])

  return (
    <PoolContext.Provider value={{ usdmnyPool, usdyPool, pools }}>
      {children}
    </PoolContext.Provider>
  );
};

export const usePools = () => useContext(PoolContext);
export { PoolProvider };
