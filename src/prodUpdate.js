import React from 'react'
import axios from 'axios'
class ProdUpdate extends React.Component{
    constructor(){
        super();
        this.state={

            productName:'',
            productPrice:''
            
        }
    }
    id=localStorage.getItem('id');
    componentDidMount(){
       
        axios.get('http://localhost:5000/serverport'+'/'+this.id)
    .then(response => {
    
     this.setState({ productName: response.data.productName,productPrice: response.data.productPrice }); //gets all the data
      console.log(this.state)
    })
  
    }
    handleChangeName=(e)=>{
        this.setState(
            {productName:e.target.value}
        )
    }
    handleChangePrice=(e)=>{
        this.setState(
            {productPrice:e.target.value}
        )
    }
    onSubmit=(e)=> {
        e.preventDefault();
        console.log('Hi')
       
        console.log(this.state)
        const updatedObj = {
            productName: this.state.productName,
            productPrice: this.state.productPrice
        }

        //adding to the database
        axios.put('http://localhost:5000/serverport/item/'+this.id, updatedObj)

            .then(function (response) {
                console.log(response.data);
                alert(response.data);
                
            });
        this.setState({
            productName: '',
            productPrice: ''
        });
        this.props.history.push('/Get')
    }



    render(){
        return(

            <div style={{ marginTop: 50 }} className="container">
                <h3>Update Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Product Name:  </label>
                        <input type="text" className="form-control" value={this.state.productName} onChange={this.handleChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Add Product Price: </label>
                        <input type="number" className="form-control" value={this.state.productPrice} onChange={this.handleChangePrice} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Product" className="btn btn-primary" />
                    </div>
                </form>
            </div>

        )
    }
}
export default ProdUpdate;