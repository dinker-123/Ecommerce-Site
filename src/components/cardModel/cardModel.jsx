import React from "react";
import styles from "./cardModel.module.css";
import { Link } from 'react-router-dom';
import { useValue} from "../../itemContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function CartModal() {
  const {cart,value,total,handleRemove,HandlePay} = useValue();
  return (
    <>
    <div className={styles.cartModal}>
      <div className={styles.itemContainer}>
      {cart.map((data)=>{
            return(
              
                <>
                <div className={styles.cartCard} key={data.id}>
                  <img src={data.image} alt={data.title} />
                  <p>{data.title}</p>
                  <h4>$ {data.price}</h4>
                  <button className={styles.deleteBtn} onClick={() => handleRemove(data)}><FontAwesomeIcon icon={faTrash}/></button>
                </div>
                </>
                
            )
        })}
      </div>
      <div className={styles.totalCard}>
                    <p></p>
                    <h3 className={styles.quantity}>Quantity : {value}</h3>
                    <h3 className={styles.total}>Total : ${total}</h3>
                </div>
    </div>
      <div>
      <Link to={value===0?"/":"/Pay"}><button className={styles.playbtn} onClick={HandlePay}>Pay</button></Link>
    </div>
    </>
  );
}

export default CartModal;

