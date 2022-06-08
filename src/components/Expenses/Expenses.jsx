import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';




const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  
  }

  const filteredItems = props.items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear;
  });



  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      {filteredItems.map(item => 
      <ExpenseItem
      key ={item.id}
      title={item.title} 
      date={item.date} 
      price={item.amount} />)
      }

    </Card>
  )
}

export default Expenses;