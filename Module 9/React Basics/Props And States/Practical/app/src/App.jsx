import Counter from "./Counter";
import UserCard from "./UserCard";

function App() {
  return (
    <>
      <UserCard name="Chintan" age={21} location="Ahmedabad" />
      <Counter/>
    </>
  );
}