import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './pagines.css';

function HorariosComponent() {
  const [horarios, setHorarios] = useState([]);
  const [seleccionadoId, setSeleccionadoId] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const horariosConsultados = [
        { dia: 'Lunes', horario: '9:00 AM - 6:00 PM', redesSociales: ['Facebook', 'Instagram'] },
        { dia: 'Martes', horario: '9:00 AM - 6:00 PM', redesSociales: ['Facebook', 'Twitter'] },
        { dia: 'Miércoles', horario: '9:00 AM - 6:00 PM', redesSociales: ['Instagram', 'Whatsapp'] },
        { dia: 'Jueves', horario: '9:00 AM - 6:00 PM', redesSociales: ['Twitter', 'Whatsapp'] },
        { dia: 'Viernes', horario: '9:00 AM - 6:00 PM', redesSociales: ['Facebook', 'Whatsapp'] },
        { dia: 'Sábado', horario: '10:00 AM - 4:00 PM', redesSociales: ['Instagram', 'Whatsapp'] },
        { dia: 'Domingo', horario: 'Cerrado', redesSociales: ['Facebook', 'Instagram'] },
      ];
      setHorarios(horariosConsultados);
    }, 1000);
  }, []);

  const servicios = [
    {
      nombre: 'Baño de Vapor',
      descripcion: 'Relájate y disfruta de un baño de vapor que te ayudará a desintoxicar el cuerpo y rejuvenecer la piel.',
      imagen: './src/assets/baño.jpg',
      precio: '$50',
    },
    {
      nombre: 'Masaje Relajante',
      descripcion: 'Déjate llevar por las manos expertas de nuestros terapeutas y disfruta de un masaje relajante que aliviará el estrés y la tensión muscular.',
      imagen: './src/assets/masaje.jpg',
      precio: '$80',
    },
    {
      nombre: 'Tratamientos Faciales',
      descripcion: 'Nuestros tratamientos faciales te brindarán una piel radiante y saludable, eliminando impurezas y revitalizando tu rostro.',
      imagen: './src/assets/trata.jpg',
      precio: '$120',
    },
  ];

  return (
    <div className="horarios-container">
      <h1 className="horarios-title">Horarios</h1>
      <div className="image-container">
        <img src="https://www.fundaciojoia.org/images/horarioverano2015.jpg" alt="Imagen del Spa" className="spa-image" />
      </div>
      <div className="horarios-content">
        <div className="horarios-list-container">
          <ul className="horarios-list">
            {horarios.map((horario, index) => (
              <li key={index}>
                <div className="horario-item">
                  <span className="horario-dia">{horario.dia}</span>
                  <span className="horario-hora">{horario.horario}</span>
                </div>
                <div className="redes-sociales">
                  {horario.redesSociales.includes('Facebook') && (
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <FaFacebook />
                    </a>
                  )}
                  {horario.redesSociales.includes('Instagram') && (
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                  )}
                  {horario.redesSociales.includes('Twitter') && (
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <FaTwitter />
                    </a>
                  )}
                  {horario.redesSociales.includes('Whatsapp') && (
                    <a href="https://wa.me/telefono" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62994.17742906786!2d-70.68865838688012!3d9.321207699305607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6328692ebdd3d5%3A0xd3d8efa5fb790d11!2sValera%2C%20Trujillo%2C%20Venezuela!5e0!3m2!1sro!2sro!4v1687837502885!5m2!1sro!2sro"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>

      <motion.div className="servicios-spa">
        <h2 className="servicios-title">Nuestros Servicios de Spa</h2>
        <div className="servicios-container">
          <AnimatePresence>
            {seleccionadoId && (
              <motion.div layoutId={seleccionadoId}>
                <h3 className="servicio-nombre">{servicios[seleccionadoId - 1].nombre}</h3>
                <p className="servicio-descripcion">{servicios[seleccionadoId - 1].descripcion}</p>
                <p className="servicio-precio">{servicios[seleccionadoId - 1].precio}</p>
                <button onClick={() => setSeleccionadoId(null)}>Cerrar</button>
              </motion.div>
            )}
          </AnimatePresence>
          {servicios.map((servicio, index) => (
            <motion.div
              className="servicio-item"
              key={index}
              layoutId={index + 1}
              onClick={() => setSeleccionadoId(index + 1)}
            >
              <img src={servicio.imagen} alt={servicio.nombre} className="servicio-imagen" />
              <div className="servicio-info">
                <h3 className="servicio-nombre">{servicio.nombre}</h3>
                <p className="servicio-descripcion">{servicio.descripcion}</p>
                <p className="servicio-precio">{servicio.precio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <footer className="footer">
        <div className="footer-content">
          <p className="copyright">
            Copyrigth | {new Date().getFullYear()}
          </p>
          <a href="https://github.com/arrayz-code" target="_blank" rel="noopener noreferrer">
            <FaGithub className="github-icon" />
          </a>
          <p className="developer">Desarrollador: Angel Arraiz</p>
        </div>
      </footer>
    </div>
  );
}

export default HorariosComponent;
