import React from 'react';
import styles from './card.module.css';
import { useValue } from '../../itemContext';

export default function Card() {
  const { handleBuy, cart, data, search, selectedCategory, range } = useValue();

  const filteredData = React.useMemo(() => {
    if (!data) return [];

    const filteredByCategory = data.filter((item) => {
      if (!selectedCategory) return true;
      return item.category.toLowerCase() === selectedCategory.toLowerCase();
    });

    const filteredBySearch = filteredByCategory.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    );

    const filteredByRange = filteredBySearch.filter((item) => {
      return item.price <= range;
    });

    return filteredByRange;
  }, [data, search, selectedCategory, range]);


  return (
    <>
      <div>
        {filteredData.map((item) => {
          const isInCart = cart.some((cartItem) => cartItem.id === item.id);
          return (
            <div className={styles.card} key={item.id}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <h4>${item.price}</h4>
              <button
                className={isInCart ? styles.remove : styles.buy}
                onClick={() => handleBuy(item)}
              >
                {isInCart ? '- REMOVE CART' : '+ ADD CART'}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
