import React, {useContext, useEffect, useState} from "react";
import Select from 'react-select';
import style from './Header.module.css'
import MyContext from "../context/Context";




const Header = (props) => {
    const [sel, setSel] = useState(props.selected)
    const {array} = useContext(MyContext);

    let data;
    if(sel !== null){
        data = array.filter(el => el.id.includes(props.selected.value))
    }
    
    let left;
    let right;
    
    if (data[0].id.includes(props.selId) === 0){
        left = {...data[0].main};
        right = {...data[0].synonym}
    }
    else {
        left = {...data[0].synonym}
        right = {...data[0].main}
    }

    useEffect(() => {
        props.fff(sel)
    }, [sel])
 

    console.log(array)
    const options = [
        { value: 1, label: "Microsoft Project" },
        { value: 2, label: "Проект Бухгалтерия (1С)" },

        { value: 3, label: "Salesforce" },
        { value: 4, label: "Bitrix24" },

        { value: 5, label: "Odoo" },
        { value: 6, label: "1С:Предприятие 8" },

        { value: 7, label: "Hubspot" },
        { value: 8, label: "AmoCRM" },

        { value: 9, label: "Dropbox" },
        { value: 10, label: "Яндекс.Диск" },

        { value: 11, label: "BambooHR" },
        { value: 12, label: "Directum HRM" },
      ];
    return <div className={style.wrapper}>
        <div className={style.select}>
            <Select
                defaultValue={sel}
                onChange={setSel}
                options={options}
                className="w-full"
            />
        </div>
        <div className={style.info}>
            {left.name}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5303 11.4697C20.671 11.6103 20.75 11.8011 20.75 12C20.75 12.1989 20.671 12.3897 20.5303 12.5303L12.5303 20.5303C12.2374 20.8232 11.7626 20.8232 11.4697 20.5303C11.1768 20.2374 11.1768 19.7626 11.4697 19.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L11.4697 4.53033C11.1768 4.23744 11.1768 3.76256 11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967L20.5303 11.4697Z" fill="#3182B9"/>
</svg>
            {right.name}
        </div>
        
    </div>
}
export default Header