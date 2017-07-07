<template>
	<div id="register">
		<form method="POST" id="form" @submit.prevent=" send_register ">
			<div class="title">
				注册
				<router-link to="login" id="login">登录<i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
			</div>
			<div class="form-group">
				<div class="group-title">
					<label for="name">姓名</label>
				</div>
				<input type="text" id="name" required v-model.trim=" user.name ">
			</div>
			<div class="form-group">
				<div class="group-title">
					<label for="email">邮箱</label>
				</div>
				<input type="text" id="email" pattern="^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$" required v-model.trim=" user.email ">
			</div>
			<div class="form-group">
				<div class="group-title">
					<label for="password">密码</label>
				</div>
				<input type="password" id="password" pattern="^(\w){6,20}$" required v-model.trim=" user.password ">
			</div>
			<div class="form-group">
				<div class="group-title">
					<label for="password-repeat">重复输入密码</label>
				</div>
				<input type="password" pattern="^(\w){6,20}$" id="password" required v-model.trim=" user.password_repeat ">
			</div>
			<div class="form-group">
				<div class="group-title">
					<label for="position">职称</label>
				</div>
				<select id="position" v-model=" user.position " required>
					<option v-for=" item in position_arr " :value=" item ">{{ item }}</option>
				</select>
			</div>
			<!--<div class="form-group">-->
				<!--<div class="group-title">-->
					<!--<label for="deparment">所属院系</label>-->
				<!--</div>-->
				<!--<select id="deparment" v-model=" user.deparment " required>-->
					<!--<option v-for=" item in department_arr " :value=" item ">{{ item }}</option>-->
				<!--</select>-->
			<!--</div>-->
			<button>注册</button>  
		</form>
	</div>
</template>

<script>
	export default {
		name: 'register',
		data() {
			return {
				position_arr: ['码农','司机','叫兽','老师'],
				user: {
					name: '',
					password: '',
					email: '',
					password_repeat: '',
					position: ''
				}
			}
		},
	    mounted(){
	    this.user.password = this.$route.query.password;
			  console.log('lll'+this.$route.query.password) //
			  //我想在这里得到参数,会报下面这个错误
		  },
		methods: {
			send_register() {
				if(this.user.password != this.user.password_repeat) {
					return false;
				};
				this.$http.post('/api/register',this.user)
					.then((respone) => {
						if(respone.body == 'fail') {
							alert('该邮箱已被使用');
						}	else {
							this.$store.commit('SET_CURUSER',respone.body);
							this.$router.push('/');
						}
					})
					.catch((error) => {
						console.log(error);
					})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#form{
		padding-bottom: 20px;
		.title{
			font-size: 22px;
			color: #fff;
			padding: 20px;
			background-color: #bbaacc;
			a{
				color: #fff;
				float: right;
				i{
					margin-left: 5px;
				}
			}
		}
		.form-group {
			background-color: #fff;
			padding: 0 20px;
			.group-title {
				color: #828282;
				padding-top: 10px;
				padding-bottom: 5px;
			}
			input{
				width: 100%;
				height: 30px;
				border:none;
				border-bottom: 1px solid #ccc;
			}
			select{
				width: 100%;
				height: 30px;
				border:none;
				border-bottom: 1px solid #ccc;
  			    appearance:none;
			}
		}
		button{
			margin-top: 10px;
			width: 100%;
			height: 35px;
			line-height: 35px;
			background-color: #bbaacc;
			border: none;
			color: #fff;
			font-size: 18px;
		}
	}
</style>