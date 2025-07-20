import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const SHEET_ID = "1TUIQDAv5fm6rYqd9HYVu9a7PybPGYvwV2AuO3XTCg0Q";
const SHEET_NAME = "test";
const API_KEY = "AIzaSyAx1mQW72sScTDVYktf5wq_Y247n7VXq3Q";

const CustomerList = () => {
  // スプレッドシートAPIを取得します🤗

  // 1.スプレッドシートAPIの取得したデータを保持するuseStateを準備します🤗
  const [data, setData] = useState([]);

  // 2.useEffectを使ってAPIを取得します🤗
  useEffect(() => {
    const fetchData = async () => {
      //スプレッドシートを作成し、その次に共有を押して、リンクを知っている人に設定をする🤗
      // 例) https://docs.google.com/spreadsheets/d/xxxx（授業で説明しますがここがシートIDです！これを使います！）/edit?usp=sharing
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
      const res = await fetch(url);
      console.log(res, "成功してるかどうか");
      const json = await res.json();
      console.log(json.values, "チェック");

      if (json.values) {
        const mapped = json.values.map((row, index) => ({
          id: Number(row[0]),
          area: row[1],
          date: row[2],
          tel: row[3],
          score: row[4],
        }));
        setData(mapped);
      }
      // この下も消さない🤗
    };

    // fetchData()を実行しましょう🤗
    fetchData();

    // この下は消さない🤗
  }, []);

  return (
    <>
      <div className={styles.customerList}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">id</TableCell>
                <TableCell align="right">エリア</TableCell>
                <TableCell align="right">登録日</TableCell>
                <TableCell align="right">電話番号</TableCell>
                <TableCell align="right">評価</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.area}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.tel}</TableCell>
                  <TableCell align="right">{row.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default CustomerList;