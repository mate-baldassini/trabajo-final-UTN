const Acerca = () => {
  return (
    <div className="container">
      <h1>Acerca del Proyecto</h1>

      <h2>Descripción</h2>
      <p>
        Este proyecto fue desarrollado como trabajo final para la UTN.
        Consiste en una aplicación React con sistema de registro y persistencia de usuario.
      </p>

      <h2>Tecnologías utilizadas</h2>
      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>Context API</li>
        <li>Vite</li>
      </ul>

      <h2>Decisiones de desarrollo</h2>
      <p>
        Se utilizó Context para manejar la autenticación y localStorage
        para persistencia de sesión.
      </p>

      <h2>Observaciones personales</h2>
      <p>
        Este proyecto permitió consolidar conocimientos de React,
        manejo de estado global y validaciones de formularios.
      </p>

      <h2>Dificultades</h2>
      <p>
        Manejo correcto de la persistencia y validaciones.
      </p>
    </div>
  );
};
export default Acerca;