import React, {useState, useEffect} from 'react';

import RelatedProductCard from './RelatedProductCard.jsx';
// import sampleData from '../../data/sampleData.js';

var RelatedProductsList = function (props) {
  const {
    listType,
    productId,
    productInfo,
    productStyle,
    relatedProduct,
    relatedProductInfo,
    relatedProductStyles,
    yourOutfit,
    yourOutfitInfo,
    yourOutfitStyles,
    onStarClick,
    onXClick
  } = props;

  const show = 4;
  const listHeading = listType === 'relatedProduct'
    ? 'RELATED PRODUCTS'
    : 'YOUR OUTFIT';

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = listType === 'relatedProduct'
    ? useState(relatedProduct.length)
    : useState(yourOutfit.length);

  console.log('RPL length: ', listType, ' - ', length);

  const products = listType === 'relatedProduct'
    ? relatedProduct.map((id) => {
      let prodInfo = relatedProductInfo.filter((prod) => prod.id === id);
      let prodStyle = relatedProductStyles.filter((prod) => Number(prod.product_id) === id);

      return (
        <div key={id.toString()}>
          <div style={{ padding: 8 }}>
            <RelatedProductCard
              listType={listType}
              productId={id}
              productInfo={prodInfo[0]}
              productStyle={prodStyle[0]}
              onStarClick={onStarClick}
            />
          </div>
        </div>
      );
    })
    : yourOutfit.map((id) => {
      let prodInfo = yourOutfitInfo.filter((prod) => prod.id === id);
      let prodStyle = yourOutfitStyles.filter((prod) => Number(prod.product_id) === id);
      return (
        <div key={id.toString()}>
          <div style={{ padding: 8 }}>
            <RelatedProductCard
              listType={listType}
              productId={id}
              productInfo={prodInfo[0]}
              productStyle={prodStyle[0]}
              onXClick={onXClick}
            />
          </div>
        </div>
      );
    });

  // Carousel not working, arrows should not show with only four product cards
  useEffect(() => {
    setLength(products.length);
  }, [products]);

  const next = () => {
    if (currentIndex < (length - show)) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  return (
    <div>
      <h3>{listHeading}</h3>
      <div className="ri-carousel-container">
        <div className="ri-carousel-wrapper">
          {
            currentIndex > 0 &&
            <button onClick={prev} className="ri-left-arrow">
              &lt;
            </button>
          }
          <div className="ri-carousel-content-wrapper">
            <div
              className={`ri-carousel-content show-${show}`}
              style={{ transform: `translateX-${currentIndex * (100 / show)}%)` }}
            >
              {products}
            </div>
          </div>
          {
            currentIndex < (length - show) &&
            <button onClick={next} className="ri-right-arrow">
              &gt;
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default RelatedProductsList;