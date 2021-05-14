import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


/*
    componentDidMount() {
        console.log('Dishdetail Component componentDidMount invoked');
    }

    componentDidUpdate() {
        console.log('Dishdetail Component componentDidUpdate invoked');
    }
*/

    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </>
            );
        }

        return (
            <div></div>
        );
    }

    function RenderComments({dish}) {
        if (dish != null) {
            const comments = dish.comments.map((comment) => {
                return (
                    <>
                        <li key="comment.id">{comment.comment}
                            <p>-- {comment.author}, {new Intl.DateTimeFormat("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "2-digit"
                            }).format(new Date(Date.parse(comment.date)))}</p>
                            <p>Rating: {comment.rating}</p>
                        </li>
                    </>
                );
            });

            return (
                <>
                    <Card>
                        <h4>Reviews</h4>
                        <ul className="list-unstyled">

                            <div>{comments}</div>
                        </ul>
                    </Card>
                </>
            );

        }

        return (
            <><div></div></>
        );
    }

    const DishDetail = (props) => {

        console.log('Dishdetail Component render invoked');

        if(props.dish != null) {
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
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
            );
        }
        
        return (
            <><div></div></>
        );
        
    }



export default DishDetail;

