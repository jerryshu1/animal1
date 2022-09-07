<template>
    <div>
        <div class="top">
            <table class="title_container" border="0" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <div>
                    <i class="el-icon-s-tools"></i>
                    <span style="font-size: 24px;">任务列表(饲养员)</span>
                </div>
                <a @click="goback"><span class="iconfont icon-rollback"></span></a>
            </table>
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">交配任务列表</el-menu-item>
            <el-menu-item index="2">交配用小鼠信息列表</el-menu-item>
        </el-menu>

        <div class="content" v-if="activeIndex === '1'"
            style="margin-top: 10%; margin-bottom:10%;width: 70%; margin-left: 10%;">

            <el-tabs :tab-position="tabPosition">

                <el-tab-pane label="进行中">
                    <div class="finish" style="overflow: auto; margin-left:40px;height:500px; width:1200px">
                        <table border="1" align="center" cellpadding="0" cellspacing="0" width="1200px">
                            <thead align="center" style="height: 60px;">
                                <tr>
                                    <th style="width: 8%;">
                                        序号
                                    </th>
                                    <td style="width: 20%;">
                                        笼位输入位置(繁殖笼)
                                    </td>
                                    <th style="width: 20%;">
                                        雄鼠
                                    </th>
                                    <th style="width: 20%;">
                                        雌鼠
                                    </th>
                                    <th style="width: 20%;">
                                        雌鼠
                                    </th>
                                </tr>

                            </thead>
                            <tbody v-for="(i, index) in unfinishedtimes">
                                <tr align="center" style="height: 60px;">
                                    <td rowspan="4">{{index+1}}</td>
                                    <th>品系</th>
                                    <td>Gpx4</td>
                                    <td>Gpx4</td>
                                    <td>C57BL6J</td>
                                </tr>
                                <tr align="center" style="height: 60px;">
                                    <th>编号</th>
                                    <td>49440</td>
                                    <td>49369</td>
                                    <td>WT</td>
                                </tr>
                                <tr align="center" style="height: 60px;">
                                    <th>位置</th>
                                    <td>2-A-C5</td>
                                    <td>2-A-D5</td>
                                    <td></td>
                                </tr>
                                <tr align="center" style="height: 60px;">
                                    <th>取出雄鼠日期</th>
                                    <td>2022-1-30</td>
                                    <td>2022-1-30</td>
                                    <td colspan="1">
                                        <el-button type="primary" size="mini">完成</el-button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="已完成">
                    <div class="finish" style="overflow: auto;margin-left:40px; height:500px; width:1200px">
                        <table border="1" align="center" cellpadding="0" cellspacing="0" width="1200px">
                            <thead align="center" style="height: 60px;">
                                <tr>
                                    <th style="width: 8%;">
                                        序号
                                    </th>
                                    <td style="width: 20%;">
                                        笼位输入位置(繁殖笼)
                                    </td>
                                    <th style="width: 20%;">
                                        雄鼠
                                    </th>
                                    <th style="width: 20%;">
                                        雌鼠
                                    </th>
                                    <th style="width: 20%;">
                                        雌鼠
                                    </th>
                                </tr>
                            </thead>
                            <tbody v-for="(i, index) in finishedtimes">
                                <tr align="center" style="height: 60px;">
                                    <td rowspan="4">{{index+1}}</td>
                                    <th>品系</th>
                                    <td>Gpx4</td>
                                    <td>Gpx4</td>
                                    <td>C57BL6J</td>
                                </tr>
                                <tr align="center" style="height: 60px;">
                                    <th>编号</th>
                                    <td>49440</td>
                                    <td>49369</td>
                                    <td>WT</td>
                                </tr>
                                <tr align="center" style="height: 60px;">
                                    <th>位置</th>
                                    <td>2-A-C5</td>
                                    <td>2-A-D5</td>
                                    <td></td>
                                </tr>
                                <tr align="center" style="height: 60px;">
                                    <th>取出雄鼠日期</th>
                                    <td>2022-1-30</td>
                                    <td>饲养笼笼位号</td>
                                    <td>1A-A1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>

        <div class="secondtable" v-if="activeIndex === '2'" style="margin-top: 10%;margin-bottom:10%; width: 70%;">
            <div >
                <el-table :data="matingTaskManage" border style="width: 100%"
                    :header-cell-style="{ background: 'rgb(226, 226, 226)' }">
                    <el-table-column type="index" label="序号" :index="indexMethod">
                    </el-table-column>
                    <el-table-column prop="longwei" label="笼位">
                    </el-table-column>
                    <el-table-column prop="bianhao" label="编号">
                    </el-table-column>
                    <el-table-column prop="pinxi" label="品系">
                    </el-table-column>
                    <el-table-column prop="jiyinxing" label="基因型">
                    </el-table-column>
                </el-table>
            </div>

            <!-- <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage" :page-sizes="[50, 100, 150, 200, 250, 300, 350, 400]" :page-size="50"
                    layout="total, sizes, prev, pager, next, jumper" :total="400">
                </el-pagination>
            </div> -->
        </div>
    </div>

</template>

<script>


export default {
    name: 'taskList',
    data() {
        return {
            activeIndex: '1',
            k: 2,
            value: [],
            currentPage: 1,
            matingTaskManage: [
                {
                    longwei: "2-A-B5",
                    bianhao: "49487",
                    pinxi: "Nes-Cre/Gpx4",
                    jiyinxing: "Tg/KO",
                },
                {
                    longwei: "2-A-B5",
                    bianhao: "49488",
                    pinxi: "Nes-Cre/Gpx4",
                    jiyinxing: "Tg/KO",
                },
                {
                    longwei: "2-A-D5",
                    bianhao: "49369",
                    pinxi: "Gpx4",
                    jiyinxing: "Heter",
                },
            ],
            tasklist: [
                {
                    pinxi: "Gpx4",
                    bianhao: "49440",
                    weizhi: "2-A-C5",
                    boymiceout: ""
                }
            ],
            tabPosition: 'left',
            finishedtimes: [1, 2],
            unfinishedtimes: [1, 2, 3],
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


    }
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

.secondtable {
    margin: 0 auto;
    .el-table {
        border: 3px solid rgb(0, 0, 0);
    }
}

::v-deep.el-table thead {
    color: black;
    font-weight: 500;
}


::v-deep.el-pagination {
    display: flex;
    justify-content: space-around;
}

.finish {
    border: 1px solid black;
    table{
        border:1px solid black;
    }
}
</style>