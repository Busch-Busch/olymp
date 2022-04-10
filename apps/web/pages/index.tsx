import { Button } from "aphrodite";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button onPress={() => console.log("Boop! ")} />
    </div>
  );
}
