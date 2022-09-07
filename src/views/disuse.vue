<template>
    <div>
        <div class="top">
            <table class="title_container" border="0" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <div>
                    <i class="el-icon-s-tools"></i>
                    <span style="font-size: 24px;">淘汰任务发布(管理员)</span>
                </div>
                <a @click="goback"><span class="iconfont icon-rollback"></span></a>
            </table>
        </div>

        <div>
            <div class="step" style="margin-top: 8%; margin-left: 10%;width:10%; float: left; height: 600px;">
                <el-steps direction="vertical" :active="1">
                    <el-step title="步骤 1" style="height: 90%;"></el-step>
                    <el-step title="步骤 2" style="height: 10%;"></el-step>
                </el-steps>
            </div>

            <div style="margin-top: 7%; width:60%; float: left; height: 500px; overflow: auto;">
                <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" @selection-change="handleSelectionChange"
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
                    <el-table-column prop="project_id" label="品系">
                    </el-table-column>
                    <el-table-column prop="nes" label="Nes-Cre">
                    </el-table-column>
                    <el-table-column  label="鉴定日期">
                    </el-table-column>
                    <el-table-column prop="gpx" label="Gpx4">
                    </el-table-column>
                    <el-table-column  label="鉴定日期">
                    </el-table-column>
                    <el-table-column  prop="generation" label="代数">
                    </el-table-column>
                    <el-table-column prop="father" label="父亲">
                    </el-table-column>
                    <el-table-column prop="mothers[0]" label="母亲1">
                    </el-table-column>
                    <el-table-column prop="mothers[1]" label="母亲2">
                    </el-table-column>
                    <el-table-column prop="project_id" label="实验项目号">
                    </el-table-column>
                    <el-table-column prop="project_id" label="使用状态">
                    </el-table-column>
                    <el-table-column prop="project_id" label="笼位类型">
                    </el-table-column>
                    <el-table-column prop="project_id" label="笼位号">
                    </el-table-column>
                    <el-table-column prop="project_id" label="是否已处理">
                    </el-table-column>
                    <el-table-column prop="project_id" label="处理类型">
                    </el-table-column>
                    <el-table-column prop="project_id" label="处理日期">
                    </el-table-column>



                </el-table>
            </div>

            <div class="makesure"
                style="margin-top: 3%; margin-left: 2%;width:60%; float: left; height: 500px; overflow: auto;">
                <p>确认发布并<span>发送邮件</span>提醒相应的饲养员吗？</p>

                <div class="btn">
                    <el-button type="primary" class="sure" @click="disusetask">确认</el-button>
                    <el-button type="info" class="cancel" @click="goback">取消</el-button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import { getmicsinfo,disusemice } from '@/api/data';

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
        getmicsinfo().then((res)=>{
            if (res.code === 200) {
                this.tableData = res.data.data
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
        handleSelectionChange(val) {
            if (this.active === 0) {
                this.active++
            }
            this.multipleSelection = val;
            console.log(this.multipleSelection)
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
        disusetask() {
            if (this.multipleSelection.length > 0) {
                //转移接口
                let miceids = []
                for (var i in this.multipleSelection) {
                    miceids.push(this.multipleSelection[i].id)
                }
                console.log(miceids)
                let postdata = {
                    "mice_ids": miceids,
                }
                disusemice(postdata).then((res) => {
                    if (res.code === 200) {
                        this.$message.success('淘汰成功！')
                        // this.goback()
                    }
                })
            } else {
                alert("请选择要淘汰的小鼠！")
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