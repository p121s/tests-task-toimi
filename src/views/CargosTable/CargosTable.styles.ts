import Table, { TableProps as AntTableProps } from 'antd/lib/table';
import { DefaultRecordType } from 'rc-table/lib/interface';
import React from "react";
import styled from 'styled-components';


export interface TableProps extends AntTableProps<DefaultRecordType> {}

export const StyledTable: React.FC<TableProps> = styled(Table)`
    margin: 20px 0 40px;
    
    & .ant-table-row-expand-icon-cell {
        width: 0px;
        padding: 0;
        display: none;
    }

    && th {
        color: #82868C;
        font-size: 13px;
        font-weight: 400; 
    }
`;