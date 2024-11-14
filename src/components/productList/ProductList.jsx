import { useState } from 'react';
import style from './ProductList.module.css';

function ProductList() {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const handelLoaded = async () => {
    setLoaded(true);
    try {
      const res = await fetch(
        'https://run.mocky.io/v3/92348b3d-54f7-4dc5-8688-ec7d855b6cce?mocky-delay=500ms'
      );
      const data = await res.json();
      console.log(data);
      setData(data);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };
  return (
    <div className={style.mainBox}>
      {!data ? (
        <LoadingButton loaded={loaded} handelLoaded={handelLoaded} />
      ) : (
        <div className={style.productList}></div>
      )}

      {error && <p className={style.error}>{error}</p>}
    </div>
  );
}

function LoadingButton({ loaded, handelLoaded }) {
  return (
    <div className={style.loadingBtn}>
      {!loaded ? (
        <div className={style.loader}>
          <span className={style.loaderDot}>.</span>
          <span className={style.loaderDot}>.</span>
          <span className={style.loaderDot}>.</span>
        </div>
      ) : (
        <button className={style.loadBtn} onClick={handelLoaded}>
          Load Products
        </button>
      )}
    </div>
  );
}

export default ProductList;
