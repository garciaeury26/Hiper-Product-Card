import React from "react";
import render from "react-test-renderer";

import { ProductTitle, ProductCard } from "../../src/components"
import { product1 } from "../data/products";

describe("Pruebas en el componente productTitle", () => {

    test('Deve mostar el componente con el titulo personalisado', () => {
        const wrapper = render.create(
            <ProductTitle title="ps4" />
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Deve mostrar el componente con el nombre del producto', () => {
        const wrapper = render.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle title="ps4" />
                    )
                }
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
});