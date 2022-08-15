import logoIcon from "../../images/svg/logo.svg";
import * as S from "./Logo.styles";

export const Logo = () => {
    return (
        <S.WrapperLogo>
            <img src={logoIcon} alt="Logo icon" />
        </S.WrapperLogo>
    );
};