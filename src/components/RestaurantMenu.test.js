import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantMenu from './RestaurantMenu';

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
  ReactDOM.render(<RestaurantMenu feed={restaurantFeedArr} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
