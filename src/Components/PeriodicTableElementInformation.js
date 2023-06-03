import React from "react";

export default function PeriodicTableElementInformation(props)
{
    let element;
    let visiblity = props.visiblity;
    if(props.element)
    {
        element = props.element;
    }
    else
    {
        visiblity = false;
    }

    if(!visiblity) return(<div className="element__info__modal__closed"></div>);
    
    return (
        <div className={visiblity?"element__info__modal":"element__info__modal__closed"}>
            <div className="modal__title__row">
                <button className="modal__close__btn" onClick={props.closeModal}>
                    ←
                </button>
                <h3 className="modal__title">{element.name} <span style={{fontWeight: 100}}>|</span> {element.symbol}</h3>
            </div>
            <hr />
            <div className="modal__description">
                {element.summary}
            </div>
            <div className="modal__3d">
                <model-viewer
                    alt={element.name+"'s 3D model"}
                    src={element.bohr_model_3d}
                    ar ar-modes="webxr scene-viewer"
                    poster={element.bohr_model_image} 
                    shadow-intensity="0" camera-controls touch-action="pan-y"
                    autoplay
                >
            </model-viewer>
            </div>
        </div>
    );
}