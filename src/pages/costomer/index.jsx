// rafce リアクトの雛形が作れるショートカットです🤗

import React from "react";
// cssを紐づける
import styles from "./style.module.scss";
import Header from "../../layout/Header";
import SideBar from "../../layout/SideBar";
import CostomerList from "../../components/CostomerList";
// import ChartBar from "../../components/ChartBar";

const Costomer = () => {
  return (
    <>
      <Header />
      <div className={styles.chart}>
        {/*  */}
        <SideBar />
        {/* <ChartBar /> */}
        <CostomerList />
        {/*  */}
      </div>
    </>
  );
};

export default Costomer;
