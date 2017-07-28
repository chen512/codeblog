<template>
	<section class="addCustomer">
		<ul class="add" @click="tablist">
            <li class="active">信息录入</li>
            <li>添加日志</li>
        </ul>
        <div class="entry">
            <div class="title"><h1 class=""><span class="i-title"></span>基本信息</h1><div class="i-col"></div></div>
            <div class="list">
                <div class="line pr7 con">
                    <div>客户姓名</div>
                    <div class="inp"><input placeholder="必填"/></div>
                </div>
                <div class="line con">
                    <div>手机号码</div>
                    <div class="inp"><input placeholder="必填"/></div>
                    <div class="i-book"></div>
                </div>
                <div class="line con pr7">
                    <div>身份证</div>
                    <div class="inp"><input placeholder="中国大陆身份证号"/></div>
                </div>
                <div class="line con pr7">
                    <span>性别</span>
                    <span class="inp">
                      <select dir="rtl">
                      <option value="" v-for='item in items'>{{item.message}}</option>
                      </select>
                    </span>
                </div>

            </div>
            <div class="title"><h1 class=""><span class="i-asset"></span>客户资产</h1><div class="i-col"></div></div>
            <div class="hou box m1 bb1 h2" v-if="flag">
                <div class="">房产</div>
                <div class="ri">
                    <div class="in-bl">
                        <input type="radio" id="h1" name="radio1" class=""/>
                        <label for="h1"><span></span>有</label>
                    </div>
                    <div class="in-bl">
                        <input type="radio" id="h2" name="radio1"/>
                        <label for="h2"><span></span>无</label>
                    </div>
                </div>
            </div>
            <div class="hou box m1 bb1 h2" v-else>
                <div class="">车辆</div>
                <div class="ri">
                    <div class="in-bl">
                        <input type="radio" id="h1" name="radio" class=""/>
                        <label for="h1"><span></span>有</label>
                    </div>
                    <div class="in-bl">
                        <input type="radio" id="h2" name="radio"/>
                        <label for="h2"><span></span>无</label>
                    </div>
                </div>
            </div>
            <div class="hou box m1 h2">
                <div>备注</div>
                <div class="inps"><input placeholder="必填" class="m"/></div>
            </div>
        </div>
        <div class="btn">
            <div class="b-text">申请录单</div>
        </div>
	</section>
</template>
<script>
	export default {
			name: "addCustomer",
			data(){
			return {
			    flag: 1,
			    items: [
                  {message: 'Foo' },
                  {message: 'shift' },
                  {message: 'fuck' },
                  {message: 'Bar' }
               ]
			}
			},
			methods: {
               tablist: function(e){
               e.target.setAttribute("class", 'active');
               Array.prototype.slice.call(e.currentTarget.children).indexOf(e.target) == '1' ? e.currentTarget.children[0].removeAttribute("class", 'active') &&  e.target.setAttribute("class", 'active') : e.currentTarget.children[1].removeAttribute("class", 'active') && e.target.setAttribute("class", 'active');
               //e.target.style.color = 'black';

               }
			},


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
    .entry{
        background-color: #fff;
        color: #333;
        font-size: 0.3rem;
        .title{
            margin: 1rem;
            height: 3rem;
            line-height: 3rem;
            h1{
                .i-title{
                    background: url(../../static/img/i-info.png) no-repeat;
                    background-size: 1.5rem 1.5rem;
                    display: inline-block;
                    width: 1.5rem;
                    height: 1.5rem;
                    margin: -0.5rem 0.08rem 0 0;
                    vertical-align: -webkit-baseline-middle;

                }
                .i-asset{
                    background: url(../../static/img/i-asset.png) no-repeat;
                    background-size: 1.5rem 1.5rem;
                    display: inline-block;
                    width: 1.5rem;
                    height: 1.5rem;
                    margin: -0.5rem 0.08rem 0 0;
                    vertical-align: -webkit-baseline-middle;
                }

            }
            .i-col{
                position: absolute;
                right: 1rem;
                top: 4.5rem;
                background: url(../../static/img/i-collected.png) no-repeat;
                background-size: 2rem 2rem;
                width: 2rem;
                height: 2rem;
                display: inline-block;
            }
        }
        .list{
            margin: 1rem;
            .line{
                display: -webkit-box;
                text-align: right;
                margin-left: 0.3rem;
                -webkit-box-flex: 1;
                color: #000;
                line-height: 2rem;
                border-bottom: 1px #ebebeb solid;
                .inp{
                    text-align: right;
                    margin-left: 0.3rem;
                    -webkit-box-flex: 1;
                    color: #000;
                    input{
                        text-align: right;
                        outline: none;
                    }
                    select{
                        background-color: #ffffff;
                        background-image: none !important;
                        filter: none !important;
                        border: 1px solid #e5e5e5;
                        outline: none;
                        height: 25px !important;
                        line-height: 25px;
                        -webkit-box-flex: 1;
                        /* float: right; */
                        margin-left: 3rem;
                        width: 10rem;
                    }
                }
                .i-book{
                    width: 1.7rem;
                    height: 1.84rem;
                    background: url(../../static/img/i-book.png) no-repeat;
                    background-size: 100% auto;
                }
            }

        }
        .hou{
            .ri{
                position: absolute;
                right: 2rem;
            }
        }

    }
    .btn{
        position: fixed;
        z-index: 110;
        left: 0;
        bottom: 0;
        width: 100%;
        .b-text{
            height: 2.1rem;
            line-height: 2.1rem;
            text-align: center;
            font-size: 0.36rem;
            background-color: #f05a23;
            color: #fff;
        }
    }

</style>