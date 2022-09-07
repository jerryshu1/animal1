<template>
    <div>
        <div class="top">
            <table class="title_container" border="0" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <div>
                    <i class="el-icon-s-tools"></i>
                    <span style="font-size: 24px;">实验用鼠(管理员)</span>
                </div>
                <a @click="goback"><span class="iconfont icon-rollback"></span></a>
            </table>
        </div>

        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">实验用鼠信息发布</el-menu-item>
            <el-menu-item index="2">实验项目信息管理</el-menu-item>
        </el-menu>

        <div class="line"></div>

        <div v-if="activeIndex === '1'">
            <div class="step" style="margin-top: 8%; margin-left: 10%;width:10%; float: left; height: 600px;">
                <el-steps direction="vertical" :active="1">
                    <el-step title="步骤 1" style="height: 90%;"></el-step>
                    <el-step title="步骤 2" style="height: 10%;"></el-step>
                </el-steps>
            </div>

            <div style="margin-top: 10%; width:60%; float: left; height: 500px; overflow: auto;">
                <span style="width: 20%; margin-left: 10%;">实验项目号</span>
                <el-input placeholder="暂时用实验号，项目号默认test" style="width: 20%; margin-left: 2%;" @keyup.enter.native="gosearch"
                    v-model="task_id">
                </el-input>
                <span style="width: 20%; margin-left: 15%;">负责人</span>
                <el-select v-model="value" placeholder="请选择" multiple collapse-tags
                    style="width: 20%; margin-left: 2%;">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" @select="handleSelectionChange"
                    style="width: 100%; float: left;">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="id" label="小鼠编号">
                    </el-table-column>
                    <el-table-column prop="gender" label="性别">
                    </el-table-column>
                    <el-table-column prop="strains[0].id_dt" label="出生日期">
                    </el-table-column>
                    <el-table-column prop="age" label="周龄">
                    </el-table-column>
                    <el-table-column prop="project_id" label="项目号">
                    </el-table-column>
                    <el-table-column prop="nes" label="Nes-Cre">
                    </el-table-column>
                    <el-table-column prop="gpx" label="Gpx4">
                    </el-table-column>
                </el-table>
            </div>

            <div class="makesure"
                style="margin-top: 2%; margin-left: 2%;width:60%; float: left; height: 500px; overflow: auto;">
                <p>确认发布并<span>发送邮件</span>提醒实验员（和饲养员）？</p>

                <div class="btn">
                    <el-button type="primary" class="sure" @click="addnewexp">确认</el-button>
                    <el-button type="primary" class="cancel" @click="goback">取消</el-button>
                </div>

            </div>
        </div>

        <div v-if="activeIndex === '2'" style="width: 80%; margin-left: 10%;">
            <div style="margin-top: 10%; margin-bottom: 10%; overflow-y:auto;">
                <el-table :data="tableData1" style="width: 100%"
                    :header-cell-style="{ background: 'rgb(226, 226, 226)' }" @cell-click="cellEdit">
                    <el-table-column label="项目实验号" width="100" align="center">
                        <template slot-scope="scope">
                            <!-- <el-input v-if="scope.row.xmsyh.edit" v-model="scope.row.xmsyh.value"
                                @keyup.enter.native="scope.row.xmsyh.edit = false">
                            </el-input> -->
                            <span>{{ scope.row.id }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="所属项目" width="100" align="center">
                        <template slot-scope="scope">
                            <!-- <el-input v-if="scope.row.ssxm.edit" v-model="scope.row.ssxm.value"
                                @keyup.enter.native="scope.row.ssxm.edit = false">
                            </el-input> -->
                            <span>{{ scope.row.project_id }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="开始日期" width="100" align="center">
                        <template slot-scope="scope">
                            <!-- <el-input v-if="scope.row.ksrq.edit" v-model="scope.row.ksrq.value"
                                @keyup.enter.native="scope.row.ksrq.edit = false">
                            </el-input> -->
                            <span>{{ scope.row.created_at.split('T')[0] }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="负责人" width="100" align="center">
                        <template slot-scope="scope">
                            <!-- <el-input v-if="scope.row.fzr.edit" v-model="scope.row.fzr.value"
                                @keyup.enter.native="scope.row.fzr.edit = false">
                            </el-input> -->
                            <span v-for="name in scope.row.managers">{{ name }} </span>
                        </template>
                    </el-table-column>
                    <el-table-column width="1130" align="center">
                        <template slot-scope="scope">
                            <el-table class="ttable" :data="scope.row.cages" style="width: 100%" @cell-click="cellEdit">
                                <el-table-column label="品系" width="100">
                                    <template slot-scope="scope1">
                                        <!-- <el-input v-if="scope.row.px.edit" v-model="scope.row.dtcd.m_info[0].strain.name"
                                            @keyup.enter.native="scope.row.px.edit = false">
                                        </el-input> -->
                                        <span>{{ scope1.row.dtcd.m_info[0].strain.name }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="基因型" width="100">
                                    <template slot-scope="scope1">
                                        <!-- <el-input v-if="scope.row.jyx.edit" v-model="scope.row.dtcd.m_info[0].strain.value"
                                            @keyup.enter.native="scope.row.jyx.edit = false">
                                        </el-input> -->
                                        <span>{{ scope1.row.dtcd.m_info[0].strain.value }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="数量" width="100">
                                    <template slot-scope="scope1">
                                        <!-- <el-input v-if="scope.row.sl.edit" v-model="scope.row.sl.value"
                                            @keyup.enter.native="scope.row.sl.edit = false">
                                        </el-input> -->
                                        <span>{{ scope1.row.dtcd.m_info.length }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="出生日期" width="100">
                                    <template slot-scope="scope1">
                                        <!-- <el-input v-if="scope.row.csrq.edit" v-model="scope.row.csrq.value"
                                            @keyup.enter.native="scope.row.csrq.edit = false">
                                        </el-input> -->
                                        <span>{{  }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="到货日期" width="100">
                                    <template slot-scope="scope1">
                                        <!-- <el-input v-if="scope.row.dhrq.edit" v-model="scope.row.dhrq.value"
                                            @keyup.enter.native="scope.row.dhrq.edit = false">
                                        </el-input> -->
                                        <span>{{  }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="周龄" width="100">
                                    <template slot-scope="scope1">
                                        <span>{{  }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="月龄" width="100">
                                    <template slot-scope="scope1">
                                        <!-- <el-input v-if="scope.row.yl.edit" v-model="scope.row.yl.value"
                                            @keyup.enter.native="scope.row.yl.edit = false">
                                        </el-input> -->
                                        <span>{{  }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="实验笼详细信息" width="100" align="center">
                                    <el-button type="info" disabled>查看</el-button>
                                </el-table-column>
                            </el-table>
                        </template>
                    </el-table-column>
                    <el-table-column label="用鼠信息" width="100" align="center">
                        <el-button type="info" disabled>查看</el-button>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>

import { getallcageinfo, getmicsinfo, createexp, gettasklist } from '@/api/data';

export default {
    name: 'expMouse',
    data() {
        return {
            showtable: false,
            task_id: '',
            activeIndex: '1',
            tabledata: {},
            k: 2,
            data: [{
                px: {
                    value: 'Nes-Cre/Gpx4',
                    edit: false
                },
                jyx: {
                    value: 'Tg/KO',
                    edit: false
                },
                sl: {
                    value: 10,
                    edit: false
                },
                csrq: {
                    value: '2020/3/1',
                    edit: false
                },
                dhrq: {
                    value: '',
                    edit: false
                },
                zl: {
                    value: '',
                    edit: false
                },
                yl: {
                    value: '',
                    edit: false
                },
                csyp: {
                    value: '101',
                    edit: false
                },
                jl: {
                    value: '10g/kg',
                    edit: false
                },
                gyfs: {
                    value: 'p.o.',
                    edit: false
                },
                gypl: {
                    value: 'q.d.',
                    edit: false
                }
            }, {
                px: {
                    value: 'Gpx4',
                    edit: false
                },
                jyx: {
                    value: 'K0',
                    edit: false
                },
                sl: {
                    value: 10,
                    edit: false
                },
                csrq: {
                    value: '2020/3/1',
                    edit: false
                },
                dhrq: {
                    value: '',
                    edit: false
                },
                zl: {
                    value: 8,
                    edit: false
                },
                yl: {
                    value: '',
                    edit: false
                },
                csyp: {
                    value: '102',
                    edit: false
                },
                jl: {
                    value: '10g/kg',
                    edit: false
                },
                gyfs: {
                    value: 'p.o.',
                    edit: false
                },
                gypl: {
                    value: 'q.d.',
                    edit: false
                }
            }],
            tableData: [],
            tableData1: [],
            // tabledata: [{
            //     syxmh: 'SIR9-PD-2020-01',
            //     ssxm: 'SIR9',
            //     ksrq: '2020/6/10',
            //     fzr: '徐涛，韩竞尧',
            //     px: 'SIR9',
            //     jyx: 'Tg',
            //     num: 'KO',
            //     date: '',
            //     ysxx: '',
            //     zl: '',
            //     yl: '',
            //     csyp: '',
            //     jl: '',
            //     gyfs: '',
            //     gypl: '',
            //     mxlx: '',
            //     zmfs: '',
            //     qyrq: '',
            //     qylx: '',
            //     qyl: '',
            //     qyxsbh: ''
            // }],
            showslist: [{
                syxmhshow: false,
                ssxmshow: false,
                ksrqshow: false,
                fzrshow: false,
                mxlxshow: false,
                zmfsshow: false,
                qyrqshow: false,
                qylxshow: false,
                qylshow: false,
                qyxsbhshow: false,
                xsshow: {
                    pxshows: [{
                        pxshow: false
                    },
                    {
                        pxshow: false
                    }],
                    jyxshows: [{
                        jyxsshow: false
                    },
                    {
                        jyxsshow: false
                    }],
                    slshows: [{
                        slshow: false
                    },
                    {
                        slshow: false
                    }],
                    csrqshows: [{
                        csrqshow: false
                    },
                    {
                        csrqshow: false
                    }],
                    dhrqshows: [{
                        dhrqshow: false
                    },
                    {
                        dhrqshow: false
                    }],
                    zlshows: [{
                        zlshow: false
                    },
                    {
                        zlshow: false
                    }],
                    ylshows: [{
                        ylshow: false
                    },
                    {
                        ylshow: false
                    }],
                    csypshows: [{
                        csypshow: false
                    },
                    {
                        csypshow: false
                    }],
                    jlshows: [{
                        jlshow: false
                    },
                    {
                        jlshow: false
                    }],
                    gyfsshows: [{
                        gyfsshow: false
                    },
                    {
                        gyfsshow: false
                    }],
                    gyplshows: [{
                        gyplshow: false
                    },
                    {
                        gyplshow: false
                    }],
                },
            }],
            options: [{
                value: '负责人1',
            },
            {
                value: '负责人2'
            },
            {
                value: '负责人3'
            }],
            value: [],
            multipleSelection: [],
            checkNumber: 6
        }
    },
    mounted() {
        gettasklist('test').then((res) => {
            if (res.code === 200) {
                this.tableData1 = res.data.data
                console.log(this.tableData1)
            }
        })
    },
    methods: {
        handleSelect(key, keyPath) {
            this.activeIndex = keyPath[0]
        },
        goback() {
            this.$router.go(-1)
        },
        handleSelectionChange(selection) {
            if (selection.length > this.checkNumber) {
                let del_row = selection.pop()
                this.$message.warning(`最多只能选${this.checkNumber}只小鼠！`);
                this.$refs.multipleTable.toggleRowSelection(del_row, false)
            } else {
                this.value = selection
            }
        },
        gosearch() {
            getmicsinfo().then((res) => {
                this.tableData = res.data.data
            })
        },
        cellEdit(row, column) {
            // 将单元格变为输入框
            row[column.property].edit = true
            // 聚焦到单元格
            setTimeout(() => {
                this.$refs[column.property].focus()
            }, 20)
        },
        addnewexp() {
            if (this.task_id === '') {
                this.$message.error('请输入实验项目号')
            } else {
                let m_infos = []
                let gender = ''
                if (this.value[0].gender === 'f') {
                    gender = 'F'
                } else {
                    gender = 'M'
                }
                for (var i in this.value) {
                    m_infos.push(this.value[i].id)
                }
                let postdata = {
                    "id": this.task_id,
                    "project_id": "test",
                    "managers": ['xjw1', 'xjw2'],
                    "start": "2022-09-05T16:00:00Z",
                    // "end": "",
                    "mice": m_infos,
                }
                createexp(postdata).then((res) => {
                    if (res.code === 200) {
                        this.$message.success('创建实验成功')
                        this.goback()
                    }
                })
            }
        },
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
    // margin: 200px;
}

.second {
    white-space: nowrap;

    tr {
        th {
            width: 200px;
        }

    }
}



.ttable {
    margin-top: -18px;

}


.makesure {
    p {
        margin-bottom: 20px;

        span {
            color: red;
        }
    }


    .el-button {
        width: 100px;
        margin-right: 10px;
    }



}

// .el-table{
//     margin-left:400px;
// }

.el-table__header {
    margin: 0 auto;
}


.el-table {
    /deep/tbody tr:hover>td {
        background-color: white;
    }
}
</style>