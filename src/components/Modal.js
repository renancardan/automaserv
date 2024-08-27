import React, { useState }  from 'react';
import {ScrollView, Image, TextInput,  Text, View, StyleSheet, Button, TouchableOpacity, TouchableHighlight, Dimensions, Modal,  } from 'react-native'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'
import Campo from './CampoQuant';
import CampoTexto from './CampoTexto';
import InputComent from './InputComent';


const { width } = Dimensions.get('window');
export default ({ Status, setModalVisibleCar, Itens, setItens, modalVisible, setModalVisible, ItemMod, setQuantItem, QuantItem}) => {
  const [Lix, setLix] = useState(true);
  const [zeroIt, setzeroIt] = useState(false);
  const [Coment, setComent] = useState("");
   const MudarModal = ()=>{
    setComent("")
      setModalVisible(false)
      setQuantItem(1)
      setzeroIt(false)
    }
    const ColocarItem =()=>{
      var AntItem =parseInt(QuantItem) 
      var Qitem = AntItem+1
      setQuantItem(Qitem.toString());
      setLix(false)
    }
    const TirarItem =()=>{
    var AntItem =parseInt(QuantItem) 
      if(QuantItem > 1){
        setLix(false)
       
        var Qitem = AntItem-1
        setQuantItem(Qitem.toString());
      }  else {
        setLix(true)
      }
      
    }
    const handleChange = (value) => {
      // Verifica se o valor é numérico antes de atualizar o estado
      if (/^\d+$/.test(value) || value === '') {
       
      
          setQuantItem(value);
        
        
      }
    };

    const PreencherCarrinho =(itensCar)=>{
      var AntItem =parseInt(QuantItem) 
       if(AntItem > 0){
        setzeroIt(false)
       
       const newItem = {
        id:itensCar.id,
        FotoUrl:itensCar.FotoUrl,
        Nome:itensCar.Nome,
        Preco:itensCar.Preco,
        Descricao:itensCar.Descricao,
        Status_Disp:itensCar.Status_Disp,
        Statu_Prom:itensCar.Statu_Prom,
        Quant:AntItem,
        Coment:Coment
       };
      
        const newItems = [...Itens]; // Cria uma cópia do array
        newItems.push(newItem); // Adiciona o novo item
        setItens(newItems); // Atualiza o estado com o novo array
        setModalVisible(false)
        setQuantItem(1)
      } else {
        setzeroIt(true)
      }
    }

    const Finalizando =(itensCar)=>{
      var AntItem =parseInt(QuantItem) 
       if(AntItem > 0){
        setzeroIt(false)
       
       const newItem = {
        id:itensCar.id,
        FotoUrl:itensCar.FotoUrl,
        Nome:itensCar.Nome,
        Preco:itensCar.Preco,
        Descricao:itensCar.Descricao,
        Status_Disp:itensCar.Status_Disp,
        Statu_Prom:itensCar.Statu_Prom,
        Quant:AntItem,
        Coment:Coment
       };
      
        const newItems = [...Itens]; // Cria uma cópia do array
        newItems.push(newItem); // Adiciona o novo item
        setItens(newItems); // Atualiza o estado com o novo array
        setModalVisible(false)
        setQuantItem(1)
        setModalVisibleCar(true)
      } else {
        setzeroIt(true)
      }
    }

    return (
   
        <View style={styles.Container}>
     <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity onPress={()=>setModalVisible(false)}  style={styles.MenusFund}></TouchableOpacity>
        <View style={styles.overlay} >
          <View style={styles.menu}>
          {Status === false ?
                  <>
                   <View  style={styles.menuInterno}>
              <TouchableOpacity onPress={()=>MudarModal()} style={styles.menuItem}>
                  <AntDesign name="closecircleo" size={24} color="red" />
                  </TouchableOpacity>
                  <Text style={styles.Txt4}>No Momento a Empresa Está Fechada.</Text>
                  </View>
                  </>

                   :
                   <>

                  
          <ScrollView 
           showsVerticalScrollIndicator={false}
          style={styles.Container2}>
          <View style={styles.menuInterno}> 

          
          <View  style={styles.Btn}>
               <>
               <TouchableOpacity onPress={()=>MudarModal()} style={styles.menuItem}>
                  <AntDesign name="closecircleo" size={24} color="red" />
                  </TouchableOpacity>
                 
                  {/* <TouchableOpacity  onPress={()=>setModalVisible(false)} style={styles.Btn5}>
                 <Text style={styles.menuItem2}>Fechar</Text>
                </TouchableOpacity> */}
                {ItemMod.FotoUrl ?
                <Image
                source={{ uri: ItemMod.FotoUrl }}  // use uri instead of require
                style={styles.Img}
             />

                :
                <Image
                source={require("../assets/semImg.gif")}  // use uri instead of require
                style={styles.Img}
                  />

                }
                  
                  {ItemMod.Statu_Prom === 1 &&
               <View  style={{width:80, borderRadius:5, height:20, backgroundColor:"#CF5B43", marginTop:-20, alignItems:"center", justifyContent:"center"}}> 
               <Text style={{color:"#FFF", fontWeight:"bold", fontStyle:"italic"}}>Promoção</Text>
               </View> 

               } 
                  
               </>
            </View>
            <View  style={styles.Btn1}>
               <>
               
               <View style={styles.Input}>
              
               {Lix ?
               <TouchableHighlight onPress={()=>setModalVisible(false)} style={styles.MaisMenos}>
                <AntDesign name="delete" size={24} color="red" />
                </TouchableHighlight>
               :
               <TouchableHighlight onPress={TirarItem} >
                <AntDesign name="minuscircle" size={24} color="red" />
                </TouchableHighlight>
               }
               
              
              <Campo 
                style={styles.Input1}       
                placeholder="" 
                value={QuantItem}
                onChangeText={t=>handleChange(t)}
                autoCapitalize="none"
                keyboardType={"number-pad"}
                posi={18}
                  />
                  <TouchableHighlight onPress={ColocarItem} >
              <AntDesign name="pluscircle" size={24} color="black" />
              </TouchableHighlight>
            </View>
            {ItemMod.Preco > 0 &&
            <>
                  <Text style={styles.Txt4}>{ItemMod.Preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                  <Text style={styles.Txt4}>X {QuantItem}</Text>
                  <View style={styles.LinhaTop}></View>
                  <Text style={styles.Txt4}>{(ItemMod.Preco*parseInt(QuantItem)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
            </>

            }
                 
                 
                  
                  {/* <CampoTexto        
                    placeholder="Digite Alguma Observação..." 
                    value={Pesquisa}
                    onChangeText={t=>setPesquisa(t)}
                    autoCapitalize="none"
                    keyboardType={"default"}
                    posi={18}
                      /> */}
                  {/* <Text style={styles.Txt3}>{ItemMod.time} - R$ {ItemMod.delivery}</Text> */}
               </>
            </View>
            </View>
            <View style={{width:350, marginBottom:10, padding:10 }} > 
            {ItemMod.Preco > 0 &&
            <Text style={styles.Txt1}>{ItemMod.Preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
            }
           
                  
                  <Text style={styles.Txt2}>{ItemMod.Nome}</Text>
                  <Text style={styles.Txt3}>{ItemMod.Descricao}</Text>
            </View>
            <View style={{width:350, height:100, marginBottom:10 }} > 
            <InputComent 
               placeholder="Digite Observação caso Tenha..." 
               value={Coment}
               onChangeText={t=>setComent(t)}
               autoCapitalize="none"
               keyboardType={"default"}
              
            
            />
            </View>
            {zeroIt &&
             <View style={{width:350, paddingLeft:20, paddingRight:20 }} >   
             <Text style={{color:"red", fontSize:10}}>Você não pode adicionar ou comprar 0 quantidade de itens. Por favor, escolha outra quantidade! </Text>
           </View>

            }
           
            <View style={{width:350, height:40, marginBottom:10, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"row" }} >
            <TouchableOpacity style={styles.Btn6}>
                 <Text style={styles.menuItem2} onPress={()=>PreencherCarrinho(ItemMod)}>Add no Carrinho</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>Finalizando(ItemMod)} style={styles.Btn4}>
                 <Text style={styles.menuItem2}>Finalizar a Compra</Text>
                </TouchableOpacity>
                </View>
          </ScrollView>
          </>              
        }
          </View>
        </View>
      </Modal>
  </View>
       
       
    );
}

const styles = StyleSheet.create({
  MenusFund:{
    width:"100%",
    position: 'absolute',
    top:0,
    left: 0,
    right: 10,
    height: "100%",
    opacity: 0.5,
    backgroundColor: "#000",
    zIndex: 1,
     
   },
  menuItem2: {
    fontSize: 15,
     color:"#FFF",
    textAlign: 'center',
    fontFamily:"arial",
    fontWeight:"bold",
  },
  Btn4: {
    marginTop:5,
    backgroundColor:"#c32828",
    width: 140,
    height: 40,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,

   
 },
 Btn6: {
  marginTop:5,
  backgroundColor:"#0c9139",
  width: 140,
  height: 40,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:5,
  marginRight:10
 
},
 Btn5: {
  backgroundColor:"red",
  width: 70,
  height: 20,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:5,
  marginBottom:10,
 
},
  LinhaTop: {
    width: 50,
    borderTopWidth: 2,
    borderTopColor: 'black',
    borderTopStyle: 'solid',
    marginRight:20
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
    marginTop:50,
  },
   Container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    menu: {
      width: 350,
      height:500,
      backgroundColor: 'white',
      borderRadius: 10,
      display: "flex",
      flexWrap:"wrap",
  
      
    },
    menuInterno: {
      width: 350,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      justifyContent:"space-between",
      display: "flex",
      flexDirection:"row",
      flexWrap:"wrap",
    
      
    },
    Container2:{
      opacity: 1,
      width:"100%", 
      borderRadius: 10,
     },
    menuItem: {
      fontSize: 18,
      padding: 10,
      textAlign: 'center',
    },
    Img:{
      width:"11rem",
      height:"9rem",
      borderRadius:"0.75rem"
   
      },
      Btn:{
         flex:1,
         flexDirection:"column",
         borderRadius:"0.75rem",
         position:"relative",
         width:"50%",
       
         alignItems:"flex-start"
      } ,
      Btn1:{
        flex:1,
        flexDirection:"column",
        borderRadius:"0.75rem",
        position:"relative",
        width:"50%",
       
        alignItems:"flex-end",
     } ,
      Txt1:{
        color:"green",
        fontWeight:500,
        fontSize:"1.125rem",
        lineHeight:"1.75rem",
      },
      Txt2:{
       marginTop: "0.25rem",
       color:"#000"
      },
      Txt3:{
       color:"#999",
       fontSize: "0.875rem",
       lineHeight: "1.25rem",
      },
      Txt4:{
        color:"#000",
     
        fontSize:17,
        lineHeight:"1.75rem",
        marginRight:20
      },
     
  });