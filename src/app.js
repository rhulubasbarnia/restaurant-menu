import React from 'react';
import './app.scss';
import RestaurantMenu from './components/RestaurantMenu';

function App() {
	const restaurantFeedArr = {
		'mainoptions' : {
			currency_string: '$'

		},
		'items':[

			{

				title:'Vacation in Bali',
				price:'28.99',
				description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. ',
				thumbnail:'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=300',
			},
			{

				title:'Redmond chili',
				price:'29.99',
				description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever. ',
				thumbnail:'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			},
		]
	}

  return (
    <div className="App">
      <header className="App-header">
				<RestaurantMenu
				feed={restaurantFeedArr}
				/>
        <p>
          Edit <code>src/App.js</code> and save to reload 2.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
