import art1 from '../images/art1.jpg';
import art2 from '../images/art2.jpg';
import art3 from '../images/art3.jpg';
import './Products.css';


function Products() {
  return (
    <div className="products-container">
      <h1 className='text-4xl mb-4'>Productos</h1>
      <div className="products-grid">
        <div className="product-item">
          <img src={art1} alt="Producto 1" className="product-image" />
          <div className="product-info">
            <h3>Producto 1</h3>
            <p>Descripción del Producto 1</p>
            <p>Precio: $100</p>
          </div>
        </div>
        <div className="product-item">
          <img src={art2} alt="Producto 2" className="product-image" />
          <div className="product-info">
            <h3>Producto 2</h3>
            <p>Descripción del Producto 2</p>
            <p>Precio: $120</p>
          </div>
        </div>
        <div className="product-item">
          <img src={art3} alt="Producto 3" className="product-image" />
          <div className="product-info">
            <h3>Producto 3</h3>
            <p>Descripción del Producto 3</p>
            <p>Precio: $150</p>
          </div>
        </div>
        <div className="product-item">
          <img src={art1} alt="Producto 1" className="product-image" />
          <div className="product-info">
            <h3>Producto 1</h3>
            <p>Descripción del Producto 1</p>
            <p>Precio: $100</p>
          </div>
        </div>
        <div className="product-item">
          <img src={art2} alt="Producto 2" className="product-image" />
          <div className="product-info">
            <h3>Producto 2</h3>
            <p>Descripción del Producto 2</p>
            <p>Precio: $120</p>
          </div>
        </div>
        <div className="product-item">
          <img src={art3} alt="Producto 3" className="product-image" />
          <div className="product-info">
            <h3>Producto 3</h3>
            <p>Descripción del Producto 3</p>
            <p>Precio: $150</p>
          </div>
        </div>
        <div className="product-item">
          <img src={art1} alt="Producto 1" className="product-image" />
          <div className="product-info">
            <h3>Producto 1</h3>
            <p>Descripción del Producto 1</p>
            <p>Precio: $100</p>
          </div>
        </div>
        <div className="product-item">
          <img src={art2} alt="Producto 2" className="product-image" />
          <div className="product-info">
            <h3>Producto 2</h3>
            <p>Descripción del Producto 2</p>
            <p>Precio: $120</p>
          </div>
        </div>
        <div className="product-item">
          <img src={art3} alt="Producto 3" className="product-image" />
          <div className="product-info">
            <h3>Producto 3</h3>
            <p>Descripción del Producto 3</p>
            <p>Precio: $150</p>
          </div>
        </div>
        <div className="product-item">
          <img src={art1} alt="Producto 1" className="product-image" />
          <div className="product-info">
            <h3>Producto 1</h3>
            <p>Descripción del Producto 1</p>
            <p>Precio: $100</p>
          </div>
        </div>
        <div className="product-item">
          <img src={art2} alt="Producto 2" className="product-image" />
          <div className="product-info">
            <h3>Producto 2</h3>
            <p>Descripción del Producto 2</p>
            <p>Precio: $120</p>
          </div>
        </div>
        <div className="product-item">
          <img src={art3} alt="Producto 3" className="product-image" />
          <div className="product-info">
            <h3>Producto 3</h3>
            <p>Descripción del Producto 3</p>
            <p>Precio: $150</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
