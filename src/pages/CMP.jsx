import React from "react";
import styles from "../style";
import { ContactMe } from "../components";
import { CMPComponent } from "../components";

const CMP = () => {
  return (
    <>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div
          className={`${styles.boxWidth} flex flex-col justify-center items-center`}
        >
        <CMPComponent/>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ContactMe />
        </div>
      </div>
    </>
  );
};

export default CMP;