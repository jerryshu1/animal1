<template>
    <div>
        <div class="top">
            <table class="title_container" border="0" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <div>
                    <i class="el-icon-s-tools"></i>
                    <span style="font-size: 24px"> 转移任务(管理员)</span>
                </div>
                <a @click="goback"><span class="iconfont icon-rollback"></span></a>
            </table>
        </div>

        <div class="step" style="margin-top: 8%; margin-left: 10%;width:10%; float: left; height: 600px;">
            <el-steps direction="vertical" :active="active">
                <el-step title="步骤 1" style="margin-right: 0px"></el-step>
                <el-step title="步骤 2" style="margin-right: 0px"></el-step>
            </el-steps>
        </div>

        <div class="title"  style="margin-top:8%;width:70%; float: left"><p>小鼠信息管理界面</p></div>

        <div class="contenttable" style="width:70%;height:450px; float: left;overflow: auto">
            
            <div class="micetable">
                <el-table ref="multipleTable" border :data="tableData1" tooltip-effect="dark" style="width: 100%"
                    @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column  label="日期" width="120">

                    </el-table-column>
                    <el-table-column prop="id" label="小鼠编号" width="120">
                    </el-table-column>
                    <el-table-column prop="gender" label="性别" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="strains[0].id_dt" label="出生日期" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="age" label="周龄" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="project_id" label="项目号" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column  label="品系" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="strains[0].name" label="Nes-Cre" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="strains[0].id_dt" label="鉴定日期" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="strains[0].value" label="Gpx4" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="generation" label="代数" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="father" label="父亲" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="mothers[0]" label="母亲1" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="mothers[1]" label="母亲2" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column label="实验项目号" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="status" label="使用状态" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="cage_type" label="笼位类型" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="cage_id" label="笼位号码" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column  label="是否已处理" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column  label="处理类型" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column label="处理日期" show-overflow-tooltip>
                    </el-table-column>
                </el-table>
            </div>

        </div>

        <div class="choose" style="margin-top:30px; width:60%; float: left;">
            <p>选择目的笼位</p>
            <el-select v-model="value" placeholder="请选择目的房间" @change="(val) => { test(value) }">
                <el-option v-for="item in cagelist" :key="item.id" :label="item.cagewz" :value="item.id">
                </el-option>
            </el-select>

            <p style="margin-left:40px">选择目的房间饲养员</p>
            <el-select v-model="value1" placeholder="请选择目的房间饲养员" @change="(val) => { test1(value1) }">
                <el-option v-for="item in option2" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>

        <div class="makesure" style="margin-top: 30px; width:60%; float: left; height: 500px; overflow: auto;">
            <p>确认发布并<span>发送邮件</span>提醒实验员（和饲养员）？</p>

            <div class="btn" style="margin-top:40px;">
                <el-button type="primary" class="sure" @click="transfer">确认</el-button>
                <el-button type="info" class="cancel" @click="goback">取消</el-button>
            </div>

        </div>
    </div>
</template>

<script>
import {getmicsinfo, transfertask,getcagelist} from '../api/data.js'
export default {
    name: 'transferTask',
    data() {
        return {
            active: 0,
            showtable: false,
            task_id: '',
            activeIndex: '1',
            tabledata: {},
            k: 2,
            option1: [
                {
                    value: "房间号1",
                    label: "房间号1",
                },
                {
                    value: "房间号2",
                    label: "房间号2",
                },
            ],
            option2: [
                {
                    value: "饲养员1",
                    label: "饲养员1",
                },
                {
                    value: "饲养员2",
                    label: "饲养员2",
                },
            ],
            value: '',
            value1: '',
            // tableData: [{
            //     date: '2016-05-03',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-02',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-04',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-01',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-08',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-06',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-07',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }],
            tableData1:[],
            multipleSelection: [],
            transferlist:[],
            cagelist:[]
        }
    },
    mounted() {
        getmicsinfo().then((res)=>{
            if (res.code === 200) {
                this.tableData1 = res.data.data
            }
        })
        getcagelist().then((res)=>{
            if (res.code === 200) {
                this.cagelist = res.data.data
                for(var i in this.cagelist){
                    let iiid=this.cagelist[i].wall_id.split('-')[0] + this.cagelist[i].wall_id.split('-')[1] + '-' +
                    this.cagelist[i].x_axis +this.cagelist[i].y_axis
                    console.log(iiid)
                    this.cagelist[i]['cagewz'] = iiid
                }
            }
        })
    },
    methods: {
        test() {
            if (this.active === 1) {
                this.active++
            }
            
        },
        test1() {
            if (this.active === 2) {
                this.active++
            }
        },
        handleSelect(key, keyPath) {
            this.activeIndex = keyPath[0]
        },
        goback() {
            this.$router.go(-1)
        },
        gofeedpage() {
            this.$router.push({ path: '/tasklist' })
        },

        cellEdit(row, column) {
            // 将单元格变为输入框
            row[column.property].edit = true
            // 聚焦到单元格
            setTimeout(() => {
                this.$refs[column.property].focus()
            }, 20)
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            if (this.active === 0) {
                this.active++
            }
            this.multipleSelection = val;
            console.log(this.multipleSelection)
        },
        transfer(){
            if(this.multipleSelection.length>0 ){
                if(this.value!==''){
                    if(this.value1!==''){

                        //转移接口
                        let miceids = []
                        for (var i in this.multipleSelection){
                            miceids.push(this.multipleSelection[i].id)
                        }
                        let postdata = {
                            "mice_ids": miceids,
                            "cage_id": this.value,
                            "cage_type": 'drugtest',
                        }
                        transfertask(postdata).then((res) => {
                            if (res.code === 200) {
                                this.$message.success('转移成功！')
                                this.goback()
                            }
                        })
                    }else{
                        alert("请选择目的房间饲养员！")
                    }
                }else{
                    alert("请选择目的房间！")
                }
            }else{
                alert("请选择要转移的小鼠！")
            }
        }
    },
}

</script>

<style lang="less" scoped>
.top {
    background-color: rgb(207, 207, 207);
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    float: left;
    position: absolute;
    top: 0;

    .title_container {
        margin: 0 200px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 500;

        .iconfont {
            margin-right: 20px;
            font-weight: 800;
            font-size: 25px;
        }
    }
}

.step {
    position: relative;

}

.title{
    p{
        font-size: 20px;
        font-weight: 600;
    }
}

.contenttable{
    border: 1px solid rgb(146, 146, 146);
    border-radius: 20px;
}


.makesure {
    .el-button {
        width: 100px;
        margin-right: 250px;
    }

}



.choose {
    display: flex;
    align-items: center;

    p {
        margin-right: 20px;

    }
}
</style>