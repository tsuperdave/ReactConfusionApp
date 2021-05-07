import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
/*
    componentDidMount() {
        console.log('Dishdetail Component componentDidMount invoked');
    }

    componentDidUpdate() {
        console.log('Dishdetail Component componentDidUpdate invoked');
    }
*/
class DishDetail extends Component {
    renderDish(dish) {
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

    renderComments(dish) {
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

    render() {
        const dish = this.props.dish;

        return (
            <>
                <div className="container">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish)}
                    </div>
                </div>
            </>
        );
    }

}

export default DishDetail;

