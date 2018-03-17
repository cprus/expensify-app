import React from 'react';
import ExpenseList from './ExpenseList';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;