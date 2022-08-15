import { Button } from "antd";
import styled from "styled-components";
import { StyledButtonExitProps } from "./ButtonExit.interfaces";

export const StyledButtonExit = styled(Button)<StyledButtonExitProps>`
    width: ${props => props.customsize}px;
    height: ${props => props.customsize}px;
    background: #ADB4C2;
    border: none;

    &:hover {
        background: #858993;
    }
`;