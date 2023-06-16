import * as SC from './Table.styles'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {Pool, POOLS} from "@/web3/pool-config/pools";
import {useRouter} from "next/router";
import {usePools} from "@/contexts/PoolContext";
import Skeleton from "@/components/Skeleton";
import ConnectWalletButton from "@/components/ConnectWalletButton";

type HomeColumn = {
  balance?: string;
  price?: string;
}

type TableDataTypes = Pool & HomeColumn;

const columnHelper = createColumnHelper<TableDataTypes>()
const columns = [
  columnHelper.accessor("symbol", {
    header: "Symbol"
  }),
  columnHelper.accessor("chainId", {
    header: "Chain ID"
  }),
  columnHelper.accessor("price", {
    header: "Price"
  }),
  columnHelper.accessor("balance", {
    header: "Your balance"
  }),
  columnHelper.accessor("address", {
    header: "Pool",
    cell: (data) => (<SC.OpenPoolButton>Open Pool</SC.OpenPoolButton>)
  }),
]

export const Table = () => {
  const router = useRouter();
  const { pools } = usePools();

  const table = useReactTable({
    data: pools,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <SC.Table>
      <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
            </th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id} onClick={() => router.push(`/pool/${row.original.address}`)}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>
              {!cell.getContext().getValue() && <Skeleton width={100} height={20} />}
              {!!cell.getContext().getValue() && flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
      </tbody>
    </SC.Table>

  )
}