import { useEffect, useState } from "react";
import WayPointList from "./components/WayPointList";
import styles from "./WayPointListEditor.module.css";

//Adapted from Tiff In Tech's React tutorial (Todo List)

function WayPointListEditor() {
  const [deckName] = useState(
    localStorage.getItem("deckName") || []
  );
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );


    setList([...list]);
  
  function setItem(item) {
    const newList = [...list];
    const index = list.findIndex((listItem) => listItem.id === item.id);

    //this next bit is cool -
    //destructure your newlist[item] and your item and then re-merge them.
    //because "item" is later than "newList[item]"", it's values will take priority.
    newList[index] = {
      ...newList[index],
      ...item,
    };
    setList(newList);
  }

  function deleteItem(id) {
    setList(list.filter((item) => item.id !== id));

  }

  useEffect(() => {
    localStorage.setItem("deckName", deckName);
    localStorage.setItem("list", JSON.stringify(list)); // this can error out if we run out of storage
    console.log("DE deckName: " + localStorage.getItem("deckName"));
  }, [list, deckName]);

  return (
    <>
      <div className={styles["page-title-container"]}>
        <h2>Deck Builder</h2>
      </div>
      <div className={styles["deck-editor"]}>
         <div className={styles["section"]}>
          {list.length > 0 ? (
            <>
              <div className={styles["spacer"]} />
              <WayPointList
                list={list}
                onDeleted={(id) => deleteItem(id)}
                editItemCallback={setItem}
              />
            </>
          ) : (
            <div className="deck-editor-item-list">
              <div className={styles["spacer"]} />
              <WayPointList
                o nDeleted={() => {}}
                editItemCallback={() => {}}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
    


export default WayPointListEditor;


