import React, { useState } from 'react';
import {Dimensions, Image, View, Text, StyleSheet, Button, Modal, TouchableOpacity, ScrollView, TouchableHighlight  } from 'react-native';
import { Ionicons, Feather, AntDesign,} from '@expo/vector-icons'
import Campo from './CampoQuant';
import Telefone from './NumberTel'
import InputNome from './InputNome';
import InputComent from './InputComent';
const { width, height } = Dimensions.get('window');
const App = ({DadoEmp, DiasAbert, VerTotal, setModalVisible, modalVisible, setItens, Itens}) => {
    const [Nome, setNome] = useState("");
    const [Tel, setTel] = useState("");
    const [Rua, setRua] = useState("");
    const [Numero, setNumero] = useState("");
    const [Bairro, setBairro] = useState("");
    const [Complemento, setComplemento] = useState("");
    const [Cidade, setCidade] = useState("Sobral");
    const [Estado, setEstado] = useState("Ceará");
    const [Pix, setPix] = useState(false);
    const [CartCred, setCartCred] = useState(false);
    const [CartDebi, setCartDebi] = useState(false);
    const [Cheque, setCheque] = useState(false);
    const [Boleto, setBoleto] = useState(false);
    const [Dinheiro, setDinheiro] = useState(false);
    const [Lix, setLix] = useState(true);
    const [QuatIt, setQuatIt] = useState(true);
    const [Entreg, setEntreg] = useState(true);
    const [TelEnd, setTelEnd] = useState(false);
    const [Coment, setComent] = useState("");
    const EscreverTel = (t)=>{
        setTel(t)
        if(t.length === 14){
            setTelEnd(true)
        } else {
            setTelEnd(false)
        }
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
        image:Itens[i].image,
        name:Itens[i].name,
        price:Itens[i].price,
        rating:Itens[i].rating,
        restaurantId:Itens[i].restaurantId,
        time:Itens[i].time,
        Quant:QuantNew, 
        Coment:Itens[i].Coment
      }
     )
      } else {
NewItens.push(
      {
        image:Itens[i].image,
        name:Itens[i].name,
        price:Itens[i].price,
        rating:Itens[i].rating,
        restaurantId:Itens[i].restaurantId,
        time:Itens[i].time,
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
        image:Itens[i].image,
        name:Itens[i].name,
        price:Itens[i].price,
        rating:Itens[i].rating,
        restaurantId:Itens[i].restaurantId,
        time:Itens[i].time,
        Quant:QuantNew, 
      }
     )
      } else {
NewItens.push(
      {
        image:Itens[i].image,
        name:Itens[i].name,
        price:Itens[i].price,
        rating:Itens[i].rating,
        restaurantId:Itens[i].restaurantId,
        time:Itens[i].time,
        Quant:Itens[i].Quant, 
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
             <TouchableHighlight  onPress={() => setModalVisible(false)}style={styles.Container47}>
            <>
          <View >
          <AntDesign name="closecircleo" size={24} color="red" />
             </View>
          <Text style={styles.menuItem}>Endereço</Text>
          <View >
            <></>
             </View>
             </>
          </TouchableHighlight>
          <View style={styles.Container45}>
          <View style={styles.Container25}>
              
          <View style={styles.Prod3}>
              {/* <AntDesign name="clockcircleo" size={20} color="green" />       */}
              <Text style={styles.menuItem2}> {DadoEmp.End_Rua}, {DadoEmp.End_Numero}, {DadoEmp.End_Bairro},  {DadoEmp.End_Cidade}, {DadoEmp.End_Estado} 
                </Text>    
              </View >
              

             
              
              
            </View>
          </View>
          <TouchableHighlight  style={styles.Container7}>
            <>
            <View >
         
             </View>
          <Text style={styles.menuItem}>Horario de Funcionamento</Text>
          <View >
            <></>
             </View>
             </>
          </TouchableHighlight>
         
       
       
         
<View style={styles.Container5}>

    <View style={styles.Container1}>
   
     <View   style={styles.Prod4}>
     
      <View   style={styles.Prod3}>
        <Text style={styles.menuItem1}>Domingo</Text>
        
      </View>
      </View>
     

     {DadoEmp.Tem_DomAb === 1 ?
    <View style={styles.Prod2}>
    {/* <AntDesign name="clockcircleo" size={20} color="green" />       */}
    <Text style={styles.menuItem2}>{DadoEmp.Tem_DomIni} - {DadoEmp.Tem_DomFim}</Text>
      
    </View >
     :
     <View style={styles.Prod2}>
     {/* <AntDesign name="clockcircleo" size={20} color="green" />       */}
     <Text style={styles.menuItem2}>Fechado</Text>
      
     </View >
     }
     
     
  </View>
  <View style={styles.Container1}>
   
   <View   style={styles.Prod4}>
   
    <View   style={styles.Prod3}>
      <Text style={styles.menuItem1}>Segunda</Text>
      
    </View>
    </View>
   

   {DadoEmp.Tem_SegAb === 1 ?
  <View style={styles.Prod2}>
  {/* <AntDesign name="clockcircleo" size={20} color="green" />       */}
  <Text style={styles.menuItem2}>{DadoEmp.Tem_SegIni} - {DadoEmp.Tem_SegFim}</Text>
    
  </View >
   :
   <View style={styles.Prod2}>
   {/* <AntDesign name="clockcircleo" size={20} color="green" />       */}
   <Text style={styles.menuItem2}>Fechado</Text>
    
   </View >
   }
   
   
</View>
<View style={styles.Container1}>
   
   <View   style={styles.Prod4}>
   
    <View   style={styles.Prod3}>
      <Text style={styles.menuItem1}>Terça</Text>
      
    </View>
    </View>
   

   {DadoEmp.Tem_TerAb === 1 ?
  <View style={styles.Prod2}>
  {/* <AntDesign name="clockcircleo" size={20} color="green" />       */}
  <Text style={styles.menuItem2}>{DadoEmp.Tem_TerIni} - {DadoEmp.Tem_TerFim}</Text>
    
  </View >
   :
   <View style={styles.Prod2}>
   {/* <AntDesign name="clockcircleo" size={20} color="green" />       */}
   <Text style={styles.menuItem2}>Fechado</Text>
    
   </View >
   }
   
   
</View>
<View style={styles.Container1}>
   
   <View   style={styles.Prod4}>
   
    <View   style={styles.Prod3}>
      <Text style={styles.menuItem1}>Quarta</Text>
      
    </View>
    </View>
   

   {DadoEmp.Tem_QuaAb === 1 ?
  <View style={styles.Prod2}>
  {/* <AntDesign name="clockcircleo" size={20} color="green" />       */}
  <Text style={styles.menuItem2}>{DadoEmp.Tem_QuaIni} - {DadoEmp.Tem_QuaFim}</Text>
    
  </View >
   :
   <View style={styles.Prod2}>
   {/* <AntDesign name="clockcircleo" size={20} color="green" />       */}
   <Text style={styles.menuItem2}>Fechado</Text>
    
   </View >
   }
   
   
</View>  
<View style={styles.Container1}>
   
   <View   style={styles.Prod4}>
   
    <View   style={styles.Prod3}>
      <Text style={styles.menuItem1}>Quinta</Text>
      
    </View>
    </View>
   

   {DadoEmp.Tem_QuiAb === 1 ?
  <View style={styles.Prod2}>
  {/* <AntDesign name="clockcircleo" size={20} color="green" />       */}
  <Text style={styles.menuItem2}>{DadoEmp.Tem_QuiIni} - {DadoEmp.Tem_QuiFim}</Text>
    
  </View >
   :
   <View style={styles.Prod2}>
   {/* <AntDesign name="clockcircleo" size={20} color="green" />       */}
   <Text style={styles.menuItem2}>Fechado</Text>
    
   </View >
   }
   
   
</View>
<View style={styles.Container1}>
   
   <View   style={styles.Prod4}>
   
    <View   style={styles.Prod3}>
      <Text style={styles.menuItem1}>Sexta</Text>
      
    </View>
    </View>
   

   {DadoEmp.Tem_SexAb === 1 ?
  <View style={styles.Prod2}>
  {/* <AntDesign name="clockcircleo" size={20} color="green" />       */}
  <Text style={styles.menuItem2}>{DadoEmp.Tem_SexIni} - {DadoEmp.Tem_SexFim}</Text>
    
  </View >
   :
   <View style={styles.Prod2}>
   {/* <AntDesign name="clockcircleo" size={20} color="green" />       */}
   <Text style={styles.menuItem2}>Fechado</Text>
    
   </View >
   }
   
   
</View>
<View style={styles.Container1}>
   
   <View   style={styles.Prod4}>
   
    <View   style={styles.Prod3}>
      <Text style={styles.menuItem1}>Sabado</Text>
      
    </View>
    </View>
   

   {DadoEmp.Tem_SabAb === 1 ?
  <View style={styles.Prod2}>
  {/* <AntDesign name="clockcircleo" size={20} color="green" />       */}
  <Text style={styles.menuItem2}>{DadoEmp.Tem_SabIni} - {DadoEmp.Tem_SabFim}</Text>
    
  </View >
   :
   <View style={styles.Prod2}>
   {/* <AntDesign name="clockcircleo" size={20} color="green" />       */}
   <Text style={styles.menuItem2}>Fechado</Text>
    
   </View >
   }
   
   
</View>
  </View>
  
 
  
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
        marginLeft:10,
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
       Container45:{
        opacity: 1,
        backgroundColor:"#FFF",
        width:"100%",
        padding:5,
        borderRadius:10,
        justifyContent: "center",
        alignItems:"center",
       },
       Container47:{
        opacity: 1,
        backgroundColor:"#FFF",
        paddingBottom:10,
        width:"100%",
        padding:5,
        borderRadius:10,
        justifyContent: "space-between",
        alignItems:"center",
        flexDirection:"row"
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
        paddingLeft:40,
        paddingTop:5,
        borderRadius:10,
        marginBottom:10,
        justifyContent: "flex-start",
        alignItems:"center",
        flexDirection:"row",
      
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
     Prod3:{
      width: "100%",
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
        
       
        borderTopWidth: 1,
        borderTopColor: '#dbdedc',
        borderTopStyle: 'solid',
        marginBottom:5
       },
       Container25:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        
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
    backgroundColor: '#FFF',
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
    fontSize: 15,
    fontWeight:"bold",
    
  },
  Text12: {
    fontSize:15, 
    
  },
  menuItem2: {
    fontSize: 15,
   
    
  },
});

export default App;