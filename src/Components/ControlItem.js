export default function ControlItem(props)
{
    let controlObj = props.controls;

    function temperatureConverterF(valNum) {
        return (((valNum-273.15)*1.8)+32).toFixed(1) + " ºF";
    }

    function temperatureConverterC(valNum) {
        return ((valNum-32)/1.8).toFixed(1) + " ºC";
    }

    return (
        <div className="control__item__container">
            <div className="block__container">
                <div className="element__description">
                    <abbr className="ed__atomic_number">Atomic Number</abbr>
                    <span className="ed__symbol">Symbol</span>
                    <span className="ed__name">Element Name</span>
                </div>

                <div className="state__container">
                    <div className="state__container__row">
                        <div className="state__descriptor gas__descriptor">Gas</div>
                        <div className="state__descriptor liquid__descriptor">Liquid</div>
                    </div>
                    <div className="state__container__row">
                        <div className="state__descriptor solid__descriptor">Solid</div>
                        <div className="state__descriptor unknown__descriptor">Unknown</div>
                    </div>
                </div>

                <div className="category__container">
                    <div className="category__container__section">
                        <div className="category__container__row">
                            <div className="category__heading">
                                Metals
                            </div>
                            <div className="category__data__block">
                                <div className="category__data__item alkali__metal" onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} id="alkali__metal__parent">Alkali Metals</div>
                                <div className="category__data__item alkaline__earth__metal" onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} id="alkaline__earth__metal__parent">Alkaline Earth Metals</div>
                                <div className="category__data__item lanthanide"  onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} id="lanthanide__parent">Lanthanoids</div>
                                <div className="category__data__item actinide" onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} id="actinide__parent">Actinoids</div>
                                <div className="category__data__item transition__metal"  onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} id="transition__metal__parent">Transition Metals</div>
                                <div className="category__data__item post__transition__metal"  onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} id="post__transition__metal__parent">Post-transition Metals</div>
                            </div>
                        </div>

                        <div className="category__container__row">
                            <div className="category__data__block">
                                <div className="category__data__item metalloid"  onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} id="metalloid__parent">Mettaloids</div>
                            </div>
                        </div>

                        <div className="category__container__row">
                            <div className="category__heading">
                                Non Metals
                            </div>
                            <div className="category__data__block">
                                <div className="category__data__item polyatomic__nonmetal"  onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} id="polyatomic__nonmetal__parent">Other Non Metals</div>
                                <div className="category__data__item noble__gas"  onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} id="noble__gas__parent">Noble Gases</div>
                            </div>
                        </div>

                        <div className="category__container__row">
                            <div className="category__data__block">
                                <div className="category__data__item unknown__catrgory"  onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} id="unknown__catrgory__parent">Unknown</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider__container">
                <div className="slider__block">
                    <p className="slider__heading">Drag and Drop to modify Temperature and Element's State</p>
                    <div className="temperature__block">
                        <input type="range" className="temperature__slider" min={0} max={7000} value={controlObj.temperature} 
                        onChange={props.handleTemperatureChange} />
                        <p className="temperature__inputs__result">{controlObj.temperature + " K"}</p>
                        <div className="temperature__unit__converter">
                            <p>{temperatureConverterC(controlObj.temperature)}</p>
                            <p>{temperatureConverterF(controlObj.temperature)}</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}