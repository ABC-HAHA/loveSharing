<template>
	<view >
		<image  class="agent-item" src="../../static/problem2.png" @click="myTeam"></image>
		<image  class="agent-item" src="../../static/problem1.png" @click="toAnswer"></image>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		 methods: {
			myTeam(){
				uni.navigateTo({
					url: '/pages/mine/myTeam',
					animationType: 'slide-in-right'
				});
			},
			toAnswer(){
				uni.navigateTo({
					url: '/pages/mine/answer',
					animationType: 'slide-in-right'
				});
			}
		 }
	}
</script>

<style lang="less" scoped>
	.agent-item{
		width:750upx;
		height: 326upx;;
	}
</style>
