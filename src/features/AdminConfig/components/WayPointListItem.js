import styles from "../AdminConfig.module.css";
function WayPointListItem({
   id,
    name,
     latitude,
      longditude,
      setItemEditActive
       }) {



  return (
    <li >
      <span className={styles["id-style"]}>{id}</span>
      <span className={styles["name-style"]}>{name}</span>
      <span className={styles["latitude-style"]}>{latitude}</span>
      <span className={styles["longditude-style"]}>{longditude}</span>
    </li>
  );
}
export default WayPointListItem;
