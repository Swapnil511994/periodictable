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