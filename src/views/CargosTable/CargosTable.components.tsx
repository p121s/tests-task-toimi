import { DownOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { DefaultRecordType } from "rc-table/lib/interface";
import { CargoCard } from "../CargoCard/CargoCard.component";
import * as S from "./CargosTable.styles";

interface DataType {
    key: React.Key;
    number: string;
    type: string;
    pinnedOrder: string;
    shipper: string;
    certificateNumber: string;
    invoiceNumber: string;
    date: string;
  }
  
  const columns: ColumnsType<DataType> = [
    { title: "Номер груза", dataIndex: "number", key: "number", sorter: (a, b) => a.number > b.number ? 1 : a < b ? -1 : 0, },
    { title: "Тип", dataIndex: "type", key: "type", sorter: (a, b) => a.type > b.type ? 1 : a < b ? -1 : 0, },
    { title: "Закрепленный заказ", dataIndex: "pinnedOrder", key: "pinnedOrder", sorter: (a, b) => a.pinnedOrder > b.pinnedOrder ? 1 : a < b ? -1 : 0, },
    { title: "Грузоотправитель", dataIndex: "shipper", key: "shipper", sorter: (a, b) => a.shipper > b.shipper ? 1 : a < b ? -1 : 0, },
    { title: "Номер приемного акта", dataIndex: "certificateNumber", key: "certificateNumber", sorter: (a, b) => a.certificateNumber > b.certificateNumber ? 1 : a < b ? -1 : 0, },
    { title: "Номер транспортной/ЖД накладной", dataIndex: "invoiceNumber", key: "invoiceNumber", sorter: (a, b) => a.invoiceNumber > b.invoiceNumber ? 1 : a < b ? -1 : 0, },
    { title: "Дата поступления в порт", dataIndex: "date", key: "date", sorter: (a, b) => a.date > b.date ? 1 : a < b ? -1 : 0, },
    { 
      title: "",
      dataIndex: "",
      key: "x",
      render: () => <DownOutlined />,
    },
  ];

const data: DataType[] = [
    {
      key: 1,
      number: "215888",
      type: "jdhcjkdskjcds",
      pinnedOrder: "New York No. 1 Lake Park",
      shipper:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
      certificateNumber: "dhsjvhcjkdshjkvhjds",
      invoiceNumber: "klcdshjks",
      date: "23.11.22",
    },
    {
      key: 2,
      number: "32658",
      type: "kdhjhcksdhj",
      pinnedOrder: "London No. 1 Lake Park",
      shipper:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
      certificateNumber: "dhsjvhcjkdshjkvhjds",
      invoiceNumber: "klcdshjks",
      date: "23.11.22",
    },
    {
      key: 3,
      number: "26598",
      type: "hjcdshgkgcdsh",
      pinnedOrder: "Jiangsu No. 1 Lake Park",
      shipper: "This not expandable",
      certificateNumber: "dhsjvhcjkdshjkvhjds",
      invoiceNumber: "klcdshjks",
      date: "23.11.22",
    },
    {
      key: 4,
      number: "6599863",
      type: "kdhjcgkdsbkjchjdk",
      pinnedOrder: "Sidney No. 1 Lake Park",
      shipper:
        "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
      certificateNumber: "dhsjvhcjkdshjkvhjds",
      invoiceNumber: "klcdshjks",
      date: "23.11.22",
    },
  ];

export const CargosTable = () => {
    return (
        <S.StyledTable
        columns={columns as ColumnsType<DefaultRecordType>}
        dataSource={data}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{<CargoCard />}</p>
          ),
        }}
        expandRowByClick
        rowSelection={{
          type: 'checkbox',
        }}
      />
    )
};