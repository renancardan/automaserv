import React, { useState, useEffect } from 'react';
import {Dimensions, Image, View, Text, StyleSheet, Button, Modal, TouchableOpacity, ScrollView, TouchableHighlight  } from 'react-native';
import { Ionicons, Feather, AntDesign, FontAwesome6, FontAwesome5} from '@expo/vector-icons'
import Campo from './CampoQuant';
import Telefone from './NumberTel'
import InputNome from './InputNome';
import InputComent from './InputComent';
import Api from '../Api'

const { width, height,  } = Dimensions.get('window');
const App = ({DadoEmp, VerTotal, setModalVisible, modalVisible, setItens, Itens}) => {
    console.log(DadoEmp.End_Cidade)
  const [Nome, setNome] = useState("");
    const [Tel, setTel] = useState("");
    const [Rua, setRua] = useState("");
    const [Numero, setNumero] = useState("");
    const [Bairro, setBairro] = useState("");
    const [Complemento, setComplemento] = useState("");
    const [Cidade, setCidade] = useState("");
    const [Estado, setEstado] = useState("");
    const [Pix, setPix] = useState(false);
    const [CartCred, setCartCred] = useState(false);
    const [CartDebi, setCartDebi] = useState(false);
    const [Cheque, setCheque] = useState(false);
    const [Boleto, setBoleto] = useState(false);
    const [Dinheiro, setDinheiro] = useState(false);
    const [Troco, setTroco] = useState("");
    const [QuatIt, setQuatIt] = useState(true);
    const [Entreg, setEntreg] = useState(true);
    const [Buscar, setBuscar] = useState(false);
    const [Consumo, setConsumo] = useState(false);
    const [TelEnd, setTelEnd] = useState(false);
    const [Coment, setComent] = useState("");



    useEffect(()=>{

      PrencheCidEst()
     
    }, [modalVisible]);

    const FinalizandoPedido = ()=>{
      var Emp = DadoEmp.idEmp
      var ValorEnt = DadoEmp.Rec_ValorEnt
  
      Api.Finalizando(ValorEnt, Emp, Itens, Tel, Nome, Rua, Numero, Bairro, Complemento, Cidade, Estado, Pix, CartDebi, CartCred, Cheque, Boleto, Dinheiro, Troco, Buscar, Entreg, Consumo )
    
    }
  

    const PrencheCidEst = ()=>{
      if(DadoEmp.End_Cidade){
        setCidade(DadoEmp.End_Cidade)
        setEstado(DadoEmp.End_Estado)
      }
      
    }
    const EscreverTel = (t)=>{
        setTel(t)
        if(t.length === 14){
            setTelEnd(true)
        } else {
            setTelEnd(false)
        }
    }

    const Entregar = ()=>{
      setEntreg(true)
      setConsumo(false)
      setBuscar(false)
    }

    const Buscando = ()=>{
      setEntreg(false)
      setConsumo(false)
      setBuscar(true)
    }

    const Consumindo = ()=>{
      setEntreg(false)
      setConsumo(true)
      setBuscar(false)
    }

  const DiminuirIten =(key, Quant)=>{
    var QuantNew = Quant-1
    var NewItens = [];
    if(Quant > 1){ 
    for(let i in Itens){
      if(parseInt(i) === key){
        console.log("Entrou")
     NewItens.push(
      {
        id:Itens[i].id,
        FotoUrl:Itens[i].FotoUrl,
        Nome:Itens[i].Nome,
        Preco:Itens[i].Preco,
        Descricao:Itens[i].Descricao,
        Status_Disp:Itens[i].Status_Disp,
        Statu_Prom:Itens[i].Statu_Prom,
        Quant:QuantNew, 
        Coment:Itens[i].Coment
      }
     )
      } else {
NewItens.push(
      {
        id:Itens[i].id,
        FotoUrl:Itens[i].FotoUrl,
        Nome:Itens[i].Nome,
        Preco:Itens[i].Preco,
        Descricao:Itens[i].Descricao,
        Status_Disp:Itens[i].Status_Disp,
        Statu_Prom:Itens[i].Statu_Prom,
        Quant:Itens[i].Quant, 
        Coment:Itens[i].Coment
      }
     )
      }
    }

 
    setItens(NewItens)
  }
 
  }
  const AumentarIten =(key, Quant)=>{
    var QuantNew = Quant+1
    var NewItens = [];
  
    for(let i in Itens){
      if(parseInt(i) === key){
        console.log("Entrou")
     NewItens.push(
      {
        id:Itens[i].id,
        FotoUrl:Itens[i].FotoUrl,
        Nome:Itens[i].Nome,
        Preco:Itens[i].Preco,
        Descricao:Itens[i].Descricao,
        Status_Disp:Itens[i].Status_Disp,
        Statu_Prom:Itens[i].Statu_Prom,
        Quant:QuantNew, 
        Coment:Itens[i].Coment
      }
     )
      } else {
NewItens.push(
      {
        id:Itens[i].id,
        FotoUrl:Itens[i].FotoUrl,
        Nome:Itens[i].Nome,
        Preco:Itens[i].Preco,
        Descricao:Itens[i].Descricao,
        Status_Disp:Itens[i].Status_Disp,
        Statu_Prom:Itens[i].Statu_Prom,
        Quant:Itens[i].Quant, 
        Coment:Itens[i].Coment
      }
     )
      }
    }
  
    console.log(key)
    console.log(NewItens)
    setItens(NewItens)
  
 
  }
  const TirarEsse = (position) =>{
    setItens([...Itens.filter((item, index) => index !== position)]);
    
  }

  const handleChange = (value, key) => {
    console.log(key)
    // Verifica se o valor é numérico antes de atualizar o estado
    if (/^\d+$/.test(value) || value === '') {

        setQuatIt(value);
      
      
    }
  };

   
  return (
    
     
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.overlay} >
          <View style={styles.menu}>
         
          <ScrollView 
           showsVerticalScrollIndicator={false}
          style={styles.Container2}>
          <TouchableHighlight  onPress={() => setModalVisible(false)}style={styles.Container7}>
            <>
          <View >
          <AntDesign name="closecircleo" size={24} color="red" />
             </View>
          <Text style={styles.menuItem}>Carrinho</Text>
          <View >
            <></>
             </View>
             </>
          </TouchableHighlight>
          <View  style={styles.Container8}>
  <Text style={{fontSize:17}}>Tel:</Text>
  <Telefone
                       
                       placeholder="Digite seu Whatsapp" 
                       value={Tel}
                       onChangeText={t=>EscreverTel(t)}
                       autoCapitalize="none"
                       keyboardType={"phone-pad"}
                      
                   /> 
          </View>
          <View  style={styles.Container8}>
  <Text style={{fontSize:17}}>Nome:</Text>
  <InputNome
                       
                       placeholder="Digite seu Nome" 
                       value={Nome}
                       onChangeText={t=>setNome(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
       
          <View  style={styles.Container8}>
  <Text style={{fontSize:17, fontWeight:"bold"}}>itens do Carrinho</Text>
          </View>
<View style={styles.Container5}>
{ Itens.length > 0  &&
    <>
    {Itens.map((item, key)=>(
        <>
    <View style={styles.Container1}>
   
     <View   style={styles.Prod4}>
     <View   style={styles.Prod}>
      {item.FotoUrl ?
        <Image
        source={{ uri: item.FotoUrl }}  // use uri instead of require
        style={styles.Img}
        />
      :
    <Image
        source={require("../assets/semImg.gif")}  // use uri instead of require
        style={styles.Img}
        />
      }
     
      </View>
      <View   style={styles.Prod3}>
        <Text style={styles.menuItem1}>{item.Quant} X {item.Nome}</Text>
        <Text style={styles.menuItem1}>R$ {item.Preco} X {item.Quant} = R$ {item.Preco*item.Quant}</Text>
      </View>
      </View>
     


      <View style={styles.Prod2}>      
      <View style={styles.Input}>
              
              
              <TouchableHighlight  onPress={()=>DiminuirIten(key, item.Quant)}>
               <AntDesign name="minuscircle" size={24} color="red" />
               </TouchableHighlight>
             
             
             <Campo 
               style={styles.Input1}       
               placeholder="" 
               value={item.Quant}
               onChangeText={(t, key)=>handleChange(t, key)}
               autoCapitalize="none"
               keyboardType={"number-pad"}
               posi={18}
                 />
            <TouchableHighlight  onPress={()=>AumentarIten(key, item.Quant)}>
             <AntDesign name="pluscircle" size={24} color="black" />
             </TouchableHighlight>
           </View>
        <TouchableHighlight onPress={()=>TirarEsse(key)} style={{marginLeft: 5}} >      
        <AntDesign name="delete" size={24} color="red" />
      </TouchableHighlight>
      </View >
  </View>
  <View style={styles.LinhaTop}></View>
  </>
        ))}
      </>}
      <Text style={{fontSize:20}}>Total: R$ {VerTotal}</Text>
  </View>
  <View style={styles.Container12}>

  <InputComent 
               placeholder="Digite Observação caso Tenha..." 
               value={Coment}
               onChangeText={t=>setComent(t)}
               autoCapitalize="none"
               keyboardType={"default"}
              
            
            />
          </View>
  {Itens.length > 0 &&
  <>
  <View  style={styles.Container8}>
  <Text style={{fontSize:17, fontWeight:"bold"}}>Forma de Entrega</Text>
          </View>
          <View  style={styles.Container18}>
            {DadoEmp.Rec_Buscar === 1 &&
            <>
            {Entreg === false && Buscar === true && Consumo === false ?
            <TouchableHighlight style={styles.Escolha1}>
                <></>
            </TouchableHighlight>
            :
            <TouchableHighlight onPress={()=>Buscando()} style={styles.Escolha}>
                <></>
            </TouchableHighlight>
            }
            
          <Text style={styles.Text11}>Vou Buscar</Text>
            
            </>

            }
           {DadoEmp.Rec_Consumoloc === 1 &&
           <>
           {Entreg === false && Buscar === false && Consumo === true ?
            <TouchableHighlight style={styles.Escolha1}>
                <></>
            </TouchableHighlight>
            :
            <TouchableHighlight onPress={()=>Consumindo()} style={styles.Escolha}>
                <></>
            </TouchableHighlight>
            }
            
          <Text style={styles.Text11}>Consumir no Local</Text>
           </>

           }
          
          {DadoEmp.Rec_Entregar === 1 &&
          <>
           {Entreg === true && Buscar === false && Consumo === false?
            <TouchableHighlight  style={styles.Escolha1}>
                <></>
            </TouchableHighlight>
            :
            <TouchableHighlight onPress={()=>Entregar()} style={styles.Escolha}>
                <></>
            </TouchableHighlight>
            }
          <Text style={styles.Text11}>Delivery</Text>
          </>
          }
         
          </View>
        
          {TelEnd &&
          <>
          {Entreg &&
          <>
           <View  style={styles.Container8}>
  <Text style={{fontSize:17, fontWeight:"bold"}}>Endereço</Text>
          </View>
          <View  style={styles.Container8}>
  <Text style={{fontSize:17}}>Rua:</Text>
  <InputNome
                       
                       placeholder="Digite Nome da Rua" 
                       value={Rua}
                       onChangeText={t=>setRua(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
          <View  style={styles.Container8}>
  <Text style={{fontSize:17}}>Numero:</Text>
  <InputNome
                       
                       placeholder="Digite Numero" 
                       value={Numero}
                       onChangeText={t=>setNumero(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
          <View  style={styles.Container8}>
  <Text style={{fontSize:17}}>Bairro:</Text>
  <InputNome
                       
                       placeholder="Digite Nome do Bairro" 
                       value={Bairro}
                       onChangeText={t=>setBairro(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
          <View  style={styles.Container8}>
  <Text style={{fontSize:17}}>Complemeto:</Text>
  <InputNome
                       
                       placeholder="Digite Complemento" 
                       value={Complemento}
                       onChangeText={t=>setComplemento(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
          <View  style={styles.Container8}>
  <Text style={{fontSize:17}}>Cidade:</Text>
  <InputNome
                       
                       placeholder="Digite Nome da Cidade" 
                       value={Cidade}
                       onChangeText={t=>setCidade(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
          <View  style={styles.Container8}>
  <Text style={{fontSize:17}}>Estado:</Text>
  <InputNome
                       
                       placeholder="Digite Nome do Estado" 
                       value={Estado}
                       onChangeText={t=>setEstado(t)}
                       autoCapitalize="none"
                       keyboardType={"default"}
                      
                   /> 
          </View>
          <View  style={styles.Container8}>
  <Text style={{fontSize:17, fontWeight:"bold"}}>Forma de Pagamento</Text>
          </View>
          <View  style={styles.Container10}>
            {DadoEmp.Pg_Pix === 1 &&
            <View  style={styles.Container11}>
            {Pix ?
            <TouchableHighlight onPress={()=>setPix(!Pix)} style={styles.Escolha1}>
                <></>
            </TouchableHighlight>
            :
            <TouchableHighlight onPress={()=>setPix(!Pix)} style={styles.Escolha}>
                <></>
            </TouchableHighlight>
            }
            <FontAwesome6 name="pix" size={24} color="green" /> 
            <Text style={styles.Text12}>Pix</Text>
            </View>
            }
         
          {DadoEmp.Pg_CartDebi === 1 &&
          <>
          <View  style={styles.Container11}>
            {CartDebi ?
            <TouchableHighlight onPress={()=>setCartDebi(!CartDebi)} style={styles.Escolha1}>
                <></>
            </TouchableHighlight>
            :
            <TouchableHighlight onPress={()=>setCartDebi(!CartDebi)} style={styles.Escolha}>
                <></>
            </TouchableHighlight>
            }
            <FontAwesome5 name="credit-card" size={24} color="#0d92bc" />
          <Text style={styles.Text12}>Cartão de Débito</Text>
          </View>
          </>

          }
          {DadoEmp.Pg_CartCred === 1 &&
            <View  style={styles.Container11}>
            {CartCred ?
            <TouchableHighlight onPress={()=>setCartCred(!CartCred)} style={styles.Escolha1}>
                <></>
            </TouchableHighlight>
            :
            <TouchableHighlight onPress={()=>setCartCred(!CartCred)} style={styles.Escolha}>
                <></>
            </TouchableHighlight>
            }
            <FontAwesome5 name="cc-mastercard" size={24} color="#b75e26" />
            <Text style={styles.Text12}>Cartão de Crédito</Text>
            </View>
          }
           {DadoEmp.Pg_Cheque === 1 &&
            <View  style={styles.Container11}>
            {Cheque ?
            <TouchableHighlight onPress={()=>setCheque(!Cheque)} style={styles.Escolha1}>
                <></>
            </TouchableHighlight>
            :
            <TouchableHighlight onPress={()=>setCheque(!Cheque)} style={styles.Escolha}>
                <></>
            </TouchableHighlight>
            }
            <FontAwesome5 name="money-check-alt" size={24} color="#ff9b00" />
          <Text style={styles.Text12}>Cheque</Text>
          </View>

           }
           {DadoEmp.Pg_Boleto === 1 &&
              <View  style={styles.Container11}>
              {Boleto ?
              <TouchableHighlight onPress={()=>setBoleto(!Boleto)} style={styles.Escolha1}>
                  <></>
              </TouchableHighlight>
              :
              <TouchableHighlight onPress={()=>setBoleto(!Boleto)} style={styles.Escolha}>
                  <></>
              </TouchableHighlight>
              }
              <FontAwesome5 name="barcode" size={24} color="black" />
              <Text style={styles.Text12}>Boleto</Text>
              </View>
           }
          {DadoEmp.Pg_Dinheiro &&
        <View  style={styles.Container11}>
            {Dinheiro ?
            <TouchableHighlight onPress={()=>setDinheiro(!Dinheiro)} style={styles.Escolha1}>
                <></>
            </TouchableHighlight>
            :
            <TouchableHighlight onPress={()=>setDinheiro(!Dinheiro)} style={styles.Escolha}>
                <></>
            </TouchableHighlight>
            }
           <FontAwesome6 name="money-bill-wave" size={24} color="#006eff" /> 
          <Text style={styles.Text12}>Dinheiro</Text>
          </View>
          }
          
          </View>


          </>

          }         
          </>

          }
         
          <TouchableHighlight  onPress={() => FinalizandoPedido()}style={styles.Container9}>
            <>
         
          <Text style={styles.menuItem2}>Finalizar a Compra</Text>
          
             </>
          </TouchableHighlight>
  
  </>

  }
  
          </ScrollView>
          </View>
        </View>
      </Modal>
    
  );
};

const styles = StyleSheet.create({
    Escolha1:{
        width:20,
        height:20,
        borderRadius:10,
        
        marginRight:5,
        marginLeft:5,
        backgroundColor:"#4f66ff"
        },
    Escolha:{
        width:20,
        height:20,
        borderRadius:10,
        borderColor:"#9d9fa7",
        borderWidth:1,
        borderStyle:"solid",
        marginRight:5,
        marginLeft:10
        },
    MaisMenos:{
        marginLeft:4,
        },
      Input1:{
      width:10,
      },
      Input:{
        width:95,
        display:"flex",
        flexDirection:"row",
        borderWidth: 1,
        borderColor:"#999",
        borderRadius: 9999,
        alignItems:"center",
        justifyContent:"space-between",
        gap:"0.5rem",
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: "transparent",
        height: 30,
      },
    Img:{
        width: 40,
        height:40,
        borderRadius:2
     
        },
    Container2:{
        opacity: 1,
        width:"100%", 
       },
 Container5:{
        opacity: 1,
        backgroundColor:"#FFF",
        paddingBottom:10,
        width:"100%",
        padding:5,
        borderRadius:10,
        marginBottom:10,
        justifyContent: "center",
        alignItems:"center",
       },
       Container7:{
        opacity: 1,
        backgroundColor:"#FFF",
        paddingBottom:10,
        width:"100%",
        padding:5,
        borderRadius:10,
        marginBottom:10,
        justifyContent: "space-between",
        alignItems:"center",
        flexDirection:"row"
       },
       Container9:{
        opacity: 1,
        backgroundColor:"#c32828",
        paddingBottom:10,
        width:"100%",
        padding:5,
        borderRadius:10,
        marginBottom:10,
        justifyContent: "center",
        alignItems:"center",
        flexDirection:"row"
       },
       Container8:{
        backgroundColor:"#FFF",
        paddingBottom:10,
        width:"100%",
        paddingLeft:10,
        paddingTop:5,
        borderRadius:10,
        marginBottom:10,
        justifyContent: "flex-start",
        alignItems:"center",
        flexDirection:"row",
        
       },
       Container18:{
        backgroundColor:"#FFF",
        paddingBottom:10,
        width:"100%",
        paddingLeft:10,
        paddingTop:5,
        borderRadius:10,
        marginBottom:10,
        justifyContent: "flex-start",
        alignItems:"center",
        flexDirection:"row",
        paddingRight:10
        
       },
       Container11:{
        backgroundColor:"#FFF",
        justifyContent: "flex-start",
        alignItems:"center",
        flexDirection:"row",
        marginBottom:5,
      
       },
       Container10:{
        backgroundColor:"#FFF",
        paddingBottom:10,
        width:"100%",
        paddingLeft:10,
        paddingTop:5,
        borderRadius:10,
        marginBottom:10,
        alignItems: "flex-start",
        flexDirection:"column",
      
       },
       Container12:{
        width:"100%", 
        height:100, 
        marginBottom:10, 
        backgroundColor:"#FFF",
        padding:10,
        borderRadius:10,
        marginBottom:10,
        alignItems:"center",
        flexDirection:"row",
      
       },
    Prod:{
        width: 40,
        height: 40,
        borderRadius: 9999,
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
     } ,
     Prod3:{
        width: 140,
        
        display:"flex",
      
        alignItems:"flex-start",
        paddingLeft:5,
     
     } ,
     Prod4:{
        width: 100,
        
    
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        display:"flex",
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start"
     } ,
     Prod2:{
        width: 130,
        height: "2.5rem",

        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        flexDirection:"row"

     } ,
     LinhaTop: {
        width: '70%',
       
        borderTopWidth: 1,
        borderTopColor: '#dbdedc',
        borderTopStyle: 'solid',
      },
    Container1:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",

        marginBottom:5
       },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: 340,
    height:500,
    backgroundColor: '#d1d5d3',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  menuItem: {
    fontSize: 18,
    fontWeight:"bold",
    textAlign: 'center',
    marginLeft:-20,
  },
  menuItem1: {
    fontSize: 11,
    
  },
  Text12: {
    fontSize:15, 
    marginLeft:5
  },
  Text11: {
    fontSize:13, 
    marginLeft:2
  },
  menuItem2: {
    fontSize: 18,
    fontWeight:"bold",
    textAlign: 'center',
    color:"#fff"
  },
});

export default App;