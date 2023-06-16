import * as SC from './ConnectWalletButton.styles';
import {useAccount, useConnect, useDisconnect, useNetwork} from "wagmi";
import {shortenAddress} from "@/web3/utils";
import {switchNetwork} from "@wagmi/core";

const ConnectWalletButton = () => {
  const { address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();

  const changeToOptimism = async () => {
    await switchNetwork({
      chainId: 10,
    });
  }

  if (!!address && chain?.id === 10) {
    return (
      <SC.Button onClick={() => disconnect()}>
        <span>{shortenAddress(address)} | disconnect</span>
      </SC.Button>
    )
  }

  if (!!address && chain?.id !== 10) {
    return (
      <SC.Button onClick={changeToOptimism}>
        <span>wrong network | change</span>
      </SC.Button>
    )
  }

  return (
    <SC.Button onClick={() => connect({ connector: connectors.find(_ => _.name === "MetaMask") })}>
      <span>Connect Wallet</span>
    </SC.Button>
  )
}

export default ConnectWalletButton;