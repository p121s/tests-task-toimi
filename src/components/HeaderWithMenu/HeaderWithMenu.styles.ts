import { Input, Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const { Header, Content, Footer, Sider } = Layout;

export const WrapperMenu = styled(Sider)`
    background: white;
`;

export const StyledLink = styled(NavLink)`
    display: block;
    padding: 17px 25px;
    margin: 0 10px;
    border-radius: 10px;
    color: #2A2E37;
    font-weight: 600;

    &:hover {
        background: #E3E6EB;
        color: #2A2E37;
    }
`;

export const StyledHeader = styled(Header)`
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    background: #F9F9F9;
`;

export const WrapperSearch = styled.div`

`;

export const SearchInput = styled(Input)`
    width: 510px;
    padding: 16px 20px;
    border: none;
    border-radius: 8px;
    background: #F3F3F5;

    .ant-input {
        background: #F3F3F5;
    }
`;

export const WrapperUser = styled.div``;

export const StyledContent = styled(Content)`
    padding: 30px;
    background: #F9F9F9;
`;

export const StyledFooter = styled(Footer)`
    padding: 20px 30px;
    background: #F9F9F9;
`;