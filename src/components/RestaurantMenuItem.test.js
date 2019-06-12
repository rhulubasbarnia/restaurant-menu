import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantMenuItem from './RestaurantMenuItem';

it('renders without crashing', () => {

  const restaurantFeedArr = {
    'mainoptions' : {
      currency_string: '$'

    },
    'items':[

      {

      },
      {

      },
    ]
  };


  const div = document.createElement('div');
  ReactDOM.render(<RestaurantMenuItem feed={restaurantFeedArr.items[0]} mainfeed={restaurantFeedArr} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
