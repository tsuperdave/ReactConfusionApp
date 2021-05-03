import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
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
    renderComments(dish) {
        if (dish != null) {
            const comments = dish.comments.map((comment) => {
                return (
                    <><ul className="list-unstyled">
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author}, {comment.date}</p>
                            <p>Rating: {comment.rating}</p>
                        </li>
                    </ul></>
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

    render() {
        const { selectedDish } = this.props;
        return (
            <><div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(selectedDish)}
                </div>
            </div></>
        );
    }
}

export default DishDetail;

