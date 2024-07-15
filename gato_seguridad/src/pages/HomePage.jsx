import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './HomePage.css';
import cam1 from '../images/cam1.jpg';
import cam2 from '../images/cam2.jpg';
import cam3 from '../images/cam3.jpg';
import cam4 from '../images/cam4.jpg';
import cam5 from '../images/cam5.jpg';
import { Carousel } from 'react-bootstrap';

function HomePage() {
  return (
    <div className="App">
      <div className='Carrusel'>
        <Carousel>
          <Carousel.Item>
            <img
              src={cam1}
              className="d-block w-100"
              alt="cam1"  
            />
            <Carousel.Caption>
              <h3>Sobre nosotros</h3>
              <p>Seguridad y Vigilancia</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={cam2}
              className="d-block w-100"
              alt="cam2"
            />
            <Carousel.Caption>
              <h3>Productos</h3>
              <p>Cámaras de seguridad, alarmas, sistemas de monitoreo, etc.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={cam3}
              className="d-block w-100"
              alt="cam3"
            />
            <Carousel.Caption>
              <h3>Servicios</h3>
              <p>Instalación, mantenimiento y asesoramiento.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div id="sobre-nosotros" className="company-info">
        <div className="text">
        <h1 className="text-4xl mb-4">Sobre nosotros</h1>
        <p className="text-lg">
            Somos una empresa dedicada a la seguridad y vigilancia, ofreciendo soluciones innovadoras para proteger tu hogar y negocio. Nuestro equipo está compuesto por profesionales altamente capacitados y comprometidos con la excelencia en el servicio.
          </p>
        </div>
        <div className="image image-first">
          <img src={cam4} alt="Sobre nosotros" className="responsive-image" />
        </div>
        <div className="text text-second">
        <h1 className="text-4xl mb-4">Productos y servicios</h1>
        <p className="text-lg">
        Contamos con una gran variedad de productos dependiendo de tus necesidades y presupuesto. También ofrecemos servicios de instalación, mantenimiento y asesoramiento.
          </p>
        </div>
        <div className="image image-first">
          <img src={cam5} alt="Sobre nosotros" className="responsive-image" />
        </div>
      </div>

      <footer className="footer">
        <p>Síguenos en nuestras redes sociales</p>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
