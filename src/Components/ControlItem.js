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
                                <div className="category__data__item alkali__metal">Alkali Metals</div>
                                <div className="category__data__item alkaline__earth__metal">Alkaline Earth Metals</div>
                                <div className="category__data__item lanthanide">Lanthanoids</div>
                                <div className="category__data__item actinide">Actinoids</div>
                                <div className="category__data__item transition__metal">Transition Metals</div>
                                <div className="category__data__item post__transition__metal">Post-transition Metals</div>
                            </div>
                        </div>

                        <div className="category__container__row">
                            <div className="category__data__block">
                                <div className="category__data__item metalloid">Mettaloids</div>
                            </div>
                        </div>

                        <div className="category__container__row">
                            <div className="category__heading">
                                Non Metals
                            </div>
                            <div className="category__data__block">
                                <div className="category__data__item polyatomic__nonmetal">Other Non Metals</div>
                                <div className="category__data__item noble__gas">Noble Gases</div>
                            </div>
                        </div>

                        <div className="category__container__row">
                            <div className="category__data__block">
                                <div className="category__data__item unknown__catrgory">Unknown</div>
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