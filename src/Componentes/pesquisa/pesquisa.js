import React from "react";
import { Button, Form , Col, Row} from "react-bootstrap";
import Css from '../../App.css'

const pesquisa = () =>{
    return (
        <Form>
            <Row className="divPesquisa" >
                <Form.Group className="col-md-1"  controlId="dataInicial">
                    <Form.Label>Data Inicial</Form.Label> 
                    <Form.Control  className="inputData"
                    type="date"
  

                    />
                </Form.Group>
                <Form.Group  className="col-md-1"  controlId="dataFinal">
                    <Form.Label>Data Final</Form.Label> 
                    <Form.Control 
                    type="date"
                    className="inputData"
                    />
                </Form.Group>
                <Form.Group  className="col-md-1"  controlId="nomeProduto">
                    <Form.Label>Nome</Form.Label> 
                    <Form.Control 
                  
                    className="inputData"
                    />
                </Form.Group>
                <Form.Group    controlId="dataFinal" className="divBotao col-md-1">
                 <Button className="botao" variant="primary" onClick={} type="button">Pesquisar</Button>
                </Form.Group>
            </Row>
        </Form>

    );

}

export default pesquisa;