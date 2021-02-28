import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

export default class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        if (comments && comments.length > 0) {

            const commentLines = comments.map((comment) => (
                <ul class="list-unstyled">
                    <li>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {new Date(comment.date).toDateString()}</p>
                    </li>
                </ul>
            ));

            return (
                <div>
                    <h4>Comments</h4>
                    <ListGroup>
                        {commentLines}
                    </ListGroup>

                </div>
            )
        }
        return (<div></div>)
    }

    renderDish(dish) {

        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );

    }

    render() {
        const dish = this.props.dish;
        if (dish) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}
