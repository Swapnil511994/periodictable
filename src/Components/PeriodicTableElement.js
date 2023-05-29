export default function PeriodicTableElement(props)
{
    let elem = props.element || {};
    return (
        <div className={elem.name?"periodicElement":"emptyElement"}>
            <abbr className="element__number">{elem.number}</abbr>
            <span className="element__symbol">{elem.symbol}</span>
        </div>
    );
}