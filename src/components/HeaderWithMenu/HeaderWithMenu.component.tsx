import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SearchOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Input, Layout } from "antd";
import { Link, Outlet } from "react-router-dom";
import * as S from "./HeaderWithMenu.styles";

export const HeaderWithMenu = () => {
  return (
    <Layout>
      <S.WrapperMenu width={270}>
        <div>Logo</div>
        <div>
          <S.StyledLink to="/">ВСЕ ЗАКАЗЫ</S.StyledLink>
          <S.StyledLink to="/all-cargo">ВСЕ ГРУЗЫ</S.StyledLink>
          <S.StyledLink to="/">ПОРТЫ</S.StyledLink>
          <S.StyledLink to="/">ПОЛЬЗОВАТЕЛИ</S.StyledLink>
          <S.StyledLink to="/">ВСЕ ОРГАНИЗАЦИИ</S.StyledLink>
          <S.StyledLink to="/">ВСЕ ДОКУМЕНТЫ</S.StyledLink>
          <S.StyledLink to="/">ВОПРО-ОТВЕТ</S.StyledLink>
          <S.StyledLink to="/">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</S.StyledLink>
          <S.StyledLink to="/">ИСТОРИЯ ОБНОВЛЕНИЙ</S.StyledLink>
        </div>
      </S.WrapperMenu>
      <Layout>
        <S.StyledHeader>
          <S.WrapperSearch>
            <S.SearchInput
              placeholder="Найти коносамент, груз, заказ и др."
              prefix={<SearchOutlined />}
            />
          </S.WrapperSearch>
          <S.WrapperUser>
            Менеджер
            <Avatar size={52} icon={<>NN</>} />
            <Button type="primary" shape="circle" size="large">
              <LogoutOutlined />
            </Button>
          </S.WrapperUser>
        </S.StyledHeader>
        <S.StyledContent>
            <Outlet />
        </S.StyledContent>
        <S.StyledFooter>
          <p>© 2022 ООО “Компания”, Все права защищены.</p>
          <p>
            <Link to='/'>Вопрос-ответ</Link>
            <Link to='/'>Политика конфиденциальности</Link>
            <Link to='/'>История обновлений</Link>
          </p>
        </S.StyledFooter>
      </Layout>
    </Layout>
  );
};
