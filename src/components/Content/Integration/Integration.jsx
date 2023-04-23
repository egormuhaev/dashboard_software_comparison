import React, { useContext } from 'react'
import style from './Integration.module.css'
import MyContext from '../../../context/Context'


const Integration = (props) => {
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

    if(left.integration > right.integration){
        leftColor = style.green;
        rightColor = style.red;
    }
    else if (left.integration < right.integration){
        leftColor = style.red;
        rightColor = style.green;
    }
    else {
        leftColor = style.def;
        rightColor = style.def;
    }

    for(let i = 0; i < left.integration; i++) {
        leftElement.push(<div className={`${style.item} ${leftColor}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5303 3.53033C21.8232 3.23744 21.8232 2.76256 21.5303 2.46967C21.2374 2.17678 20.7626 2.17678 20.4697 2.46967L14.75 8.18934V4C14.75 3.58579 14.4142 3.25 14 3.25C13.5858 3.25 13.25 3.58579 13.25 4V10C13.25 10.1017 13.2702 10.1987 13.3069 10.2871C13.3435 10.3755 13.3978 10.4584 13.4697 10.5303C13.6161 10.6768 13.8081 10.75 14 10.75H20C20.4142 10.75 20.75 10.4142 20.75 10C20.75 9.58579 20.4142 9.25 20 9.25H15.8107L21.5303 3.53033Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 13.25C3.58579 13.25 3.25 13.5858 3.25 14C3.25 14.4142 3.58579 14.75 4 14.75H8.18934L2.46967 20.4697C2.17678 20.7626 2.17678 21.2374 2.46967 21.5303C2.76256 21.8232 3.23744 21.8232 3.53033 21.5303L9.25 15.8107V20C9.25 20.4142 9.58579 20.75 10 20.75C10.4142 20.75 10.75 20.4142 10.75 20V14C10.75 13.8081 10.6768 13.6161 10.5303 13.4697C10.4584 13.3978 10.3755 13.3435 10.2871 13.3069C10.1987 13.2702 10.1017 13.25 10 13.25H4Z" fill="white"/>
</svg>
        </div>)
    }

    for(let i = 0; i < right.integration; i++) {
        rightElement.push(<div className={`${style.item} ${rightColor}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5303 3.53033C21.8232 3.23744 21.8232 2.76256 21.5303 2.46967C21.2374 2.17678 20.7626 2.17678 20.4697 2.46967L14.75 8.18934V4C14.75 3.58579 14.4142 3.25 14 3.25C13.5858 3.25 13.25 3.58579 13.25 4V10C13.25 10.1017 13.2702 10.1987 13.3069 10.2871C13.3435 10.3755 13.3978 10.4584 13.4697 10.5303C13.6161 10.6768 13.8081 10.75 14 10.75H20C20.4142 10.75 20.75 10.4142 20.75 10C20.75 9.58579 20.4142 9.25 20 9.25H15.8107L21.5303 3.53033Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 13.25C3.58579 13.25 3.25 13.5858 3.25 14C3.25 14.4142 3.58579 14.75 4 14.75H8.18934L2.46967 20.4697C2.17678 20.7626 2.17678 21.2374 2.46967 21.5303C2.76256 21.8232 3.23744 21.8232 3.53033 21.5303L9.25 15.8107V20C9.25 20.4142 9.58579 20.75 10 20.75C10.4142 20.75 10.75 20.4142 10.75 20V14C10.75 13.8081 10.6768 13.6161 10.5303 13.4697C10.4584 13.3978 10.3755 13.3435 10.2871 13.3069C10.1987 13.2702 10.1017 13.25 10 13.25H4Z" fill="white"/>
</svg>
        </div>)
    }
  
    return <div className={style.integration}>
        <div className={style.lside}>
            {leftElement}
        </div>
        <div className={style.title}>
        <p>Интеграция</p>
        </div>
        <div className={style.rside}>
            {rightElement}
        </div>
    </div>
}


export default Integration;