import { SearchOutlined, LogoutOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { Link, Outlet } from "react-router-dom";
import { Avatar } from "../../shared/Avatar/Avatar.component";
import { ButtonExit } from "../../shared/ButtonExit/ButtonExit.component";
import allOrdersIcon from "../../images/svg/all-orders.svg";
import allCargosIcon from "../../images/svg/all-cargos.svg";
import portsIcon from "../../images/svg/ports.svg";
import usersIcon from "../../images/svg/users.svg";
import wavyLine from "../../images/svg/wavy-line.svg";
import allOrganisationIcon from "../../images/svg/all-organisations.svg";
import allDocumentsIcon from "../../images/svg/all-documents.svg";
import questionAnswer from "../../images/svg/question-answer.svg";
import privacyPolicy from "../../images/svg/privacy-policy.svg";
import updateHistory from "../../images/svg/update-history.svg";
import searchIcon from "../../images/svg/search.svg";
import * as S from "./HeaderWithMenu.styles";
import { Logo } from "../../shared/Logo/Logo.components";
import { ButtonAdd } from "../../shared/ButtonAdd/ButtonAdd.components";

export const HeaderWithMenu = () => {
  return (
    <Layout>
      <S.WrapperMenu width={270}>
        <Logo />
        <ButtonAdd />
        <div>
          <S.StyledLink to="/">
            <img
              src={allOrdersIcon}
              style={{ marginRight: "25px" }}
              alt="All orders icon"
            />
            ВСЕ ЗАКАЗЫ
          </S.StyledLink>
          <S.StyledLink to="/all-cargo">
            <img
              src={allCargosIcon}
              style={{ marginRight: "25px" }}
              alt="All cargos icon"
            />
            ВСЕ ГРУЗЫ
          </S.StyledLink>
          <S.StyledLink to="/">
            <img
              src={portsIcon}
              style={{ marginRight: "25px" }}
              alt="Ports icon"
            />
            ПОРТЫ
          </S.StyledLink>
          <S.StyledLink to="/">
            <img
              src={usersIcon}
              style={{ marginRight: "25px" }}
              alt="Users icon"
            />
            ПОЛЬЗОВАТЕЛИ
          </S.StyledLink>
          <img src={wavyLine} style={{ margin: "20px" }} alt="Wavy line" />
          <S.StyledLink to="/">
            <img
              src={allOrganisationIcon}
              style={{ marginRight: "25px" }}
              alt="All organisation icon"
            />
            ВСЕ ОРГАНИЗАЦИИ
          </S.StyledLink>
          <S.StyledLink to="/">
            <img
              src={allDocumentsIcon}
              style={{ marginRight: "25px" }}
              alt="All documents icon"
            />
            ВСЕ ДОКУМЕНТЫ
          </S.StyledLink>
          <img src={wavyLine} style={{ margin: "20px" }} alt="Wavy line" />
          <S.StyledLink to="/">
            <img
              src={questionAnswer}
              style={{ marginRight: "25px" }}
              alt="Question-Answer icon"
            />
            ВОПРО-ОТВЕТ
          </S.StyledLink>
          <S.StyledLink to="/">
            <img
              src={privacyPolicy}
              style={{ marginRight: "25px" }}
              alt="Privacy policy icon"
            />
            ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
          </S.StyledLink>
          <S.StyledLink to="/">
            <img
              src={updateHistory}
              style={{ marginRight: "25px" }}
              alt="Update history icon"
            />
            ИСТОРИЯ ОБНОВЛЕНИЙ
          </S.StyledLink>
        </div>
      </S.WrapperMenu>
      <Layout>
        <S.StyledHeader>
          <S.WrapperSearch>
            <S.SearchInput
              placeholder="Найти коносамент, груз, заказ и др."
              prefix={<img src={searchIcon} alt="Search icon" />}
            />
          </S.WrapperSearch>
          <S.WrapperUser>
            Менеджер
            <Avatar size={52} icon={<>NN</>} />
            <ButtonExit type="primary" shape="circle" customsize={52}>
              <LogoutOutlined />
            </ButtonExit>
          </S.WrapperUser>
        </S.StyledHeader>
        <S.StyledContent>
          <Outlet />
        </S.StyledContent>
        <S.StyledFooter>
          <p>© 2022 ООО “Компания”, Все права защищены.</p>
          <p>
            <Link to="/">Вопрос-ответ</Link>
            <Link to="/">Политика конфиденциальности</Link>
            <Link to="/">История обновлений</Link>
          </p>
        </S.StyledFooter>
      </Layout>
    </Layout>
  );
};
