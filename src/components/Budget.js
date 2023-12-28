import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        let newBudget = event.target.value;
        if(newBudget > 20000) {
            alert("The budget cannot exceed £20000");
            newBudget = 20000;
        }
        if(newBudget < totalExpenses) {
            alert("The budget cannot be less than the total expenses");
            newBudget = totalExpenses;
        }
        dispatch({ type: 'SET_BUDGET', payload: newBudget });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
