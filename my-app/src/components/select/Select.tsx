import s from './Select.module.css'
import {useState, KeyboardEvent, useEffect} from "react";
import {Simulate} from "react-dom/test-utils";
import keyUp = Simulate.keyUp;

type ItemType = {
    value: any
    title: string
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)
    const selectedItem = props.items.find(i => i.value === props.value)
    useEffect(()=>{
        setHoveredElement(props.value)
    },[props.value])

    const toggleItems = ()=>{
        setActive(!active)
    }
    const onItemClick = (value:any) => ()=>{
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp= (e:KeyboardEvent<HTMLDivElement>)=>{
        if(e.key==="ArrowDown" || e.key==="ArrowUp" ) {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElement) {
                    const element = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1];

                    if (element) {
                        props.onChange(element.value)
                        return
                    }
                }
            }
            if (!selectedItem){
            props.onChange(props.items[0].value)
            }
        }
        if(e.key === 'Enter' || e.key === 'Escape'){
            setActive(false)
        }
    }
    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>
                    {selectedItem && selectedItem.title}
                </span>
                { active &&
                    <div className={s.items}>
                        {props.items.map(i => <div
                          onMouseEnter={()=>setHoveredElement(i.value)}
                            className={ hoveredElement === i.value ? s.item : ''}
                            key={i.value} onClick={onItemClick(i.value)}>
                            {i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
}