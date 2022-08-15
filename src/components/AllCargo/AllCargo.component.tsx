import { DatePicker, Select } from "antd";
import { Button } from "../../shared/Button/Button.component";
import { CargosTable } from "../../views/CargosTable/CargosTable.components";
import arrowBackIcon from "../../images/svg/arrow-back.svg";
import * as S from './AllCargo.styles';
import { CustomSelect } from "../../shared/Select/Select.component";

const { Option } = Select;

export const AllCargo = () => {
  const handleChange = () => {};

  const onChange = () => {};

  return (
    <>
      <S.BackToMain to="/">
        <img src={arrowBackIcon} style={{marginRight: "10px"}} alt="Arrow back icon" />
        Вернуться на главную
      </S.BackToMain>
      <S.Title>Все грузы</S.Title>
      <S.WrapperFilters>
        <CustomSelect width={263}>
        <Option value="любой">Любой</Option>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </CustomSelect>
      {/* <S.WrapperSelect>
        <S.StyledSelect
          width={363}
          defaultValue={"Любой"}
          onChange={handleChange}
        >
          <Option value="любой">Любой</Option>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </S.StyledSelect>
        <S.Label>Порт назначения<img src={infoIcon} style={{marginLeft: "10px"}} alt="Info icon" /></S.Label>
      </S.WrapperSelect>
      <S.WrapperSelect>
        <S.StyledSelect
          width={240}
          defaultValue="lucy"
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </S.StyledSelect>
        <S.Label>Статус<img src={infoIcon} style={{marginLeft: "10px"}} alt="Info icon" /></S.Label>
      </S.WrapperSelect> */}
      <DatePicker placeholder="__.__._____" onChange={onChange} />
      <Button>СБРОСИТЬ</Button>
      <Button type="primary">ПРИМЕНИТЬ</Button>
      </S.WrapperFilters>
      <CargosTable />
    </>
  );
};
