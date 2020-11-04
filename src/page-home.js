import React from "react";
import "./componenetes/css-component/home.css";

class Home extends React.Component{
  state = {
    color : "#1f6f8b",
    color2 :"#e6d5b8",
    color3: "#e8e8e8",
    color4: "#db6400"
  }
    render(){
        return (
            <React.Fragment >
                <div className="portada">
                  
                </div>
                <div  style={{ background: 	this.state.color3}} className="margenes-bottom100 card  superposicion mb-3" >
  <div className="card-header">Bienvenidxs!</div>
                        

  <form className="">
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" >Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>



</div>

                <div className="container margenes-top300 margenes-bottom100">
                    <div className="row ">
              <h3>Bienvenidxs! a nombre</h3>
              <hr
        style={{
            color: this.state.color,
            backgroundColor: this.state.color,
            height: 5
        }}
    />
                    <div className="card-deck">
  <div  style={{ background: 	this.state.color}} className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div  style={{ background: 	this.state.color2}} className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div  style={{ background: 	this.state.color4}} className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
                



                    </div>
                </div>
                <div className="center futer">
                  <br></br><br></br><br></br>
                   <h4>todo los derechos reservados @SebastianMena</h4>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;