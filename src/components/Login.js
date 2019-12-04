
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Button, Input,Typography} from "antd"
import video from '../video/login.mp4'
import '../CSS/style.css'
import 'antd/dist/antd.css';

import axios from 'axios';
import Register from './Register';
axios.defaults.withCredentials = true;
class App extends Component {
    _onChangeUserName=(e)=>{
        this.setState({
            username:e.target.value
        })
        console.log(this.state);
        this.props.setNameSigin(e.target.value)
    }
   
    _onChangePassWord=(e)=>{
        this.setState({
            password:e.target.value
        })
        console.log(this.state);
    }
    _onSubmit=(e)=>{
        e.preventDefault()
        console.log("bbbbb");
        axios.post('http://localhost:1998/api/auth/login',this.state)
        .then(res=>{
           
            // console.log("aaaaaaaaa");
            this.props.setName(res.data.userFound);
            this.props.history.push('Mainpage');
        })
        .catch(err=>{
            alert('Dang Nhap khong thanh cong')
            
        });
    }

    
    
    render() {
        const { Title } = Typography;
        return (
            <div className="container">
            <div className="row">
                {/* <div className="wrap-video">
                    <img src="" />
                    <video id="background-video" loop autoPlay muted>
                        <source src={video} type="video/mp4" />
                        <source src={video} type="video/ogg" />
                    </video>
                </div> */}
{/* 
                 <div className="backgroundimg">
                <img src="https://chibi.info/wp-content/uploads/2019/04/streamer-la-gi.jpg" className="img-login" /> 
</div> */}
                <div className="bg_img col-lg-12">
                    <form  className="form-input">
                    <Title level={2} type="danger">Đăng nhập</Title>
                        <div className="form-group">

                           <Input type="text" className="form-control" onChange={this._onChangeUserName}  placeholder='Tên người dùng ...'/><br></br>
                        </div>
                        <div className="form-group">
                        <Input type="password" className="form-control" onChange={this._onChangePassWord} placeholder='Mật khẩu ...' /><br></br>
                        </div>
                        <div className="form-check">
                        </div>
                        <div>
                            <Button type="primary"  id='login'  onClick={this._onSubmit} style={{
                                marginRight:"20px"
                            }}> Đăng nhập </Button>
                               <Link to={'/register'}>
                                <Button  id='register'> Đăng ký </Button>
                               </Link>
                            <br />
                            
                          
                            <div>

                            </div>
                        </div>

                    </form>

                </div>


            </div>
        </div>
        );
    }
}

export default App;


