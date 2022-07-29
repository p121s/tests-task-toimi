import { Select } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackToMain = styled(Link)`
    color: #ACACAC;
    font-size: 12px;
`;

export const Title = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #3A3C40;
    margin: 15px 0;
`;

export const WrapperFilters = styled.div`
    display: flex;
    gap: 10px;
`;

export const WrapperSelect = styled.div`
    position: relative;
`;

export const Label = styled.label`
    position: absolute;
    left: 13px;
    top: 10px;
    color: #828282;
    font-size: 12px;

`;

interface StyledSelectProps {
    width?: number | undefined;
}

export const StyledSelect = styled(Select)<StyledSelectProps>`
& {
    background: red;
}

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