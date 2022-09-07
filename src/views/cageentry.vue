<template>
    <div class="wholepage">
        <div style="margin-top: 4%;">
            <span style="margin-left: 15%">请选择筛选条件</span>
            <el-select v-model="value" placeholder="请选择" style="margin-left: 5%;" @change="(val) => { gosearch(val) }">
                <el-option v-for="item in options" :key="item.value" :label="item.value" :value="item.value">
                </el-option>
            </el-select>
            <el-date-picker v-model="timevalue" value-format="timestamp" type="daterange" range-separator="~"
                start-placeholder="开始日期" end-placeholder="结束日期" style="margin-left: 3%;">
            </el-date-picker>
            <el-button type="primary" style="margin-right: 15%; float: right;" @click="goback">返回</el-button>
        </div>
        <div class="ttable" style="margin-top: 2%;" v-if="showtable">
            <div style="margin-left: 10%; width: 20%; float: left;" v-for="(data, index) in micedata">
                <table class="first" border="1" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 20px;">
                    <tbody align="center" class="test">
                        <th style="width: 100%;" colspan="4">{{ data.name }}</th>
                    </tbody>
                    <tbody align="center" style="height: 25px;">
                        <th style="width: 50%;" colspan="2">雄鼠</th>
                        <th style="width: 50%;" colspan="2">雌鼠</th>
                    </tbody>
                    <tbody align="center">
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[0] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="5" @click="cageshows[index][0].cageshow = true">
                                <el-input v-if="cageshows[index][0].cageshow" v-model="data.malecage[0]"
                                    @keyup.enter.native="test1(index, 0, 'M')"></el-input>
                                <span v-else>{{ data.malecage[0] }}</span>
                            </td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[0] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="5" @click="cageshows[index][1].cageshow = true">
                                <el-input v-if="cageshows[index][1].cageshow" v-model="data.famalecage[0]"
                                    @keyup.enter.native="test1(index, 0, 'F')"></el-input>
                                <span v-else>{{ data.famalecage[0] }}</span>
                            </td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[1] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[1] }}</td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[2] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[2] }}</td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[3] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[3] }}</td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[4] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[4] }}</td>
                        </tr>

                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[5] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="5" @click="cageshows[index][2].cageshow = true">
                                <el-input v-if="cageshows[index][2].cageshow" v-model="data.malecage[1]"
                                    @keyup.enter.native="test1(index,1,'M')"></el-input>
                                <span v-else>{{ data.malecage[1] }}</span>
                            </td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[5] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="5" @click="cageshows[index].cageshow4 = true">
                                <el-input v-if="cageshows[index].cageshow4" v-model="data.famalecage[1]"
                                    @keyup.enter.native="cageshows[index].cageshow4 = false"></el-input>
                                <span v-else>{{ data.famalecage[1] }}</span>
                            </td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[6] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[6] }}</td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[7] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[7] }}</td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[8] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[8] }}</td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[9] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[9] }}</td>
                        </tr>

                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[10] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="5" @click="cageshows[index][4].cageshow = true">
                                <el-input v-if="cageshows[index][4].cageshow" v-model="data.malecage[2]"
                                    @keyup.enter.native="test1(index,2,'M')"></el-input>
                                <span v-else>{{ data.malecage[2] }}</span>
                            </td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[10] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="5" @click="cageshows[index].cageshow6 = true">
                                <el-input v-if="cageshows[index].cageshow6" v-model="data.famalecage[2]"
                                    @keyup.enter.native="cageshows[index].cageshow6 = false"></el-input>
                                <span v-else>{{ data.famalecage[2] }}</span>
                            </td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[11] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[11] }}</td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[12] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[12] }}</td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[13] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[13] }}</td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[14] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[14] }}</td>
                        </tr>

                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[15] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="5" @click="cageshows[index][6].cageshow = true">
                                <el-input v-if="cageshows[index][6].cageshow" v-model="data.malecage[3]"
                                    @keyup.enter.native="test1(index, 3,'M')"></el-input>
                                <span v-else>{{ data.malecage[3] }}</span>
                            </td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[15] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="5" @click="cageshows[index].cageshow8 = true">
                                <el-input v-if="cageshows[index].cageshow8" v-model="data.famalecage[3]"
                                    @keyup.enter.native="cageshows[index].cageshow8 = false"></el-input>
                                <span v-else>{{ data.famalecage[3] }}</span>
                            </td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[16] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[16] }}</td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[17] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[17] }}</td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[18] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[18] }}</td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[19] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[19] }}</td>
                        </tr>

                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[20] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="5" @click="cageshows[index][8].cageshow = true">
                                <el-input v-if="cageshows[index][8].cageshow" v-model="data.malecage[4]"
                                    @keyup.enter.native="test1(index,4,'M')"></el-input>
                                <span v-else>{{ data.malecage[4] }}</span>
                            </td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[20] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="5" @click="cageshows[index].cageshow10 = true">
                                <el-input v-if="cageshows[index].cageshow10" v-model="data.famalecage[4]"
                                    @keyup.enter.native="cageshows[index].cageshow10 = false"></el-input>
                                <span v-else>{{ data.famalecage[4] }}</span>
                            </td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[21] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[21] }}</td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[22] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[22] }}</td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[23] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[23] }}</td>
                        </tr>
                        <tr height="25px">
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.male[24] }}</td>
                            <td style="width: 25%;" colspan="1" rowspan="1">{{ data.famale[24] }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="btn" v-if="showtable">
            <el-button type="primary" @click="fenglong">确认分笼</el-button>
        </div>
    </div>
</template>

<script>
import { getmicsinfo, postnewcage, getcagelist } from '../api/data.js'
import { getunsetcage } from '../api/data.js'
import { mapState } from 'vuex';

export default {
    data() {
        return {
            options: [{
                value: '出生日期',
                label: '出生日期'
            }, {
                value: '分笼日期',
                label: '分笼日期'
            }],
            value: '',
            timevalue: [],
            k: 3,
            micedata: [
                {
                    name: 'NES-Cre/Gpx4',
                    male: [],
                    famale: [],
                    malecage: [],
                    famalecage: []
                },
                {
                    name: 'Nes/Cre',
                    male: [],
                    famale: [],
                    malecage: [],
                    famalecage: []
                },
                {
                    name: 'Gpx4',
                    male: [],
                    famale: [],
                    malecage: [],
                    famalecage: []
                }
            ],
            cageshows: [
                [
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
            ],
                [
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
            ],
                [
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
                    {cageshow: false},
            ]
            ],
            showtable: false,
            cagelist: []
        }
    },
    mounted() {
        getcagelist().then((res) => {
            if (res.code === 200) {
                this.cagelist = res.data.data
            }
        })
    },
    computed: {
        ...mapState({
            miceinfo: (state) => {
                return state.miceinfo
            }
        })
    },
    methods: {
        fenglong() {
            for (var i in this.micedata) {
                for (var j in this.micedata[i].malecage) {
                    if (this.micedata[i].malecage[j] === undefined || this.micedata[i].malecage[j] === '') {
                    } else {
                        let miceids = []
                        for (var k = j * 5; k < j * 5 + 5; k++) {
                            for (var o in this.miceinfo) {
                                if (this.miceinfo[o].id === this.micedata[i].male[k]) {
                                    miceids.push({
                                        "id": this.miceinfo[o].id,
                                        "strain": {
                                            "name": this.miceinfo[o].strains[0].name,
                                            "value": this.miceinfo[o].strains[0].value
                                        },
                                        "boad": this.miceinfo[o].boad,
                                    })
                                }
                            }
                        }
                        console.log(miceids)
                        let postdata = {
                            "task_id": this.micedata[i].name,
                            "house_id": '1',
                            "shelf_id": "1-A",
                            "wall_id": '1-A-A',
                            "x_axis": this.micedata[i].malecage[j][0],
                            "experiment_id": this.value2,
                            "project_id": 'test',
                            "y_axis": this.micedata[i].malecage[j][1],
                            "type": "feed",
                            "created": "2022-08-18",
                            "creator_id": "",
                            "cage_details": {
                                "gender": "M",
                                "dob": null,
                                "m_info": miceids
                            }
                        }
                        postnewcage('feed', postdata).then((res) => {
                            if (res.code === 200) {
                                this.$message.success('分笼成功')
                            }
                        })
                    }
                }
                for (var l in this.micedata[i].famalecage) {
                    if (this.micedata[i].famalecage[l] === undefined || this.micedata[i].famalecage[l] === '') {
                    } else {
                        let miceids = []
                        for (var m = l * 5; m < l * 5 + 5; m++) {
                            for (var p in this.miceinfo) {
                                if (this.miceinfo[p].id === this.micedata[i].famale[m]) {
                                    miceids.push({
                                        "id": this.miceinfo[p].id,
                                        "strain": {
                                            "name": this.miceinfo[p].strains[0].name,
                                            "value": this.miceinfo[p].strains[0].value
                                        },
                                        "boad": this.miceinfo[p].boad,
                                    })
                                }
                            }
                        }
                        let postdata = {
                            "task_id": this.micedata[i].name,
                            "house_id": '1',
                            "shelf_id": "1-A",
                            "wall_id": '1-A-A',
                            "x_axis": this.micedata[i].famalecage[l][0],
                            "experiment_id": this.value2,
                            "project_id": 'test',
                            "y_axis": this.micedata[i].famalecage[l][1],
                            "type": "feed",
                            "created": "2022-08-18",
                            "creator_id": "",
                            "cage_details": {
                                "gender": "M",
                                "dob": null,
                                "m_info": miceids
                            }
                        }
                        postnewcage('feed', postdata).then((res) => {
                            if (res.code === 200) {
                                this.$message.success('分笼成功')
                            }
                        })
                    }
                }
            }
        },
        test1(index,index1, gender) {


            // this.cageshows[index].cageshow1 = false
            // console.log(this.micedata[index].malecage[index]) //输入的A1
            // console.log(this.cagelist[index].x_axis + this.cagelist[index].y_axis)//得到的笼子位置
            for (var i in this.cagelist) {
                let cagepostion = this.cagelist[i].x_axis + this.cagelist[i].y_axis

                if(gender==='M'){
                    if (this.micedata[index].malecage[index1] === cagepostion) {
                        this.micedata[index].malecage[index1] = ''
                        this.$message.error("该笼位已被占用,请重新输入")
                        // console.log(cagepostion)
                    } else {
                        this.cageshows[index][index1*2].cageshow = false
                    }  
                } else if(gender==='F'){
                    if (this.micedata[index].famalecage[index1] === cagepostion) {
                        this.micedata[index].famalecage[index1] = ''
                        this.$message.error("该笼位已被占用,请重新输入")
                        // console.log(cagepostion)
                    } else {
                        this.cageshows[index][index1*2-1].cageshow = false
                    }  
                }
                
                
                
            }
        },
        goback() {
            this.$router.go(-1)
        },
        gosearch(value) {
            getmicsinfo().then((res) => {
                if (res.code === 200) {
                    for (var i in this.micedata) {
                        this.micedata[parseInt(i)].male = []
                        this.micedata[parseInt(i)].famale = []
                        for (var j = 0; j < 10; j++) {
                            this.micedata[parseInt(i)].male.push(res.data.data[20 * parseInt(i) + j].id)
                            this.micedata[parseInt(i)].famale.push(res.data.data[20 * (parseInt(i)) + j + 10].id)
                        }
                    }
                }
                this.showtable = true
            })
            getunsetcage()

        },

    }
}
</script>

<style scoped lang="less">
.wholepage {
    display: flex;
    flex-direction: column;
}

.btn {
    margin: 20px;
}
</style>