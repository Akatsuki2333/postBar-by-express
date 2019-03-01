<template>
    <div>
        <div id="register">
            <div id="register-header">
                <ul class="register-list">
                    <li class="register-logo"><i></i> <span>| &nbsp &nbsp注册百度账号</span></li>
                    <li class="register-login">
                        <i>我已注册，现在就</i>
                        <!--点击登录后的遮罩部分-->
                        <el-button type="text" @click="dialogFormVisible = true" class="top-banner-link top-banner-link-login"><span class="banner-link-login-btn">登录</span></el-button>
                        <!--遮罩部分-->
                        <el-dialog :visible.sync="dialogFormVisible" :modal-append-to-body='false'>
                            <div id="login-layout" ref="login">
                                <div id="login">
                                    <div id="login-center">
                                        <p class="baidu-icon"><span class="point">・</span><span>用户名密码登录</span></p>
                                        <el-input v-model="ruleForm.userName" placeholder="手机/邮箱/用户名" class="login-input-user"></el-input>
                                        <el-input v-model="ruleForm.password" placeholder="密码" class="login-input-password" type="password"></el-input>
                                        <el-checkbox v-model="checked" class="auto-login">下次自动登录</el-checkbox>
                                        <span v-show="checkedShow" class="checkedShow">请确认协议后再提交，如已勾选请忽略 !</span>
                                        <br/>
                                        <el-button type="primary" class="login-btn" @click="login">登录</el-button>
                                        <br/>
                                        <a href="#" class="login-link login-forget-password">忘记密码？</a><br/>
                                        <span v-show="isShow" class="warning"> 用户名或者密码错误，请重试</span>
                                    </div>

                                </div>
                                <div class="login-bottom">
                                    <a href="#" class="login-link login-scan">扫码登录</a>
                                    <a href="#" class="login-link login-register">立即注册</a>
                                </div>
                            </div>
                        </el-dialog>
                    </li>
                </ul>
            </div>

            <!--表单验证部分-->
            <div id="register-content">

                <!--密码设置与校验-->
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px"
                         class="demo-ruleForm">

                    <!--表单验证部分-->
                    <el-form-item label="用户名" prop="userName">
                        <el-input v-model="ruleForm2.userName" autocomplete="off" placeholder="请设置用户名" class="form-inner"></el-input>
                        <span v-show="isShow" class="warning">× 此用户名太受欢迎,请更换一个</span>
                    </el-form-item>
                    <el-form-item label="手机号" prop="phone">
                        <el-input v-model="ruleForm2.phone" autocomplete="off" placeholder="可用于登录和找回密码" class="form-inner"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="ruleForm2.password" autocomplete="off"
                                  placeholder="请设置登录密码" class="form-inner"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"
                                  placeholder="请确认输入密码" class="form-inner"></el-input>
                    </el-form-item>

                    <el-checkbox v-model="checked1" class="agreement">阅读并接受 <a href="#">《百度用户协议》</a>及 <a href="#">《百度隐私权保护声明》</a>
                    </el-checkbox>
                    <span v-show="checkedShow" class="checkedShow">请确认协议后再提交，如已勾选请忽略 !</span>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                        <button @click="back">返回</button>
                    </el-form-item>

                </el-form>
            </div>


            <!--上传头像部分-->
            <!--上传的 action 中要带 http:// 否则报错 Uncaught (in promise) DOMException: Failed to execute 'open' on 'XMLHttpRequest': Invalid URL-->
            <!--<div id="img-upload">-->
                <!--<span>请上传头像</span>-->
                <!--<el-upload-->
                        <!--class="avatar-uploader"-->
                        <!--action="http://localhost:8081/users/files/fileUpload"-->
                        <!--:show-file-list="false"-->
                        <!--:on-success="handleAvatarSuccess"-->
                        <!--:before-upload="beforeAvatarUpload">-->
                    <!--<img v-if="imageUrl" :src="imageUrl" class="avatar">-->
                    <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
                <!--</el-upload>-->
                <!--<span v-show="imgShow" class="imgShow">请上传头像后再提交</span>-->
            <!--</div>-->
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            // 输入密码
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }
                else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            // 验证密码
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };


            //验证用户名是否已存在
            var userName = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
               }  else {
                    //    this.$ajax.get('/user/exist?userName=' + this.ruleForm2.userName)
                    //        .then(res => {
                    //            if (res.data){  //如果用户已存在
                    //                this.isShow = true;
                    //                return
                    //            }
                    //            this.isShow = false;
                    //            callback();
                    //        })
                    //        .catch(err => {
                    //            console.log(err);
                    //        })
                    //
                    // }
                    callback();
                }

            };


            var phoneNum = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入手机号码'));
                }else if (value.length !== 11) {
                    callback(new Error('请输入正确的手机号码!'));
                } else {
                    callback();
                }
            };

            return {
                //遮罩部分的登录
                ruleForm :{
                    userName: "",
                    password: "",
                },
                isShow:false,
                imgShow:false,
                checkedShow:false,
                input:"",
                input1:"",
                checked : true,
                checked1 : true,
                //上传头像部分
                imageUrl: '',
                //点击登陆部分
                dialogFormVisible: false,
                formLabelWidth: '120px',
                userName:'',
                //注册表单部分
                //双向数据绑定，用来获取到用户输入的信息。
                ruleForm2: {
                    password: '',
                    checkPass: '',
                    userName : '',
                    phone : '',
                },
                rules2: {
                    //validator ： 验证器
                    password: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur'}
                    ],
                    userName :[
                        {validator: userName, trigger: 'blur'}
                    ],
                    phone : [
                        {validator: phoneNum, trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            back(){
              this.$router.push({name : "/"})
            },

            //上传头像到后台并获取返回值部分
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                // 如果用户已上传头像，就把报错信息去掉
                this.imgShow = false;
                console.log(this.imageUrl);
            },

            // 限制上传图片的大小
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },


            //提交按钮部分
            submitForm(formName){
                //要验证是否可以提交
                console.log(this.$refs[formName])
                this.$refs[formName].validate((valid) => {
                   console.log(44);
                    if (valid) {
                        console.log(22)

                        //提交到后台的信息要包括 avatar 头像
                        var data = this.ruleForm2;
                        // data.avatar = this.imageUrl;


                        //把注册信息发送给后台
                        // console.log(this.ruleForm2);  //{__ob__: Observer}
                        var obj =JSON.parse( JSON.stringify(data));  //JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。 为了清除不想要的东西
                        console.log(obj);   //{"password":"123","checkPass":"123","userName":"12","phone":"15521220074"}
                        //后台需要接收的数据类型是json对象，即key是不带引号的。而返回的值是json字符串，key是带引号的。


                        //如果没有上传头像报错，上传了就在返回值处去掉报错信息
                        // if ( obj.avatar == ""){
                        //     this.imgShow = true;
                        //     return
                        // }


                        // 如果协议处没有勾选
                        if (this.checked1 == false){
                            this.checkedShow = true;
                            return
                        }

                      

                        // 提交用户数据  http://localhost:8081/users/addUser?name=wcq&pwd=123
                        // console.log(obj);   //{"password":"123","checkPass":"123","userName":"12","phone":"15521220074"}
                        console.log(obj.userName,obj.userName);
                        this.$ajax.get("/addUser",obj).then(res => {
                                console.log(res.data);
                                // 如果数据提交成功，则跳转到已登录状态的首页
                                this.$router.push({name:"homeLogin"})
                            })
                            .catch(err => {
                                console.log(err);
                            });
                    } else {
                        console.log(33)
                        alert('error submit!!');
                        return false;
                    }
                });


            },
            resetForm(formName) {
                var data = this.ruleForm2;
                data["avatar"] = this.imageUrl;
                var obj =JSON.parse( JSON.stringify(data));
                console.log(obj) 
                
                
                this.$refs[formName].resetFields();
            },


            //头部的登录遮罩部分
            login(){
                var obj = JSON.stringify(this.ruleForm);
                this.$ajax.post("api/user/login",JSON.parse(obj))
                    .then( res => {  //用户登录成功，跳转到已登录的首页
                        this.$router.push({name :"homeLogin"})
                    })
                    .catch( err => {  //用户账号或者密码错误，报错。
                            this.isShow = true;
                        }
                    )
            }
        }
    }
</script>
<style>
    a {
        text-decoration: none;
        color: #1E66C5;
    }

    #register {
        width: 1170px;
        height: 500px;
        margin: 22px auto;
    }

    #register-header {
        width: 100%;
        height: 54px;
        border-bottom: 1px solid #EEEEEE;
        margin-bottom: 40px;
    }

    #register-header .register-list {
        position: relative;
    }

    #register-header .register-logo {
        position: relative;
    }

    #register-header .register-logo i {
        width: 350px;
        height: 66px;
        background: url(../../src/static/imgs/baidu.png) no-repeat center 0;
        background-size: 40%;
        float: left;

    }

    #register-header .register-logo span {
        position: absolute;
        left: 280px;
        top: 18px;
        font-size: 20px;
        color: #C8C8C8;
    }

    #register-header .register-login {
        position: absolute;
        right: 50px;
    }

    #register-header .register-login i {
        font-size: 14px;
    }

    #register-header .register-login .banner-link-login-btn {
        display: inline-block;
        width: 62px;
        height: 30px;
        background-color: #F6F6F6;
        border: 1px solid #DCDCDC;
        text-align: center;
        line-height: 30px;
        color: #0f0f0f;
    }

    /*表单注册内容部分开始*/
    #register-content {
        width: 700px;
        height: 450px;
        float: left;
    }
    /*checked 报警*/
    #register-content .checkedShow {
        color: red;
        font-size: 8px;
    }
    /*重名 报警*/
    #register-content .warning {
        color: red;
        font-size: 10px;
    }

    .form-inner {
        width: 70%;
    }

    /*用户上传头像部分*/
    #img-upload {
       margin-right: 350px;
        float: right;
    }
    /*无上传图片 报警*/
    #img-upload .imgShow {
        font-size: 10px;
        color: red;
    }


    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 80px;
        height: 80px;
        line-height: 80px;
        text-align: center;
    }

    .avatar {
        width: 80px;
        height: 80px;
        display: block;
    }

    .agreement {
        margin: 0 0 50px 100px;
    }

    /*登录弹框部分开始*/
    .el-dialog__body {
        padding: 0;
    }
    .el-dialog__header {
        padding: 0;
    }
    router-link {
        text-decoration: underline;
        cursor: pointer;
    }

    #login-layout {
        width: 356px;
        height: 420px;
    }

    #login {
        width: 302px;
        height: 335px;
        background-color: #fff;
        padding: 25px 26px 0 28px;
    }

        /*密码或用户名错误提示*/
    #login .warning {
        color: red;
        font-size: 10px;
    }

    #login .baidu-icon {
        width: 300px;
        height: 32px;
        background: url(../../src/static/imgs/baidu.png) no-repeat left top;
        background-size: 30%;
        margin-bottom: 42px;
    }

    #login .baidu-icon .point {
        margin: 21px 12px 6px 92px;
    }

    #login .baidu-icon span {
        line-height: 40px;
    }

    .login-input-user {
        margin-bottom: 16px;
    }

    .login-input-password {
        margin-bottom: 22px;
    }

    .auto-login {
        margin-bottom: 16px;
    }

    .login-btn {
        width: 100%;
        margin-bottom: 14px;
    }

    .login-link {
        text-decoration: none;
        color: #3282FD;
    }

    .login-forget-password {
        font-size: 10px;
    }

    .login-bottom {
        height: 36px;
        width: 302px;
        padding: 24px 26px 0 28px;
        background-color: #EFF5FE;
        font-size: 13px;
    }

    .login-bottom .login-scan {
        margin-right: 190px;
    }

</style>