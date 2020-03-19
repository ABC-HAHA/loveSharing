<template>
	<div class="box_bg">
		<nodataPage v-if="list.length == 0"></nodataPage>
		<commitTaskItem :shareList="list"></commitTaskItem>
		<Loading v-if="list.length !== 0" :loadingType="loadingType" :showFalg="showFalg"></Loading>
	</div>
</template>

<script>
import commitTaskItem from '../../components/commitTaskItem/commitTaskItem.vue';
import Loading from '../../components/loading/loading.vue'; //加载动画
import nodataPage from '@/components/nodata/nodata';
var self;
export default {
	data() {
		return {
			list: [],
			showFalg: true,
			loadingType: 2 ,//0，加载，，1加载中，，，2加载全部
			tabIndex: 1,
			tabIndexTwo: 0
		};
	},
	methods: {
		// 查询任务列表
		tuwenData() {
			var self = this;
			uni.request({
				url: this.websiteUrl + '/api/task/myTask?typeId=' + this.tabIndex + '&&status=' + this.tabIndexTwo,
				header: {
					Authorization: this.$store.state.userInfo.token
				},
				success: res => {
					console.log(res);
					self.list = res.data.data;
					console.log(self.list);
				},
				fail: () => {},
				complete: () => {}
			});
		}
	},
	onLoad: function() {
		this.tuwenData();
	},
	onReachBottom() {
		console.log('onReachBottom');
		this.loadingType = 0;
		setTimeout(() => {
			this.tuwenData();
		}, 300);
	},
	components: { commitTaskItem, Loading, nodataPage }
};
</script>

<style lang="less" scoped>
.box_bg {
	background: #f8f8f8;
}
</style>
