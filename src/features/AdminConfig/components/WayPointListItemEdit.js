import styles from "../AdminConfig.module.css";
import { useState, useRef } from "react";
function WayPointListItemEdit({ name, latitude, longditude }) {
  const [innerName, setInnerName] = useState(name);
  const [innerLatitude, setInnerLatitude] = useState(latitude);
  const [innerLongditude, setInnerLongditude] = useState(longditude);
  const submitRef = useRef();
  const cancelRef = useRef();
  const editNameRef = useRef();
  const editLatitudeRef = useRef();
  const editLongditudeRef = useRef();

  return (
    <li>
      <form>
        <input
          className={styles[""]}
          value={innerName}
          required={true}
          onChange={(e) => setInnerName(e.target.value)}
          ref={editNameRef}
        />
        <input
          className={styles[""]}
          value={innerLatitude}
          onChange={(e) => setInnerLatitude(e.target.value)}
          ref={editLatitudeRef}
        />
        <input
          className={styles[""]}
          value={innerLongditude}
          onChange={(e) => setInnerLongditude(e.target.value)}
          ref={editLongditudeRef}
        />

        <button type="submit" ref={submitRef}>
          Save
        </button>
        <button type="reset" ref={cancelRef}>
          Cancel
        </button>
      </form>
    </li>
  );
}
export default WayPointListItemEdit;
