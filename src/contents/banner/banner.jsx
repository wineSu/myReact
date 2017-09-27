import React from 'react'
import './banner.less'
import ReactSwiper from 'react-swipe'
import banner1 from '../../img/banner1.png'
import banner2 from '../../img/banner2.png'
import banner3 from '../../img/banner3.png'
class Banner extends React.Component {
	constructor(prpos,context) {
		super(prpos,context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
    	var opt = {
    		auto: 2000,
    		callback:function(index){
    			this.setState({index:index})
    		}.bind(this)
    	}
        return (
        	<div>
	            <ReactSwiper className="carousel" swipeOptions={opt}>
	                <div>
	                	<img src = {banner1} />
	                </div>
	                <div>
	                	<img src = {banner2} />
	                </div>
	                <div>
	                	<img src = {banner3} />
	                </div>
	            </ReactSwiper>
	            <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount() {

    }
}

export default Banner