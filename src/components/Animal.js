// import AddStar from "./ChangeStarStatus";
import { useState } from "react";

export default function Animal(props) {
  const initialStatus = false;
  const [status, changeStarStatus] = useState(initialStatus);
  function clickOnStar() {
    console.log("status changed");
    changeStarStatus((status) => (status ? false : true));
  }

  return (
    <tr>
      <td data-field="winner" data-winner="false"></td>
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
