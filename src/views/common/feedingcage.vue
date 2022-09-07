<template>
    <div>
        <div class="top">
            <table class="title_container" border="0" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <div>
                    <i class="el-icon-chat-line-square"></i>
                    <span style="font-size: 24px;">饲养笼笼位详细信息</span>
                </div>
                <a @click="goback"><span class="iconfont icon-rollback"></span></a>
            </table>
        </div>
        <div style="margin-top: 7%;" class="creditrecord">
            <table class="first" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px"
                style="margin-top: 20px;" @cell-click="cellEdit">
                <tbody align="center" class="test">
                    <th style="width: 15%;">品系</th>
                    <td style="width: 35%;" colspan="1" rowspan="1" @click="pxshow = true">
                        <!-- <el-input v-if="pxshow" v-model="cagedata.fcd.m_info[0].strain.value"
                            @keyup.enter.native="pxshow = false">
                        </el-input> -->
                        <span>{{ cagedata.task_id }}</span>
                    </td>
                    <th style="width: 15%;">出生日期/到货日期</th>
                    <td style="width: 35%;" colspan="1" rowspan="1" @click="csrqshow = true">
                        <el-input v-if="csrqshow" v-model="cagedata.fcd.dob" @keyup.enter.native="csrqshow = false">
                        </el-input>
                        <span v-else>{{  cagedata.fcd.dob  }}</span>
                    </td>
                </tbody>
            </table>
            <table class="second" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px"
                @cell-click="cellEdit">
                <tbody align="center" style="height: 60px;">
                    <th style="width: 15%;">性别</th>
                    <td width="280px" colspan="1" rowspan="1" @click="sexshow = true">
                        <el-input v-if="sexshow" v-model="cagedata.fcd.gender" @keyup.enter.native="sexshow = false">
                        </el-input>
                        <span v-else>{{  cagedata.fcd.gender }}</span>
                    </td>
                    <th style="width: 15%;">数量</th>
                    <td width="280px" colspan="1" rowspan="1" @click="numshow = true">
                        <el-input v-if="numshow" v-model="cagedata.fcd.m_info.length"
                            @keyup.enter.native="numshow = false">
                        </el-input>
                        <span v-else>{{  cagedata.mice.length  }}</span>
                    </td>
                </tbody>
            </table>
            <table class="second" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px"
                @cell-click="cellEdit">
                <tbody align="center" style="height: 100px;">
                    <th style="width: 15%;">小鼠供应商</th>
                    <td width="280px" colspan="1" rowspan="1" @click="xsgysshow = true">
                        <el-input v-if="xsgysshow" v-model="cagedata.fcd.supplier" @keyup.enter.native="xsgysshow = false">
                        </el-input>
                        <span v-else>{{  cagedata.fcd.supplier  }}</span>
                    </td>
                    <th style="width: 15%;">基因型</th>
                    <td width="280px" colspan="1" rowspan="1" @click="jyx1show = true">
                        <el-input v-if="jyx1show" v-model="cagedata.fcd.m_info[0].strain.name"
                            @keyup.enter.native="jyx1show = false">
                        </el-input>
                        <span v-else>{{
                             cagedata.fcd.m_info[0].strain.name + '/' + cagedata.fcd.m_info[1].strain.name }}</span>
                    </td>
                </tbody>
            </table>
            <table class="second" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px"
                @cell-click="cellEdit">
                <tbody align="center" style="height: 60px;">
                    <th style="width: 15%;">到货周龄</th>
                    <td width="280px" colspan="1" rowspan="1" @click="dhzqshow = true">
                        <el-input v-if="dhzqshow" v-model="tabledata.dhzq" @keyup.enter.native="dhzqshow = false">
                        </el-input>
                        <span v-else>{{  this.tabledata.dhzq  }}</span>
                    </td>
                    <th style="width: 15%;">项目号</th>
                    <td width="280px" colspan="1" rowspan="1" @click="xmhshow = true">
                        <el-input v-if="xmhshow" v-model="cagedata.project_id" @keyup.enter.native="xmhshow = false">
                        </el-input>
                        <span v-else>{{  cagedata.project_id }}</span>
                    </td>
                </tbody>
            </table>
            <table class="second" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px"
                @cell-click="cellEdit">
                <tbody align="center" style="height: 60px;">
                    <th style="width: 15%;">小鼠编号</th>
                    <td width="113px" colspan="1" rowspan="1" @click="xsbh1show = true">
                        <el-input v-if="xsbh1show" v-model="cagedata.mice[0].id"
                            @keyup.enter.native="xsbh1show = false">
                        </el-input>
                        <span v-else>{{  cagedata.mice[0].id  }}</span>
                    </td>
                    <td width="113px" colspan="1" rowspan="1" @click="xsbh2show = true">
                        <el-input v-if="xsbh2show" v-model="cagedata.mice[1].id"
                            @keyup.enter.native="xsbh2show = false">
                        </el-input>
                        <span v-else>{{  cagedata.mice[1].id  }}</span>
                    </td>
                    <td width="113px" colspan="1" rowspan="1" @click="xsbh3show = true">
                        <el-input v-if="xsbh3show" v-model="cagedata.mice[2].id" @keyup.enter.native="xsbh3show = false">
                        </el-input>
                        <span v-else>{{  cagedata.mice[2].id  }}</span>
                    </td>
                    <td width="113px" colspan="1" rowspan="1" @click="xsbh4show = true">
                        <el-input v-if="xsbh4show" v-model="cagedata.mice[3].id" @keyup.enter.native="xsbh4show = false">
                        </el-input>
                        <span v-else>{{  cagedata.mice[3].id  }}</span>
                    </td>
                    <td width="113px" colspan="1" rowspan="1" @click="xsbh5show = true">
                        <el-input v-if="xsbh5show" v-model="cagedata.mice[4].id" @keyup.enter.native="xsbh5show = false">
                        </el-input>
                        <span v-else>{{  cagedata.mice[4].id  }}</span>
                    </td>
                    <td width="113px" colspan="1" rowspan="1" @click="xsbh6show = true">
                        <el-input v-if="xsbh6show" v-model="cagedata.mice[5].id" @keyup.enter.native="xsbh6show = false">
                        </el-input>
                        <span v-else>{{  cagedata.mice[5].id  }}</span>
                    </td>
                </tbody>
            </table>
            <table class="second" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px"
                @cell-click="cellEdit">
                <tbody align="center" style="height: 60px;">
                    <th style="width: 15%;">鉴定日期</th>
                    <td width="113px" colspan="1" rowspan="1" @click="jdrq1show = true">
                        <el-input v-if="jdrq1show" v-model="tabledata.jdrq1" @keyup.enter.native="jdrq1show = false">
                        </el-input>
                        <span v-else>{{  tabledata.jdrq1  }}</span>
                    </td>
                    <td width="113px" colspan="1" rowspan="1" @click="jdrq2show = true">
                        <el-input v-if="jdrq2show" v-model="tabledata.jdrq2" @keyup.enter.native="jdrq2show = false">
                        </el-input>
                        <span v-else>{{  tabledata.jdrq2  }}</span>
                    </td>
                    <td width="113px" colspan="1" rowspan="1" @click="jdrq3show = true">
                        <el-input v-if="jdrq3show" v-model="tabledata.jdrq3" @keyup.enter.native="jdrq3show = false">
                        </el-input>
                        <span v-else>{{  tabledata.jdrq3  }}</span>
                    </td>
                    <td width="113px" colspan="1" rowspan="1" @click="jdrq4show = true">
                        <el-input v-if="jdrq4show" v-model="tabledata.jdrq4" @keyup.enter.native="jdrq4show = false">
                        </el-input>
                        <span v-else>{{  tabledata.jdrq4  }}</span>
                    </td>
                    <td width="113px" colspan="1" rowspan="1" @click="jdrq5show = true">
                        <el-input v-if="jdrq5show" v-model="tabledata.jdrq5" @keyup.enter.native="jdrq5show = false">
                        </el-input>
                        <span v-else>{{  tabledata.jyx6  }}</span>
                    </td>
                    <td width="113px" colspan="1" rowspan="1" @click="jdrq6show = true">
                        <el-input v-if="jdrq6show" v-model="tabledata.jdrq6" @keyup.enter.native="jdrq6show = false">
                        </el-input>
                        <span v-else>{{  tabledata.jdrq6  }}</span>
                    </td>
                </tbody>
            </table>
            <table class="third" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <tbody align="center" style="height: 60px;">
                    <th style="width: 15%;">备注</th>
                    <td width="680px" colspan="1" rowspan="1"></td>
                </tbody>
            </table>
        </div>
        <div class="btn" style="margin-top: 2%;">
            <el-button type="primary" class="sure" @click="changetable">确认</el-button>
            <el-button type="primary" class="cancel" @click="goback">取消</el-button>
            <el-button type="primary" class="cancel" @click="print">导出EXCEL</el-button>
        </div>
    </div>
</template>

<script>

import { postnewcageandexp } from '@/api/data'
export default {
    data() {
        return {
            pxshow: false,
            csrqshow: false,
            sexshow: false,
            numshow: false,
            xsgysshow: false,
            dhzqshow: false,
            xmhshow: false,
            xsbh1show: false,
            xsbh2show: false,
            xsbh3show: false,
            xsbh4show: false,
            xsbh5show: false,
            xsbh6show: false,
            jyx1show: false,
            jyx2show: false,
            jyx3show: false,
            jyx4show: false,
            jyx5show: false,
            jyx6show: false,
            jdrq1show: false,
            jdrq2show: false,
            jdrq3show: false,
            jdrq4show: false,
            jdrq5show: false,
            jdrq6show: false,
            bzshow: false,
            tabledata: {},
            cagedata: this.$route.query.data,
        }
    },
    methods: {
        print() {
            let tableHtml = document.getElementsByClassName("creditrecord");
            var appendHtml = ""
            for (var i = 0; i < tableHtml.length; i++) {
                appendHtml += tableHtml[i].outerHTML
            }
            let html = "<html><head><meta charset='utf-8' /></head><body>" + appendHtml + "</body></html>"
            let blob = new Blob([html], { type: "application/vnd.ms-excel" });
            let a = document.createElement('a')
            a.href = URL.createObjectURL(blob)
            a.download = "饲养笼test.xls"
            a.click()
        },
        goback() {
            this.$router.go(-1)
        },
        cellEdit(row, column) {
            // 将单元格变为输入框
            row[column.property].edit = true
            // 聚焦到单元格
            setTimeout(() => {
                this.$refs[column.property].focus()
            }, 20)
        },
        changetable() {
            let postdata = {
                "cage_details": {
                    "supplier":this.cagedata.fcd.supplier,
                    "dob": this.cagedata.fcd.dob,
                    "m_info": this.cagedata.fcd.m_info,
                    "gender":this.cagedata.fcd.gender
                }
            }
            // let expid = '378648d1-c59a-459b-8234-de155a7e66a6'
            postnewcageandexp('feed', this.cagedata.id, postdata).then((res) => {
                if (res.code === 200) {
                    this.$message.success("修改成功")
                    this.goback()
                }
            })
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

        i {
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
}

.second {
    border-top: 0;
    border-bottom: 0;
}

.third {
    border-top: 0;
}

th {
    font-size: 15px;
    height: 60px;
    background-color: rgb(226, 226, 226);
}

.btn {
    display: flex;
    justify-content: center;

}
</style>