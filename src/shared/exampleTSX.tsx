import React from 'react';

function HomeComponent(props: {firstProp: number}) {
    return (
        <div>
            {props.firstProp}
        </div>
    )
}

type TMyType<T> = T extends React.ComponentType<infer P> ? P : never;

const type: TMyType<typeof HomeComponent> = {
    firstProp: 5,
};