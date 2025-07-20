import React from "react";
import styles from "./style.module.scss";
import { useState } from "react";

const CostomerList = () => {
  // spreadsheet APIを受け取るstate
  const [data, setData] = useState([]);

  // useEffectでspreadsheet APIを呼び出す
  useEffect(() => {
    const fetchData = async () => {
      //スプレッドシートを作成し、その次に共有を押して、リンクを知っている人に設定をする🤗
      // 例) https://docs.google.com/spreadsheets/d/xxxx（授業で説明しますがここがシートIDです！これを使います！）/edit?usp=sharing
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
      const res = await fetch(url);
      const json = await res.json();
    };
  }, [])

  return (
    <div className={styles.CostomerList}>
      顧客リストを作成中
    </div>
  );
};

export default CostomerList;
