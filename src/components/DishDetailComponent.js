import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
 



class  DishDetail extends Component{
        
    renderComments(comments){
             if (comments) {
            const dishComments = comments.map((comment) => {
                return (
                    <li key={comment.id}>        
                              <p>{comment.comment}</p>        
                              <p>-- {comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>        
                     </li>     

                );
            });
            return dishComments;
          } 
        return(<div></div>);
        }

        renderDish(dish){
            
            if (this.props.dish) {
                console.log("comments: ", this.props.dish.comments);
               
                const selectedComments = this.renderComments(this.props.dish.comments);
                return(
                   <div className="container">
                        
                        <div className = "row">
                            
                            <div  className="col-12 col-md-5 m-1">
                                <Card>
                                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                                    <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                    </CardBody>
                                </Card>     
                            </div>
                        
                            <div  className="col-12 col-md-5 m-1">
                                <ul className="list-unstyled">
                                    <h4>Comments</h4>
                                    {selectedComments}
                                </ul>                                     
                            </div>
                        </div>
                   </div>
                );

            }
            return(<div></div>);
            
        }
        
        
        render (){
            console.log("comments", this.props.dish);
        
            return(
                <div>
                    {this.renderDish(this.props.dish)}
                </div>
            );

        } 
}

export default DishDetail;
