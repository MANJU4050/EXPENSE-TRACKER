import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';



const NewExpense = (props) => {

  const [isAddingExpense,setIsAddingExpense] = useState(false);

  const saveExpenseDataHandler  = (enteredExpenseData) => {
    const expenseData = {...enteredExpenseData};
   console.log('newexpense');
   console.log(expenseData);
   props.onNewExpense(expenseData);
  
  }

  const AddingExpenseHandler = () => {
    setIsAddingExpense(true);
  }

  const cancelExpenseHandler = () => {
    setIsAddingExpense(false);
  }
  return (
    <div className="new-expense">
      {isAddingExpense ? (<ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={cancelExpenseHandler} />) :
       <button onClick={AddingExpenseHandler}>Add New Expense</button> }
      
        

    </div>
  )
}

export default NewExpense