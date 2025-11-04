import styles from "./card.module.css"; //for using css only on this file
import { Bookmark } from "lucide-react";
function Card({content}) {
  
  return (
    <div className={styles.parent}>
      <div className={styles.card}>
        <div className={styles.top}>
          <img
            src={content.logo} alt=""
          />
          <button>
            save <Bookmark />
          </button>
        </div>
        <div className={styles.center}>
          <h3>{content.post}</h3>
          <h4>{content.type}</h4>
        </div>
        <div className={styles.bottom}>
          <h3>{content.salary}</h3>
          <button>apply</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
