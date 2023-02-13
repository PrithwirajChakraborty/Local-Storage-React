import {createSlice} from "@reduxjs/toolkit"

export const answerSlice = createSlice({
    name:'answer',
    initialState:{
        data:[]
    },
    reducers:{
        insertItem: {
            reducer: (state, action) => {
                const index = state.data.map(function(o) { return o.questionId; }).indexOf(action.payload.questionId);
                if (index > -1) {
                state.data.splice(index, 1);
                }
                state.data.push(action.payload)
              },
        },
        removeItem: {
            reducer: (state, action) => {
                const index = state.data.questionId.indexOf(action.payload);
                if (index > -1) {
                state.data.splice(index, 1);
                }

              },
        }
    }
});

export const { insertItem, removeItem} = answerSlice.actions

export const selectAnswer = (state) => state.answer.data;

export default answerSlice.reducer;