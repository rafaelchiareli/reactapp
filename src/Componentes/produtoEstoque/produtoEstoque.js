import React from 'react';



const produtoEstoque = ({ dados, ...props }) => {



    return (
       
            <>
               {dados.map(item => <tr key={`produto-${item.codProduto}`}>
                    <td>
                        {item.nomeProduto}
                    </td>
                    <td>
                        {item.loteProduto}
                    </td>
                    <td>
                        {item.validadeProduto}
                    </td>
                    <td>
                        {item.quantidadeProduto}
                    </td>
                  
                </tr>)}

            </>
    )

}
export default produtoEstoque;