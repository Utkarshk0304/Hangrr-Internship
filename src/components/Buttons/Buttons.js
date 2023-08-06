import './Buttons.css'
import { Transition } from "react-transition-group";
import React, { useState, Fragment } from 'react';
import RenderCards from '../RenderOnClick/RederCards';

const Buttons = () => {
    const [options, setOptions] = useState(false);
    const [canvas, setCanvas] = useState(false);
    const [fit, setFit] = useState(false);
    const [lapel, setLapel] = useState(false);

    const duration = 300;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,

        display: "inline-block",
        backgroundColor: "white"
    };

    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 1 },
        exited: { opacity: 0 },
    };

    const buttonsInfo = [{
        id: "1",
        description: "One Button"
    }, {
        id: "2",
        description: "Two Button"
    }, {
        id: "3",
        description: "Three Button"
    },
    {
        id: "4",
        description: "4 Buttons 1 Fasten"
    }, {
        id: "5",
        description: "4 Buttons 2 Fasten"
    }, {
        id: "6",
        description: "4 Buttons 2 Fasten"
    }, {
        id: "7",
        description: "4 Buttons 2 Fasten"
    }];

    const buttonsHandler = () => {
        setOptions(false);
        setCanvas(false);
        setFit(false);
        setLapel(false);
    }
    const CanvasHandler = () => {
        setOptions(true);
        setCanvas(true);
        setFit(false);
        setLapel(false);
    }
    
    const FitHandler = () => {
        setOptions(true);
        setCanvas(false);
        setLapel(false)
        setFit(true);
       
    }
    const LapelHandler = () => {
        setLapel(true);
        setFit(false);
        setOptions(true);
        setCanvas(false);
    }
    


    return (
        <React.Fragment >
            <div className="to-fix-button">
                <button type="button" className="button-button" onClick={buttonsHandler}>Buttons</button>
                <button type="button" className="button-button" onClick={CanvasHandler}>Canvas</button>
                <button type="button" className="button-button" onClick={FitHandler}>Fit</button>
                <button type="button" className="button-button" onClick={LapelHandler}>Lapel</button>
            </div>
            <div className='container' >

                <Transition in={!options} timeout={300}>
                    {(state) => (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >
                            {!options &&
                                <div className={`container-2 `} >{buttonsInfo.map((info) => (<div className="RenderCard "  key={info.id}><RenderCards   description={info.description}  >
                                </RenderCards></div>
                                ))}
                                </div>
                            }
                        </div>
                    )}
                </Transition>
            </div>
            <div className='container-2nd' >

                <Transition in={canvas} timeout={300}>
                    {(state) => (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >
                            {canvas && <div className='container-2 ' >{buttonsInfo.map((info) => (<div className='RenderCard' key={info.id}><RenderCards description={info.description} ></RenderCards></div>
                            ))}</div>}
                        </div>
                    )}
                </Transition>
            </div>

            <div className='container-3rd' >

                <Transition in={fit} timeout={300}>
                    {(state) => (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >
                            {fit && <div className='container-2 ' >{buttonsInfo.map((info) => (<div className='RenderCard' key={info.id}><RenderCards ></RenderCards></div>
                            ))}</div>}
                        </div>
                    )}
                </Transition>
            </div>

            <div className='container-4th' >

                <Transition in={lapel} timeout={300}>
                    {(state) => (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >
                            {lapel && <div className='container-2 ' >{buttonsInfo.map((info) => (<div className='RenderCard' key={info.id}><RenderCards description={info.description} ></RenderCards></div>
                            ))}</div>}
                        </div>
                    )}
                </Transition>
            </div>





        </React.Fragment>
    );
}
export default Buttons;