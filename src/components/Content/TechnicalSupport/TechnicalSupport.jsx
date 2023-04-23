import React, { useContext } from 'react'
import style from './TechnicalSupport.module.css'
import MyContext from '../../../context/Context'



const TechnicalSupport = (props) => {
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

    if(left.technicalSupport > right.technicalSupport){
        leftColor = style.green;
        rightColor = style.red;
    }
    else if (left.technicalSupport < right.technicalSupport){
        leftColor = style.red;
        rightColor = style.green;
    }
    else {
        leftColor = style.def;
        rightColor = style.def;
    }

    for(let i = 0; i < left.technicalSupport; i++) {
        leftElement.push(<div className={`${style.item} ${leftColor}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 2.25H10.9664C9.59472 2.25 8.51929 2.24999 7.65494 2.32061C6.77479 2.39252 6.04768 2.54138 5.38955 2.87671C4.30762 3.42798 3.42798 4.30762 2.87671 5.38955C2.54138 6.04768 2.39252 6.77479 2.32061 7.65494C2.24999 8.51929 2.25 9.59472 2.25 10.9664V11V13V13.0336C2.25 14.4053 2.24999 15.4807 2.32061 16.3451C2.39252 17.2252 2.54138 17.9523 2.87671 18.6104C3.42798 19.6924 4.30762 20.572 5.38955 21.1233C6.04768 21.4586 6.77479 21.6075 7.65494 21.6794C8.51927 21.75 9.59469 21.75 10.9664 21.75H10.9664H11H13H13.0336H13.0336C14.4053 21.75 15.4807 21.75 16.3451 21.6794C17.2252 21.6075 17.9523 21.4586 18.6104 21.1233C19.6924 20.572 20.572 19.6924 21.1233 18.6104C21.4586 17.9523 21.6075 17.2252 21.6794 16.3451C21.75 15.4807 21.75 14.4053 21.75 13.0336V13.0336V13V11V10.9664V10.9664C21.75 9.59469 21.75 8.51927 21.6794 7.65494C21.6075 6.77479 21.4586 6.04768 21.1233 5.38955C20.572 4.30762 19.6924 3.42798 18.6104 2.87671C17.9523 2.54138 17.2252 2.39252 16.3451 2.32061C15.4807 2.24999 14.4053 2.25 13.0336 2.25H13H11ZM6.07054 4.21322C6.48197 4.00359 6.9897 3.87996 7.77708 3.81563C8.57322 3.75058 9.58749 3.75 11 3.75H13C14.4125 3.75 15.4268 3.75058 16.2229 3.81563C17.0103 3.87996 17.518 4.00359 17.9295 4.21322C18.7291 4.62068 19.3793 5.27085 19.7868 6.07054C19.9964 6.48197 20.12 6.9897 20.1844 7.77708C20.2494 8.57322 20.25 9.58749 20.25 11V13C20.25 14.4125 20.2494 15.4268 20.1844 16.2229C20.12 17.0103 19.9964 17.518 19.7868 17.9295C19.3793 18.7291 18.7291 19.3793 17.9295 19.7868C17.518 19.9964 17.0103 20.12 16.2229 20.1844C15.4268 20.2494 14.4125 20.25 13 20.25H11C9.58749 20.25 8.57322 20.2494 7.77708 20.1844C6.9897 20.12 6.48197 19.9964 6.07054 19.7868C5.27085 19.3793 4.62068 18.7291 4.21322 17.9295C4.00359 17.518 3.87996 17.0103 3.81563 16.2229C3.75058 15.4268 3.75 14.4125 3.75 13V11C3.75 9.58749 3.75058 8.57322 3.81563 7.77708C3.87996 6.9897 4.00359 6.48197 4.21322 6.07054C4.62068 5.27085 5.27085 4.62068 6.07054 4.21322ZM10.6253 14.2822V14.4309H12.692V14.2822C12.6961 13.878 12.7479 13.5386 12.8472 13.2641C12.9506 12.9857 13.1078 12.7436 13.3189 12.5377C13.534 12.3317 13.8092 12.1335 14.1443 11.9428C14.525 11.7331 14.8539 11.4948 15.1311 11.2278C15.4083 10.9609 15.6214 10.6559 15.7704 10.3127C15.9235 9.9695 16 9.58055 16 9.14585C16 8.50143 15.8304 7.94471 15.4911 7.47569C15.1559 7.00286 14.6863 6.6387 14.0822 6.38322C13.4823 6.12774 12.7872 6 11.9969 6C11.2728 6 10.6108 6.12202 10.0109 6.36606C9.41505 6.61011 8.93509 6.97617 8.57099 7.46425C8.21102 7.95234 8.02069 8.55863 8 9.28313H10.2095C10.2302 8.92469 10.3253 8.62917 10.495 8.39657C10.6687 8.16015 10.886 7.98475 11.1466 7.87035C11.4114 7.75214 11.6907 7.69304 11.9845 7.69304C12.3031 7.69304 12.5906 7.75405 12.8472 7.87607C13.1078 7.99809 13.3147 8.16969 13.4678 8.39085C13.6209 8.61201 13.6974 8.87321 13.6974 9.17445C13.6974 9.44137 13.6395 9.68351 13.5237 9.90086C13.4078 10.1144 13.2485 10.3089 13.0458 10.4843C12.8472 10.6559 12.6217 10.8141 12.3693 10.959C12.001 11.1687 11.6886 11.3994 11.4321 11.6511C11.1756 11.899 10.977 12.2269 10.8363 12.6349C10.6998 13.0429 10.6294 13.592 10.6253 14.2822ZM10.7432 17.6339C11.0122 17.878 11.3328 18 11.7052 18C11.9535 18 12.179 17.9447 12.3817 17.8341C12.5886 17.7197 12.7541 17.5672 12.8782 17.3765C13.0065 17.1859 13.0706 16.9743 13.0706 16.7417C13.0706 16.3985 12.9341 16.1049 12.661 15.8608C12.392 15.6168 12.0734 15.4948 11.7052 15.4948C11.3328 15.4948 11.0122 15.6168 10.7432 15.8608C10.4743 16.1049 10.3398 16.3985 10.3398 16.7417C10.3398 17.0925 10.4743 17.3899 10.7432 17.6339Z" fill="white"/>
</svg>

        </div>)
    }

    for(let i = 0; i < right.technicalSupport; i++) {
        rightElement.push(<div className={`${style.item} ${rightColor}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 2.25H10.9664C9.59472 2.25 8.51929 2.24999 7.65494 2.32061C6.77479 2.39252 6.04768 2.54138 5.38955 2.87671C4.30762 3.42798 3.42798 4.30762 2.87671 5.38955C2.54138 6.04768 2.39252 6.77479 2.32061 7.65494C2.24999 8.51929 2.25 9.59472 2.25 10.9664V11V13V13.0336C2.25 14.4053 2.24999 15.4807 2.32061 16.3451C2.39252 17.2252 2.54138 17.9523 2.87671 18.6104C3.42798 19.6924 4.30762 20.572 5.38955 21.1233C6.04768 21.4586 6.77479 21.6075 7.65494 21.6794C8.51927 21.75 9.59469 21.75 10.9664 21.75H10.9664H11H13H13.0336H13.0336C14.4053 21.75 15.4807 21.75 16.3451 21.6794C17.2252 21.6075 17.9523 21.4586 18.6104 21.1233C19.6924 20.572 20.572 19.6924 21.1233 18.6104C21.4586 17.9523 21.6075 17.2252 21.6794 16.3451C21.75 15.4807 21.75 14.4053 21.75 13.0336V13.0336V13V11V10.9664V10.9664C21.75 9.59469 21.75 8.51927 21.6794 7.65494C21.6075 6.77479 21.4586 6.04768 21.1233 5.38955C20.572 4.30762 19.6924 3.42798 18.6104 2.87671C17.9523 2.54138 17.2252 2.39252 16.3451 2.32061C15.4807 2.24999 14.4053 2.25 13.0336 2.25H13H11ZM6.07054 4.21322C6.48197 4.00359 6.9897 3.87996 7.77708 3.81563C8.57322 3.75058 9.58749 3.75 11 3.75H13C14.4125 3.75 15.4268 3.75058 16.2229 3.81563C17.0103 3.87996 17.518 4.00359 17.9295 4.21322C18.7291 4.62068 19.3793 5.27085 19.7868 6.07054C19.9964 6.48197 20.12 6.9897 20.1844 7.77708C20.2494 8.57322 20.25 9.58749 20.25 11V13C20.25 14.4125 20.2494 15.4268 20.1844 16.2229C20.12 17.0103 19.9964 17.518 19.7868 17.9295C19.3793 18.7291 18.7291 19.3793 17.9295 19.7868C17.518 19.9964 17.0103 20.12 16.2229 20.1844C15.4268 20.2494 14.4125 20.25 13 20.25H11C9.58749 20.25 8.57322 20.2494 7.77708 20.1844C6.9897 20.12 6.48197 19.9964 6.07054 19.7868C5.27085 19.3793 4.62068 18.7291 4.21322 17.9295C4.00359 17.518 3.87996 17.0103 3.81563 16.2229C3.75058 15.4268 3.75 14.4125 3.75 13V11C3.75 9.58749 3.75058 8.57322 3.81563 7.77708C3.87996 6.9897 4.00359 6.48197 4.21322 6.07054C4.62068 5.27085 5.27085 4.62068 6.07054 4.21322ZM10.6253 14.2822V14.4309H12.692V14.2822C12.6961 13.878 12.7479 13.5386 12.8472 13.2641C12.9506 12.9857 13.1078 12.7436 13.3189 12.5377C13.534 12.3317 13.8092 12.1335 14.1443 11.9428C14.525 11.7331 14.8539 11.4948 15.1311 11.2278C15.4083 10.9609 15.6214 10.6559 15.7704 10.3127C15.9235 9.9695 16 9.58055 16 9.14585C16 8.50143 15.8304 7.94471 15.4911 7.47569C15.1559 7.00286 14.6863 6.6387 14.0822 6.38322C13.4823 6.12774 12.7872 6 11.9969 6C11.2728 6 10.6108 6.12202 10.0109 6.36606C9.41505 6.61011 8.93509 6.97617 8.57099 7.46425C8.21102 7.95234 8.02069 8.55863 8 9.28313H10.2095C10.2302 8.92469 10.3253 8.62917 10.495 8.39657C10.6687 8.16015 10.886 7.98475 11.1466 7.87035C11.4114 7.75214 11.6907 7.69304 11.9845 7.69304C12.3031 7.69304 12.5906 7.75405 12.8472 7.87607C13.1078 7.99809 13.3147 8.16969 13.4678 8.39085C13.6209 8.61201 13.6974 8.87321 13.6974 9.17445C13.6974 9.44137 13.6395 9.68351 13.5237 9.90086C13.4078 10.1144 13.2485 10.3089 13.0458 10.4843C12.8472 10.6559 12.6217 10.8141 12.3693 10.959C12.001 11.1687 11.6886 11.3994 11.4321 11.6511C11.1756 11.899 10.977 12.2269 10.8363 12.6349C10.6998 13.0429 10.6294 13.592 10.6253 14.2822ZM10.7432 17.6339C11.0122 17.878 11.3328 18 11.7052 18C11.9535 18 12.179 17.9447 12.3817 17.8341C12.5886 17.7197 12.7541 17.5672 12.8782 17.3765C13.0065 17.1859 13.0706 16.9743 13.0706 16.7417C13.0706 16.3985 12.9341 16.1049 12.661 15.8608C12.392 15.6168 12.0734 15.4948 11.7052 15.4948C11.3328 15.4948 11.0122 15.6168 10.7432 15.8608C10.4743 16.1049 10.3398 16.3985 10.3398 16.7417C10.3398 17.0925 10.4743 17.3899 10.7432 17.6339Z" fill="white"/>
</svg>

        </div>)
    }
  
    return <div className={style.technicalSupport}>
        <div className={style.lside}>
            {leftElement}
        </div>
        <div className={style.title}>
        <p>Техническая поддержка</p>
        </div>
        <div className={style.rside}>
            {rightElement}
        </div>
    </div>
}


export default TechnicalSupport;