<template>
	<div>
		<head-top></head-top>
		<div class="container">
			<div class="left">
				<el-card class="totalCage" :body-style="{ display: 'flex', padding: 0 }">
					<i class="icon el-icon-s-grid" :style="{ background: '#868686' }"></i>
					<div class="detail">
						<!-- 动态获取下面的数据  -->
						<p class="num" v-if="this.totalcage === ''">0</p>
						<p class="num" v-else>{{this.totalcage}}</p>
						<p class="txt">总笼位数/个</p>
					</div>
				</el-card>

				<el-upload class="upload-demo" :limit="1" action="#" :on-change="changemiceFile" multiple
                :http-request="getmiceUpload" accept=".xlsx, .xls">
					<el-button size="small" type="info">导入小鼠信息</el-button>
				</el-upload>

				<el-upload class="upload-demo" :limit="1" action="#" :on-change="changecageFile" multiple
                :http-request="getcageUpload" accept=".xlsx, .xls">
					<el-button size="small" type="info">导入笼位信息</el-button>
				</el-upload>

				<el-button type="info" @click="dialogTableVisible = true" disabled>查看笼位信息</el-button>
			</div>

			<div class="right">
				<el-card class="cage" v-for="item in countData" :key="item.name"
					:body-style="{ display: 'flex', padding: 0 }">
					<i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
					<div class="detail">
						<!-- 动态获取下面的数据  -->
						<p class="num" v-if="item.value">{{ item.value }}</p>
						<p class="num" v-else>0</p>
						<p class="txt">{{ item.name }}</p>
					</div>
				</el-card>
			</div>
		</div>


		<el-dialog title="查看笼位信息" :visible.sync="dialogTableVisible" center>
            <table border="1" align="center" cellpadding="0" cellspacing="0">
				<tbody>
					<tr height="40px">
						<th colspan="1" rowspan="1">房间</th>
						<th colspan="1" rowspan="1">笼架</th>
						<th colspan="1" rowspan="1">饲养笼</th>
						<th colspan="1" rowspan="1">繁殖笼</th>
						<th colspan="1" rowspan="1">实验笼</th>
						<th colspan="1" rowspan="1">其他笼</th>
						<th colspan="1" rowspan="1">总笼数</th>
						<th colspan="1" rowspan="1">实用笼数</th>
						<th colspan="1" rowspan="1">剩余笼数</th>
					</tr>
				</tbody>
				<tbody v-for="(data, index) in this.cageinfo">
					<tr height="40px"  v-for="(cageinfo, index1) in data.shelf_usages">
						<td colspan="1" rowspan="4">{{index}}号房</td>
						<th colspan="1" rowspan="1">{{shelf_id[parseInt(index)-1][parseInt(index1)-1]}}</th>
						<th colspan="1" rowspan="1" v-if="cageinfo.feed">{{cageinfo.feed}}</th>
						<th colspan="1" rowspan="1" v-else>0</th>
						<th colspan="1" rowspan="1" v-if="cageinfo.coitus">{{cageinfo.coitus}}</th>
						<th colspan="1" rowspan="1" v-else>0</th>
						<th colspan="1" rowspan="1" v-if="cageinfo.drugtest">{{cageinfo.drugtest}}</th>
						<th colspan="1" rowspan="1" v-else>0</th>
						<th colspan="1" rowspan="1">3</th>
						<th colspan="1" rowspan="1" v-if="cageinfo.total">{{cageinfo.total}}</th>
						<th colspan="1" rowspan="1" v-else>0</th>
						<th colspan="1" rowspan="4" v-if="data.used">{{data.used}}</th>
						<th colspan="1" rowspan="1" v-else>0</th>
						<th colspan="1" rowspan="1" v-if="cageinfo.unused">{{cageinfo.unused}}</th>
						<th colspan="1" rowspan="1" v-else>0</th>
					</tr>
				</tbody>
			</table>
        </el-dialog>
	</div>


</template>

<script>
import headTop from '../components/headTop.vue'
import {getallcageinfo, gethouseinfo,importcageinfo,importmiceinfo} from '../api/data'
export default {
	components: {
		headTop,
	},
	data() {
		return {
			countData: [
				{
					name: "总实验笼数/个",
					value: 3200,
					icon: "menu",
					color: "#aeaeae",
				},
				{
					name: "总饲养笼数/个",
					value: 960,
					icon: "menu",
					color: "#aeaeae",
				},
				{
					name: "总繁殖笼数/个",
					value: 1800,
					icon: "menu",
					color: "#aeaeae",
				},
				{
					name: "总空笼数/个",
					value: 2940,
					icon: "present",
					color: "#aeaeae",
				}
			],
			options: [
				{
					value: '选项1',
					label: '查看鼠房使用情况'
				}, {
					value: '选项2',
					label: '查看鼠房品系统计情况'
				}, {
					value: '选项3',
					label: '查看项目号统计结果'
				}, {
					value: '选项4',
					label: '查看笼位类型统计结果'
				}, {
					value: '选项5',
					label: '查看品系类型统计结果'
				}, {
					value: '选项6',
					label: '繁殖种状态统计'
				}, {
					value: '选项7',
					label: '实验种状态统计'
				}
			],
			dialogTableVisible: false,
			value: '',
			totalcage:1,
			cageinfo: {},
			shelf_id: [],
			file:[],
			cagefileList: [],
			micefileList: [],
		}
	},
	created(){
		getallcageinfo().then((res) => {
			this.countData[0].value = res.data.drugtest
			this.countData[1].value = res.data.feed
			this.countData[2].value = res.data.coitus
			this.countData[3].value = res.data.empty

			this.totalcage=res.data.total
		})
		gethouseinfo().then((res) => {
			if (res.code === 200) {
				this.cageinfo = res.data
				this.shelf_id = []
				for (var i in this.cageinfo){
					this.shelf_id.push(Object.keys(this.cageinfo[i].shelf_usages))
				}
			}
		})
	},
	methods: {
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePreview(file) {
			console.log(file);
		},
		handleExceed(files, fileList) {
			this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
		},
		beforeRemove(file, fileList) {
			return this.$confirm(`确定移除 ${file.name}？`);
		},
		getmiceUpload(file){
			console.log(file);
			this.file=file
			let formData=new FormData();
			// console.log(this.file.file.name)
			formData.append("file",this.file.file)
			importmiceinfo(formData)
		},
		getcageUpload(file){
			console.log(file);
			this.file=file
			let formData=new FormData();
			// console.log(this.file.file.name)
			formData.append("file",this.file.file)
			importcageinfo(formData)
		},
		changemiceFile(file,micefileList){
			this.micefileList=micefileList
		},
		changecageFile(file,cagefileList){
			this.cagefileList=cagefileList
		}
	}
}
</script>

<style lang="less" scoped>
.container {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	padding-top: 8%;

	.el-card {
		border: 1px solid rgb(219, 219, 219);
		margin: 20px;

		.detail {
			margin:8%
		}

	}

	.left {
		width: 50%;
		height: 50%;
		padding-left: 5%;
		.totalCage {
			width: 70%;
			height: 40%;

			.icon {
				width: 37.5%;
				font-size: calc(100vw * 50 / 1920);
				display: flex;
				justify-content: center;
				align-items: center;
				color: white;
			}

			.num {
				font-size: calc(100vw * 50 / 1920);
				font-family: Arial, Helvetica, sans-serif;
			}

			.txt {
				font-size: calc(100vw * 25 / 1920);
				font-family: "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;

			}
		}

		.el-button {
			width: 200px;
			height: 40px;
			margin-left: 20px;
			font-size:15px;
			margin-top: 20px;
		}

	}

	.right {
		width: 50%;
		height: 50%;
		padding-right: 5%;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;

		.cage {
			width: 40%;
			height: 30%;

			.icon {
				width: 37.5%;
				font-size: 35px;
				display: flex;
				justify-content: center;
				align-items: center;
				color: white;
			}

			.num {
				font-size: calc(100vw * 37 / 1920);
				font-family: Arial, Helvetica, sans-serif;
			}

			.txt {
				font-size: calc(100vw * 18 / 1920);
				font-family: "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
				
			}
		}

	}
}
</style>
