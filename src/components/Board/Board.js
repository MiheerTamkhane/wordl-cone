import { Letter } from "../Letter/Letter";
export const Board = () => {
  return (
    <ul className="board">
      <li className="row">
        <Letter letterPos={0} attemptVal={0} />
        <Letter letterPos={1} attemptVal={0} />
        <Letter letterPos={2} attemptVal={0} />
        <Letter letterPos={3} attemptVal={0} />
        <Letter letterPos={4} attemptVal={0} />
      </li>
      <li className="row">
        <Letter letterPos={0} attemptVal={1} />
        <Letter letterPos={1} attemptVal={1} />
        <Letter letterPos={2} attemptVal={1} />
        <Letter letterPos={3} attemptVal={1} />
        <Letter letterPos={4} attemptVal={1} />
      </li>
      <li className="row">
        <Letter letterPos={0} attemptVal={2} />
        <Letter letterPos={1} attemptVal={2} />
        <Letter letterPos={2} attemptVal={2} />
        <Letter letterPos={3} attemptVal={2} />
        <Letter letterPos={4} attemptVal={2} />
      </li>
      <li className="row">
        <Letter letterPos={0} attemptVal={3} />
        <Letter letterPos={1} attemptVal={3} />
        <Letter letterPos={2} attemptVal={3} />
        <Letter letterPos={3} attemptVal={3} />
        <Letter letterPos={4} attemptVal={3} />
      </li>
      <li className="row">
        <Letter letterPos={0} attemptVal={4} />
        <Letter letterPos={1} attemptVal={4} />
        <Letter letterPos={2} attemptVal={4} />
        <Letter letterPos={3} attemptVal={4} />
        <Letter letterPos={4} attemptVal={4} />
      </li>
      <li className="row">
        <Letter letterPos={0} attemptVal={5} />
        <Letter letterPos={1} attemptVal={5} />
        <Letter letterPos={2} attemptVal={5} />
        <Letter letterPos={3} attemptVal={5} />
        <Letter letterPos={4} attemptVal={5} />
      </li>
    </ul>
  );
};
