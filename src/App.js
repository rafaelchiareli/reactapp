import React, { useEffect, useState } from 'react';
import { Button, Form,  Row, Table } from "react-bootstrap";
import Servico from './Service/produtoService';
import ProdutoEstoque from './Componentes/produtoEstoque/produtoEstoque.js';
import Css from './App.css';



const App = () => {
  const [dados, setDados] = useState([]);
  const [dadosFiltrados, setdadosFiltrados] = useState(dados);
  const [valorPesquisa, setValorPesquisa] = useState('');

  function mudarTextoPesquisa(texto) {
   
    setValorPesquisa(texto);
    pesquisar();
    if(texto.length === 0){
      setDados(dadosFiltrados);
    }
  }

  useEffect(() => {
    Servico.listarTodos().then((response) => {
      setDados(response.data || []); setdadosFiltrados(response.data);  console.log("Valor", dados);
    });
  }, []);

  function pesquisar() {
   
    console.log("Valor",valorPesquisa);
    

    let novosDados = (dados.filter(e => {return e.nomeProduto.toUpperCase().includes(valorPesquisa.toUpperCase()) || e.loteProduto.toUpperCase().includes(valorPesquisa.toUpperCase()) })); 
    
    setDados(novosDados);
  }
  function limpar() {
    
    setDados(dadosFiltrados);
  }
  return (
    <><Form>
      <Row className="divPesquisa">
        <Form.Group className="col-md-1" controlId="dataInicial">
          <Form.Label>Data Inicial</Form.Label>
          <Form.Control className="inputData"
            type="date" />
        </Form.Group>
        <Form.Group className="col-md-1" controlId="dataFinal">
          <Form.Label>Data Final</Form.Label>
          <Form.Control
            type="date"
            className="inputData" />
        </Form.Group>
        <Form.Group className="col-md-1" controlId="nomeProduto">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            onChange={(e) => mudarTextoPesquisa(e.target.value) }

            className="inputData" />
        </Form.Group>
        <Form.Group controlId="botaoPesquisa" className="divBotao col-md-1">
        <Button className="botao" variant="primary" onClick={() => pesquisar()} type="button">Pesquisar</Button>
        </Form.Group>
        <Form.Group controlId="botaoLimpar" className="divBotao col-md-1">
        <Button className="botao" variant="warning" onClick={() => limpar()} type="button">Limpar</Button>
        </Form.Group>
      </Row>
    </Form><>

        <Table striped bordered>
          <thead>
            <tr>
              <th>
                Produto
              </th>
              <th>
                Lote
              </th>
              <th>
                Validade
              </th>
              <th>
                Estoque
              </th>
            </tr>
          </thead>

          <tbody>
            <ProdutoEstoque dados={dados}>

            </ProdutoEstoque>

          </tbody>
        </Table>
      </></>
  );
}

export default App;
