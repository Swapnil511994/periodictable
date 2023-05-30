import datum from "../data";
import React from "react";
import GroupHeaderItem from "./GroupHeaderItem";
import GroupPeriodHeaderItem from "./GroupPeriodHeaderItem";
import PeriodHeaderItem from "./PeriodHeaderItem";
import PeriodicTableElement from "./PeriodicTableElement";

export default function PeriodicTable(props)
{
    //#region States and other variables
        const [elements, setElements] = React.useState(()=>{
            return datum();
        });
        let groups = [];
        let view = [];
        let position = 0;
    //#endregion
 
    //#region Group Headers and Period Headers
        groups[0] = [];
        groups[0].push(<GroupPeriodHeaderItem id="group_header_block" key="group__period__header__item" />);

        for(let i=1;i<=18;i++)
        {
            groups[i] = [];
            groups[i].push(<GroupHeaderItem key={"group__header__item__"+i} text={i} />);
        }

        for(let i=1;i<=7;i++)
        {
        groups[0].push(<PeriodHeaderItem key={"period__header__item__"+i} text={i} />);
        }
    //#endregion

    //#region Add Elements to groups
        console.log(elements);

        for(let i=1;i<=18;i++)
        {
            for(let j=1;j<=7;j++)
            {
                groups[i][j] = <PeriodicTableElement key={"periodic__table__element__"+i+"__"+j} element={null} />;
            }
        }
        
        while (position<elements.length) {
            let element = elements[position];
            groups[element.group][element.period] = <PeriodicTableElement key={"periodic__table__element"+element.group+"__"+element.period} element={element} />;
            position++;
        }
        groups[3][6] = <PeriodicTableElement key={"periodic__table__element__3__6"} element={{name:"Lanthanoids",phase:"solid",symbol:"57-71",number:"*"}} />;
        groups[3][7] = <PeriodicTableElement key={"periodic__table__element__3__7"} element={{name:"Actinoids",phase:"solid",symbol:"89-103",number:"**"}} />;

    //#endregion

    //#region Final View
        for(let i=0;i<=18;i++)
        {
            view.push(<div id={i===0?"groupHeader":""} key={"group__container__"+i} className="group__container">{groups[i]}</div>);
        }
    //#endregion

    return (
        <div className="periodic__div">
            {view}
        </div>
    );
}