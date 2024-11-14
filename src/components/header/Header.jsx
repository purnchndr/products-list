import { useState } from 'react';
import style from './Header.module.css';

function Header() {
  const [sortBy, setSortBy] = useState('Sort By');
  const handelSortBy = e => {
    console.log(+e.target.value);
    setSortBy(+e.target.value);
  };
  console.log(typeof sortBy);
  return (
    <header className={style.header}>
      <h1>All Collections</h1>
      <select onChange={handelSortBy} value={sortBy} placeholder='Sort By'>
        <option hidden>Sort By</option>
        <option value={1}>Price: Low to High</option>
        <option value={2}>Price: High to Low</option>
      </select>
    </header>
  );
}

export default Header;
