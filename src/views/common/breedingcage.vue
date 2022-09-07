<template>
    <div>
        <div class="top">
            <table class="title_container" border="0" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <div>
                    <i class="el-icon-chat-line-square"></i>
                    <span style="font-size: 24px;">繁殖笼笼位详细信息</span>
                </div>
                <a @click="goback"><span class="iconfont icon-rollback"></span></a>
            </table>
        </div>
        <div style="margin-top: 7%;">
            <table class="first" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px"
                style="margin-top: 20px;">
                <tbody align="center" class="test">
                    <th style="width: 17%;">品系</th>
                    <td style="width: 32%;" colspan="1" rowspan="1" @click="pinxishow = true">
                        <el-input v-if="pinxishow" v-model="tabledata.pinxi" @keyup.enter.native="pinxishow = false">
                        </el-input>
                        <span v-else>{{ this.tabledata.pinxi }}</span>
                    </td>
                    <th style="width: 17%;">交配日期</th>
                    <td style="width: 33%;" colspan="1" rowspan="1" @click="jprqshow = true">
                        <el-input v-if="jprqshow" v-model="tabledata.jprq" @keyup.enter.native="jprqshow = false">
                        </el-input>
                        <span v-else>{{ this.tabledata.jprq }}</span>
                    </td>
                </tbody>
            </table>
            <table class="second" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px" frame=vsides>
                <tbody align="center" style="height: 60px;">
                    <th width="17%">雄鼠编号</th>
                    <td width="16%" colspan="1" rowspan="1" @click="xsbhshow = true">
                        <el-input v-if="xsbhshow" v-model="tabledata.xsbh" @keyup.enter.native="xsbhshow = false">
                        </el-input>
                        <span v-else>{{ this.tabledata.xsbh }}</span>
                    </td>
                    <th width="16%">雄鼠出生日期</th>
                    <td width="16%" colspan="1" rowspan="1" @click="xscsrqshow = true">
                        <el-input v-if="xscsrqshow" v-model="tabledata.xscsrq" @keyup.enter.native="xscsrqshow = false">
                        </el-input>
                        <span v-else>{{ this.tabledata.xscsrq }}</span>
                    </td>
                    <th width="17%">取出雄鼠日期</th>
                    <td width="16%" colspan="1" rowspan="1" @click="qcxsrqshow = true">
                        <el-input v-if="qcxsrqshow" v-model="tabledata.qcxsrq" @keyup.enter.native="qcxsrqshow = false">
                        </el-input>
                        <span v-else>{{ this.tabledata.qcxsrq }}</span>
                    </td>
                </tbody>
                <tbody align="center" style="height: 60px;">
                    <th width="17%">雌鼠编号</th>
                    <td width="16%" colspan="1" rowspan="1" @click="csbh1show = true">
                        <el-input v-if="csbh1show" v-model="tabledata.csbh1" @keyup.enter.native="csbh1show = false">
                        </el-input>
                        <span v-else>{{ this.tabledata.csbh1 }}</span>
                    </td>
                    <td width="16%" colspan="1" rowspan="1" @click="dhrq1show = true">
                        <el-input v-if="dhrq1show" v-model="tabledata.dhrq1" @keyup.enter.native="dhrq1show = false">
                        </el-input>
                        <span v-else>{{ this.tabledata.dhrq1 }}</span>
                    </td>
                    <th width="17%">雌鼠品系\n雌鼠基因型</th>
                    <td width="16%" colspan="1" rowspan="1" @click="cspx1show = true">
                        <el-input v-if="cspx1show" v-model="tabledata.cspx1" @keyup.enter.native="cspx1show = false">
                        </el-input>
                        <span v-else>{{ this.tabledata.cspx1 }}</span>
                    </td>
                    <td width="16%" colspan="1" rowspan="1">

                    </td>
                </tbody>
                <tbody align="center" style="height: 60px;">
                    <th width="17%">雌鼠编号</th>
                    <td width="16%" colspan="1" rowspan="1" @click="csbh2show = true">
                        <el-input v-if="csbh2show" v-model="tabledata.csbh2" @keyup.enter.native="csbh2show = false">
                        </el-input>
                        <span v-else>{{ this.tabledata.csbh2 }}</span>
                    </td>
                    <td width="16%" colspan="1" rowspan="1" @click="dhrq2show = true">
                        <el-input v-if="dhrq2show" v-model="tabledata.dhrq2" @keyup.enter.native="dhrq2show = false">
                        </el-input>
                        <span v-else>{{ this.tabledata.dhrq2 }}</span>
                    </td>
                    <th width="17%">雌鼠品系\n雌鼠基因型</th>
                    <td width="16%" colspan="1" rowspan="1" @click="cspx2show = true">
                        <el-input v-if="cspx2show" v-model="tabledata.cspx2" @keyup.enter.native="cspx2show = false">
                        </el-input>
                        <span v-else>{{ this.tabledata.cspx2 }}</span>
                    </td>
                    <td width="16%" colspan="1" rowspan="1"></td>
                </tbody>
            </table>
            <table class="third" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <tbody align="center" class="test">
                    <th style="width: 17%;">项目号</th>
                    <td style="width: 32%;" colspan="1" rowspan="1" @click="xmhshow = true">
                        <el-input v-if="xmhshow" v-model="tabledata.xmh" @keyup.enter.native="xmhshow = false"></el-input>
                        <span v-else>{{ this.tabledata.xmh }}</span>
                    </td>
                    <th style="width: 17%;">雄鼠品系</th>
                    <td style="width: 17%;" colspan="1" rowspan="1" @click="xspxshow = true">
                        <el-input v-if="xspxshow" v-model="tabledata.xspx" @keyup.enter.native="xspxshow = false">
                        </el-input>
                        <span v-else>{{ this.tabledata.xspx }}</span>
                    </td>
                    <td style="width: 16%;" colspan="1" rowspan="1"></td>
                </tbody>
            </table>
            <table class="forth" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px" frame=vsides>
                <tbody align="center" class="test">
                    <th class="xsxsinfo" style="width: 100%;height:50px">新生小鼠信息 <i class="el-icon-plus"
                            @click="addtable"></i> <i class="el-icon-minus" @click="deletetable"></i></th>
                </tbody>
            </table>
            <table class="fifth" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px"
                v-for="i in this.k" frame=vsides>
                <tbody align="center" class="test1">
                    <tr height="60px">
                        <th style="width: 27.5%;" colspan="2" rowspan="1">出生日期</th>
                        <th style="width: 27.5%;" colspan="1" rowspan="1">分笼日期</th>
                        <th style="width: 27.5%;" colspan="1" rowspan="1">新生小鼠数量</th>
                    </tr>
                    <tr height="60px">
                        <td style="width: 27.5%;" colspan="2" rowspan="1" @click="showdata[i - 1].csrqshow = true">
                            <el-input v-if="showdata[i - 1].csrqshow" v-model="tabledata.xsxsxx[i - 1].csrq"
                                @keyup.enter.native="showdata[i - 1].csrqshow = false"></el-input>
                            <span v-else>{{ tabledata.xsxsxx[i - 1].csrq }}</span>
                        </td>
                        <td style="width: 27.5%;" colspan="1" rowspan="1" @click="showdata[i - 1].flrqshow = true">
                            <el-input v-if="showdata[i - 1].flrqshow" v-model="tabledata.xsxsxx[i - 1].flrq"
                                @keyup.enter.native="showdata[i - 1].flrqshow = false"></el-input>
                            <span v-else>{{ tabledata.xsxsxx[i - 1].flrq }}</span>
                        </td>
                        <td style="width: 27.5%;" colspan="1" rowspan="1" @click="showdata[i - 1].xsxsslshow = true">
                            <el-input v-if="showdata[i - 1].xsxsslshow" v-model="tabledata.xsxsxx[i - 1].xsxssl1"
                                @keyup.enter.native="showdata[i - 1].xsxsslshow = false"></el-input>
                            <span v-else>{{ tabledata.xsxsxx[i - 1].xsxssl }}</span>
                        </td>
                    </tr>
                    <tr height="60px">
                        <th style="width: 20.75%;" colspan="1" rowspan="1">分笼雌鼠数量M</th>
                        <td style="width: 20.75%;" colspan="1" rowspan="1">
                            <span>{{ tabledata.xsxsxx[i - 1].flcsbh.length }}</span>
                        </td>
                        <th style="width: 20.75%;" colspan="1" rowspan="1">分笼雌鼠编号M</th>
                        <td style="width: 20.75%;" colspan="1" rowspan="1" @click="openc(i - 1)">
                            <span v-for="id in tabledata.xsxsxx[i - 1].flcsbh">{{ id }} </span>
                        </td>
                    </tr>
                    <tr height="60px">
                        <th style="width: 20.75%;" colspan="1" rowspan="1">分笼雄鼠数量M</th>
                        <td style="width: 20.75%;" colspan="1" rowspan="1">
                            <span>{{ tabledata.xsxsxx[i - 1].flxsbh.length }}</span>
                        </td>
                        <th style="width: 20.75%;" colspan="1" rowspan="1">分笼雄鼠编号M</th>
                        <td style="width: 20.75%;" colspan="1" rowspan="1" @click="openx(i - 1)">
                            <span v-for="id in tabledata.xsxsxx[i - 1].flxsbh">{{ id }} </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table class="sixth" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <tbody align="center" style="height: 60px;">
                    <th width="17%">备注</th>
                    <td width="83%" colspan="1" rowspan="1" @click="beizhushow = true">
                        <el-input v-if="beizhushow" v-model="tabledata.beizhu" @keyup.enter.native="beizhushow = false">
                        </el-input>
                        <span v-else>{{ tabledata.beizhu }}</span>
                    </td>
                </tbody>
            </table>
        </div>

        <div class="btn" style="margin-top: 2%;">
            <el-button type="primary" class="sure">确认</el-button>
            <el-button type="primary" class="cancel" @click="goback">取消</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            k: 1,
            tabledata: {
                xsxsxx: [{
                    flxsbh: [],
                    flcsbh: [],
                }]
            },
            //
            pinxishow: false,
            //
            jprqshow: false,
            //
            xsbhshow: false,
            xspxshow: false,
            xscsrqshow: false,
            qcxsrqshow: false,
            //
            csbh1show: false,
            csbh2show: false,
            cspx1show: false,
            cspx2show: false,
            dhrq1show: false,
            dhrq2show: false,
            //
            xmhshow: false,
            //
            showdata: [
                {
                    csrqshow: false,
                    flrqshow: false,
                    xsxsslshow: false,
                    flcsbhshow: false,
                    flxsbhshow: false,
                },
            ],
            //
            beizhushow: false,
            lastxvalue: [0],
            lastcvalue: [0]
        }
    },
    methods: {
        addtable() {
            this.k += 1
            this.showdata.push({
                csrqshow: false,
                flrqshow: false,
                xsxsslshow: false,
                flcsbhshow: false,
                flxsbhshow: false,
            })
            this.tabledata.xsxsxx.push({
                flxsbh: [],
                flcsbh: [],
            })
            this.lastcvalue.push(0)
            this.lastxvalue.push(0)
        },
        deletetable() {
            if (this.k > 1) {
                this.k -= 1
            }
        },
        openx(i) {
            this.$prompt('请输入小鼠编号', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(({ value }) => {
                if (this.lastxvalue[i] === 0) {
                    this.tabledata.xsxsxx[i].flxsbh.push(parseInt(value))
                } else if ((this.lastxvalue[i] + 1) === parseInt(value)) {
                    this.tabledata.xsxsxx[i].flxsbh.push(parseInt(value))
                } else {
                    for (var j = this.lastxvalue[i]; j < parseInt(value); j++) {
                        this.tabledata.xsxsxx[i].flxsbh.push(j + 1)
                    }
                }
                this.lastxvalue[i] = parseInt(value)
                this.openx(i)
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });
            });
        },
        openc(i) {
            this.$prompt('请输入小鼠编号', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(({ value }) => {
                if (this.lastcvalue[i] === 0) {
                    this.tabledata.xsxsxx[i].flcsbh.push(parseInt(value))
                } else if ((this.lastcvalue[i] + 1) === parseInt(value)) {
                    this.tabledata.xsxsxx[i].flcsbh.push(parseInt(value))
                } else {
                    for (var j = this.lastcvalue[i]; j < parseInt(value); j++) {
                        this.tabledata.xsxsxx[i].flcsbh.push(j + 1)
                    }
                }
                this.lastcvalue[i] = parseInt(value)
                this.openc(i)
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });
            });
        },
        goback() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less">
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

        i{
            margin-right: 20px;
            font-weight: 800;
            font-size: 25px;
        }

        .iconfont {
            margin-right: 20px;
            font-weight: 800;
            font-size: 25px;
        }
    }
}



.first {
    border-bottom: 0;
    height: 60px;
}

.second {
    border-top: 0;
    border-bottom: 0;
}

.third {
    border-top: 0;
    border-bottom: 0;
    height: 60px;
}

.forth {
    border-top: 0;
    border-bottom: 0;
    height: 60px;
}

.fifth {
    border-top: 0;
    border-bottom: 0;
    height: 60px;
}

.sixth {
    border-top: 0;
    height: 60px;

}

th {
    font-size:15px;
    background-color: rgb(226, 226, 226);
}

.xsxsinfo {
    background-color: rgb(209, 209, 209);
}

.el-table {
    margin-top: 0;
}


::v-deep.el-table thead {
    color: black;
    font-weight: 500;

}

::v-deep.el-table td {
    height: 60px;
}


.btn{
    display: flex;
    justify-content: center;
  
}
</style>