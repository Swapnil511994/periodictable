export default function PeriodicTableElement(props)
{
    let elem = props.element;
    return (
        <div className={elem?"periodicElement":"emptyElement"}>
            
        </div>
    );
}