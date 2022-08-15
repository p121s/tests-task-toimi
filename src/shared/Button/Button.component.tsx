import { ButtonProps } from "./Button.interfaces";
import * as S from "./Button.styles";

export const Button = ({ type, children }: ButtonProps) => {
    return (
        <S.StyledButton type={type}>{children}</S.StyledButton>
    );
};