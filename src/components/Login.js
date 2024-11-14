import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import Footer from './Footer';
import Header from './Header';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Strings fixas para validação
  const FIXED_USERNAME = 'joao1234';
  const FIXED_PASSWORD = 'carro4321';

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar credenciais fixas
    if (username === FIXED_USERNAME && password === FIXED_PASSWORD) {
      alert('Login bem-sucedido!');
      navigate('/estoque'); // Redireciona para a página de Estoque
    } else {
      alert('Login falhou! Verifique suas credenciais.');
    }
  };

  return (
    <section id="Login" className="page">
      <Header />
      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>Usuario</label>
          <input
            type="text"
            style={styles.input}
            placeholder="usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label style={styles.label}>Senha</label>
          <input
            type="password"
            style={styles.input}
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" style={styles.button}>Sign In</button>
        </form>
        <a href="#" style={styles.link}>Esqueceu a senha?</a>
      </div>
      <Footer />
    </section>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",  // Define altura mínima para preencher a tela inteira
    width: "100vw",       // Largura total da tela
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
  },
  label: {
    color: "#ffffff",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#333333",
    border: "1px solid #444444",
    borderRadius: "5px",
    color: "#ffffff",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#ffffff",
    color: "#1a1a1a",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  link: {
    color: "#ffffff",
    textDecoration: "underline",
    marginTop: "15px",
  },
};

export default Login;
