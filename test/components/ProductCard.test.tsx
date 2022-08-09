import React from 'react';
import render from "react-test-renderer"
const { act } = render;

import { ProductCard } from "../../src/components";

import { product2 } from '../data/products';

describe("Pruebas en el componente ProductImage", () => {
    test('Deve mostar el componente correctamente', () => {
        const wrapper = render.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <h1>Hola</h1>
                    )
                }
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Deve mostrar el componente Correctamente', () => {

        const wrapper = render.create(
            <ProductCard product={product2}>
                {
                    ({ count, increseBy }) => (
                        <>
                            <h1>{count}</h1>
                            <button onClick={() => increseBy(1)}>+1</button>
                        </>
                    )
                }
            </ProductCard>
        );

        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();
        console.log((tree as any).children[0].children[0]);

        // simular el increseBy
        act(() => {
            (tree as any).children[1].props.onClick();
        });

        // obtener la nuevo estado
        tree = wrapper.toJSON();
        expect((tree as any).children[0].children[0]).toBe("1");

    })
})