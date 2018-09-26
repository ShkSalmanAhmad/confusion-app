import React from 'react';
import { Card, CardImg, CardText, CardBody,
        CardTitle, Breadcrumb, BreadcrumbItem, Button, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';




 function RenderComments(props) {
        console.log("Render Comments: ", props.comments);
        const standardDateFormat = { year: 'numeric', month: 'short', day: '2-digit'};
        const style = {fontSize: "14px",
                         marginRight: "3px"
        };
        if (props.comments) {
            const dishComments = props.comments.map((comment) => {
                return (
                    <li key={comment.id}>        
                            <p>{comment.comment}</p>        
                            <p>-- {comment.author},
                            {new Intl.DateTimeFormat('en-US',
                             standardDateFormat).format( new Date(Date.parse(comment.date)))} </p>        
                    </li>     
               );
            });
            return (
                <div  className="col-12 col-md-5 m-1">
                    <ul className="list-unstyled">
                        <h4>Comments</h4>
                        {dishComments}
                    </ul> 
                     <LocalForm>
                      <Button className="btn btn-outline-secondary" type="submit">
                        <span className="fas fa-pencil"></span>Submit Comment
                      </Button>
                    </LocalForm>                                    
            </div>
            );
            
        } else {
            return <div></div>; 
        }
          
}

function RenderDish({dish}) {
        if (dish) {
            return (
                <div  className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div> 
            );
        } else{
            return <div></div>;
        };
        
 }


const  DishDetail = (props) => {
        console.log("Render Comments", props.dish);
        if (props.dish!=null){
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />   
                    </div>
                </div>
            );
        }else{
            return <div></div>;
        };
        
       
  }

export default DishDetail;
