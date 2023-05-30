export default function PeriodicTableElement(props)
{
    let elem = props.element || {};
    let classVal = "";
    if(elem.phase)
    {
        classVal="periodicElement";
        switch(elem.phase.toLowerCase().trim())
        {
            case "gas": classVal+=" gas";
            break;

            case "liquid": classVal+=" liquid";
            break;

            case "solid": classVal+=" solid";
            break;

            default: classVal+=" unknown__phase";
            break;
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