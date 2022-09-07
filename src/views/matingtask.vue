<template>
    <div>
        <div class="top">
            <table class="title_container" border="0" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <div>
                    <i class="el-icon-s-tools"></i>
                    <span style="font-size: 24px;">交配任务(管理员)</span>
                </div>
                <a @click="goback"><span class="iconfont icon-rollback"></span></a>
            </table>
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">交配任务发布</el-menu-item>
            <el-menu-item index="2">交配任务管理</el-menu-item>
        </el-menu>

        <div class="content" v-if="activeIndex === '1'" style="margin-top: 8%;">
            <div class="step" style="margin-top: 0.5%; margin-left: 10%;width:10%; float: left; height: 600px;">
                <el-steps direction="vertical" :active="active">
                    <el-step title="步骤 1" style="height: 15%;"></el-step>
                    <el-step title="步骤 2" style="height: 85%;"></el-step>
                </el-steps>
            </div>

            <div class="chooseSSY" style=" width:60%; float: left;">
                <p>指定执行人</p>
                <el-select v-model="value" placeholder="请选择饲养员">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>

            <div class="micecode" style="margin-top: 3%;width:60%; float: left;">
                <p>输入小鼠编号</p>
                <span>*红色部分为管理员必填</span>
            </div>

            <div class="micetable" style="width:60%; float: left;">
                <!-- 第一种用table -->
                <!-- <table border="1" cellpadding="0" cellspacing="0" style="text-align:center">
                    <thead>
                        <tr>
                            <th width="100">房间号-笼架号-笼位号</th>
                            <th width="100">交配日期</th>
                            <th width="100">目标品系</th>
                            <th width="100">项目号</th>
                            <th width="100">数据类型</th>
                            <th width="100">雄鼠</th>
                            <th width="100">雌鼠</th>
                            <th width="100">雌鼠</th>
                            <th width="100">取出雄鼠日期</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="4">2</td>
                            <td rowspan="4">2</td>
                            <td rowspan="4">2</td>
                            <td rowspan="4">2</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                    </tbody>

                </table> -->

                <!-- 第二种用el-table -->

                <el-table style="width: 100%" border :data="tabledata1"
                    :header-cell-style="{ background: 'rgb(226, 226, 226)' }" @cell-click="cellEdit">
                    <el-table-column prop="fjljlw" label="房间号-笼架号-笼位号" width="200" align="center">
                        <template slot-scope="scope">
                            <el-input v-if="scope.row.fjljlw.edit" v-model="scope.row.fjljlw.value"
                                @keyup.enter.native="scope.row.fjljlw.edit = false">
                            </el-input>
                            <span v-else>{{ scope.row.fjljlw.value }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="jprq" label="交配日期" width="100" align="center">
                        <template slot-scope="scope">
                            <el-input v-if="scope.row.jprq.edit" v-model="scope.row.jprq.value"
                                @keyup.enter.native="scope.row.jprq.edit = false">
                            </el-input>
                            <span v-else>{{ scope.row.jprq.value }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="mbpx" label="目标品系" width="100" align="center">
                        <template slot-scope="scope">
                            <el-input v-if="scope.row.mbpx.edit" v-model="scope.row.mbpx.value"
                                @keyup.enter.native="scope.row.mbpx.edit = false">
                            </el-input>
                            <span v-else>{{ scope.row.mbpx.value }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="xmh" label="项目号" width="100" align="center">
                        <template slot-scope="scope">
                            <el-input v-if="scope.row.xmh.edit" v-model="scope.row.xmh.value"
                                @keyup.enter.native="scope.row.xmh.edit = false">
                            </el-input>
                            <span v-else>{{ scope.row.xmh.value }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column width="450" align="center" label="小鼠信息">
                        <template slot-scope="scope">
                            <el-table class="ttable" :data="tabledata2" style="width: 100%" @cell-click="cellEdit">
                                <el-table-column prop='sjlx' label="数据类型" width="100">
                                </el-table-column>
                                <el-table-column prop="xs" label="雄鼠" width="100">
                                </el-table-column>
                                <el-table-column prop="cs" label="雌鼠" width="100">
                                </el-table-column>
                                <el-table-column prop="cs2" label="雌鼠" width="100">
                                </el-table-column>
                            </el-table>
                        </template>
                    </el-table-column>

                    <el-table-column prop="qcxsrq" label="取出雄鼠日期" width="120" align="center">
                        <template slot-scope="scope">
                            <el-input>
                            </el-input>
                        </template>
                    </el-table-column>

                </el-table>

            </div>

            <div class="makesure" style="margin-top: 2%;width:60%; float: left;">
                <div class="btn">
                    <!-- 确认按钮这里暂时设置直接跳转 -->
                    <el-button type="primary" class="sure" @click="gofeedpage">确认</el-button>
                    <el-button type="info" class="cancel" @click="goback">取消</el-button>
                </div>

            </div>

        </div>

        <div v-if="activeIndex === '2'" style="margin-top: 10%; width: 80%; margin-left: 10%;">
            <div class="managetable">
                <el-table :data="matingTaskManage" border style="width: 100%" :stripe="true">
                    <el-table-column type="index" label="序号" :index="indexMethod">
                    </el-table-column>
                    <el-table-column prop="home" label="房间号" align="center">
                    </el-table-column>
                    <el-table-column prop="plandate" label="计划日期" align="center">
                    </el-table-column>
                    <el-table-column prop="targetpx" label="目标品系" align="center">
                    </el-table-column>
                    <el-table-column prop="targetpx" label="目标品系" align="center">
                    </el-table-column>
                    <el-table-column prop="cagenum" label="笼数" align="center">
                    </el-table-column>
                    <el-table-column prop="projectid" label="项目号" align="center">
                    </el-table-column>
                    <el-table-column prop="actpeople" label="执行人" align="center">
                    </el-table-column>
                    <el-table-column prop="finishnum" label="完成数量" align="center">
                    </el-table-column>
                    <el-table-column prop="finishdate" label="完成日期" align="center">
                    </el-table-column>
                    <el-table-column prop="boymiceout" label="取出雄鼠日期" align="center">
                    </el-table-column>
                    <el-table-column prop="status" label="完成状态" align="center" sortable="true">
                    </el-table-column>
                </el-table>

            </div>

            <div class="block">
                <!-- <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage" :page-sizes="[50, 100, 150, 200, 250, 300, 350, 400]" :page-size="50"
                    layout="total, sizes, prev, pager, next, jumper" :total="400">
                </el-pagination> -->
            </div>

        </div>

    </div>

</template>

<script>


export default {
    name: 'matingTask',
    data() {
        return {
            showtable: false,
            task_id: '',
            active: 1,
            activeIndex: '1',
            tabledata: {},
            k: 2,
            options: [
                {
                    value: "饲养员1",
                    label: "饲养员1",
                },
                {
                    value: "饲养员2",
                    label: "饲养员2",
                },
                {
                    value: "饲养员3",
                    label: "饲养员3",
                }
            ],
            matingTaskManage: [
                {
                    home: "2号",
                    plandate: "2022/2/15",
                    targetpx: "Gpx4",
                    cagenum: "4",
                    projectid: "SIR9",
                    actpeople: "李国栋",
                    finishnum: "4",
                    finishdate: "2022/2/15",
                    boymiceout: "2022/5/20",
                    status: "未完成"
                },
                {
                    home: "2号",
                    plandate: "2022/2/15",
                    targetpx: "Gpx4",
                    cagenum: "4",
                    projectid: "SIR9",
                    actpeople: "李国栋",
                    finishnum: "4",
                    finishdate: "2022/2/15",
                    boymiceout: "2022/5/20",
                    status: "已完成"
                }
            ],
            tabledata1: [
                {
                    fjljlw: {
                        value: 'SIR9-PD-2020-01',
                        edit: false
                    },
                    jprq: {
                        value: '2022/2/15',
                        edit: false
                    },
                    mbpx: {
                        value: 'Nes-Cre/Gpx4',
                        edit: false
                    },
                    xmh: {
                        value: 'SIR9',
                        edit: false
                    },
                    qcxsrq: {
                        value: '2022/2/15',
                        edit: false
                    }

                }
            ],
            tabledata2: [
                {
                    sjlx:"品系",
                    xs:"Nes-Cre/Gpx4",
                    cs:"Gpx4",
                    cs2:"C57BLK6J"
                },
                {
                    sjlx:"号码",
                    xs:"49440",
                    cs:"49369",
                    cs2:"WT"
                },  
                {
                    sjlx:"出生日期",
                    xs:"2021/12/2",
                    cs:"2021/12/7",
                    cs2:"2021/12/2到"
                }
                ,
                {
                    sjlx:"基因型",
                    xs:"Tg/KO",
                    cs:"Heter",
                    cs2:"WT"
                },
            ],
            value: [],
            multipleSelection: [],
            currentPage: 1
        }
    },
    methods: {

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
            this.active = 2
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


ul {
    position: relative;
    top: 100px;
    width: 80%;
    margin: 0 auto;
}

.step {
    position: relative;

}

.second {
    white-space: nowrap;

    tr {
        th {
            width: 200px;
        }

    }
}




.makesure {
    .el-button {
        width: 100px;
        margin-right: 250px;
    }



}



.chooseSSY {
    display: flex;
    align-items: center;

    p {
        margin-right: 20px;

    }
}

.micecode {
    display: flex;
    align-items: center;

    span {
        margin-left: 20px;
        color: red;
        font-size: 12px;
    }
}

.micetable {
    margin-top: 20px;
}

::v-deep.el-table thead {
    color: black;
    font-weight: 500;
}


::v-deep.el-pagination {
    display: flex;
    justify-content: space-around;
}
</style>