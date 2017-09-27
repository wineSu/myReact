import React from 'react'
import { Link,IndexLink,browserHistory,hashHistory } from 'react-router'
import Banner from '../../contents/banner/Banner'
import { getAdData } from '../../fetch/index/index.js'
import { Switch } from 'antd'
import DatePicker from 'react-mobile-datepicker'

class HomeIndex extends React.Component {
    constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: '',
            time: new Date(),
            isOpen: false,
            showTimes: new Date()
        }
    }
    handleClick () {
        this.setState({ isOpen: true });
    }
    handleSelect (times) {
        this.setState({ time:times, isOpen: false, showTimes:times});
    }
    handleCancel () {
        this.setState({ isOpen: false });
    }
    render() {
        const _this = this
        const data = _this.state.data
        const showTimes = _this.state.showTimes
        let   timeStr = '',
              year = showTimes.getFullYear(),
              month = showTimes.getMonth()+1,
              day = showTimes.getDate();
        timeStr=year+'-'+month+'-'+day;
        return (
            <div className="content">
                <Banner/>
                <div className="navUl">
	            	<Link to="/Home/About" className="navList">
	            		<span className="bar1"></span>
	            		关于我们
	            	</Link>
	            	<Link to="/Home/News" className="navList">
	            		<span className="bar2"></span>
	            		家装新闻
	            	</Link>
	            	<Link to="/Anli" className="navList">
	            		<span className="bar3"></span>
	            		案例展示
	            	</Link>
	            	<Link to="/Home/Team" className="navList">
	            		<span className="bar4"></span>
	            		设计团队
	            	</Link>
	            </div>
                {
                    data.length
                    ? <div>
                        {data.map((item, index) => {
                          return  <img src={item.img} alt={item.title} key={index}/>
                        })}
                        <p>苏苏苏苏US</p>
                    </div>
                    : <div>加载中...</div>
                }
                <Switch defaultChecked={false} />
                <a
                    className="select-btn"
                    onClick={_this.handleClick.bind(_this)}>
                    xunaze
                </a>
                <p ref='city'>{ timeStr }</p>
               <DatePicker
                    value={_this.state.time}
                    isOpen={_this.state.isOpen}
                    theme='android-dark'
                    showFormat='YYYY-MM-DD'
                    onSelect={_this.handleSelect.bind(this)}
                    onCancel={_this.handleCancel.bind(this)} />
            </div>
        )
    }

    componentDidMount() { 
         // 获取广告数据
        const result = getAdData()
        result.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json
            const datas = data.indexData
            this.setState({
                data: datas
            })
        }).catch(ex => {
            // 发生错误
            console.error('首页广告模块获取122212数据报错, ', ex.message)
        })
        //调取手机摄像头
        var i=1,gentry=null,w=null;
        var hl=null,le=null,de=null,ie=null;
        var unv=true;
        // H5 plus事件处理
        function plusReady(){
            // 获取摄像头目录对象
            plus.io.resolveLocalFileSystemURL( "_doc/", function ( entry ) {
                entry.getDirectory( "camera", {create:true}, function ( dir ) {
                    gentry = dir;
                    updateHistory();
                }, function ( e ) {
            
                } );
            }, function ( e ) {
                
            } );
        }
        if(window.plus){
            plusReady();
        }else{
            document.addEventListener("plusready",plusReady,false);
        }
        // 拍照
        function getImage() {
            var cmr = plus.camera.getCamera();
            cmr.captureImage( function ( p ) {
                plus.io.resolveLocalFileSystemURL( p, function ( entry ) {
                    createItem( entry );
                }, function ( e ) {
                    
                } );
            }, function ( e ) {
                
            }, {filename:"_doc/camera/",index:1} );
        }
        //点击拍照
        var camera = this.refs.city;
        // camera.onclick = function(){getImage()}
    }
}

export default HomeIndex