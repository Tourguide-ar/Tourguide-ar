import styles from "../AdminConfig.module.css";
import { useState, useRef, useEffect } from "react";
function WayPointListItemEdit({
  id,
  name,
  latitude,
  longditude,
  editItemCallback,
}) {
  const [innerName, setInnerName] = useState(name);
  const [innerLatitude, setInnerLatitude] = useState(latitude);
  const [innerLongditude, setInnerLongditude] = useState(longditude);
  const submitRef = useRef();
  const cancelRef = useRef();
  const editNameRef = useRef();
  const editLatitudeRef = useRef();
  const editLongditudeRef = useRef();
  const liRef = useRef();

  useEffect(() => {
    editNameRef.current.focus();
  }, [name, latitude, longditude]);

  const keyDown = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13 && e.shiftKey === false) {
      submitRef.current.click();
    }
    if (e.keyCode === 27) {
      cancelRef.current.click();
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    editItemCallback({
      name: name,
      latitude: latitude,
      longditude: longditude,
    });
  };
  const cancelSubmit = (e) => {
    e.preventDefault();
    setInnerName(name);
    setInnerLatitude(latitude);
    setInnerLongditude(longditude);
  };

  //handle doubleclicks
  useEffect(() => {
    const handleDoubleClick = (e) => {
      console.log(e.composedPath().includes(liRef.current));
      if (e.composedPath().includes(liRef.current)) {
        cancelSubmit(e);
      }
    };

    window.addEventListener("dblclick", handleDoubleClick);

    //stop the app from generating a bajillion eventListeners:
    return () => {
      window.removeEventListener("dblclick", handleDoubleClick);
    };
  });
  return (
    <li>
      <form onSubmit={submitForm} onReset={cancelSubmit} onKeyDown={keyDown}>
        <input
          className={styles["name-edit"]}
          value={innerName}
          required={true}
          onChange={(e) => setInnerName(e.target.value)}
          ref={editNameRef}
        />
        <input
          className={styles["latitude-edit"]}
          value={innerLatitude}
          onChange={(e) => setInnerLatitude(e.target.value)}
          ref={editLatitudeRef}
        />
        <input
          className={styles["longditude-edit"]}
          value={innerLongditude}
          onChange={(e) => setInnerLongditude(e.target.value)}
          ref={editLongditudeRef}
        />
        <div className={styles["edit-buttons"]}>
          <button type="submit" ref={submitRef}>
            Save
          </button>
          <button type="reset" ref={cancelRef}>
            Cancel
          </button>
        </div>
      </form>
    </li>
  );
}
export default WayPointListItemEdit;
