import React from 'react';
import { Media } from 'reactstrap';


const RenderLeader = (props) => {

  console.log("Render Comments", props.leader);
        if (props.leader!=null){
          
            return (
              <Media>
                  <Media left>
                    <img src={props.leader.image} alt={props.leader.name} />
                  </Media>
                  <Media body>
                    <Media heading>
                      {props.leader.name}
                    </Media>
                    <span className="desination">{props.leader.designation}</span>
                    <p>{props.leader.description}</p>
                  </Media>
            </Media>
            );
        }else{
            return <div></div>;
        };
};

export default RenderLeader;