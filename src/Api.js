import axios from 'axios';

export default {
  Produtos: async (IdEmp, setCat, setDadoEmp) => {

   
    await axios.post('http://localhost:3000/produtos', {
      IdEmp: IdEmp,
    }).then(response => {
      setCat(response.data)
    })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
    });;
  
    
    await axios.post('http://localhost:3000/dadoEmpresa', {
      IdEmp: IdEmp,
    }).then(response => {
      
      //console.log(response.data);
      setDadoEmp(response.data[0])
    })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
    });;

    await axios.post('http://localhost:3000/VerList', {
      IdEmp: IdEmp,
    }).then(response => {
      
      console.log(response.data[0].Pedido);
      
    })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
    });; 

      
      

      
       
  },
  Finalizando: async (ValorEnt, Emp, Itens, Tel, Nome, Rua, Numero, Bairro, Complemento, Cidade, Estado, Pix, CartDebi, CartCred, Cheque, Boleto, Dinheiro, Troco, Buscar, Entreg, Consumo) => {
    var TransPix = 0
    if(Pix){
      TransPix = 1
    } else {
      TransPix = 0
    }
   
    var TransCartDeb = 0
    if(CartDebi){
      TransCartDeb = 1
    } else {
      TransCartDeb = 0
    }

    var TransCartCred = 0
    if(CartCred){
      TransCartCred = 1
    } else {
      TransCartCred = 0
    }
    var TransCheque = 0
    if(Cheque){
      TransCheque = 1
    } else {
      TransCheque = 0
    }
    var TransBoleto = 0
    if(Boleto){
      TransBoleto = 1
    } else {
      TransBoleto = 0
    }

    var TransDinheiro = 0
    if(Dinheiro){
      TransDinheiro = 1
    } else {
      TransDinheiro = 0
    }

    var TransBuscar = 0
    if(Buscar){
      TransBuscar = 1
    } else {
      TransBuscar = 0
    }
    var TransEntreg = 0
    if(Entreg){
      TransEntreg = 1
    } else {
      TransEntreg = 0
    }
    var TransConsumo = 0
    if(Consumo){
      TransConsumo = 1
    } else {
      TransConsumo = 0
    }

    await axios.post('http://localhost:3000/Pedido', {
      IdEmp: Emp,
      Pedido:Itens, 
      Tel:Tel,
      Nome:Nome,
      Rua:Rua,
      Numero:Numero,
      Complemento:Complemento,
      Bairro:Bairro,
      Cidade:Cidade,
      Estado:Estado,
      Pix:TransPix,
      CartCred:TransCartCred,
      CartDebi:TransCartDeb,
      Boleto:TransBoleto,
      Cheque:TransCheque,
      Dinheiro:TransDinheiro,
      Troco:Troco,
      Buscar:TransBuscar,
      Entreg:TransEntreg,
      Consumo:TransConsumo,
      ValorEnt:ValorEnt,
    }).then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
    });;
  
    
  
   
  },
}