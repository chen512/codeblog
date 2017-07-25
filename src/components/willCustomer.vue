<template>
	<section class="addCustomer">
		<ul class="add" @click="tablist">
            <li class="active">我的客户</li>
            <li>被推荐意向客户</li>
        </ul>
        <div id="intInfo" style="border-bottom: solid 1px #f3f3f3">
            <!--我的客户"-->
            <div class="info">
                <div class="jsOpen" style="transition: -webkit-transform 500ms cubic-bezier(0.1, 0.57, 0.1, 1); transform: translate(0px, 0px) translateZ(0px);">
                    <div class="cir-chart">
                        <div class="dwb">
                            <div class="circleprogress">
                                <svg width="80px" height="80px">
                                    <circle cx="40" cy="40" r="25" stroke-width="7" stroke="#ebeaea" fill="none"></circle>
                                    <circle cx="40" cy="40" r="25" stroke-width="7" stroke="#ffba00" fill="none" stroke-dasharray="150 659" id="rank-percent"></circle>
                                </svg>
                                <div class="box-vam"><span class="num">90%</span></div>
                            </div>
                            <div class="num-inte"><span class="finish_percent">完整度90%</span></div>
                        </div>
                        <div class="dd time">2017.07.10</div>
                    </div>
                    <div class="px"></div>
                    <div class="merge-top"><div class="dt">刘开心</div><div class="dd">18566660001<div class="i-tel i-tel-spr"></div></div></div>
                    <div class="merge-bot line"><div class="dt">计划贷款金额（元）</div><div class="dd">50000</div></div>
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
			name: "addCustomer",
			data(){
			return {
			}
			},
			methods: {
               tablist: function(e){
               e.target.setAttribute("class", 'active');
               Array.prototype.slice.call(e.currentTarget.children).indexOf(e.target) == '1' ? e.currentTarget.children[0].removeAttribute("class", 'active') &&  e.target.setAttribute("class", 'active') : e.currentTarget.children[1].removeAttribute("class", 'active') && e.target.setAttribute("class", 'active');
               //e.target.style.color = 'black';

               }
			},
			mounted(){
			let $body = document.getElementsByClassName('addCustomer')[0];
			  var x, y, X, Y, swipeX, swipeY;
            $body.addEventListener('touchstart', function(event) {
                x = event.changedTouches[0].pageX;
                y = event.changedTouches[0].pageY;
            });
			$body.addEventListener('touchmove', function(e){
			let box = document.getElementsByClassName('draft-box')[0];
			let info = document.getElementsByClassName('info')[0];
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
	.add{
        display: -webkit-box;
        height: 1.09rem;
        text-align: center;
        background-color: #fff;
        position: -webkit-sticky;
        width: 100%;
        z-index: 5;
        top: 0;
        line-height: 3rem;
        height:3rem;
        li{
            -webkit-box-flex: 1;
            width: 100%;
            height: 2.69rem;
            line-height: 2.8rem;
            border-bottom: 1px solid #c8c7cc;
            font-size: 0.34rem;
            position: relative;
            padding-bottom: 2px;
            z-index: 2;
            height: 2.8rem;
        }
        li.active{
            color: #ff6900;
            border-bottom: 3px solid #ff6900;
            padding: 0;
        }
    }
    #intInfo{
        position: relative;
        z-index: 3;
        background: #fff;
        .info{
            .jsOpen{
                position: relative;
                z-index: 3;
                background: #fff;
                transition: -webkit-transform 500ms cubic-bezier(0.1, 0.57, 0.1, 1);
                transform: translate(-105.594px, 0px) translateZ(0px);
                .cir-chart{
                    margin: 0 .2rem 0 0;
                    width: 80px;
                    height: 80px;
                    text-align: center;
                    font-size: .3rem;
                    position: relative;
                    display: -webkit-box;
                    .time{
                        margin-left: 8rem;
                        margin-top: 2rem;
                    }
                    .dwb{
                        display: -webkit-box!important;

                        .circleprogress{
                            margin: 0 .2rem 0 0;
                            width: 80px;
                            height: 80px;
                            text-align: center;
                            color: #ffba00;
                            font-size: .3rem;
                            position: relative;
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
                        .num-inte{
                            margin-top: 2rem;
                            color: #ff6900
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