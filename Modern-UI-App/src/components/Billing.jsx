import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] md:ml-20 relative z-[5]"
      />

      <div className="absolute z-[3] top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
      <div className="absolute z-[0] bottom-0 w-[80%] h-[80%] rounded-full pink__gradient"></div>
    </div>
    <div className={`${layout.sectionInfo} md:ml-10`}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vel
        et suscipit sapiente quod vitae officiis iste, quos aut explicabo ipsam!
      </p>

      <div className="flex flex-row flewx-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
