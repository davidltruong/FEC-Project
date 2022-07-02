import React, {useState, useEffect} from 'react';
import sampleData from '../../data/sampleData.js';
import helper from './helper.js';

import ProductInfo from './ProductInfo.jsx';
import Style from './Style.jsx';
import AddToCart from './AddToCart.jsx';
import OtherInfo from './OtherInfo.jsx';
import ImageGallery from './ImageGallery.jsx';

var Overview = (props) => {

  var productId = props.productId; // props from App level state
  var reviewsMeta = props.reviewsMeta; // props from the App level state
  var productInfo = sampleData.productInfo; // initiate by GET GET /products/:product_id
  var productStyle = sampleData.productStyle; // initiate by GET 'products/:product/styles/'

  // set currentStyle to the default
  const [currentStyle, setStyle] = useState(helper.findDefaultStyle(productStyle));

  // ComponentDidMount
  useEffect(() => {
  }, []);

  // handle style change
  var handleStyleChange = (style) => {

  };

  return (
    <div className="overview-grid">
      <div className="top-row-grid">

        <div className="left-2">
          <ImageGallery
            currentStyle={currentStyle}
          />
        </div>

        <div className="right-1">
          <ProductInfo
            productInfo={productInfo}
            rating={helper.calculateRating(reviewsMeta.ratings)}
          />

          <Style
            productStyle={productStyle}
            currentStyle={currentStyle}
          />

          <AddToCart
            currentStyle={currentStyle}
          />
        </div>

      </div>

      <OtherInfo />
    </div>
  );
};

export default Overview;