import datum from "../data";
import React from "react";
import GroupHeaderItem from "./GroupHeaderItem";
import GroupPeriodHeaderItem from "./GroupPeriodHeaderItem";

export default function PeriodicTable(props)
{
    const [elements, setElements] = React.useState(()=>{
        return datum();
    });


    let groups = [];
    groups[0] = [];
    groups[0].push(<GroupPeriodHeaderItem />)
    for(let i=1;i<=18;i++)
    {
        groups[i] = [];
        groups[i].push(<GroupHeaderItem text={i} />);
    }
    


    return (
        <div className="periodic__div">
            {groups}
        </div>
    );
}