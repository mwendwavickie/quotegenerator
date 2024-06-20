import React from "react";

const Filter = ({ setCategory,setKeyword,setAuthor }) => {
    return(
        <div className="filter-container">
            <input 
                type="text" 
                placeholder="Filter by author" 
                onChange={(e) => setAuthor(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Filter by keyword" 
                onChange={(e) => setKeyword(e.target.value)} 
            />

            <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="inspiration">Inspiration</option>
                    <option value="love">Love</option>
                    <option value="life">Life</option>
                    {/* Add more categories as needed */}
            </select>
        </div>
    )

}

export default Filter;