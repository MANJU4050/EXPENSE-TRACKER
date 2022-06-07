import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';




const Expenses = (expenses) => {
  return (
    <Card className="expenses">

      <ExpenseItem
        title={expenses.data[0].title}
        date={expenses.data[0].date}
        price={expenses.data[0].amount} />

      <ExpenseItem
        title={expenses.data[1].title}
        date={expenses.data[1].date}
        price={expenses.data[1].amount} />

      <ExpenseItem
        title={expenses.data[2].title}
        date={expenses.data[2].date}
        price={expenses.data[2].amount} />

      <ExpenseItem
        title={expenses.data[3].title}
        date={expenses.data[3].date}
        price={expenses.data[3].amount} />



    </Card>
  )
}

export default Expenses;