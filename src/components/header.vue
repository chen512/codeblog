<template>
	<section class="header">
		<div class="add"><div class="add-con"></div><p class="txt">添加客户</p></div>
		<div class="customer"><div class="customer-con"></div><p class="txt">意向客户</p></div>
	</section>
</template>
<script>
	export default {
			name: "header",
			data(){
			return {
			}
			},
			methods: {

			},


	}
</script>
<style lang="scss" scoped>
	.header{
		background: #3c467b;
		display: -webkit-box;
		padding: 0.12rem 0.2rem;
		color: white;
		.add{
			-webkit-box-flex: 1;
			text-align: center;
			.add-con:before{
				content: url(/static/img/add.png);
				background-size: 2rem 2rem;

			}
			.add-con{
				transform: scale(0.2);
				margin-top: -5rem;

			}
			.txt{
				margin-top: -5rem;
			}
		}
		.customer{
			-webkit-box-flex: 1;
			text-align: center;
			.customer-con:before{
				content: url(/static/img/cus.png);
				background-size: 2rem 2rem;

			}
			.customer-con{
				transform: scale(0.2);
				margin-top: -5rem;

			}
			.txt{
				margin-top: -5rem;
			}
		}
	}

</style>