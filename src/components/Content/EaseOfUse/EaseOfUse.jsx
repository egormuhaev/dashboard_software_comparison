import React, { useContext } from 'react'
import style from './EaseOfUse.module.css'
import MyContext from '../../../context/Context'



const EaseOfUse = (props) => {
    console.log(props.selId)
    const {array} = useContext(MyContext);

    const data = array.filter(el => el.id.includes(props.selId))

    let leftColor;
    let rightColor;

    let leftElement = [];
    let rightElement = [];

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

    if(left.easeOfUse > right.easeOfUse){
        leftColor = style.green;
        rightColor = style.red;
    }
    else if (left.easeOfUse < right.easeOfUse){
        leftColor = style.red;
        rightColor = style.green;
    }
    else {
        leftColor = style.def;
        rightColor = style.def;
    }

    for(let i = 0; i < left.easeOfUse; i++) {
        leftElement.push(<div className={`${style.item} ${leftColor}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 9C5.75 5.54822 8.54822 2.75 12 2.75C15.4518 2.75 18.25 5.54822 18.25 9C18.25 10.1795 17.924 11.2805 17.3576 12.2205C17.1438 12.5753 17.2581 13.0362 17.6129 13.25C17.9677 13.4638 18.4286 13.3495 18.6424 12.9947C19.3456 11.8276 19.75 10.4599 19.75 9C19.75 4.71979 16.2802 1.25 12 1.25C7.71979 1.25 4.25 4.71979 4.25 9C4.25 10.4599 4.65436 11.8276 5.35761 12.9947C5.57138 13.3495 6.03229 13.4638 6.38708 13.25C6.74186 13.0362 6.85617 12.5753 6.64239 12.2205C6.076 11.2805 5.75 10.1795 5.75 9ZM12 8.25C10.7574 8.25 9.75 9.25736 9.75 10.5V17.6893L8.6014 16.5407C7.71697 15.6563 6.28303 15.6563 5.3986 16.5407C4.60167 17.3377 4.512 18.5993 5.18823 19.501L7.4 22.45C7.64853 22.7814 8.11863 22.8485 8.45 22.6C8.78137 22.3515 8.84853 21.8814 8.6 21.55L6.38823 18.601C6.15989 18.2965 6.19016 17.8705 6.45926 17.6014C6.7579 17.3028 7.2421 17.3028 7.54074 17.6014L9.96967 20.0303C10.1842 20.2448 10.5068 20.309 10.787 20.1929C11.0673 20.0768 11.25 19.8033 11.25 19.5V10.5C11.25 10.0858 11.5858 9.75 12 9.75C12.4142 9.75 12.75 10.0858 12.75 10.5V17C12.75 17.4142 13.0858 17.75 13.5 17.75H16C17.7949 17.75 19.25 19.2051 19.25 21V22C19.25 22.4142 19.5858 22.75 20 22.75C20.4142 22.75 20.75 22.4142 20.75 22V21C20.75 18.3766 18.6234 16.25 16 16.25H14.25V10.5C14.25 9.25736 13.2426 8.25 12 8.25Z" fill="white"/>
</svg>
        </div>)
    }

    for(let i = 0; i < right.easeOfUse; i++) {
        rightElement.push(<div className={`${style.item} ${rightColor}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 9C5.75 5.54822 8.54822 2.75 12 2.75C15.4518 2.75 18.25 5.54822 18.25 9C18.25 10.1795 17.924 11.2805 17.3576 12.2205C17.1438 12.5753 17.2581 13.0362 17.6129 13.25C17.9677 13.4638 18.4286 13.3495 18.6424 12.9947C19.3456 11.8276 19.75 10.4599 19.75 9C19.75 4.71979 16.2802 1.25 12 1.25C7.71979 1.25 4.25 4.71979 4.25 9C4.25 10.4599 4.65436 11.8276 5.35761 12.9947C5.57138 13.3495 6.03229 13.4638 6.38708 13.25C6.74186 13.0362 6.85617 12.5753 6.64239 12.2205C6.076 11.2805 5.75 10.1795 5.75 9ZM12 8.25C10.7574 8.25 9.75 9.25736 9.75 10.5V17.6893L8.6014 16.5407C7.71697 15.6563 6.28303 15.6563 5.3986 16.5407C4.60167 17.3377 4.512 18.5993 5.18823 19.501L7.4 22.45C7.64853 22.7814 8.11863 22.8485 8.45 22.6C8.78137 22.3515 8.84853 21.8814 8.6 21.55L6.38823 18.601C6.15989 18.2965 6.19016 17.8705 6.45926 17.6014C6.7579 17.3028 7.2421 17.3028 7.54074 17.6014L9.96967 20.0303C10.1842 20.2448 10.5068 20.309 10.787 20.1929C11.0673 20.0768 11.25 19.8033 11.25 19.5V10.5C11.25 10.0858 11.5858 9.75 12 9.75C12.4142 9.75 12.75 10.0858 12.75 10.5V17C12.75 17.4142 13.0858 17.75 13.5 17.75H16C17.7949 17.75 19.25 19.2051 19.25 21V22C19.25 22.4142 19.5858 22.75 20 22.75C20.4142 22.75 20.75 22.4142 20.75 22V21C20.75 18.3766 18.6234 16.25 16 16.25H14.25V10.5C14.25 9.25736 13.2426 8.25 12 8.25Z" fill="white"/>
</svg>
        </div>)
    }
  
    return <div className={style.easeOfUse}>
        <div className={style.lside}>
            {leftElement}
        </div>
        <div className={style.title}>
        <p>Удобство использования</p>
        </div>
        <div className={style.rside}>
            {rightElement}
        </div>
    </div>
}


export default EaseOfUse;