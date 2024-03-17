import React from 'react'
import styles from "./Price.module.css"

const Price = ({original_price,current_price}) => {
  return (
    <>
                    <div>
                    <span className={styles.original_price}>{original_price} 
                    </span>
                    <span className={styles.current_price}>{current_price}</span>
                    </div>
                   
  </> 
  )
}

export default Price
