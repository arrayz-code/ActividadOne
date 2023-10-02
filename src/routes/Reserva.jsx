import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './pagines.css';
import { FaGithub } from 'react-icons/fa';

function ReservationForm() {
  const [hora, setHora] = useState('');
  const [fecha, setFecha] = useState('');
  const [tipoSesion, setTipoSesion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica para enviar los datos de reserva
    // a través de una solicitud HTTP o realizar alguna acción específica

    // Reiniciar los valores del formulario
    setHora('');
    setFecha('');
    setTipoSesion('');
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const selectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      <motion.form
        className="reservation-form"
        onSubmit={handleSubmit}
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2>Reserva tu Sesión</motion.h2>
        <motion.div className="form-group" variants={inputVariants}>
          <label htmlFor="hora">Hora:</label>
          <input
            type="text"
            id="hora"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            placeholder="Ingrese la hora de la reserva"
            required
          />
        </motion.div>
        <motion.div className="form-group" variants={inputVariants}>
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </motion.div>
        <motion.div className="form-group" variants={selectVariants}>
          <label htmlFor="tipoSesion">Tipo de Sesión:</label>
          <select
            id="tipoSesion"
            value={tipoSesion}
            onChange={(e) => setTipoSesion(e.target.value)}
            required
          >
            <option value="">Seleccionar</option>
            <option value="Masaje relajante">Masaje relajante</option>
            <option value="Tratamiento facial">Tratamiento facial</option>
            <option value="Baño de vapor">Baño de vapor</option>
          </select>
        </motion.div>
        <motion.button type="submit" variants={buttonVariants}>
          Reservar
        </motion.button>
      </motion.form>

      <footer className="footer">
        <div className="footer-content">
          <p className="copyright">
            Copyrigth | {new Date().getFullYear()}
          </p>
          <a
            href="https://github.com/arrayz-code"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="github-icon" />
          </a>
          <p className="developer">Desarrollador: Angel Arraiz</p>
        </div>
      </footer>
    </div>
  );
}

export default ReservationForm;
