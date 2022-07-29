import { Button, DatePicker, Select, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import * as S from './AllCargo.styles';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  description: string;
}

const columns: ColumnsType<DataType> = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Address", dataIndex: "address", key: "address" },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];

const data: DataType[] = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    description:
      "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
  },
  {
    key: 3,
    name: "Not Expandable",
    age: 29,
    address: "Jiangsu No. 1 Lake Park",
    description: "This not expandable",
  },
  {
    key: 4,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    description:
      "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
  },
];

const { Option } = Select;

export const AllCargo = () => {
  const handleChange = () => {};

  const onChange = () => {};

  return (
    <>
      <S.BackToMain to="/">Вернуться на главную</S.BackToMain>
      <S.Title>Все грузы</S.Title>
      <S.WrapperFilters>
      <S.WrapperSelect>
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
        <S.Label>Порт назначения</S.Label>
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
        <S.Label>Статус</S.Label>
      </S.WrapperSelect>
      <DatePicker placeholder="__.__._____" onChange={onChange} />
      <Button>Сбросить</Button>
      <Button type="primary">Применить</Button>
      </S.WrapperFilters>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
        }}
        dataSource={data}
      />
    </>
  );
};
