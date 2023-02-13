import axios from 'axios'
import api from './api'



export default class produtoService {

    static listarTodos() {
        return api.get("/produtos");
    }
}
