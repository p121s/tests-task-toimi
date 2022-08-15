import addIcon from "../../images/svg/add.svg";
import * as S from "./ButtonAdd.styles";

export const ButtonAdd = () => {
    return (
        <S.WrapperButtonAdd>
            <S.StyledButtonAdd>
                <img src={addIcon} alt="Add icon" />
            </S.StyledButtonAdd>
        </S.WrapperButtonAdd>
    );
};