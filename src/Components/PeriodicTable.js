import datum from "../data";
import React from "react";
import GroupHeaderItem from "./GroupHeaderItem";
import GroupPeriodHeaderItem from "./GroupPeriodHeaderItem";
import PeriodHeaderItem from "./PeriodHeaderItem";

export default function PeriodicTable(props)
{
    const [elements, setElements] = React.useState(()=>{
        return datum();
    });


    let groups = [];
    groups[0] = [];
    groups[0].push(<GroupPeriodHeaderItem />);

    for(let i=1;i<=18;i++)
    {
        groups[i] = [];
        groups[i].push(<GroupHeaderItem text={i} />);
    }

    let periodCount = 1;
    for(let i=1;i<=7;i++)
    {
       groups[0].push(<PeriodHeaderItem text={i} />);
    }
    
    let view = [];
    for(let i=0;i<18;i++)
    {
        view.push(<div className="group__container">{groups[i]}</div>);
    }

    return (
        <div className="periodic__div">
            {view}
        </div>
    );
}