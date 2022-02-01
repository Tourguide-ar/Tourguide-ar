import styles from "./AdminConfig.module.css";

function AdminConfig() {
  const f = (a, b) => {
    const c = a ** b;
    return c;
  };

  return (
    <div className={styles["stage"]}>{f(4, 2) + " - this is a template"}</div>
  );
}

export default AdminConfig;
