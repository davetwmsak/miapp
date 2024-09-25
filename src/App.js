import './App.css';

function App() {

  const nombre = <h1>David Mendoza</h1>;
  const edad = <p>17</p>;
  const email = <p>dm987257@gmail.com</p>;
  const usuario = <div>{nombre} {edad} {email}</div>

  return (
    <div className="App">
      <MostarNombreComponente />
      <MostarNombreComponente />
      <MostarNombreComponente />
    </div>
  );
}

const MostarNombreComponente = () => {
  return <h1>David Mendoza  (DUAL) </h1>
}

export default App;
