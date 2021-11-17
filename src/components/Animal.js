// import AddStar from "./ChangeStarStatus";
import { useState } from "react";

export default function Animal(props) {
  const initialStatus = false;
  const [status, changeStarStatus] = useState(initialStatus);
  function clickOnStar() {
    console.log("star status changed");
    changeStarStatus((status) => (status ? false : true));
  }
  const [winnerStatus, changeWinnerStatus] = useState(false);
  function clickOnWinner() {
    console.log("winner status changed");
    changeWinnerStatus((winnerStatus) => (winnerStatus ? false : true));
  }

  return (
    <tr>
      <td onClick={clickOnWinner} data-field="winner" data-winner={winnerStatus}></td>
      <td onClick={clickOnStar} data-field="star">
        {status ? "⭐" : "☆"}
      </td>
      <td data-field="name">{props.name}</td>
      <td data-field="type">{props.type}</td>
      <td data-field="desc">{props.desc}</td>
      <td data-field="age">{props.age}</td>
    </tr>
  );
}
