import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Write extends Component {
    render(){
        const {hasLogin} = this.props
        if(hasLogin){
            return(
                <div>写文章</div>
            )
        }else{
            return <Redirect to="/login" />
        }
    }
}


//映射到组件的props
const mapStateToProps = (state)=>{
    return {
        hasLogin: state.getIn(['login', 'hasLogin'])
    }
}
const MapDispatchToProps = (dispatch)=>{
    return {
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(Write);