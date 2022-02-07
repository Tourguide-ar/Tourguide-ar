import styles from "../AdminConfig.module.css";
function WayPointListItem({id,name,latitude,longditude}) {
    return (
        <li>
           <span>{id}</span> 
            <span>{name}</span> 
            <span>{latitude}</span>
          <span>{longditude}</span>  
        </li>
    );
}
        export default WayPointListItem;

