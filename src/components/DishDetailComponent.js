import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay,
     CardText, CardBody, CardTitle, Media } from 'reactstrap';
 



class  DishDetail extends Component{
        constructor(props){
            super(props);
            
        }

        renderDish(dish){
            if (this.props.dish) {
                return(
                    <Card>
                        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                          <CardTitle>{this.props.dish.name}</CardTitle>
                          <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                );

            } else{
                return(
                    <div></div>
                );
            }
        }
        renderComments(comments){
            if (this.props.dish.comments) {
                const dishComments = this.props.dish.comments.map((comment) => {
                    return (
                        <li key={comment.id}>        
                                  <p>{comment.comment}</p>        
                                  <p>-- {comment.author},{(new Date(comment.date)).toDateString} </p>        
                         </li>     

                    );
                });
              } else {
                return(
                    <div></div>
                );
              }
            }
           
        
        render (){
          
        
            return(
                <div class = "row">
                    
                    <div  className="col-12 col-md-5 m-1">
                      {this.renderDish(this.props.dish)}      
                    </div>
                
                    <div  className="col-12 col-md-5 m-1">
                        <ul className="list-unstyled">
                            <h4>Comments</h4>
                            {this.renderComments(this.props.dish.comments)}
                        </ul>                                     
                    </div>
                 
    
                </div>
            );

        } 
}

export default DishDetail;
