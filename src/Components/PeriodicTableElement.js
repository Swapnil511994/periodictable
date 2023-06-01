export default function PeriodicTableElement(props)
{
    let elem = props.element || {};
    let temperature = props.currentTemperature;
    // console.log(temperature);
    let classVal = "";
    if(elem.phase)
    {
        classVal="periodicElement";

        let stateClass = "";
        
        switch(elem.phase.toLowerCase().trim())
        {
            case "gas": stateClass=" gas";
            break;

            case "liquid": stateClass=" liquid";
            break;

            case "solid": stateClass=" solid";
            break;

            default: stateClass=" unknown__phase";
            break;
        }
        if(elem.hasOwnProperty("melt"))
        {
            if(elem.boil && temperature > elem.boil) stateClass=" gas";
            else if(elem.melt && temperature > elem.melt) stateClass=" liquid";
            else if(elem.melt && temperature < elem.melt) stateClass=" solid";
            else stateClass=" unknown__phase";
        }
        

        classVal+=stateClass;

        if(elem.category)
        {
            switch (elem.category.toLowerCase().trim()) {
                case "alkali metal": classVal+=" alkali__metal";
                break;

                case "diatomic nonmetal": classVal+=" diatomic__nonmetal";
                break;

                case "alkaline earth metal": classVal+=" alkaline__earth__metal";
                break;

                case "transition metal": classVal+=" transition__metal";
                break;

                case "metalloid": classVal+=" metalloid";
                break;

                case "polyatomic nonmetal": classVal+=" polyatomic__nonmetal";
                break;

                case "noble gas": classVal+=" noble__gas";
                break;

                case "post-transition metal": classVal+=" post__transition__metal";
                break;

                case "lanthanide": classVal+=" lanthanide";
                break;

                case "actinide": classVal+=" actinide";
                break;

                default: classVal+=" unknown__catrgory";
                break;
            }
        }
        
    }
    else classVal="emptyElement";

    return (
        <div className={classVal}>
            <abbr className="element__number">{elem.number}</abbr>
            <span className="element__symbol">{elem.symbol}</span>
            <span className="element__name">{elem.name}</span>
        </div>
    );
}