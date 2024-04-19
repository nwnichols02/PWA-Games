import React from 'react'
import { TicketData } from '../interfaces/dropsource.interfaces'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

interface IProps {
    data: TicketData[]
    columns: any,
}

const Table = (props: IProps) => {

    const table = useMaterialReactTable({
        columns: props.columns,
        data: props.data,
    });

  return (
    <MaterialReactTable table={table} />
  )
}

export default Table