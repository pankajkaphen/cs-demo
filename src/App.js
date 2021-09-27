import './App.css'
import MaterialTable from 'material-table';
import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([])
  const data1 = [
    {"figi":"BBG000Q0WCK6","name":"TATA CONSULTANCY SVCS LTD","ticker":"TCS","exchCode":"IN","compositeFIGI":"BBG000Q0WCK6","securityType":"Common Stock","marketSector":"Equity","shareClassFIGI":"BBG001SM1D62","securityType2":"Common Stock","securityDescription":"TCS"}]

  const columns = [
    { title: "FIGI", field: "figi" },
    { title: "Name", field: "name" },
    { title: "Ticker", field: "ticker" },
    { title: "Exchange Code", field: 'exchCode' },
    { title: "Composite FIGI", field: "compositeFIGI" },
    { title: "Security Type", field: "securityType" },
    { title: "Market Sector", field: "marketSector" },
    { title: "Share Class FIGI", field: "shareClassFIGI" },
    { title: "Security Type2", field: 'securityType2' },
    { title: "Security Description", field: "securityDescription" }
  ]

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'app-id': 'figi',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Credentials': 'true'
    },
    body: JSON.stringify({ title: 'pankaj' })
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/search/1", requestOptions)
      .then(resp => resp.json())
      .then(resp => {
        setData(resp.data);
        console.log(resp);
      })
  }, [])

  return (
    <div className="App">
      <h1 align="center">FIGI Dashboard</h1>
      <h4 align='center'>NIFTY50</h4>
      <MaterialTable
        title="Nifty50 FIGI Data"
        data={data}
        columns={columns}
        options={{
          paging:true,
          pageSize:50,
          sorting:true
        }}

        localization={{
          toolbar: {
            searchPlaceholder: 'Equity',
            searchTooltip: 'Nifty50'
          }
        }}
      />
    </div>
  )
}
export default App