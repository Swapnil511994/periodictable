export default function PeriodicTableElement(props)
{
    let elem = props.element || {};
    return (
        <div className={elem.name?"periodicElement":"emptyElement"}>
            {elem.name}
        </div>
    );
}