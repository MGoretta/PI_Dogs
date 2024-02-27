import './navbar.css';

function Navbar({handleChange, handleSubmit}) {
  return (
    <div className="search-box">
      <form onChange={handleChange}>
        <input placeholder='Búsqueda' type='Search'/>
        <button type='Submit' onClick={handleSubmit}>Buscar</button>
      </form>
    </div>
  );
}

export default Navbar;