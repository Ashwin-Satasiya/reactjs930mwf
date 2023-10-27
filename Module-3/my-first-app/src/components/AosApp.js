import React from "react";

import apt from "../images/appo.gif";
 
function AosApp(){
    return(
        <React.Fragment>
            <h1 style={{textAlign:"center"}}>Appointment booking</h1>
            <hr style={{width:"290px"   ,height:"2px", backgroundColor:"black", border:"none"}}  ></hr>
            
            <div id="appointment" >
                
                <div className="appoint">
                
                <img src={apt} alt="myImage" />
                
                </div>

                <div className="form">

                <form>
                     <input type="text" placeholder="First Name"></input><br></br>
                     <input type="text" placeholder="Last Name" ></input><br></br>
                    <input type="text" placeholder="Mobile No." ></input><br></br>
                    <input type="text" placeholder="Address" ></input><br></br>
                    <input type="submit" ></input>
                </form>

                </div>
            </div>


        <div className="test" data-aos="zoom-in"> 
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ducimus recusandae rerum exercitationem tempora fugiat sunt ipsam quam veritatis, enim, iusto nobis iure voluptatibus dignissimos ipsum ratione repellat nam. Velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam, consequuntur numquam fugiat error, odio id dolor repudiandae eum ut veritatis commodi. Quidem earum quasi obcaecati voluptatum vel, tempore neque dignissimos minima quos laudantium perspiciatis porro suscipit, deserunt dolorum doloremque.</p>
        </div>
        <div className="test" data-aos="zoom-in"> 
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ducimus recusandae rerum exercitationem tempora fugiat sunt ipsam quam veritatis, enim, iusto nobis iure voluptatibus dignissimos ipsum ratione repellat nam. Velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam, consequuntur numquam fugiat error, odio id dolor repudiandae eum ut veritatis commodi. Quidem earum quasi obcaecati voluptatum vel, tempore neque dignissimos minima quos laudantium perspiciatis porro suscipit, deserunt dolorum doloremque.</p>
        </div>


        <div className="test" data-aos="zoom-in"> 
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ducimus recusandae rerum exercitationem tempora fugiat sunt ipsam quam veritatis, enim, iusto nobis iure voluptatibus dignissimos ipsum ratione repellat nam. Velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam, consequuntur numquam fugiat error, odio id dolor repudiandae eum ut veritatis commodi. Quidem earum quasi obcaecati voluptatum vel, tempore neque dignissimos minima quos laudantium perspiciatis porro suscipit, deserunt dolorum doloremque.</p>
        </div>

         <div className="test" data-aos="zoom-in"> 
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ducimus recusandae rerum exercitationem tempora fugiat sunt ipsam quam veritatis, enim, iusto nobis iure voluptatibus dignissimos ipsum ratione repellat nam. Velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam, consequuntur numquam fugiat error, odio id dolor repudiandae eum ut veritatis commodi. Quidem earum quasi obcaecati voluptatum vel, tempore neque dignissimos minima quos laudantium perspiciatis porro suscipit, deserunt dolorum doloremque.</p>
        </div>

         <div className="fade-left" data-aos="fade-up-left"> 
         <h1>I fade left</h1>
            <p>dwddwqedqw</p>
        
        </div>
         <div className="fade-right" data-aos="fade-down-right"> 
         <h1>I fade right</h1>
            <p>dwddwqedqw</p>
        </div>


        </React.Fragment>
    )
}

export default AosApp;