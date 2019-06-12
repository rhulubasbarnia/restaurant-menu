import React from 'react';

import RestaurantMenuItem from './RestaurantMenuItem';

class RestaurantMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
  }
  render() {
    return (
      <div className="restaurant-menu-con">
      <div className="restaurant-menu">
        {this.props.feed.items.map((el,ind)=>{
          return (
            <RestaurantMenuItem
              key={ind}
              feed={el}
              mainfeed={this.props.feed}
            />
          );
        })}
      </div>
      </div>
    );
  }
}

export default RestaurantMenu;
