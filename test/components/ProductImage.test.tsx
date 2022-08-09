import React from 'react';
import render from "react-test-renderer"

import { ProductImage, ProductCard } from "../../src/components";

import { product2 } from '../data/products';

describe("Pruebas en el componente ProductImage", () => {
    test('Deve mostar el componente con la imagem personalisada', () => {
        const wrapper = render.create(
            <ProductImage img="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" />
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Deve mostrar el componente Correctamente', () => {
        const wrapper = render.create(
            <ProductCard product={product2}>
                {
                    () => (
                        < ProductImage />

                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})