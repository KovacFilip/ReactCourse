import React from 'react';
import ListItem from './ListItem';

const List = ({ list }) => {
    const componentList = list.map((object, id) => {
        console.log(object);
        return <ListItem name={object.name} age={object.age} key={id} />;
    });

    return <div>{componentList}</div>;
};

export default List;
