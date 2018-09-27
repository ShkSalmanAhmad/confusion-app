import React from 'react';
import { Card, CardImg, CardText, CardBody,
         CardTitle, Breadcrumb, BreadcrumbItem, Button, Row, Col, Label,
         Button, Modal, ModalHeader, ModalBody,
         Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';



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

export default RenderDish;
