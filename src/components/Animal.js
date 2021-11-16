export default function Animal(props) {
  console.log(props);
  return (
    <tr>
      <td data-field="winner" data-winner="false"></td>
      <td data-field="star">⭐</td>
      <td data-field="name">{props.name}</td>
      <td data-field="type">{props.type}</td>
      <td data-field="desc">{props.desc}</td>
      <td data-field="age">{props.age}</td>
    </tr>
  );
}
