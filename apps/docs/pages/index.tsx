import { Button } from "aphrodite";

export default function Docs() {
  return (
    <div>
      <h1>Docs</h1>
      <Button onPress={() => console.log("Boop! ")} />
    </div>
  );
}
