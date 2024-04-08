import Profile from "./Profile/profile.jsx";
import TransactionHistory from "./TransactionHistory/transactionHistory.jsx";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import FriendList from "./FriendList/friendList.jsx";

export default function App() {
  return (
    <>
      <Profile data={userData} />
      <FriendList profileFriends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
