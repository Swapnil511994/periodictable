export default function ControlItem(props)
{
    let controlObj = props.controls;

    return (
        <div className="control__item__container">
            <div className="block__container">
                <div className="element__description">
                    <abbr className="ed__atomic_number">Atomic Number</abbr>
                </div>
            </div>
            <div className="slider__container">
                <div className="slider__block">
                    <input type="range" className="temperature__slider" min={0} max={7000} value={controlObj.temperature} 
                    onChange={props.handleTemperatureChange} />
                </div>
                
            </div>
        </div>
    );
}