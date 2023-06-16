import {WagmiConfig} from "wagmi";
import {RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {chains, wagmiConfig} from "@/web3/rainbowConfig";

interface RainbowWrapperProps {
  children: React.ReactNode
}
const Web3Wrapper = ({ children }: RainbowWrapperProps) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        { children }
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default Web3Wrapper;