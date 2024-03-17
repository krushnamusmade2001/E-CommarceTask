import React from 'react';
import items from "./ItemData"
import styles from "./Contant.module.css"
import Offer from './Componants/Offer';
import CompanyName from './Componants/CompanyName';
import Rating from './Componants/Rating';
import Price from './Componants/Price';
 

function Contant() {
   
    return (
  
            <>
            <h2 className={styles.Dea}>Deal Of The Day</h2>
        <div className={styles.itemss}>
            {items.map(item => (
                <div key={item.id}  >
                 <img src={item.image} alt={item.item_name} className={styles.images}/>
                 <Offer/>
                 <CompanyName companyname={item.company} />
                 <Rating   stars={item.rating.stars} count={item.rating.count} />
                  <Price original_price={item.original_price} current_price={item.current_price}  />
                        
                
                    {/* {/* <div>
                    <span className={styles.original_price}>{item.original_price} 
                    </span>
                    <span className={styles.current_price}>{item.current_price}</span>
                    </div> */}
                   </div> 
                   
            ))}
        </div>
        </>
    );
}

export default Contant;
