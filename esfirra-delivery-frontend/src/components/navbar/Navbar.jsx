import React, {useState, useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/Logo-cordarius.png'
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const roles = [
    'Cordarius',
    'Esfihas',
    'Delivery'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[index];
      if (isDeleting) {
        setText((prev) => prev.slice(0, prev.length - 1)); 
        setTypingSpeed(50);
      } else {
        setText((prev) => currentRole.slice(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    };

      
    const timer = setTimeout(handleTyping, typingSpeed);
  
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, typingSpeed]);

  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img className='navbar-logo' src={logo} alt="" />
        <h1 className='navbar-title'>{text}</h1>
      </div>
      <div className='hamburguer' onClick={toggleMenu}>
        <i className='fas fa-bars'></i>
      </div>
        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}> 
          <li><a href="#cardapio">Cardapio</a></li>
          <li>Serviços</li>
          <li>Contatos</li>
        </ul>
    </div>
  )
}

export default Navbar