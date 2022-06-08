import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';



const NewExpense = (props) => {

  const saveExpenseDataHandler  = (enteredExpenseData) => {
    const expenseData = {...enteredExpenseData};
   console.log('newexpense');
   console.log(expenseData);
   props.onNewExpense(expenseData);
  
  }
  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />

    </div>
  )
}

export default NewExpense