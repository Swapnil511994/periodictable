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

    function Capify(str)
    {
        return str.charAt(0).toUpperCase()+str.substring(1);
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
            <div>
                <h3>Overview</h3>
                <table border={0} className="modal__element__table">
                    <tr><td>Atomic Mass</td><td>{element.atomic_mass}</td></tr>
                    <tr><td>Category</td><td>{Capify(element.category)}</td></tr>
                    <tr><td>Atomic Number</td><td>{element.number}</td></tr>
                    <tr><td>Group</td><td>{element.group}</td></tr>
                    <tr><td>Period</td><td>{element.atomic_mass}</td></tr>
                    <tr><td>Phase</td><td>{Capify(element.phase)}</td></tr>
                    <tr><td>Electronic Configuration</td><td>{element.electron_configuration}</td></tr>
                    {/* <tr><td>EC Semantic</td><td>{element.electron_configuration_semantic}</td></tr> */}
                    <tr><td>Atomic Mass</td><td>{element.atomic_mass}</td></tr>
                </table>
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