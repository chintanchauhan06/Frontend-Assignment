import AuthButton from "./AuthButton";
import VoteEligibility from "./VoteEligibility";

function App() {
  return (
    <>
      <AuthButton />
      <VoteEligibility age={20} />
    </>
  );
}

export default App;