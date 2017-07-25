<template>
	<!--<div id="header">-->

	<!--</div>-->
	<!--DS草稿箱，进度件，回退件，待审核件-->
	<section>
		<v-header></v-header>
	    <div class="referee-home item-flex">
		<div class="item">
			<div class="icon-pagehome icon-draftBox-small"></div>
			<p>草稿箱</p>
		</div>
		<div class="item">
			<div class="icon-pagehome icon-progress-small"></div>
			<p>进度件</p>
		</div>
		<div class="item">
			<div class="icon-pagehome icon-fallback-small"></div>
			<p>回退件</p>
		</div>
		<div class="item">
			<div class="icon-pagehome icon-review-small"></div>
			<p>待审核</p>
		</div>
	    </div>
		<!--业绩-->
		<div class="section my-performance" >
			<div class="pagehome-title line">
				<div>我的业绩</div>
				<div class="pagehome-more">更多<span class="icon-more"></span></div>
			</div>
			<div class="achievement">
				<div class="item">
					<p class="num loanCount">{{home.count}}</p>
					<p class="txt">放款件数</p>
				</div>
				<div class="item">
					<p class="num loanamt">{{home.money}}</p>
					<p class="txt">放款金额(元)</p>
				</div>
			</div>
		</div>
		<div class="section">
			<div class="tool">
				<img src="../../static/img/banner_tools.png" class="dis" width="100%">
			</div>
		</div>
		<!--产品介绍--->
		<div class="section line">
			<div class="pagehome-title line product">
				<div>产品介绍</div>
				<div class="pagehome-more">更多<span class="icon-more"></span></div>
			</div>
			<div class="carousel js-horizontalScroll carousel-home">
				<div class="carousel-inner pl3">
					<div class="item product-life"><img src="../../static/img/life-sm.jpg"></div>
					<div class="item product-car"><img src="../../static/img/car-sm.jpg"></div>
					<div class="item product-owner"><img src="../../static/img/owner-sm.jpg"></div>
					<div class="item product-salary"><img src="../../static/img/salary-sm.jpg"></div>
					<div class="item product-room"><img src="../../static/img/room-sm.jpg"></div>
				</div>
				<div class="hidden_bar"></div>
			</div>
		</div>
	</section>

</template>

<script>
    import header from './header.vue';
	export default {
		name: 'home',
		data() {
			return {
			    home:{
			    count:0,
			    money:0
			    },
				content:123
			}
		},
	    mounted(){
	   // this.content = 456;
			  //我想在这里得到参数,会报下面这个错误
		  },
		methods: {
			show_list(e) {
			 e.preventDefault();
             this.$emit("show_list");
			}
		},
		created() {


		    this.$http.get('/api/home').then((response) => {
		    if(response.body.resultCode == "0") {
            this.home.count=response.body.count;
            this.home.money=response.body.money;
            } else {
            alert('系统异常')
            }

        });
      },
		components: {
         'v-header': header
    }
	}
</script>

<style lang="scss" scoped>
		.referee-home{
		background: #fff;
		color: #333;
		padding: 0.22rem 0.1rem 0.16rem;
		position: relative;
		}
		.item-flex{
		display: -webkit-box;
			.item{
				width: 100%;
				text-align: center;
				-webkit-box-flex: 1;
				.icon-pagehome {
					color: #fff;
					width: 2.38rem;
					height: 0.68rem;
					margin: 0.6rem auto 2rem;
					position: relative;
				}
				.icon-pagehome:before{
					background-image: url(../../static/img/icon-pagehome.png);
					background-repeat: no-repeat;
					background-size: 68rem auto;
					content: '';
					display: block;
					width: 10000%;
					height: 10000%;
					-webkit-transform-origin: 0 0;
					-webkit-transform: scale(.01);
					transform-origin: 0 0;
					transform: scale(.04);
				}
				.icon-draftBox-small.icon-pagehome:before{
				background-position: -3rem -220rem;
				}
				.icon-progress-small.icon-pagehome:before{
					background-position: -3rem -284rem;
				}
				.icon-fallback-small.icon-pagehome:before{
					background-position: -3rem -346rem;
				}
			}
		}
	    .my-performance{
			margin-top:.6rem;
			background-color: #fff;
			position: relative;
			display: block;
			.pagehome-title{
				display: -webkit-box;
				font-size: .3rem;
				color: #000;
				padding: 0.15rem 1.3rem;
				line-height: 2rem;
				position:relative;
				.pagehome-more{
					-webkit-box-flex: 1;
					text-align: right;
					font-size: .24rem;
					color: #999;
					.icon-more{
						display: inline-block;
						width: .86rem;
						height: .82rem;
						background: url(../../static/img/icon-more.png) no-repeat;
						-webkit-background-size: 100% auto;
						background-size: 100% auto;
						margin-left: .08rem;
						vertical-align: top;
						margin-top: .8rem;
					}
				}
			}
			.achievement{
				padding: 1.4rem 0 1.3rem;
				display: -webkit-box;
				.item{
					width: 100%;
					text-align: center;
					-webkit-box-flex: 1;
					position: relative;
					.loanCount, .loanamt{
						font-size: .48rem;
						color: #fc7946;
					}
					.txt{
						font-size: .24rem;
						color: #999;
						margin-top: .02rem;
					}
				}
				.item:after{
					content: "";
					display: block;
					height: 100%;
					width: 1px;
					background: #ebeaea;
					-webkit-transform: scaleX(.5);
					-webkit-transform-origin:0 0;
					position: absolute;
					top: 0;
					left: 0;
				}
			}

		}
	    .line:after{
			content: "";
			display: block;
			position: absolute;
			width: 100%;
			height: 1px;
			background-color: #c8c7cc;
			-webkit-transform: scaleY(.5);
			-webkit-transform-origin:0 0;
			bottom: -1px;
			left: 0;
		}
	    .line{
			position: relative;
		}
		.section{
			margin-top: .6rem;
			.product {
				padding: 0.15rem 1.3rem;
				line-height: 2rem;
				font-size: .3rem;
				color: #333;
				display: -webkit-box;
				background: #fff;
				.pagehome-more {
					-webkit-box-flex: 1;
					text-align: right;
					font-size: .24rem;
					color: #999;
					.icon-more {
						display: inline-block;
						width: .86rem;
						height: .82rem;
						background: url(../../static/img/icon-more.png) no-repeat;
						-webkit-background-size: 100% auto;
						background-size: 100% auto;
						margin-left: .08rem;
						vertical-align: top;
						margin-top: .8rem;
					}
				}
			}
			.js-horizontalScroll{
				position: relative;
				overflow: hidden;
				.carousel-inner{
					padding: .2rem 0 0 .3rem;
					display: -webkit-box;
					height: 8.5rem;
					width: 100%;
					overflow-x: scroll;
					.item{
						padding-right: 0.1rem;
						position: relative;
						img{
							display: block;
							width: 11.50rem;
							height: 100%;
						}
					}
				}
			}
		}
</style>