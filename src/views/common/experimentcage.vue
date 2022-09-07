<template>
    <div>
        <div class="top">
            <table class="title_container" border="0" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <div>
                    <i class="el-icon-s-tools"></i>
                    <span style="font-size: 24px;">实验笼笼位详细信息</span>
                </div>
                <a @click="goback"><span class="iconfont icon-rollback"></span></a>
            </table>
        </div>
        <div style="margin-top: 7%;" class="creditrecord">
            <table class="first" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px"
                style="margin-top: 20px;">
                <tbody align="center" class="test">
                    <th style="width: 15%;">实验项目号</th>
                    <td style="width: 35%;" colspan="1" rowspan="1" @click="syxmhshow = true">
                        <span>{{ cagedata.project_id }}</span>
                    </td>
                    <th style="width: 15%;">实验开始日期</th>
                    <td style="width: 35%;" colspan="1" rowspan="1" @click="syksrqshow = true">
                        <el-input v-if="syksrqshow" v-model="cagedata.created" @keyup.enter.native="syksrqshow = false">
                        </el-input>
                        <span v-else>{{ cagedata.created }}</span>
                    </td>
                </tbody>
            </table>
            <table class="second" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <tbody align="center" style="height: 60px;">
                    <th style="width: 15%;">组别</th>
                    <td style="width: 35%;" colspan="1" rowspan="1" @click="groupshow = true">
                        <el-input v-if="groupshow" v-model="cagedata.dtcd.group"
                            @keyup.enter.native="groupshow = false">
                        </el-input>
                        <span v-else>{{ cagedata.dtcd.group }}</span>
                    </td>
                    <th style="width: 15%;">性别</th>
                    <td style="width: 35%;" colspan="1" rowspan="1" @click="sexshow = true">
                        <el-select width="80px" v-if="sexshow" v-model="cagedata.dtcd.gender" placeholder="请选择性别">
                            <el-option v-for="item in sexoption" :key="item.value" :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <span v-else>{{ cagedata.dtcd.gender }}</span>
                    </td>
                </tbody>
            </table>
            <table class="second" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <tbody align="center" style="height: 60px;">
                    <th style="width: 15%;">小鼠供应商</th>
                    <td style="width: 35%;" colspan="1" rowspan="1" @click="xsgysshow = true">
                        <el-input v-if="xsgysshow" v-model="cagedata.dtcd.supplier"
                            @keyup.enter.native="xsgysshow = false">
                        </el-input>
                        <span v-else>{{ cagedata.dtcd.supplier }}</span>
                    </td>
                    <th style="width: 15%;">出生日期/造模日期</th>
                    <td style="width: 35%;" colspan="1" rowspan="1" @click="csrqshow = true">
                        <el-input v-if="csrqshow" v-model="cagedata.dtcd.dob" @keyup.enter.native="csrqshow = false">
                        </el-input>
                        <span v-else>{{ cagedata.dtcd.dob }}</span>
                    </td>
                </tbody>
            </table>
            <table class="second" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <tbody align="center" style="height: 60px;">
                    <th style="width: 15%;">小鼠到货周龄</th>
                    <td style="width: 35%;" colspan="1" rowspan="1" @click="xsdhzlshow = true">
                        <el-input v-if="xsdhzlshow" v-model="tabledata.xsdhzl" @keyup.enter.native="xsdhzlshow = false">
                        </el-input>
                        <span v-else>{{ this.tabledata.xsdhzl }}</span>
                    </td>
                    <th style="width: 15%;">小鼠批号</th>
                    <td style="width: 35%;" colspan="1" rowspan="1" @click="xsphshow = true">
                        <el-input v-if="xsphshow" v-model="tabledata.xsph" @keyup.enter.native="xsphshow = false">
                        </el-input>
                        <span v-else>{{ this.tabledata.xsph }}</span>
                    </td>
                </tbody>
            </table>
            <table class="second" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <tbody align="center" style="height: 60px;">
                    <th style="width: 15%;">数量</th>
                    <td style="width: 35%;" colspan="1" rowspan="1">
                        <span>{{ cagedata.dtcd.m_info.length }}</span>
                    </td>
                    <th style="width: 15%;">负责人</th>
                    <td style="width: 35%;" colspan="1" rowspan="1" @click="leadershow = true">
                        <el-input v-if="leadershow" v-model="cagedata.creator_id"
                            @keyup.enter.native="leadershow = false">
                        </el-input>
                        <span v-else>{{ cagedata.creator_id }}</span>
                    </td>
                </tbody>
            </table>
            <table class="second" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <tbody align="center" style="height: 60px;">
                    <th style="width: 15%;">测试药品</th>
                    <td style="width: 35%;" colspan="1" rowspan="1" @click="csypshow = true">
                        <el-input v-if="csypshow" v-model="cagedata.dtcd.details['测试药品']"
                            @keyup.enter.native="csypshow = false">
                        </el-input>
                        <span v-else>{{ cagedata.dtcd.details['测试药品'] }}</span>
                    </td>
                    <th style="width: 15%;">给药剂量</th>
                    <td style="width: 35%;" colspan="1" rowspan="1" @click="gyjlshow = true">
                        <el-input v-if="gyjlshow" v-model="cagedata.dtcd.details['给药剂量']"
                            @keyup.enter.native="gyjlshow = false">
                        </el-input>
                        <span v-else>{{ cagedata.dtcd.details['给药剂量'] }}</span>
                    </td>
                </tbody>
            </table>
            <table class="second" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <tbody align="center" style="height: 60px;">
                    <th style="width: 15%;">给药方式</th>
                    <td style="width: 35%;" colspan="1" rowspan="1" @click="gyfsshow = true">
                        <el-input v-if="gyfsshow" v-model="cagedata.dtcd.details['给药方式']"
                            @keyup.enter.native="gyfsshow = false">
                        </el-input>
                        <span v-else>{{ cagedata.dtcd.details['给药方式'] }}</span>
                    </td>
                    <th style="width: 15%;">药物浓度</th>
                    <td style="width: 35%;" colspan="1" rowspan="1" @click="ywndshow = true">
                        <el-input v-if="ywndshow" v-model="cagedata.dtcd.details['药物浓度']"
                            @keyup.enter.native="ywndshow = false">
                        </el-input>
                        <span v-else>{{ cagedata.dtcd.details['药物浓度'] }}</span>
                    </td>
                </tbody>
            </table>
            <table class="second" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <tbody align="center" style="height: 60px;">
                    <th style="width: 15%;">给药体积</th>
                    <td style="width: 35%;" colspan="1" rowspan="1" @click="gytjshow = true">
                        <el-input v-if="gytjshow" v-model="cagedata.dtcd.details['给药体积']"
                            @keyup.enter.native="gytjshow = false">
                        </el-input>
                        <span v-else>{{ cagedata.dtcd.details['给药体积'] }}</span>
                    </td>
                    <th style="width: 15%;">药品批号</th>
                    <td style="width: 35%;" colspan="1" rowspan="1" @click="ypphshow = true">
                        <el-input v-if="ypphshow" v-model="cagedata.dtcd.details['药品批号']"
                            @keyup.enter.native="ypphshow = false">
                        </el-input>
                        <span v-else>{{ cagedata.dtcd.details['药品批号'] }}</span>
                    </td>
                </tbody>
            </table>
            <table class="second" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <tbody align="center" style="height: 60px;">
                    <th style="width: 15%;">小鼠编号</th>
                    <td width="113px" colspan="1" rowspan="1" @click="xsbh1show = true">
                        <el-input v-if="xsbh1show" v-model="cagedata.mice[0].id"
                            @keyup.enter.native="xsbh1show = false">
                        </el-input>
                        <span v-else>{{ cagedata.mice[0].id }}</span>
                    </td>
                    <td width="113px" colspan="1" rowspan="1" @click="xsbh2show = true">
                        <el-input v-if="xsbh2show" v-model="cagedata.mice[1].id"
                            @keyup.enter.native="xsbh2show = false">
                        </el-input>
                        <span v-else>{{ cagedata.mice[1].id }}</span>
                    </td>
                    <td width="113px" colspan="1" rowspan="1" @click="xsbh3show = true">
                        <el-input v-if="xsbh3show" v-model="cagedata.mice[2].id"
                            @keyup.enter.native="xsbh3show = false">
                        </el-input>
                        <span v-else>{{ cagedata.mice[2].id }}</span>
                    </td>
                    <td width="113px" colspan="1" rowspan="1" @click="xsbh4show = true">
                        <el-input v-if="xsbh4show" v-model="cagedata.mice[3].id"
                            @keyup.enter.native="xsbh4show = false">
                        </el-input>
                        <span v-else>{{ cagedata.mice[3].id }}</span>
                    </td>
                    <td width="113px" colspan="1" rowspan="1" @click="xsbh5show = true">
                        <el-input v-if="xsbh5show" v-model="cagedata.mice[4].id"
                            @keyup.enter.native="xsbh5show = false">
                        </el-input>
                        <span v-else>{{ cagedata.mice[4].id }}</span>
                    </td>
                    <td width="113px" colspan="1" rowspan="1" @click="xsbh6show = true">
                        <el-input v-if="xsbh6show" v-model="cagedata.mice[5].id"
                            @keyup.enter.native="xsbh6show = false">
                        </el-input>
                        <span v-else>{{ cagedata.mice[5].id }}</span>
                    </td>
                </tbody>
            </table>
            <table class="third" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <tbody align="center" style="height: 60px;">
                    <th style="width: 15%;">备注</th>
                    <td width="680px" colspan="1" rowspan="1" @click="othershow = true">
                        <el-input v-if="othershow" v-model="tabledata.other" @keyup.enter.native="othershow = false">
                        </el-input>
                        <span v-else>{{ this.tabledata.other }}</span>
                    </td>
                </tbody>
            </table>
            <table class="forth" border="1" align="center" cellpadding="0" cellspacing="0" width="1000px">
                <tbody align="center" style="height: 60px;">
                    <th style="width: 15%;">
                        取样信息
                        <br>
                        <i class="el-icon-plus" @click="addtable"></i>
                        <br>
                        <i class="el-icon-minus" @click="deletetable"></i>
                    </th>

                    <td width="600px" colspan="1" rowspan="1">
                        <el-table :data="tableData" border style="font-size: 14px" @cell-click="cellEdit"
                            :header-cell-style="{ background: 'rgb(226, 226, 226)' }">
                            <el-table-column prop="date" label="取样日期" align="center">
                                <template slot-scope="scope">
                                    <el-date-picker v-if="scope.row.date.edit" v-model="scope.row.date.value"
                                        type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                                        @blur="loseFocus(scope.row.date)">
                                    </el-date-picker>
                                    <span v-else>{{ scope.row.date.value }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column prop="type" label="取样类型" align="center">
                                <template slot-scope="scope">
                                    <el-input v-if="scope.row.type.edit" v-model="scope.row.type.value"
                                        @blur="loseFocus(scope.row.type)"
                                        @keyup.enter.native="scope.row.type.edit = false">
                                    </el-input>
                                    <span v-else>{{ scope.row.type.value }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column prop="num" label="取样量" align="center">
                                <template slot-scope="scope">
                                    <el-input v-if="scope.row.num.edit" v-model="scope.row.num.value"
                                        @blur="loseFocus(scope.row.num)"
                                        @keyup.enter.native="scope.row.num.edit = false">
                                    </el-input>
                                    <span v-else>{{ scope.row.num.value }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column prop="code" label="取样小鼠编号" align="center">
                                <template slot-scope="scope">
                                    <el-input v-if="scope.row.code.edit" v-model="scope.row.code.value"
                                        @blur="loseFocus(scope.row.code)"
                                        @keyup.enter.native="scope.row.code.edit = false">
                                    </el-input>
                                    <span v-else>{{ scope.row.code.value }}</span>
                                </template>
                            </el-table-column>

                        </el-table>
                    </td>
                </tbody>
            </table>
        </div>
        <div class="btn" style="margin-top: 2%;">
            <el-button type="primary" class="sure" @click="xiugai">确认</el-button>
            <el-button type="primary" class="cancel" @click="goback">取消</el-button>
            <el-button type="primary" class="cancel" @click="print">导出EXCEL</el-button>
        </div>
    </div>
</template>

<script>
import headTop from '@/components/headTop.vue'
import { postnewcageandexp } from '@/api/data'
import { mapState } from 'vuex';

export default {
    data() {
        return {
            k: 1,
            syxmhshow: false,
            syksrqshow: false,
            groupshow: false,
            sexshow: false,
            xsgysshow: false,
            csrqshow: false,
            xsdhzlshow: false,
            xsphshow: false,
            countshow: false,
            leadershow: false,
            csypshow: false,
            gyjlshow: false,
            gyfsshow: false,
            ywndshow: false,
            gytjshow: false,
            ypphshow: false,
            xsbhshow: false,
            othershow: false,
            xsbh1show: false,
            xsbh2show: false,
            xsbh3show: false,
            xsbh4show: false,
            xsbh5show: false,
            xsbh6show: false,
            tableData: [
                {
                    date: {
                        value: "",
                        edit: false
                    },
                    type: {
                        value: "",
                        edit: false
                    },
                    num: {
                        value: "",
                        edit: false
                    },
                    code: {
                        value: "",
                        edit: false
                    }
                }

            ],
            sexoption: [
                {
                    value: "M",
                    label: "M"
                },
                {
                    value: "F",
                    label: "F"
                }
            ],
            tabledata: {},
            cagedata: this.$route.query.data,
            xssl: this.$route.query.data.dtcd.m_info.length
        }
    },
    components: { headTop },
    computed: {
        ...mapState({
            miceinfo: (state) => {
                return state.miceinfo
            }
        })
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
            a.download = "实验笼test.xls"
            a.click()
        },
        cellEdit(row, column) {
            // 将单元格变为输入框
            row[column.property].edit = true
            // 聚焦到单元格
            setTimeout(() => {
                this.$refs[column.property].focus()
            }, 20)
        },
        // 当输入框失去焦点时不显示输入框
        loseFocus(editCell) {
            editCell.edit = false
        },

        selectChange(callback, editCell) {
            if (!callback) {
                editCell.edit = false
            }
        },
        xiugai() {
            // console.log(this.miceinfo)
            this.cagedata.dtcd.m_info = []
            for (var i in this.cagedata.mice) {
                if (this.cagedata.mice[i].id === '') {
                } else {
                    for (var j in this.miceinfo) {
                        if (this.miceinfo[j].id === this.cagedata.mice[i].id) {
                            this.cagedata.dtcd.m_info.push({
                                "id": this.miceinfo[j].id,
                                "strain": {
                                    "name": this.miceinfo[j].strains[0].name,
                                    "value": this.miceinfo[j].strains[0].value
                                },
                                "boad": this.miceinfo[j].boad,
                            })
                        }
                    }
                }
            }
            let postdata = {
                "task_id": this.cagedata.task_id,
                "cage_details": {
                    "conf_id": this.cagedata.dtcd.conf_id,
                    "details": {
                        "测试药品": this.cagedata.dtcd.details.测试药品,
                        "给药剂量": this.cagedata.dtcd.details.给药剂量,
                        "给药方式": this.cagedata.dtcd.details.给药方式,
                        "药物浓度": this.cagedata.dtcd.details.药物浓度,
                        "给药体积": this.cagedata.dtcd.details.给药体积,
                        "药品批号": this.cagedata.dtcd.details.药品批号
                    },
                    "group": this.cagedata.dtcd.group,
                    "gender": this.cagedata.dtcd.gender,
                    "dob": this.cagedata.dtcd.dob,
                    "m_info": this.cagedata.dtcd.m_info
                }
            }
            let expid = '378648d1-c59a-459b-8234-de155a7e66a6'
            postnewcageandexp('drugtest', this.cagedata.id, postdata).then((res) => {
                if (res.code === 200) {
                    this.$message.success("修改成功")
                    this.goback()
                }
            })
        },
        addtable() {
            this.k += 1
            this.tableData.push({
                date: {
                    value: "",
                    edit: false
                },
                type: {
                    value: "",
                    edit: false
                },
                num: {
                    value: "",
                    edit: false
                },
                code: {
                    value: "",
                    edit: false
                }
            })

        },
        deletetable() {
            if (this.k > 1) {
                this.k -= 1
                this.tableData.pop() //这里需要删除tableData中的最后那个数据
            }
        },
        goback() {
            this.$router.go(-1)
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



tbody {
    height: 60px;
    font-size: 14px;
}

.first {
    border-bottom: 0;
}

.second {
    border-top: 0;
    border-bottom: 0;
    height: 60px;
}

.third {
    border-top: 0;
    border-bottom: 0;
    height: 60px;
}

.forth {
    border-top: 0;
    height: 60px;
}

th {
    font-size: 15px;
    background-color: rgb(226, 226, 226);
}

.el-table {
    margin-top: 0;
}


::v-deep.el-table thead {
    color: black;
    font-weight: 500;

    th {
        border-left: 1px solid black;
    }
}

::v-deep.el-table td {
    height: 60px;
}

::v-deep .el-table tr {
    td {
        border-left: 1px solid black;
        border-top: 1px solid black;
    }

}


.btn {
    display: flex;
    justify-content: center;

}
</style>