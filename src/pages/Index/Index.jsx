import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Container";
import Modal from "../../components/modal/Modal";

import css from "./index.module.css";

const Index = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);

  useEffect(()=> {
    if(!localStorage.getItem("token")) {
      history.push('/login');
    }
  }, [history]);

  return (
    <>
      <Modal show={show} setShow={setShow} />
      <div className={css.index_container}>
        {/* <Navbar /> */}
        <div className={css.sidebar}>
          <Sidebar setShow={setShow} />
        </div>
        <div className={css.feed}>
          <Feed />
        </div>
      </div>
    </>
  );
};

export default Index;
