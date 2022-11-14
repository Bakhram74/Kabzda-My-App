import {reducer} from "./Reduser";
export const TOGGLE_COLLAPSED = "TOGGLE COLLAPSED"


test("Collapsed should be true",()=>{

 const state =  reducer({collapsed:false},{type:TOGGLE_COLLAPSED})
   expect(state.collapsed).toBe(true)
})
test("Collapsed should be false",()=>{

    const state =  reducer({collapsed:true},{type:TOGGLE_COLLAPSED})
    expect(state.collapsed).toBe(false)
})
test("Reducer should throw error",()=>{

    expect(()=>{
        reducer({collapsed:true},{type:"abraca"})
    }).toThrowError()
})