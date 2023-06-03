import datum from "../data";
import React from "react";
import GroupHeaderItem from "./GroupHeaderItem";
import GroupPeriodHeaderItem from "./GroupPeriodHeaderItem";
import PeriodHeaderItem from "./PeriodHeaderItem";
import PeriodicTableElement from "./PeriodicTableElement";
import ControlItem from "./ControlItem";
import PeriodicTableElementInformation from "./PeriodicTableElementInformation";

export default function PeriodicTable(props)
{
    //#region States and other variables
        const [elements, setElements] = React.useState(()=>{
            return datum();
        });

        const [selectedElement, setSelectedElement] = React.useState({});

        const [isPopupVisible, setIsPopupVisible] = React.useState(false);

        let groups = [];
        let groupCount=3;
        let view = [];
        let position = 0;

        const [controlObj,setControlObj] = React.useState({
            alkali_metals: true,
            alkali_earth_metals: true,
            lanthanoids: true,
            actinoids: true,
            transition_metals: true,
            post_transition_metals: true,
            mettaloids: true,
            other_nonmetals: true,
            noble_gases: true,
            unknown: true,
            temperature: 273 //in K
        });
    //#endregion
 
    //#region Functions
        function changeTemperature(event)
        {
            setControlObj((oldVal)=>{
                return {
                    ...oldVal,
                    temperature: event.target.value
                };
            });
        }

        function showElementInfo(elementIndex)
        {
            // alert(`${elements[elementIndex].name} was Clicked bois`);
            setSelectedElement(elements[elementIndex]);
            setIsPopupVisible(true);
        }

        function closeModal()
        {
            setSelectedElement(null);
            setIsPopupVisible(false);
        }
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
        groups[0].push(<PeriodHeaderItem key={"period__header__item__8"} text="" />);
        groups[0].push(<PeriodHeaderItem key={"period__header__item__9"} text="" />);
        groups[0].push(<PeriodHeaderItem key={"period__header__item__10"} text="" />);
    //#endregion

    //#region Add Elements to groups
        for(let i=1;i<=18;i++)
        {
            for(let j=1;j<=11;j++)
            {
                groups[i][j] = <PeriodicTableElement key={"pte__"+i+"__"+j} element={null} />;
            }
        }
        
        while (position<elements.length) {
            let element = elements[position];
            groups[element.group][element.period] = <PeriodicTableElement key={"pte__"+element.group+"__"+element.period} element={element} 
                                                        currentTemperature={controlObj.temperature} handleClick={showElementInfo} />;
            position++;
        }
        groups[3][6] = <PeriodicTableElement key={"pte__3__6"} element={{name:"Lanthanoids",phase:"solid",symbol:"57-71",number:"*",category:"lanthanide"}} />;
        groups[3][7] = <PeriodicTableElement key={"pte__3__7"} element={{name:"Actinoids",phase:"solid",symbol:"89-103",number:"**", category:"actinide"}} />;

        for(let i=56;i<=70;i++)
        {
            let element = elements[i];
            groups[groupCount++][9]=<PeriodicTableElement key={"pte__lanthanoids"+element.group+"__"+element.period} element={element} 
                                        currentTemperature={controlObj.temperature} handleClick={showElementInfo} />;
        }

        groupCount=3;
        for(let i=88;i<=102;i++)
        {
            let element = elements[i];
            groups[groupCount++][10]=<PeriodicTableElement key={"pte__actinide"+element.group+"__"+element.period} element={element} 
                                        currentTemperature={controlObj.temperature} handleClick={showElementInfo} />;
        }

    //#endregion

    //#region Control Header
        let controlItem = <ControlItem controls={controlObj} handleTemperatureChange={changeTemperature} />;
    //#endregion

    //#region Final View Object
        for(let i=0;i<=18;i++)
        {
            view.push(<div id={i===0?"groupHeader":""} key={"group__container__"+i} className="group__container">{groups[i]}</div>);
        }
    //#endregion

    //#region experimental code
        // for (let i = 0; i < elements.length; i++) {
        //     const element = elements[i];
        //     if(!element.melt) console.log(`${element.name}: missing melting point`);
        //     // if(!element.boil) console.log(`${element.name}: missing boiling point`);
        // }
    //#endregion

    return (
        <div className="periodic__div">
            {view}
            {controlItem}
            <PeriodicTableElementInformation visiblity={isPopupVisible} element={selectedElement} closeModal={closeModal} />
        </div>
    );
}