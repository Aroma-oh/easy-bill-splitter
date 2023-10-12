import ExpenseList from '@/components/ExpenseList';
import ExpenseSummary from '@/components/ExpenseSummary';
import AddExpenseForm from '@/components/AddExpenseForm';

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
