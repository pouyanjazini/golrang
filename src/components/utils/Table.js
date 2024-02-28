import React, { useEffect, useRef, useState } from "react";
import { Table as AntTable, Card, Input, Space } from "antd";
import Icon from "./Icon";

export default function Table({ columns, data, rowKey = "id" }) {
  const searchInput = useRef(null);
  const [column, setColumn] = useState([]);

  console.log("data", data);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
  };

  const handleReset = (clearFilters) => {
    clearFilters();
  };

  const searchInColumns = (dataIndex, title) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <Card>
        <Space className="filter-in-table">
          <Input
            ref={searchInput}
            placeholder={`جستجو در ${title}`}
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
            }}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          />
          <Icon
            className="pointer"
            color="#e0282e"
            fontSize="4x"
            icon="times-circle"
            onClick={() => {
              handleReset(clearFilters);
              handleSearch(selectedKeys, confirm, dataIndex);
            }}
          />
        </Space>
      </Card>
    ),
    filterIcon: (filtered) => (
      <Icon fas={filtered} icon="search" color={filtered ? "#e0282e" : null} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });

  const addSearchInColumns = (col) => {
    const add = col.map((item) => {
      if (item.onFilter === undefined && item.filtered !== false)
        return {
          dataIndex: item.key,
          ...item,
          ...searchInColumns(item.key, item.title),
        };
      else return item;
    });
    setColumn(add);
  };

  // console.log("column", column);

  // const newColumns = useMemo(() => {
  //   return columns.map((column) => ({
  //     dataIndex: column.key,
  //     ...column,
  //   }));
  // }, [columns]);

  // console.log("newColumns", newColumns);

  useEffect(() => {
    addSearchInColumns(columns);
  }, [columns]);

  return (
    <div>
      <AntTable columns={column} dataSource={data} rowKey={rowKey} />
    </div>
  );
}
