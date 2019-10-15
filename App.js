import React ,{Component} from 'react';
import {
AppRegistry,
View,
Text,
StyleSheet,
TouchableWithoutFeedback,
Dimensions,
Modal,
Image,
Button,
} from 'react-native';
import ImageElement from './App/Component/ImageElement';

class App extends Component{

  constructor(){
    super();
    this.state={
      modalVisible:false,
      modalImage:require('./App/img/pic1.jpg'),
      images:[
        require('./App/img/pic1.jpg'),
        require('./App/img/pic2.jpg'),
        require('./App/img/pic3.jpg'),
        require('./App/img/pic4.jpg'),
        require('./App/img/pic5.jpg'),
        require('./App/img/pic6.jpg'),
        require('./App/img/pic7.jpg'),
        require('./App/img/pic8.jpg'),
        require('./App/img/pic9.jpg'),
        require('./App/img/pic10.jpg'),
      ]
    }
    this.setModalVisible=this.setModalVisible.bind(this);
    this.getImage=this.getImage.bind(this);
   }

  setModalVisible(visible,imageKey){
    this.setState((prev)=>{
      return{
        modalImage:prev.images[imageKey],
        modalVisible:visible
      }
    });
  }

  getImage(){
    return this.state.modalImage;
  } 


  render(){

    let images=this.state.images.map((val,key)=>{
      return(
              <TouchableWithoutFeedback key={key}
                      onPress={()=>this.setModalVisible(true,key)}>
                  
                     <View style={styles.imagewrap}>
                        <ImageElement imgsource={val}/>
                    </View>

              </TouchableWithoutFeedback> 
      )
      
    });
  
    return(
      <View style={styles.container}>

          <Modal style={styles.modal}
                  animationType={'fade'}
                  transparent={true} 
                  visible={this.state.modalVisible}
                  onRequestClose={()=>{}}>
          
              <View style={styles.modal}>
              
                  <Button style={styles.text} color='black' onPress={()=>{this.setModalVisible(false)}} title="Close" transparent={true} />
                  <ImageElement imgsource={this.state.modalImage}></ImageElement>
              </View>
          
          </Modal>
       {images}
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor:'#eee',
  },
  imagewrap:{
    margin:2,
    padding:2,
    height:300,
    width:100,
    backgroundColor:'#fff',
  },

  modal:{
    flex:1,
    padding:40,
    backgroundColor:'rgba(0,0,0,0.9)',
  },
  text:{
    color:'#fff',

  }
})

export default App;