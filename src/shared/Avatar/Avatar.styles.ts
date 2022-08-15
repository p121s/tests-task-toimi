import { Avatar } from "antd";
import styled from "styled-components";

export const StyledAvatar = styled(Avatar)`
    background: #ADB4C2;
    weight: 600;
    margin: 26px;

    & .ant-avatar {
        font-size: 16px;
    }

    &:hover {
        background: #858993; 
    }
`;