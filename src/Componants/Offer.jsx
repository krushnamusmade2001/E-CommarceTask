import React from 'react'
import styles from "./Offer.module.css"

const Offer = () => {
  return (
    <div>
         <div className={styles.container}>
        <div className={styles.item}>
     <span className={styles.upper}>00</span>
    <span className={styles.lower}>DAYS</span>
    </div>
    <div className={styles.item}>
        <span className={styles.upper}>00 </span>
        <span className={styles.lower}>HRS</span>
     </div>
     <div className={styles.item}>
        <span className={styles.upper}>00 </span>
        <span className={styles.lower}>MINS</span>
     </div>
     <div className={styles.item}>
        <span className={styles.upper}>00 </span>
        <span className={styles.lower}>SEC</span>
     </div>
</div>
      
    </div>
  )
}

export default Offer
