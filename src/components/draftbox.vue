<template>
	<section class="draftbox">
        <div id="intInfo" style="border-bottom: solid 1px #f3f3f3">
            <!--我的客户"-->
            <div class="info">
                <div class="jsOpen" style="transition: -webkit-transform 500ms cubic-bezier(0.1, 0.57, 0.1, 1); transform: translate(0px, 0px) translateZ(0px);">
                    <div class="cir-chart lh bb1">
                        <div class="dwb">
                            <div class="circleprogress">
                                <div class="box-vam"><span class="num">90%</span></div>
                            </div>
                        </div>
                        <div class="dd time">2017.07.10</div>
                    </div>
                    <div class="merge-top lh bb1"><div class="dt">刘开心</div><div class="dd">18566660001<div class="i-tel i-tel-spr"></div></div></div>
                    <div class="merge-bot line lh bb1"><div class="dt">计划贷款金额（元）</div><div class="dd">50000</div></div>
                </div>
                <div class="draft-box">
                    <div class="draft-btn draft-cancel">删除</div>
                </div>
            </div>
        </div>
	</section>
</template>
<script>
	export default {
			name: "drafbox",
			data(){
			return {
			}
			},
			methods: {

			},
			mounted(){

			let $body = document.getElementsByClassName('draftbox')[0];
			  var x, y, X, Y, swipeX, swipeY;
            $body.addEventListener('touchstart', function(event) {
                x = event.changedTouches[0].pageX;
                y = event.changedTouches[0].pageY;
            });
            let box = document.getElementsByClassName('draft-box')[0];
			let info = document.getElementsByClassName('info')[0];

			box.addEventListener('click', function(e){alert(123)});
			$body.addEventListener('touchmove', function(e){
					console.log(e.changedTouches[0].clientX)
			 //pos.x += target.offsetLeft;
             //pos.y += target.offsetTop;
             console.log(box.offsetLeft+'----'+box.offsetRight)
             X = e.changedTouches[0].clientX;
             Y = e.changedTouches[0].clientY;
             X - x > 10
			if(X-x > 10){
              box.setAttribute('style','z-index:0');
              info.setAttribute('style','margin-left:0');

			}
			 if(x-X > 10){
			   box.setAttribute('style','z-index:99');
			   info.setAttribute('style','margin-left:-6rem');
			   }
			   }
			)
			}


	}
</script>
<style lang="scss" scoped>
    #intInfo{
        position: relative;
        z-index: 3;
        background: #fff;
        font-size: 0.3rem;
        color: #333;
        .info{
            .jsOpen{
                position: relative;
                z-index: 3;
                background: #fff;
                transition: -webkit-transform 500ms cubic-bezier(0.1, 0.57, 0.1, 1);
                transform: translate(-105.594px, 0px) translateZ(0px);
                .cir-chart{
                    margin: 0 .2rem 0 0;
                    text-align: center;
                    font-size: .3rem;
                    position: relative;
                    display: -webkit-box;
                    .time{
                        margin-top: 2rem;
                        text-align: right;
                        margin-left: 15rem;
                    }
                    .dwb{
                        display: -webkit-box!important;

                        .circleprogress{
                            margin: 0 .2rem 0 0;
                            width: 40px;
                            height: 40px;
                            text-align: center;
                            color: #ffba00;
                            font-size: .3rem;
                            position: absolute;
                            top: 0;
                            left: 0.3rem;
                            overflow: hidden;
                            line-height: 0.3rem;
                            background: url(../../static/img/icon-complete.png) no-repeat;
                            background-size: 100% auto;
                            .box-vam{
                                width: 100%;
                                position: absolute;
                                top: 0;
                                height: 100%;
                                display: -webkit-box;
                                -webkit-box-pack: center;
                                -webkit-box-orient: vertical;
                                vertical-align: middle;

                            }

                        }

                    }
                }
                .merge-top{
                    display: -webkit-box;
                    line-height: 3rem;
                    padding-left: 1rem;
                    .dd{
                        margin-left:11rem;
                    }
                }
                .merge-bot{
                    display: -webkit-box;
                    line-height: 3rem;
                    padding-left: 1rem;
                    .dd{
                        margin-left:8rem;
                    }
                }
                .px{
                    line-height: 1px;
                    height:1px;
                    background: #c8c7cc;
                    margin-left: 1rem;
                }


            }
            .draft-box{
                display: -webkit-box;
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;
                bottom: 0;
                .draft-btn{
                    width: 6rem;
                    line-height: 0.5rem;
                    background: #ff9600;
                    text-align: center;
                    color: #fff;
                    display: -webkit-box;
                    -webkit-box-pack: center;
                    -webkit-box-orient: vertical;
                    vertical-align: middle;
                }
            }
        }

    }


</style>