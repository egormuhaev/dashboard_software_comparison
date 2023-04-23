import React from "react";
import style from './Content.module.css'
import Functionality from './Functionality/Functionality'
import Integration from './Integration/Integration'
import EaseOfUse from './EaseOfUse/EaseOfUse'
import Cost from "./Cost/Cost";
import TechnicalSupport from "./TechnicalSupport/TechnicalSupport";


const Content =  (props) => {
    return <div className={style.wrapper}>
        <Functionality  selId={props.selected}  />
        <Integration selId={props.selected} />
        <EaseOfUse selId={props.selected} />
        <Cost  selId={props.selected} />
        <TechnicalSupport  selId={props.selected} />
    </div>
}

export default Content;