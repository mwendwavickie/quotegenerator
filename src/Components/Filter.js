import React from "react";

const Filter = ({ setCategory,setAuthor,setTag }) => {
    return(
        <div className="filter-container">
            <select onChange={(e) => setTag(e.target.value)}>
            <option value="inspirational">Inspirational</option>
            <option value="famous-quotes">Famous Quotes</option>
            <option value="life">Life</option>
            <option value="love">Love</option>
            {/* Add more tags as needed */}
            </select>
        </div>
    )

}

export default Filter;