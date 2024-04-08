import TransactionItem from "../TransactionItem/transactionItem";
import css from "./transactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <>
      <table className={css.center}>
        <thead>
          <tr>
            <th className={css.head}>Type </th>
            <th className={css.head}>Amount </th>
            <th className={css.head}>Currency </th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <TransactionItem action={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
