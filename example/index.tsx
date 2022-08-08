import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: "1",
  title: "coffe Mug",
  // img: "/coffee-mug.png"
}

const App = () => {
  return (
    <ProductCard
      product={product}
      initialValues={{
        count: 4,
        maxCount: 10,
      }}
    // el onchange resive el product como parametro 
    >
      {

        // la ventaje de usar este patron es que puedo manderle a los hijos los parametros 
        ({ reset, increseBy, isMaxCountReached, }) => (
          <>
            <ProductImage />
            <ProductTitle title="coup" />
            <ProductButtons />
          </>
        )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
