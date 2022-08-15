import { ButtonExitProps } from "./ButtonExit.interfaces";
import * as S from "./ButtonExit.styles";

export const ButtonExit = ({type, shape, customsize, children}: ButtonExitProps) => {
    return (
        <S.StyledButtonExit type={type} shape={shape} customsize={customsize}>{children}</S.StyledButtonExit>
    );
};