import { SelectProps as AntSelectProps } from "antd";
import { DefaultRecordType } from "rc-table/lib/interface";
import { ReactNode } from "react";

export interface SelectProps extends AntSelectProps<DefaultRecordType> {
    width: number | undefined;
    label?: string;
    children: ReactNode | ReactNode[];
    
}

export interface StyledSelectProps {
    width?: number | undefined;
}