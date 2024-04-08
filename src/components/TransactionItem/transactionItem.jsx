import css from "./transactionItem.module.css";

export default function TransactionItem({
  action: { type, amount, currency },
}) {
  return (
    <>
      <td className={css.type}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}
