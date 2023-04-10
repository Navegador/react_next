import React from "react";
import style from './BasePage.module.css';



interface Props {
    children: string;
  }

const BasePage = (props:{children: any}) =>{
    return(
        <div className={`BasePage_test ${style.BasePage}`} id="BasePage_id" > 1 {props.children}</div>
    )
}


export default BasePage;