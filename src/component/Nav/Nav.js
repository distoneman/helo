import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './nav.css'

function Nav(props) {
    console.log(props)
    let pic_url = props.profile_pic;
    return (
        <div >
            <div>
                <img src={pic_url} alt="" className='profile-pic'/>
                Welcome: {props.username}
            </div>
            <Link to='/dashboard'>
                <button>Home</button>
            </Link>
            <Link to='/new'>
                <button>New Post</button>
            </Link>
            <Link to='/'>
                <button>Logout</button>
            </Link>
        </div>
    )
}

function mapStateToProps(rstate) {
    console.log(rstate)
    const { username, profile_pic, id } = rstate;
    // console.log(rstate)
    return {
        username,
        profile_pic,
        id
    }
}
// const mapState = (reduxState) => reduxState;
export default connect(mapStateToProps)(Nav); 