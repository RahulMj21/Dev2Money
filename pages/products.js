const Products = () => {
  const fetchedProducts = null;
  return (
    <section className="products container">
      {!fetchedProducts ? (
        <div className="products__empty">
          <h1 className="products__heading">
            subscribe us to get notified when <br /> new product will arrive
            &nbsp;
            <span className="animate">&darr;</span>
          </h1>
          <div className="subscribe">
            <input
              type="text"
              className="subscribe__input"
              placeholder="Enter your email"
            />
            <button className="subscribe__button">Subcribe</button>
          </div>
        </div>
      ) : (
        <h1>{fetchedProducts}</h1>
      )}
      <div className="circle circle1" />
      <div className="circle circle2" />
    </section>
  );
};

export default Products;
