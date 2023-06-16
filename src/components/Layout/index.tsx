import * as SC from './Layout.styles'
import GlobalStyles from "@/styles/globalStyles";
import Header from "@/components/Header";
import Web3Wrapper from "@/components/Web3Wrapper";
import {PoolProvider} from "@/contexts/PoolContext";

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
    <GlobalStyles />
    <Web3Wrapper>
      <PoolProvider>
        <SC.Container>
          <Header />
          <SC.MainChildren>
            {children}
          </SC.MainChildren>
          <GlobalStyles />
        </SC.Container>
      </PoolProvider>
    </Web3Wrapper>
  </>
  )
}

export default Layout;
