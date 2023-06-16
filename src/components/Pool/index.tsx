import {MainPool, usePools} from "@/contexts/PoolContext";
import {useEffect, useState} from "react";
import * as SC from "./Pool.styles"
import Skeleton from "@/components/Skeleton";
import {useCopyToClipboard} from "@/hooks";
import {isValidAddress} from "@/web3/utils";

interface PoolProps {
  address: string
}

const Pool = ({ address: contractAddress }: PoolProps) => {
  const { pools } = usePools();
  const [copiedValue, copy] = useCopyToClipboard();

  const [invalidAddress, setInvalidAddress] = useState<boolean>(false);
  const [currentPool, setCurrentPool] = useState<MainPool |  null>(null);
  const [showAddress, setShowAddress] = useState<boolean>(false);

  useEffect(() => {
    if (!contractAddress || !pools) return;
    if (!isValidAddress(contractAddress)) {
      setInvalidAddress(true);
      return;
    }
    const pool = pools.find(_ => _.address?.toLowerCase() === contractAddress.toLowerCase());
    setCurrentPool(pool!)
  }, [contractAddress, pools])

  if (invalidAddress) {
    return <SC.PoolCard>
      <SC.Title>Invalid address 😔</SC.Title>
    </SC.PoolCard>
  }

  return (
    <SC.PoolCard>
      <SC.Title>{currentPool?.symbol}</SC.Title>
      <img src="https://cryptologos.cc/logos/optimism-ethereum-op-logo.png" alt={"Optimism Logo"} width={50} height={50} />
      <SC.Description>
        {currentPool?.description}
      </SC.Description>
      <SC.Balances>
        <div>
          <label>Price</label>
          {!currentPool?.price && <Skeleton width={100} height={35} />}
          {currentPool?.price && <span>{currentPool?.price}</span>}
        </div>
        <div>
          <label>your balance</label>
          {!currentPool?.balance && <Skeleton width={100} height={35} />}
          {currentPool?.balance &&<span>{currentPool?.balance}</span>}
        </div>
      </SC.Balances>
      <SC.Address href={`https://optimistic.etherscan.io/address/${currentPool?.address}`} target="_blank">
        Open on Etherscan
      </SC.Address>
      <SC.ShowAddress>
        {showAddress && <span>{currentPool?.address}</span>}
        <div>
          {showAddress && <span  onClick={() => copy(currentPool?.address || "")}>Copy</span>}
          <span onClick={() => setShowAddress(!showAddress)}>{showAddress ? "Hide" : "Show"} address</span>
        </div>
      </SC.ShowAddress>
    </SC.PoolCard>
  )
}

export default Pool;