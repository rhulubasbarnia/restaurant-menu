import React from 'react';

class RestaurantMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOn: true};
  }

  render() {
    const mainCssClass = "restaurant-menu-item";
    const thumbnailImgUrl = this.props.feed.thumbnail ? this.props.feed.thumbnail : '';
    const thumbnailStyle = { backgroundImage: 'url('+thumbnailImgUrl+')'};
    return (
      <div className={mainCssClass}>
        <div className={mainCssClass+'-middler'}>


          {
            this.props.feed.thumbnail ? (
              <div style={thumbnailStyle} className={mainCssClass+'-thumbnail'}>
              </div>
            ) : ''
          }
          <div>
            <h5 className={mainCssClass+"-header"}>
              <span className={"the-actual-title"}>{this.props.feed.title}</span>
              {
                this.props.feed.tags ? (
                  <span className={"the-tags"}>{this.props.feed.tags.map(() => {
                    return 'dada';
                  })}</span>
                ) : ''
              }

            </h5>
            <div className={mainCssClass+"-body"}>
              <div className={mainCssClass+'-body-paragraph'}>
                {this.props.feed.description}
              </div>
            </div>
          </div>

        </div>

        <div className="restaurant-menu-item-price">
          <div className={mainCssClass+"-price-typo"}>
            <span className={mainCssClass+"-price-typo-curr"}>{this.props.mainfeed.mainoptions.currency_string}</span>
            <span className={mainCssClass+"-price-typo-price"}>{this.props.feed.price}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantMenuItem;
