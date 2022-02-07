import styles from "../AdminConfig.module.css";
import { useState, useRef, useEffect } from "react";
function WayPointListItemEdit({name,latitude,longditude}) {

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
        <input>{name}</input>
        <input>{latitude}</input>
        <input>{longditude}</input>

        <div className={styles["itemlist-item-edit-buttons"]}>
            <button type="submit" ref={submitRef}>
              Save
            </button>
            <button type="reset" ref={cancelRef}>
              Cancel
            </button>
          </div>

          <input
              className={styles["item-prompt-edit"]}
              value={innerName}
              required={true}
              onChange={(e) => setInnerName(e.target.value)}
              ref={editNameRef}
            />
            <input
              className={styles["item-answer-edit"]}
              value={innerLatitude}
              onChange={(e) => setInnerLatitude(e.target.value)}
              ref={editLatitudeRef}
            />
            <input
              className={styles["item-answer-edit"]}
              value={innerLongditude}
              onChange={(e) => setInnerLongditude(e.target.value)}
              ref={editLongditudeRef}
            />
        
     </form>
        </li>

);
}
        export default WayPointListItemEdit;

