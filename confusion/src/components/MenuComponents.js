import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

    //--- Required default constructor with super method call passing in
    //--- propteries
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card>        
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    </Card>    
              </div>
            );
        });

        //-- Returns view for component
        return (
            <div className="container">
              <div className="row">
                    {menu}
              </div>
            </div>
          );

    }
}

export default Menu;