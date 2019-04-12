import React,{Component} from 'react'
import axios from 'axios'
class GetProd extends Component{
  constructor(props){
      super(props);
      this.state={serverports:[]}
     // this.deleteItems=this.deleteItems.bind(this)
  }

  componentDidMount(){
   this.getProduct()
  }
  getProduct=()=>{
    axios.get('http://localhost:5000/serverport')
    .then(response => {
    
     this.setState({ serverports: response.data }); //gets all the data
    
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  deleteItems=(id)=>{
  
  axios.delete('http://localhost:5000/serverport'+'/'+id)
  .then(function (response) {
      console.log(response.data); 

      
    })
    this.getProduct();
 }
 updateItems=(id)=>{
   localStorage.setItem('id',id)
   this.props.history.push('/update')

 }



render(){

    return(
        <table border='1' className="table table-striped">
        <thead>
               <tr>
                 <td>ID</td>
                 <td>Product Name</td>
                 <td>Product Price</td>
                 <td>Action</td>
               </tr>
        </thead>
        <tbody>
         {this.state.serverports.map((object, i)=>  
         
           <tr key={i}>
             <td>{object._id}</td>
             <td>{object.productName}</td>
             <td>{object.productPrice}</td>
             <td><button className="btn btn-danger" onClick={(e)=>this.deleteItems(object._id)}>Delete</button>
             &nbsp;&nbsp;<button className="btn btn-primary" onClick={(e)=>this.updateItems(object._id)}>Update</button>
             </td>
           </tr>
           )}
     </tbody>
       </table>
     

    )
}

}
export default GetProd;