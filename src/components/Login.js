import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import Footer from './Footer';
import Header from './Header';

function Login() {
  const navigate = useNavigate(); // Inicializa o hook de navegação
  const [username, setUsername] = useState(''); // Estado para o username
  const [password, setPassword] = useState(''); // Estado para a password

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página

    try {
      const response = await fetch('http://localhost:4000/api/administradores/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json(); // Extrai a resposta JSON
        alert('Login bem-sucedido!'); // Alerta de sucesso
        navigate('/estoque'); // Redireciona para a página de Estoque
      } else {
        alert('Login falhou! Verifique suas credenciais.'); // Alerta de erro
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error); // Log do erro
      alert('Ocorreu um erro ao fazer login.'); // Alerta de erro
    }
  };

  return (
    <section id="Login" className="page">
      <Header />
      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>Email</label>
          <input
            type="text"
            style={styles.input}
            placeholder="Value"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Atualiza o estado do username
          />

          <label style={styles.label}>Senha</label>
          <input
            type="password"
            style={styles.input}
            placeholder="Value"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da password
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
