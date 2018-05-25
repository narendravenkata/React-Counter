export const counterIncrement = () => dispatch => {
    dispatch({
     type: 'INCREMENT',
     
    })
   }

export const counterDecrement = () => dispatch => {
    dispatch({
     type: 'DECREMENT',
    
    })
   }
