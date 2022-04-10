import * as React from "react";

export interface ButtonTypes {
  onPress: () => void;
}

export const Button = ({ onPress: onPress }: ButtonTypes) => {
  return <button onClick={onPress}>Boop</button>;
};
