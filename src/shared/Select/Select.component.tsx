import infoIcon from "../../images/svg/info.svg";
import { SelectProps } from "./Select.interfaces";
import * as S from "./Select.styles";

export const CustomSelect = ({width, defaultValue, label, children, onChange}: SelectProps) => {
    console.log(children)

    return (
        <S.WrapperSelect>
            <S.StyledSelect
                width={width}
                defaultValue={defaultValue}
                // onChange={onChange}
            >
                {children}
            </S.StyledSelect>
        <S.Label>{label} <img src={infoIcon} style={{marginLeft: "10px"}} alt="Info icon" /></S.Label>
      </S.WrapperSelect>
    );
};