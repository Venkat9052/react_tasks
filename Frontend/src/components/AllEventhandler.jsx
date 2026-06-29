import React from 'react'
import styles from '../styles/allevents.module.css'
import { useState,useRef} from 'react';
import { Toaster, toast } from "sonner";

const AllEventhandler = () => {

    const [message,setMessage]=useState("");
    const [form,setForm]=useState("form event starts here");
    const [show,setShow]=useState(false);

    const name=useRef(null);

    const eventhandler=(e)=>{
        e.preventDefault()
        setForm(`hello! ${name.current.value} welcome to react`);
    }

    const keyuphandler=(e)=>{
        toast.success("You released :"+e.key);

    }
    const keydownhandler=(e)=>{
        toast.success("You pressed :"+e.key);
        
    }
    // click eventhandlers.................................
    const onclickhandler=()=>{
        setMessage("onclick event triggered");
        
    }
    const ondblclickhandler=()=>{
        setMessage("double click event triggered");
    }

    // mouse event handlers....................

    const onMouseDownhandler=()=>{setMessage(" mouse down event triggered");}
    const onMouseEnterhandler=()=>{setMessage("mouse enter event triggered");}
    const onMouseLeavehandler=()=>{setMessage("mouse leave event triggered");}
    const onMouseUphandeler=()=>{setMessage("mouseup event triggered");}
    const onMouseMovehandler=()=>{setMessage("mousemove event triggered");}
    const onMouseOuthandler=()=>{setMessage("mouseout event triggered");}
    const onContextMenuhandeler=()=>{setMessage("context menu triggers when user rightclicks..")}

    //form events Handlers...................................

    const onchangeHandler=(e)=>{
        setForm(e.target.value)
    }

    const onfocusHandler=()=>{
        setForm("you focussed on input")
    }

    const onblurHandler=()=>{
        setForm("oops! missed focus on input");
    }

  return (
    <>
    <div className={styles.main}>
        <h1 className={`${styles.head}`}>Welcome to EventHandling topic in React</h1>

        {/* //mouse and button events starts shows here.............................. */}

        <div className={styles.output}>
            <p>{message}</p>
        </div>

        {/* //button events start here................................ */}

        <div className={styles.box1}>
            
            <div className={styles.buttons}>
                <button onClick={onclickhandler}>Clickme!</button>
                <button onClick={ondblclickhandler}>DoubleClick me!</button>
            </div>
    {/* // mouse events starts here ....................................... */}
            <div className={styles.mouseevents}>
                <div className={`hover:animate-[bounce_1.5s_infinite] ${styles.mouse}`} onMouseDown={onMouseDownhandler}
                    onMouseUp={onMouseUphandeler}><p>press/release</p></div>
                <div className={`hover:animate-[bounce_1.5s_infinite] ${styles.mouse}`} onMouseMove={onMouseMovehandler}>drag</div>
                <div className={`hover:animate-[bounce_1.5s_infinite] ${styles.mouse}`} onMouseEnter={onMouseEnterhandler}
                onMouseLeave={onMouseLeavehandler}>enter/leave</div>
                <div className={`hover:animate-[bounce_1.5s_infinite] ${styles.mouse}`} onMouseOut={onMouseOuthandler}>move from box</div>
                <div className={`hover:animate-[bounce_1.5s_infinite] ${styles.mouse}`} onContextMenu={onContextMenuhandeler}>right click</div>
            </div>
        </div>

    {/* //form events starts here .................................................*/}
        <div className={styles.output2}>
            <p>{form}</p>
        </div>
        <div className={styles.box2}>
            <div className={styles.form}>
                <form onSubmit={eventhandler}>
                    <div className={styles.forminputs}>
                    <input type="text" placeholder='Enter your name' ref={name} onKeyDown={keydownhandler}
                    onKeyUp={keyuphandler}></input>
                    <input type="text" placeholder='Enter something' onChange={onchangeHandler}
                    onFocus={onfocusHandler}
                    onBlur={onblurHandler} className={styles.input2}></input>
                    </div>
                <button type="submit" className={styles.button}>submit</button>
                </form>
            
            </div>
        </div>

        <div className={`${styles.condition}`}>
            <button className='animate-[pulse_1s_infinite]' onClick={()=>setShow(!show)}>
                {show?"Hide":"Show"}
            </button>
            {show && (<p>Hello welcome to react condition based event handling</p>)}
        </div>
    </div>
    <Toaster position="top-right"/>
    </>
    
  )
}

export default AllEventhandler