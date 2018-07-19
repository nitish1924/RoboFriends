import React from 'react';
import Card from './Card';
const CardList =({robots}) => {
	/*if(true){       //this loc to show error boundry
		throw new Error('Hey Ram');
	}*/
	return (
		<div>
			{
				robots.map((user,i) => {
					return(
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
						/>
						);
				})
			}
		</div>
		);
}

export default CardList;