import React from "react";
import styles from "../style";
import { ContactMe } from "../components";
import { HiddenShrineComponent } from "../components";

const HiddenShrine = () => {
  return (
    <>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div
          className={`${styles.boxWidth} flex flex-col justify-center items-center`}
        >
        <HiddenShrineComponent/>
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

export default HiddenShrine;
