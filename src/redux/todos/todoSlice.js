import { createSlice } from "@reduxjs/toolkit";

export const todo = createSlice({
    name:"todo",
    initialState:
    {
        items:[{
            id:1,
            title:"salam",
            complated:true
        },
        {
            id:2,
            title:"sksjdskjalam",
            complated:true
        },
        {
            id:3,
            title:"sksjdskjalam",
            complated:false
        },{
            id:4,
            title:"askdjhsa",
            complated:false
        }]
    },
    reducers:{
        addTodo:(state,action)=>
        {
            state.items.push(action.payload)
        },
        toggle:(state,action) =>
        {
            const {id} = action.payload;

            const item = state.items.find((e)=> e.id === id);

            item.complated =!item.complated; 
        },
        delTodo:(state,action)=>
        {
            const {id} = action.payload;

            const item = state.items.filter((e)=>
            {
                return e.id !== id
            })
            state.items = item
        },
        filterComplated:(state,action)=>
        {
            const complatedFilter = state.items.filter((e)=>
            {
                return e.complated === true
            })
            
            state.items = complatedFilter;
        },
        filterUnComplated:(state)=>
        {
            const filterUnComplated = state.items.filter((e)=>
            {
                return e.complated === false
            })
            
            state.items = filterUnComplated;
        },
        allFilter:(state,action)=>
        {
            const bool = action.payload
            const allfilter = state.item.filter((e)=> e.complated === bool)
        }
    }
})


export const {addTodo,toggle,delTodo,filterComplated,filterUnComplated} = todo.actions;
export default todo.reducer;