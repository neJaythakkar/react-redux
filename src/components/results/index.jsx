import React from 'react';

export default ({ deleteHandler ,...item}) => {
	console.log(item);
	return (
		<li key={item.id} onClick={() => deleteHandler(item)}>
			{item.value}
		</li>
	);
};
