import React, { useState, useEffect } from "react";

const dataFromApi = [
  {
    id: 1,
    party_id: 12,
    item_id: 123,
    subitem_id: 1234,
    party: "prabal",
    mode: "check",
    bank: "nabil",
    item: "pen",
    subitem: "natraj",
    qty: 5,
    unit_price: 15,
    total_price: 85,
    vat: 5,
    tds: 5,
    date: "2019/11/02"
  },
  {
    id: 2,
    party_id: 12,
    item_id: 123,
    subitem_id: 1234,
    party: "prabal",
    mode: "check",
    bank: "nabil",
    item: "pen",
    subitem: "natraj",
    qty: 5,
    unit_price: 15,
    total_price: 85,
    vat: 5,
    tds: 5,
    date: "2019/11/02"
  }
];

const tableUtils = [
  { label: "Date", key: "date" },
  { label: "Party", key: "party" },
  { label: "Mode", key: "mode" },
  { label: "Bank", key: "bank" },
  { label: "Item", key: "item" },
  { label: "Sub Item", key: "subitem" },
  { label: "Unit price", key: "unit_price" },
  { label: "Unit price", key: "vat" },
  { label: "Unit price", key: "tds" },
  { label: "Unit price", key: "qty" },
  { label: "Unit price", key: "total_price" }
];

export default function Dashboard() {
  const [unchecked, setUnchecked] = useState([]);
  const [data, setData] = useState([]);
  const [allChecked, setAllChecked] = useState(true);
  useEffect(() => {
    // api.get('/').then(res => {
    setData(dataFromApi);
    // })
  }, []);
  const checkAll = e => {
    const { checked } = e.target;
    // console.log("checked", checked);
    setAllChecked(checked);
    if (checked) {
      setUnchecked([]);
    }
  };
  const checkItem = e => {
    const { name, checked } = e.target;
    if (checked) {
      setUnchecked(unchecked.filter(each => each !== name));
      if (unchecked.length === 1) {
        setAllChecked(true);
      }
    } else {
      setAllChecked(false);
      setUnchecked([...unchecked, name]);
    }
  };
  return (
    <div>
      This is dashboard
      <div>
        <label>
          <input
            type="checkbox"
            name="checkall"
            checked={allChecked ? "checked" : ""}
            onChange={checkAll}
          />
          Check All
        </label>
        {tableUtils.map(item => (
          <label key={`checkbox-${item.key}`}>
            <input
              type="checkbox"
              name={item.key}
              checked={unchecked.includes(item.key) ? "" : "checked"}
              onChange={checkItem}
            />
            {item.label}
          </label>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>SN</th>
            {tableUtils.map(tableData => {
              if (unchecked.includes(tableData.key)) {
                return null;
              }
              return <th key={tableData.key}>{tableData.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                {tableUtils.map(tableData => {
                  if (unchecked.includes(tableData.key)) {
                    return null;
                  }
                  return (
                    <td key={`${tableData.id}-${tableData.key}`}>
                      {item[tableData.key]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
