# Hiper-Product-Card

***Te permitira aser la logica de un carrito de compras***

~~~
import {ProductCard,productImage,ProductTitle,ProductButtons} from "hiper-product-card"
<ProductCard
=    product={product}
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
~~~