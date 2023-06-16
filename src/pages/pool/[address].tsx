import Layout from "@/components/Layout";
import {useRouter} from "next/router";
import Pool from "@/components/Pool";

export default function PoolPage() {
  const router = useRouter();

  return (
    <Layout>
      <Pool address={router.query.address as string || ""} />
    </Layout>
  )
}
