<template>
	<div id="login">
		<form method="POST" id="form" @submit.prevent=" send_login ">
			<div class="title">
				登录
				<router-link to="register" id="login">注册<i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
			</div>
			<div class="form-group">
				<div class="group-title">
					<label for="email">登录邮箱</label>
				</div>
				<input type="text" id="email" required v-model.trim=" user.email ">
			</div>
			<div class="form-group">
				<div class="group-title">
					<label for="password">密码</label>
				</div>
				<input type="password" id="password" required v-model.trim=" user.password ">
			</div>
			<button>登录</button>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				user: {
					name: 'd',
					password: 's'
				}
			}
		},
		methods: {
			send_login() {
			this.$http.post('/api/login',this.user,{emulateJSON : true}).then((respone) => {
						if(respone.body == 'fail') {
							alert('请输入正确的邮箱和密码');
						}	else {
						    console.log(respone)
							//this.$store.commit('SET_CURUSER',respone.body[0]);
							this.$router.push({path:'/register',  query: {password: "SHd89c7e3829"}});
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
			color: #fff;
			padding: 20px;
			background-color: #bbaacc;
			a{
				color: #fff;
				float: right;
				i {
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
				height: 20px;
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
			height: 50px;
			line-height: 50px;
			background-color: #bbaacc;
			border: none;
			color: #fff;
		}
	}
</style>