import React from "react";
import Style from "./category.module.css";
import { useValue } from "../../itemContext";

const Category = () => {
  const { handleCategoryFilter, handleRange, range } = useValue();

  return (
    <>
      <div className={Style.container}>
        <h5>Filter</h5>
        <form className={Style.form}>
          <div className={Style.price}>
            <label htmlFor="price">
              Price: <span>{range}</span>
            </label>
            <input
              type="range"
              id="price"
              name="price"
              min="0"
              max="1000"
              value={range}
              className={Style.accent}
              onChange={(e) => handleRange(e)}
            />
          </div>
          <h5>Category</h5>
          <div className={Style.containerCategory}>
            <div className={Style.category}>
              <input
                type="radio"
                id="all"
                name="category"
                className={Style.accent}
                onClick={() => handleCategoryFilter("")}
              />
              <label htmlFor="all">All</label>
            </div>
            <div className={Style.category}>
              <input
                type="radio"
                id="men"
                name="category"
                className={Style.accent}
                onClick={() => handleCategoryFilter("men's clothing")}
              />
              <label htmlFor="men">Men's Clothing</label>
            </div>
            <div className={Style.category}>
              <input
                type="radio"
                id="women"
                name="category"
                className={Style.accent}
                onClick={() => handleCategoryFilter("women's clothing")}
              />
              <label htmlFor="women">Women's Clothing</label>
            </div>
            <div className={Style.category}>
              <input
                type="radio"
                id="jewelry"
                name="category"
                className={Style.accent}
                onClick={() => handleCategoryFilter("jewelery")}
              />
              <label htmlFor="jewelry">Jewelery</label>
            </div>
            <div className={Style.category}>
              <input
                type="radio"
                id="electronics"
                name="category"
                className={Style.accent}
                onClick={() => handleCategoryFilter("electronics")}
              />
              <label htmlFor="electronics">Electronics</label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Category;
