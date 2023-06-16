import * as SC from './Header.styles'
import Image from "next/image";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {useRouter} from "next/router";
import ConnectWalletButton from "@/components/ConnectWalletButton";

const Header = () => {
  const router = useRouter();
  return (
    <SC.HeaderContainer>
      <SC.Logo onClick={() => router.push('/home')}>
        <Image src="/logo.png" alt="Logo" width={120} height={50} />
      </SC.Logo>
      {/*Connection using Rainbow*/}
        <ConnectButton />
      {/*  */}
      {/*Connection using custom button + wagmi*/}
      {/*  <ConnectWalletButton />*/}
      {/*  */}
    </SC.HeaderContainer>
  );
}

export default Header