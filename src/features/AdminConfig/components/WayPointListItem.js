import styles from "../AdminConfig.module.css";
function WayPointListItem({ id, name, latitude, longditude }) {
  return (
    <li>
      <span className={styles[""]}>{id}</span>
      <span className={styles[""]}>{name}</span>
      <span className={styles[""]}>{latitude}</span>
      <span className={styles[""]}>{longditude}</span>
    </li>
  );
}
export default WayPointListItem;
