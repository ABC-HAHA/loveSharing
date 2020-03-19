<template>
	<view >
		<swiper class="swiper"  :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item, index) in swiperArry" :key="index">
				<image class="swiper-list" :src="item.picUrl" ></image>
			</swiper-item>
		</swiper>
		<image class="task-list" src="../../../static/banner2.png"  @click="commitTask"></image>
		<image class="task-list" src="../../../static/banner3.png" @click="taskHistory"></image>
		<image class="task-list1" src="../../../static/banner1.png" @click="getTask"></image>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			swiperArry:[{src:"../../../static/banner.png"}]
		};
	},
	components: {
		
	},
	mounted() {
			  // console.log(2222222)
	    uni.request({
	        url: this.websiteUrl + '/api/pic/query?picType='+ 1,
	        method: 'GET',
	        success: res => {
	            this.swiperArry = res.data.list;
					  console.log(this.swiperImg)
	        },
	        fail: () => {},
	        complete: () => {}
	    });
	},
	onLaunch() {
		
	},
	methods: {
		getTask(){
			uni.navigateTo({
				url: '/pages/task/taskList',
				animationType: 'slide-in-right'
			});
		},
		commitTask(){
			uni.navigateTo({
				url: '/pages/task/commitTaskList',
				animationType: 'slide-in-right'
			});
			
		},
		taskHistory(){
			uni.navigateTo({
				url: '/pages/mine/myTaskList',
				animationType: 'slide-in-right'
			});
		}
		
		}
		
};
</script>

<style lang="less" scoped>
	
		
		.swiper{
			height:350upx;
		}
		.swiper-list{
			margin-top:20upx;
			margin-left:20upx;
			width:710upx;
			height:324upx;
		}
		.task-list1{
			margin-top:20upx;
			margin-left: 20upx;
			width:710upx;
			height:255upx;
		}
		.task-list{
			margin-top:20upx;
			margin-left: 20upx;
			width:710upx;
			height:218upx;
		}
	
	
</style>
