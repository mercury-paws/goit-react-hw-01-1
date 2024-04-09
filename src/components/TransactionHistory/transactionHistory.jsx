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
          {items.map((item, index) => (
            <tr key={item.id} className={index % 2 === 0 ? css.odd : css.even}>
              <TransactionItem action={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
