<template>
	<section class="addCustomer">
		<ul class="add" @click="tablist">
            <li class="active">信息录入</li>
            <li>添加日志</li>
        </ul>
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

</style>