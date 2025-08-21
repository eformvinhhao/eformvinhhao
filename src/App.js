import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import jsonFile from "./temp.json";
import ReactDOM from 'react-dom';

var password = "khoavinhhao";
while (k !== password) {
var k = prompt("Nhập mật khẩu");
if(k===password){alert('Mật khẩu đúng, nhấn Ok để tiếp tục')}
else if (k !== password) {
  alert("Sai mật khẩu! Hihi");
  }
}
  
function App() {
  const [tableData, setTableData] = useState(
    jsonFile
  )
  const columns = [
    { title: "STT", field: "STT", sorting: true},
    { title: "Mã_BM", field: "Mã_BM" },
    { title: "Tên_BM", field: "Tên_BM"},
    { title: "Bộ_phận_ban_hành", field: "Bộ_phận_ban_hành", grouping: true },
    { title: "Bộ_phận_sử_dụng", field: "Bộ_phận_sử_dụng", grouping: true },
    { title: "Phiên_bản", field: "Phiên_bản", grouping: false },
    { title: "Ngày_hiệu_lực", field: "Ngày_hiệu_lực", grouping: false },
    { title: "Link", field: "Link", grouping: false,
    render: (rowData:any) => (<a
        href={rowData.Link}
        target="_blank"
        style={{ textDecoration: 'none' }}>
        {rowData.Link}
      </a>)},
    { title: "PIC", field: "PIC", grouping: true },
    { title: "Status", field: "Status", grouping: true },
  ]
  return (
    <div className="App">
      <div className='abc'>
        <h1 align="center">E-form accessing dashboard</h1>
        <h2 align="center">Vĩnh Hảo factory</h2>
      </div>
      <MaterialTable columns={columns} data={tableData}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, search: true,
          searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
          filtering: true, paging: true, pageSizeOptions: [25, 50, 100], pageSize: 50,
          paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
          exportAllData: true, exportFileName: "TableData", actionsColumnIndex: -1, selection: false, index :true,
          showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
          }),
          grouping: true, columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#006600",color:"white"}
        }}
        title="Search" />
        <h4>By Huynh Anh Khoa</h4>
    </div>
  );
}

export default App;
