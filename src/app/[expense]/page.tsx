import AddExpenseForm from '@/components/AddExpenseForm';
import ExpenseList from '@/components/ExpenseList';
import ExpenseSummary from '@/components/ExpenseSummary';

const Expense = () => {
    return (
        <div>
            Expense
            <div>
                <AddExpenseForm />
                <ExpenseSummary />
            </div>
            <div>
                <ExpenseList />
            </div>
        </div>
    );
};

export default Expense;
