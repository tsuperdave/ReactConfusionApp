import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
/*
    componentDidMount() {
        console.log('Dishdetail Component componentDidMount invoked');
    }

    componentDidUpdate() {
        console.log('Dishdetail Component componentDidUpdate invoked');
    }
*/
    function RenderDish({ dish }) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    function RenderComments({ dish }) {
        if (dish != null) {
            const comments = dish.comment.map((comment) => {
                return (
                    <>
                        <div class="container">
                            <ul className="list-unstyled">
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                    <p>Rating: {comment.rating}</p>
                                </li>
                            </ul>
                        </div>
                    </>
                );
            });
            return (
                <><div>
                    <h4>Comments</h4>
                    <div>{comments}</div>
                </div></>
            );
        } else {
            return (
                <><div></div></>
            );
        }
    }

    const DishDetail = (props) => {

        console.log('Dishdetail Component render invoked');

        if(props.dish != null)
        return (
            <><div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div></>
        );
    }


export default DishDetail;

