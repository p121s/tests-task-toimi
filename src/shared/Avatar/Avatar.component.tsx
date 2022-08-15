import { AvatarProps } from "./Avatar.interfaces";
import * as S from "./Avatar.styles";


export const Avatar = ({size, icon}: AvatarProps) => {
    return (
        <S.StyledAvatar size={size} icon={icon} />
    );
};