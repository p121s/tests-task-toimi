import { Select } from "antd";
import styled from "styled-components";
import { StyledSelectProps } from "./Select.interfaces";

export const WrapperSelect = styled.div`
    position: relative;

    & .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        border-radius: 8px;
        border: 1px solid #EEEEEE;
    }
`;

export const Label = styled.label`
    position: absolute;
    left: 13px;
    top: 10px;
    color: #828282;
    font-size: 12px;
`;

export const StyledSelect = styled(Select)<StyledSelectProps>`

    && .ant-select-selector {
        width: ${props => props.width || 200}px;
        height: 62px;
    }

    && input {
        position: absolute;
        bottom: 0;
    }

    && .ant-select-selection-item {
        position: absolute;
        height: 30px;
        bottom: 0;
    }
`;