import '../style/main.less';
import React from 'react';

class HelloReact extends React.Component{
	render(){
		let imgurl=require('../img/1.jpg');
		return (
			<div>
				<img src={imgurl}/>
				<span>怎么会这样真是梦去哪了</span>
				<span>less ldlkasjlkdsal真是太麻烦了</span>
			</div>
		)
	}
}

export default HelloReact;