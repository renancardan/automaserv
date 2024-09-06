import React, { Component, useEffect, useContext, useState  } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView, Dimensions, TouchableHighlight, Modal, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../contexts/UserContext';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';

import MenuHori from '../components/MenuHori';
import ModalInfo from '../components/ModalInfo';
import Topo from '../components/Topo';
import Banner from '../components/Banner';
import Pesquisa from '../components/Pesquisa';
import Secao from '../components/Secao';
import Catalago from '../components/Catalago';
import Item from '../components/Item';
import Secao1 from '../components/Secao1';
import Mod1 from '../components/Modal';
import Menu from '../components/Menu';
import Carrinho from '../components/Carrinho';
import ModalCar from "../components/ModalCar"
import Titulo from '../components/Titulo';

const { width } = Dimensions.get('window');
import Api from '../Api';
//import CityLogo from '../../assets/logomarca.svg';

export default ({route}) => {

    const navigation = useNavigation();
    const [IdEmp, setIdEmp] = useState(route.params.id)
    const [DadoEmp, setDadoEmp] = useState({})
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleCar, setModalVisibleCar] = useState(false);
    const [modalVisibleInfo, setModalVisibleInfo] = useState(false);
    const [DiasAbert, setDiasAbert] = useState([
      {
        Dia:"Domingo",
        Horario:"18:00 - 23:00"
      },
      {
        Dia:"Segunda-feira",
        Horario:"Fechado"
      }, {
        Dia:"Terça-feira",
        Horario:"18:00 - 23:00"
      }, {
        Dia:"Quarta-feira",
        Horario:"18:00 - 23:00"
      }, {
        Dia:"Quinta-feira",
        Horario:"18:00 - 23:00"
      }, {
        Dia:"Sexta-feira",
        Horario:"18:00 - 23:00"
      }, {
        Dia:"Sábado",
        Horario:"18:00 - 23:00"
      },
    ])
    const [ItemMod, setItemMod] = useState({})
    const [QuantItem, setQuantItem] = useState(1)
    const [VerCar, setVerCar] = useState(false)
    const [VerCar2, setVerCar2] = useState(false)
    const [VerSec, setVerSec] = useState([])
    const [VerMenu, setVerMenu] = useState(false)
    const [VerMenu2, setVerMenu2] = useState(false)
    const [VerTotal, setVerTotal] = useState(0)
    const [QuantTotal, setQuantTotal] = useState(0)
    const [Pesq, setPesq] = useState("");
    const [ListPesq, setListPesq] = useState("");
    const [Cat, setCat] = useState([])
    const [Itens, setItens] = useState([]);
    const [Mostcar, setMostcar] = useState(false);
    const [Status, setStatus] = useState(false);
    const [AtivoPedido, setAtivoPedido] = useState(false);
    const [PedidoList, setPedidoList] = useState(null);
   
    useEffect(()=>{
      PegarProdutos()
      
      const interval = setInterval(() => {
        PegarProdutos()
      }, 60000);
  
     
      return () => clearInterval(interval);
      
     
    }, []);
   
    useEffect(()=>{
      
     if(DadoEmp.NomeEmp){
      
      VerTempo()
    
    }

    }, [DadoEmp]);
    useEffect(()=>{
      if(PedidoList ){
        setModalVisibleCar(true)
       
      } else{
        setModalVisibleCar(false)
      }
    
    
      console.log(PedidoList)
    }, [PedidoList]);

    useEffect(()=>{
     console.log("Status "+Status)
       
     }, [Status]);

    useEffect(async() => {
      //Anlisar essa questão ainda
      if(Mostcar === true){
        SomarItens()
      }
   
     // console.log(Itens)

       }, [Itens])
    
    useEffect(()=>{

      PesquisandoItem()
     
    }, [Pesq]);

    const VerTempo = ()=>{
  console.log(DadoEmp)
  let variac = new Date().getTime();
  //console.log(variac)

 
  var DiaSemana =  moment().format('dddd');
  var currentTime = moment().format('HH:mm:ss');
  var VerTemp =  currentTime.split(":");
  var  Hora = parseInt(VerTemp[0])*60
  var Min = parseInt(VerTemp[1])
  var TempMIn = Min+Hora

  var HoraMed = 23*60
  var MinMed = 59
  var TmpMed = HoraMed+MinMed 
      console.log(DiaSemana)
      
       if ("Monday" === DiaSemana){

          var DomIni = DadoEmp.Tem_DomIni.split(":");
          var DomHoraIni = parseInt(DomIni[0])*60
          var DomMinIni = parseInt(DomIni[1])
          var DomTmpIni = DomHoraIni+DomMinIni 
          
          var DomFim = DadoEmp.Tem_DomFim.split(":");
          var DomHoraFim = parseInt(DomFim[0])*60
          var DomMinFim = parseInt(DomFim[1])
          var DomTmpFim = DomHoraFim+DomMinFim 

          var SegIni = DadoEmp.Tem_SegIni.split(":");
          var SegHoraIni = parseInt(SegIni[0])*60
          var SegMinIni = parseInt(SegIni[1])
          var SegTmpIni = SegHoraIni+SegMinIni 
          
          var SegFim = DadoEmp.Tem_SegFim.split(":");
          var SegHoraFim = parseInt(SegFim[0])*60
          var SegMinFim = parseInt(SegFim[1])
          var SegTmpFim = SegHoraFim+SegMinFim 

        
        
         
          if(DomTmpIni > DomTmpFim & DadoEmp.Tem_DomAb === 1) {
          
           if(DomTmpFim > TempMIn){
            if(DadoEmp.Tem_DomAb === 1){
              console.log("entrou 1")
              setStatus(true)
            } else {
              console.log("entrou 2")
              setStatus(false) 
            }
             
           } else if(DadoEmp.Tem_SegAb === 1){
             if(SegTmpIni > SegTmpFim){
              if(SegTmpIni <= TempMIn & TempMIn <= TmpMed) {
                console.log("entrou 3")
                setStatus(true)
              } else {
                console.log("entrou 4")
                setStatus(false)
              }
               
             } else {
              if(SegTmpIni <= TempMIn & TempMIn <= SegTmpFim) {
                console.log("entrou 5")
                setStatus(true)
              } else {
                console.log("entrou 6")
                setStatus(false)
              }
             }
           } else {
            console.log("entrou 8")
             setStatus(false) 
           }

          } else {

            if(DadoEmp.Tem_SegAb === 1){
              if(SegTmpIni > SegTmpFim){
               if(SegTmpIni <= TempMIn & TempMIn <= TmpMed) {
                console.log("entrou 9")
                setStatus(true)
               } else {
                console.log("entrou 10")
                 setStatus(false)
               }
                
              } else {
               if(SegTmpIni <= TempMIn & TempMIn <= SegTmpFim) {
                console.log("entrou 11")
                setStatus(true)
               } else {
                console.log("entrou 12")
                 setStatus(false)
               }
              }
            } else {
              console.log("entrou 13")
              setStatus(false) 
            }
          }

       } else if ("Tuesday" === DiaSemana){
        var SegIni = DadoEmp.Tem_SegIni.split(":");
        var SegHoraIni = parseInt(SegIni[0])*60
        var SegMinIni = parseInt(SegIni[1])
        var SegTmpIni = SegHoraIni+SegMinIni 
        
        var SegFim = DadoEmp.Tem_SegFim.split(":");
        var SegHoraFim = parseInt(SegFim[0])*60
        var SegMinFim = parseInt(SegFim[1])
        var SegTmpFim = SegHoraFim+SegMinFim 

        var TerIni = DadoEmp.Tem_TerIni.split(":");
        var TerHoraIni = parseInt(TerIni[0])*60
        var TerMinIni = parseInt(TerIni[1])
        var TerTmpIni = TerHoraIni+TerMinIni 
        
        var TerFim = DadoEmp.Tem_TerFim.split(":");
        var TerHoraFim = parseInt(TerFim[0])*60
        var TerMinFim = parseInt(TerFim[1])
        var TerTmpFim = TerHoraFim+TerMinFim 

      
      
       
        if(SegTmpIni > SegTmpFim & DadoEmp.Tem_SegAb === 1) {
        
         if(SegTmpFim > TempMIn){
          if(DadoEmp.Tem_SegAb === 1){
            console.log("entrou 1")
            setStatus(true)
          } else {
            console.log("entrou 2")
            setStatus(false) 
          }
           
         } else if(DadoEmp.Tem_TerAb === 1){
           if(TerTmpIni > TerTmpFim){
            if(TerTmpIni <= TempMIn & TempMIn <= TmpMed) {
              console.log("entrou 3")
              setStatus(true)
            } else {
              console.log("entrou 4")
              setStatus(false)
            }
             
           } else {
            if(TerTmpIni <= TempMIn & TempMIn <= TerTmpFim) {
              console.log("entrou 5")
              setStatus(true)
            } else {
              console.log("entrou 6")
              setStatus(false)
            }
           }
         } else {
          console.log("entrou 8")
           setStatus(false) 
         }

        } else {

          if(DadoEmp.Tem_TerAb === 1){
            if(TerTmpIni > TerTmpFim){
             if(TerTmpIni <= TempMIn & TempMIn <= TmpMed) {
              console.log("entrou 9")
              setStatus(true)
             } else {
              console.log("entrou 10")
               setStatus(false)
             }
              
            } else {
             if(TerTmpIni <= TempMIn & TempMIn <= TerTmpFim) {
              console.log("entrou 11")
              setStatus(true)
             } else {
              console.log("entrou 12")
               setStatus(false)
             }
            }
          } else {
            console.log("entrou 13")
            setStatus(false) 
          }
        }

        }  else if ("Wednesday" === DiaSemana){
          var TerIni = DadoEmp.Tem_TerIni.split(":");
          var TerHoraIni = parseInt(TerIni[0])*60
          var TerMinIni = parseInt(TerIni[1])
          var TerTmpIni = TerHoraIni+TerMinIni 
          
          var TerFim = DadoEmp.Tem_TerFim.split(":");
          var TerHoraFim = parseInt(TerFim[0])*60
          var TerMinFim = parseInt(TerFim[1])
          var TerTmpFim = TerHoraFim+TerMinFim 
  
          var QuaIni = DadoEmp.Tem_QuaIni.split(":");
          var QuaHoraIni = parseInt(QuaIni[0])*60
          var QuaMinIni = parseInt(QuaIni[1])
          var QuaTmpIni = QuaHoraIni+QuaMinIni 
          console.log("Minnuto Inicial "+QuaTmpIni)
          console.log("Minuto atual "+TempMIn)
          var QuaFim = DadoEmp.Tem_QuaFim.split(":");
          var QuaHoraFim = parseInt(QuaFim[0])*60
          var QuaMinFim = parseInt(QuaFim[1])
          var QuaTmpFim = QuaHoraFim+QuaMinFim 
          console.log("Minnuto Final "+QuaTmpFim)
        
        
         
          if(TerTmpIni > TerTmpFim & DadoEmp.Tem_TerAb === 1) {
          
           if(TerTmpFim > TempMIn){
            if(DadoEmp.Tem_TerAb === 1){
              console.log("entrou 1")
              setStatus(true)
            } else {
              console.log("entrou 2")
              setStatus(false) 
            }
             
           } else if(DadoEmp.Tem_QuaAb === 1){
             if(QuaTmpIni > QuaTmpFim){
              if(QuaTmpIni <= TempMIn & TempMIn <= TmpMed) {
                console.log("entrou 3")
                setStatus(true)
              } else {
                console.log("entrou 4")
                setStatus(false)
              }
               
             } else {
              if(QuaTmpIni <= TempMIn & TempMIn <= QuaTmpFim) {
                console.log("entrou 5")
                setStatus(true)
              } else {
                console.log("entrou 6")
                setStatus(false)
              }
             }
           } else {
            console.log("entrou 8")
             setStatus(false) 
           }
  
          } else {
  
            if(DadoEmp.Tem_QuaAb === 1){
              if(QuaTmpIni > QuaTmpFim){
               if(QuaTmpIni <= TempMIn & TempMIn <= TmpMed) {
                console.log("entrou 9")
                setStatus(true)
               } else {
                console.log("entrou 10")
                 setStatus(false)
               }
                
              } else {
               if(QuaTmpIni <= TempMIn & TempMIn <= QuaTmpFim) {
                console.log("entrou 11")
                setStatus(true)
               } else {
                console.log("entrou 12")
                 setStatus(false)
               }
              }
            } else {
              console.log("entrou 13")
              setStatus(false) 
            }
          }
  
          } else if ("Thursday" === DiaSemana){
            var QuaIni = DadoEmp.Tem_QuaIni.split(":");
            var QuaHoraIni = parseInt(QuaIni[0])*60
            var QuaMinIni = parseInt(QuaIni[1])
            var QuaTmpIni = QuaHoraIni+QuaMinIni 
            
            var QuaFim = DadoEmp.Tem_QuaFim.split(":");
            var QuaHoraFim = parseInt(QuaFim[0])*60
            var QuaMinFim = parseInt(QuaFim[1])
            var QuaTmpFim = QuaHoraFim+QuaMinFim 
    
            var QuiIni = DadoEmp.Tem_QuiIni.split(":");
            var QuiHoraIni = parseInt(QuiIni[0])*60
            var QuiMinIni = parseInt(QuiIni[1])
            var QuiTmpIni = QuiHoraIni+QuiMinIni 
            
            var QuiFim = DadoEmp.Tem_QuiFim.split(":");
            var QuiHoraFim = parseInt(QuiFim[0])*60
            var QuiMinFim = parseInt(QuiFim[1])
            var QuiTmpFim = QuiHoraFim+QuiMinFim 
    
          
          
           
            if(QuaTmpIni > QuaTmpFim & DadoEmp.Tem_QuaAb === 1) {
            
             if(QuaTmpFim > TempMIn){
              if(DadoEmp.Tem_QuaAb === 1){
                console.log("entrou 1")
                setStatus(true)
              } else {
                console.log("entrou 2")
                setStatus(false) 
              }
               
             } else if(DadoEmp.Tem_QuiAb === 1){
               if(QuiTmpIni > QuiTmpFim){
                if(QuiTmpIni <= TempMIn & TempMIn <= TmpMed) {
                  console.log("entrou 3")
                  setStatus(true)
                } else {
                  console.log("entrou 4")
                  setStatus(false)
                }
                 
               } else {
                if(QuiTmpIni <= TempMIn & TempMIn <= QuiTmpFim) {
                  console.log("entrou 5")
                  setStatus(true)
                } else {
                  console.log("entrou 6")
                  setStatus(false)
                }
               }
             } else {
              console.log("entrou 8")
               setStatus(false) 
             }
    
            } else {
    
              if(DadoEmp.Tem_QuiAb === 1){
                if(QuiTmpIni > QuiTmpFim){
                 if(QuiTmpIni <= TempMIn & TempMIn <= TmpMed) {
                  console.log("entrou 9")
                  setStatus(true)
                 } else {
                  console.log("entrou 10")
                   setStatus(false)
                 }
                  
                } else {
                 if(QuiTmpIni <= TempMIn & TempMIn <= QuiTmpFim) {
                  console.log("entrou 11")
                  setStatus(true)
                 } else {
                  console.log("entrou 12")
                   setStatus(false)
                 }
                }
              } else {
                console.log("entrou 13")
                setStatus(false) 
              }
            }
    
            } else if ("Friday" === DiaSemana){
              var QuiIni = DadoEmp.Tem_QuiIni.split(":");
              var QuiHoraIni = parseInt(QuiIni[0])*60
              var QuiMinIni = parseInt(QuiIni[1])
              var QuiTmpIni = QuiHoraIni+QuiMinIni 
              
              var QuiFim = DadoEmp.Tem_QuiFim.split(":");
              var QuiHoraFim = parseInt(QuiFim[0])*60
              var QuiMinFim = parseInt(QuiFim[1])
              var QuiTmpFim = QuiHoraFim+QuiMinFim 
      
              var SexIni = DadoEmp.Tem_SexIni.split(":");
              var SexHoraIni = parseInt(SexIni[0])*60
              var SexMinIni = parseInt(SexIni[1])
              var SexTmpIni = SexHoraIni+SexMinIni 
              
              var SexFim = DadoEmp.Tem_SexFim.split(":");
              var SexHoraFim = parseInt(SexFim[0])*60
              var SexMinFim = parseInt(SexFim[1])
              var SexTmpFim = SexHoraFim+SexMinFim 
      
            
            
             
              if(QuiTmpIni > QuiTmpFim & DadoEmp.Tem_QuiAb === 1) {
              
               if(QuiTmpFim > TempMIn){
                if(DadoEmp.Tem_QuiAb === 1){
                  console.log("entrou 1")
                  setStatus(true)
                } else {
                  console.log("entrou 2")
                  setStatus(false) 
                }
                 
               } else if(DadoEmp.Tem_SexAb === 1){
                 if(SexTmpIni > SexTmpFim){
                  if(SexTmpIni <= TempMIn & TempMIn <= TmpMed) {
                    console.log("entrou 3")
                    setStatus(true)
                  } else {
                    console.log("entrou 4")
                    setStatus(false)
                  }
                   
                 } else {
                  if(SexTmpIni <= TempMIn & TempMIn <= SexTmpFim) {
                    console.log("entrou 5")
                    setStatus(true)
                  } else {
                    console.log("entrou 6")
                    setStatus(false)
                  }
                 }
               } else {
                console.log("entrou 8")
                 setStatus(false) 
               }
      
              } else {
      
                if(DadoEmp.Tem_SexAb === 1){
                  if(SexTmpIni > SexTmpFim){
                   if(SexTmpIni <= TempMIn & TempMIn <= TmpMed) {
                    console.log("entrou 9")
                    setStatus(true)
                   } else {
                    console.log("entrou 10")
                     setStatus(false)
                   }
                    
                  } else {
                   if(SexTmpIni <= TempMIn & TempMIn <= SexTmpFim) {
                    console.log("entrou 11")
                    setStatus(true)
                   } else {
                    console.log("entrou 12")
                     setStatus(false)
                   }
                  }
                } else {
                  console.log("entrou 13")
                  setStatus(false) 
                }
              }
      
              } else if ("Saturday" === DiaSemana){
                var SexIni = DadoEmp.Tem_SexIni.split(":");
                var SexHoraIni = parseInt(SexIni[0])*60
                var SexMinIni = parseInt(SexIni[1])
                var SexTmpIni = SexHoraIni+SexMinIni 
                
                var SexFim = DadoEmp.Tem_SexFim.split(":");
                var SexHoraFim = parseInt(SexFim[0])*60
                var SexMinFim = parseInt(SexFim[1])
                var SexTmpFim = SexHoraFim+SexMinFim 
        
                var SabIni = DadoEmp.Tem_SabIni.split(":");
                var SabHoraIni = parseInt(SabIni[0])*60
                var SabMinIni = parseInt(SabIni[1])
                var SabTmpIni = SabHoraIni+SabMinIni 
                
                var SabFim = DadoEmp.Tem_SabFim.split(":");
                var SabHoraFim = parseInt(SabFim[0])*60
                var SabMinFim = parseInt(SabFim[1])
                var SabTmpFim = SabHoraFim+SabMinFim 
        
              
              
               
                if(SexTmpIni > SexTmpFim & DadoEmp.Tem_SexAb === 1) {
                
                 if(SexTmpFim > TempMIn){
                  if(DadoEmp.Tem_SexAb === 1){
                    console.log("entrou 1")
                    setStatus(true)
                  } else {
                    console.log("entrou 2")
                    setStatus(false) 
                  }
                   
                 } else if(DadoEmp.Tem_SabAb === 1){
                   if(SabTmpIni > SabTmpFim){
                    if(SabTmpIni <= TempMIn & TempMIn <= TmpMed) {
                      console.log("entrou 3")
                      setStatus(true)
                    } else {
                      console.log("entrou 4")
                      setStatus(false)
                    }
                     
                   } else {
                    if(SabTmpIni <= TempMIn & TempMIn <= SabTmpFim) {
                      console.log("entrou 5")
                      setStatus(true)
                    } else {
                      console.log("entrou 6")
                      setStatus(false)
                    }
                   }
                 } else {
                  console.log("entrou 8")
                   setStatus(false) 
                 }
        
                } else {
        
                  if(DadoEmp.Tem_SabAb === 1){
                    if(SabTmpIni > SabTmpFim){
                     if(SabTmpIni <= TempMIn & TempMIn <= TmpMed) {
                      console.log("entrou 9")
                      setStatus(true)
                     } else {
                      console.log("entrou 10")
                       setStatus(false)
                     }
                      
                    } else {
                     if(SabTmpIni <= TempMIn & TempMIn <= SabTmpFim) {
                      console.log("entrou 11")
                      setStatus(true)
                     } else {
                      console.log("entrou 12")
                       setStatus(false)
                     }
                    }
                  } else {
                    console.log("entrou 13")
                    setStatus(false) 
                  }
                }
        
                } else if ("Sunday" === DiaSemana){
                  var SabIni = DadoEmp.Tem_SabIni.split(":");
                  var SabHoraIni = parseInt(SabIni[0])*60
                  var SabMinIni = parseInt(SabIni[1])
                  var SabTmpIni = SabHoraIni+SabMinIni 
                  
                  var SabFim = DadoEmp.Tem_SabFim.split(":");
                  var SabHoraFim = parseInt(SabFim[0])*60
                  var SabMinFim = parseInt(SabFim[1])
                  var SabTmpFim = SabHoraFim+SabMinFim 
          
                  var DomIni = DadoEmp.Tem_DomIni.split(":");
                  var DomHoraIni = parseInt(DomIni[0])*60
                  var DomMinIni = parseInt(DomIni[1])
                  var DomTmpIni = DomHoraIni+DomMinIni 
                  
                  var DomFim = DadoEmp.Tem_DomFim.split(":");
                  var DomHoraFim = parseInt(DomFim[0])*60
                  var DomMinFim = parseInt(DomFim[1])
                  var DomTmpFim = DomHoraFim+DomMinFim 
          
                
                
                 
                  if(SabTmpIni > SabTmpFim & DadoEmp.Tem_SabAb === 1) {
                  
                   if(SabTmpFim > TempMIn){
                    if(DadoEmp.Tem_SabAb === 1){
                      console.log("entrou 1")
                      setStatus(true)
                    } else {
                      console.log("entrou 2")
                      setStatus(false) 
                    }
                     
                   } else if(DadoEmp.Tem_DomAb === 1){
                     if(DomTmpIni > DomTmpFim){
                      if(DomTmpIni <= TempMIn & TempMIn <= TmpMed) {
                        console.log("entrou 3")
                        setStatus(true)
                      } else {
                        console.log("entrou 4")
                        setStatus(false)
                      }
                       
                     } else {
                      if(DomTmpIni <= TempMIn & TempMIn <= DomTmpFim) {
                        console.log("entrou 5")
                        setStatus(true)
                      } else {
                        console.log("entrou 6")
                        setStatus(false)
                      }
                     }
                   } else {
                    console.log("entrou 8")
                     setStatus(false) 
                   }
          
                  } else {
          
                    if(DadoEmp.Tem_DomAb === 1){
                      if(DomTmpIni > DomTmpFim){
                       if(DomTmpIni <= TempMIn & TempMIn <= TmpMed) {
                        console.log("entrou 9")
                        setStatus(true)
                       } else {
                        console.log("entrou 10")
                         setStatus(false)
                       }
                        
                      } else {
                       if(DomTmpIni <= TempMIn & TempMIn <= DomTmpFim) {
                        console.log("entrou 11")
                        setStatus(true)
                       } else {
                        console.log("entrou 12")
                         setStatus(false)
                       }
                      }
                    } else {
                      console.log("entrou 13")
                      setStatus(false) 
                    }
                  }
          
                  }
    
    
     }
    const PegarProdutos = ()=>{
      Api.Produtos(IdEmp, setCat, setDadoEmp, setPedidoList )
    }

  const PesquisandoItem = ()=>{
     var ItensPes = []
    for(let i in Cat){
      for(let j in Cat[i].Itens){
        if(Cat[i].Itens[j].Nome.toLowerCase().includes(Pesq.toLowerCase())){
          ItensPes.push(Cat[i].Itens[j])
        }

      }
    }
    setListPesq(ItensPes)

   }  
const FechaMenu = ()=>{
  setVerMenu(false)
}



const FechaCarrinho= ()=>{
  console.log("Abriur")
  setVerCar(!VerCar)
  setVerCar2(true)
}
const MudarSec = (item)=>{
  setPesq("")
  setListPesq([])
  setVerSec(item)
  setVerMenu(false)
}

const SomarItens = ()=>{
  var TotVal = 0
   var Quant = 0 
  for(let i in Itens){
    TotVal = TotVal + Itens[i].Preco*Itens[i].Quant;
    Quant = Quant+Itens[i].Quant;
  }
  setVerTotal(TotVal)
  setQuantTotal(Quant)
  setVerCar(true)
  setVerCar2(true)
}

    




   
  
    
    return (
      <View style={styles.Container0}>
        <Carrinho 
          VerTotal ={VerTotal}
          VerCar2={VerCar2} 
          VerCar={VerCar} 
          setVerCar={setVerCar} 
          FechaCarrinho={FechaCarrinho} 
          Cat={Cat} 
          MudarSec={MudarSec}  
          setModalVisible={setModalVisibleCar}
          />
      <ScrollView 
      style={styles.Container} 
      //Tirando a Barra de Rolagem  
      showsVerticalScrollIndicator={false}
     > 
   {/* Menu Inicio*/}
          <Menu 
          VerMenu2={VerMenu2} 
          VerMenu={VerMenu} 
          setVerMenu={setVerMenu} 
          FechaMenu={FechaMenu} 
          Cat={Cat} 
          MudarSec={MudarSec} 
          />  
 
      {/* Menu Fim*/}
    <View  style={styles.viewCentral}>
          <Mod1
          Status={Status}
          setModalVisibleCar={setModalVisibleCar}
          setItens={setItens}
          Itens={Itens}
          setQuantItem={setQuantItem}
          QuantItem={QuantItem}
          ItemMod={ItemMod}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          />
          <ModalCar
          PegarProdutos={PegarProdutos}
          setAtivoPedido={setAtivoPedido}
          AtivoPedido={AtivoPedido}
          PedidoList={PedidoList}
          DadoEmp={DadoEmp}
          VerTotal={VerTotal}
          Itens={Itens}
          setItens={setItens}
          setModalVisible={setModalVisibleCar}
          modalVisible={modalVisibleCar}
          /> 
            <ModalInfo
          DadoEmp={DadoEmp}
          DiasAbert={DiasAbert}
          VerTotal={VerTotal}
          Itens={Itens}
          setItens={setItens}
          setModalVisible={setModalVisibleInfo}
          modalVisible={modalVisibleInfo}
          /> 
          <Topo 
            DadoEmp={DadoEmp}
           setMostcar={setMostcar}
          QuantTotal={QuantTotal}
          VerCar={VerCar}
          FechaCarrinho={FechaCarrinho}
          setVerMenu2={setVerMenu2}
          VerMenu={VerMenu}
          setVerMenu={setVerMenu}
          setModalVisible={setModalVisible}
          />
            
          <Banner
          Status={Status}
          DadoEmp={DadoEmp}
          setModalVisible={setModalVisibleInfo}
          />
          <Titulo
          DadoEmp={DadoEmp}
          />
          <Pesquisa 
          setPesquisa={setPesq}
          Pesquisa={Pesq}
          />
          <MenuHori 
           VerMenu2={VerMenu2} 
           VerMenu={VerMenu} 
           setVerMenu={setVerMenu} 
           FechaMenu={FechaMenu} 
           Cat={Cat} 
           MudarSec={MudarSec} 
          />
    </View>
    {Pesq.length > 0 ?
    <>
    {ListPesq.length > 0?
    <>
       <View style={styles.Container1}>
    {ListPesq.map((item, key)=>(
           <>
        
         <Item 
         setMostcar={setMostcar}
         setItemMod={setItemMod} 
         setModalVisible={setModalVisible}
         style={styles.item}
         Item={item}
         />
           
           </>
          ))}
          </View>
    </>
    :
    <>
     <Text style={{color:"red", marginLeft:40, marginTop: 10, fontSize:20}}>Nenhum item encontrado.</Text>
    </>

    }
    
    </>

    :
    <>
    {VerSec.length === 0?
      <>
       {  Cat.length > 0  ?
          <>
          {Cat.map((item, key)=>(
           <>
          <Secao
          setPesq={setPesq}
          setListPesq={setListPesq}
          style={styles.Sec0}
          Item={item}
          setVerSec = {setVerSec}
          Nome={item.Secao}
          />
          <Catalago
          setMostcar={setMostcar}
          setItemMod={setItemMod} 
          setModalVisible={setModalVisible}
          Itens={item.Itens}
          />
           
           </>
          ))}
          </>
          :
          <>
          <View style={{marginLeft:150, marginTop:100}}>
                <Image source={require('../assets/caregar.gif')}  style={styles.ImageVer3 } />
               
                </View>
          </>}
      
      </>

      :
      <>
      <View style={styles.Container1}>
      <Secao1
          Nome={VerSec.Secao}
          setVerSec = {setVerSec}
          />
  {VerSec.Itens.map((item, key)=>(
           <>
         <Item 
          setMostcar={setMostcar}
          setItemMod={setItemMod} 
         setModalVisible={setModalVisible}
         style={styles.item}
         Item={item}
         />
           
           </>
          ))}
      </View>
      
      </>

      }
    
    </>

    }
      
     
 
      </ScrollView>
      </View>
    )
  }


const styles = StyleSheet.create({
  Container0:{
   width:"100%",
   height:"100%"
   },
  Container:{
    opacity: 1,
    backgroundColor:"#FFF",
    paddingBottom:100, 
   },
   Menus:{
    width:"40%",
    position: 'absolute',
    top:0,
    left: 0,
    right: 10,
    height: "100%",
    backgroundColor: "#FFF",
    zIndex: 2,
     
   },
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
   menuText: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    fontFamily:"arial"
    
  },
  LinhaTop: {
    width: '50%',
   
    borderTopWidth: 2,
    borderTopColor: 'black',
    borderTopStyle: 'solid',
  },
  menuItem: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    fontFamily:"arial"
  },
  menuItem1: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    fontFamily:"arial",
    fontWeight:"bold",
  },
   Sec0: {
    zIndex: 99,
  },
   Container1:{
    marginLeft:15,
    marginRight:15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    
    width:"100%",
   
   },
   item: {
    flexBasis: 'auto', 
    margin: 5,
    padding: 10,
    backgroundColor: 'lightblue',
  },
   viewCentral:{
    width:"100%",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    marginTop: 38

   },  
   ImageVer3:{
    width:100,
    height:100,
    

   
  },
 
});