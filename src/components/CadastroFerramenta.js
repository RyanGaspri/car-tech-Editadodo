import React, { useState } from 'react';

function CadastroFerramenta() {
  const [formData, setFormData] = useState({
    categoria: '',
    nome_ferramenta: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:4000/api/ferramentas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Ferramenta cadastrada com sucesso!');
        setFormData({ categoria: '', nome_ferramenta: '' });
      } else {
        alert('Erro ao cadastrar ferramenta');
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
      alert('Erro de conexão com a API');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Cadastro de Ferramenta</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Categoria:
            <input
              type="text"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Nome da Ferramenta:
            <input
              type="text"
              name="nome_ferramenta"
              value={formData.nome_ferramenta}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <button type="submit" style={styles.button}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed', // Ocupa toda a tela
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#333333', // Fundo da tela
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#444444', // Fundo do card
    color: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '15px',
  },
  button: {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#555555',
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#444444',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
};

export default CadastroFerramenta;
