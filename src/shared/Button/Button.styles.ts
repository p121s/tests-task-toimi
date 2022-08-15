import { Button } from "antd";
import styled from "styled-components";


export const StyledButton = styled(Button)`
width: 120px;
height: 62px;
font-weight: 700;
border-radius: 8px;
border: ${props => props.type === "primary" ? "none" : "1px solid #1D2028"};
background: ${props => props.type === "primary" ? "#3A3C40" : "white"};

&:hover {
    border: none;
    background: #3A3C40;
    color: white;
}
`;