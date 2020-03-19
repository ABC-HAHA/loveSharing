<template>
	<view class="box">
		<view class="box-item" v-for="(item, index) in shareList" :key="index" :id="item.taskId" @tap="toDetail(item.taskId)" >
			<image :src="item.taskImg" mode=""></image>
			<view class="box-item-rigth">
				<text class="box-item-title">{{item.taskName}}</text>
				<text class="box-item-status">待分享</text>
				<text class="box-item-money">￥{{item.price}}.00元</text>
				<view class="too-mach">更多></view>
			</view>
		</view>
		
		
	</view>
	
</template>

<script>
export default {
	data() {
		return {
			taskTitle: "顶顶顶顶"
		};
	},
	methods: {
		// 跳转详情
		toDetail(id) {
			console.log(id);
			uni.navigateTo({
				url: 'detail/commitDetail?esaId=' + id
			});
		}
	},
	props: {
		shareList: {
			type: Array
		},
		id:{
			type:Number
		}
	}
};
</script>

<style lang="less" scoped>
.box {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.box-item{
		width:710upx;
		margin-top: 20upx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		>image{
			width:350upx;
			height:280upx;
		}
		.box-item-rigth{
			display: flex;
			flex-direction: column;
			margin-left: 40upx;
			margin-top: 20upx;
			.box-item-title{
				font-size: 30upx;
			}
			.box-item-status{
				font-size: 28upx;
				margin-top: 30upx;
			}
			.box-item-money{
				font-size: 24upx;
				margin-top: 12upx;
				color: red;
			}
			.too-mach{
				float: right;
				text-align: center;
				margin-top: 20upx;
				margin-left: 180upx;
				font-size: 24upx;
				width:100upx;
				height:50upx;
				line-height: 50upx;
				color: #FFFFFF;
				background-color:#febd38 ;
				
			}
		}
	}
	
	
}
</style>
