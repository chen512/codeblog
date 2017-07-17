<template>
	<section class="header">
		<div class="add" @click = 'addCustomer'><div class="add-con"></div><p class="txt">添加客户</p></div>
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
               addCustomer: function(){
               this.$http.post('http://test3-cfs-ms.pa18.com:12280/cfsmsfront/mapp/request/v1/handle.do?umId=XX007&token=19699452c6e74ad9b0a02a9158d09e28&isOtherChannel=N&requestType=MappGetDealCount&requestDataMap=Tzv98xLgk22HDcT4wBL58EhfHFVDo3WV0296RxaQgYTRXJsPzJCLaN%2F6sLVs%2BTYfgXYSrg5DLJiO%0AzLPRahwEOFC6BpLoF%2BNj1OchpgXh6AM%3D&secPass=A2pIq7ZE0JXIeX1BOdb5mq8mCoAQbwdtCuUGe6GIMGoa3YC5skOEVXNXsGUsdjNvDcSgRzlb2saw%0AFLwuyBMJ%2FJWFydQNDZeVAdpk%2FGEed1cbvgCRQRQVdAlOhOLpgDEIyeKSwyNxJNu2reHQC2BDC7Ys%0A80QKqK6O3pKxYvsRmTk%3D%0A', function (req, res) {
               //alert(req);
               });
               alert(23)
               }
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