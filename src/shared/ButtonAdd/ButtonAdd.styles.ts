import { Button } from "antd";
import styled from "styled-components";

export const WrapperButtonAdd = styled.div`
    text-align: center;
    margin: 34px auto;
`;

export const StyledButtonAdd = styled(Button)`
    width: 210px;
    height: 48px;
    border-redius: 4px;
    background: #2A2E37;
    color: white;
    padding: 13px 0;
    text-align: center;
    border: none;
    
    &:hover {
        background: #82868C;
    }
`;