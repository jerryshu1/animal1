<template>
    <div>
        <head-top></head-top>
        <div class="a_i" style="width:100%">
            <!-- <p v-if="this.$route.meta[1].split('架')[1][0] === 'J'" v-for="index in label2">{{ index }}</p> -->
            <p v-for="index in label1">{{ index }}</p>
            <!-- <p v-for="index in label2" v-if="shelf === 'J'">{{ index }}</p> -->

        </div>
        <div class="nine_container" width="100%">
            <div class="nine" v-for="(data, index) in tableData">
                <div style="margin-left:5px">
                    <span style="line-height: 100px;">
                        {{ index + 1 }}
                    </span>
                </div>
                <div v-for="(cageinfo, index1) in data" @click="goshow(cageinfo, index, index1)">
                    <drugtest :drugdata="cageinfo" :width="cagewidth" v-if="cageinfo.type === '实验笼'"></drugtest>
                    <feedtest :feeddata="cageinfo" :width="cagewidth" v-else-if="cageinfo.type === '饲养笼'"></feedtest>
                    <breedtest :breeddata="cageinfo" :width="cagewidth" v-else-if="cageinfo.type === '繁殖笼'"></breedtest>
                    <emptytest :width="cagewidth" v-else></emptytest>
                </div>
            </div>
        </div>
        <div style="margin-top: 2%;margin-bottom:2%">
            <el-button type="primary" style="margin-left: 6%;" @click="goexpmouse">实验用鼠</el-button>
            <el-button type="primary" style="margin-left: 6%;" @click="gocageentry">笼位录入</el-button>
            <el-button type="primary" style="margin-left: 6%;" @click="gomatingtask">交配任务</el-button>
            <el-button type="primary" style="margin-left: 6%;" @click="gotransfertask">转移任务</el-button>
            <el-button type="primary" style="margin-left: 6%;" @click="dialogYWVisible = true">意外死亡</el-button>
            <el-button type="primary" style="margin-left: 6%;" @click="godisuse">淘汰</el-button>
            <!-- <el-button type="primary" style="margin-left: 6%;" disabled>淘汰任务</el-button> -->
        </div>
        <el-dialog title="其他笼设置" :visible.sync="dialogFormVisible">
            <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.label" :label="item.label" :value="item.label">
                </el-option>
            </el-select>
            <el-select v-model="value1" placeholder="请选择" v-if="value === '设置为功能笼'" style="margin-left: 10%;">
                <el-option v-for="item in options1" :key="item.label" :label="item.label" :value="item.label">
                </el-option>
            </el-select>
            <el-select v-model="value2" placeholder="请选择" v-if="value === '设置为实验笼'" style="margin-left: 10%;">
                <el-option v-for="item in nocagedata" :key="item.id" :label="item.id" :value="item.id">
                </el-option>
            </el-select>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="changecagename">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="dialogYWVisible" width="30%" :before-close="handleClose">
            <div class="inputmicecode">
                <p>请输入意外死亡小鼠编号</p>
                <el-input v-model="yyswmice" placeholder="请输入小鼠编号(可批量输入)"></el-input>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogYWVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogYWVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import headTop from '../components/headTop.vue'
import drugtest from '../components/drugtest.vue'
import feedtest from '../components/feedtest.vue'
import breedtest from '../components/breedtest.vue'
import emptytest from '../components/emptytest.vue'
import { getcagelist, gettasklist, postnewcage } from '../api/data.js'

export default {
    data() {
        return {
            drugdata: {
                "task_id": "空笼子",
                "project_id": "test",
                "shelf_id": "1-A",
                "type": "实验笼",
                "wall_id": "1-A-J",
                "x_axis": "A",
                "y_axis": "1",
                "created": "2022-08-17",
                "creator_id": "",
                "dtcd": {
                    "conf_id": "conf-drugtest-default",
                    "details": {
                        "测试药品": "101",
                        "给药剂量": "10g/kg",
                        "给药方式": "PO",
                        "药物浓度": "10g/ml",
                        "给药体积": "100X",
                        "药品批号": "20200301"
                    },
                    "group": "G2",
                    "gender": "M",
                    "dob": "2015-04-10T00:00:00+08:00",
                    "m_info": [
                        {
                            "id": "3",
                            "strain": {
                                "name": "WT",
                                "value": "Nes-Cre"
                            },
                            "boad": "2015-04-09T16:00:00.000+00:00"
                        }, {
                            "id": "5",
                            "strain": {
                                "name": "WT",
                                "value": "Nes-Cre"
                            },
                            "boad": "2015-04-09T16:00:00.000+00:00"
                        }
                    ]
                },
                "mice": {
                    0: "3",
                    1: "5"
                }
            },
            feeddata: {
                "task_id": "饲养笼",
                "project_id": "test",
                "shelf_id": "1-A",
                "type": "饲养笼",
                "wall_id": "1-A-J",
                "x_axis": "B",
                "y_axis": "1",
                "created": "2022-08-18",
                "creator_id": "",
                "fcd": {
                    "gender": "F",
                    "dob": "2015-04-09T16:00:00Z",
                    "m_info": [
                        {
                            "id": "4",
                            "strain": {
                                "name": "Tg",
                                "value": "Gpx4"
                            },
                            "boad": "2015-04-09T16:00:00.000+00:00"
                        }, {
                            "id": "6",
                            "strain": {
                                "name": "WT",
                                "value": "Hemi"
                            },
                            "boad": "2015-04-09T16:00:00.000+00:00"
                        }
                    ]
                },
                "mice": {
                    0: "4",
                    1: "6"
                }
            },
            breeddata: {
                "task_id": "繁殖笼",
                "project_id": "test",
                "shelf_id": "1-A",
                "type": "繁殖笼",
                "wall_id": "1-A-J",
                "x_axis": "D",
                "y_axis": "1",
                "created": "2022-09-01",
            },
            tableData: [{
                A: {},
                B: {},
                C: {},
                D: {},
                E: {},
                F: {},
                G: {},
                H: {},
                I: {},
            }, {
                A: {},
                B: {},
                C: {},
                D: {},
                E: {},
                F: {},
                G: {},
                H: {},
                I: {},
            }, {
                A: {},
                B: {},
                C: {},
                D: {},
                E: {},
                F: {},
                G: {},
                H: {},
                I: {},
            }, {
                A: {},
                B: {},
                C: {},
                D: {},
                E: {},
                F: {},
                G: {},
                H: {},
                I: {},
            }, {
                A: {},
                B: {},
                C: {},
                D: {},
                E: {},
                F: {},
                G: {},
                H: {},
                I: {},
            }, {
                A: {},
                B: {},
                C: {},
                D: {},
                E: {},
                F: {},
                G: {},
                H: {},
                I: {},
            }, {
                A: {},
                B: {},
                C: {},
                D: {},
                E: {},
                F: {},
                G: {},
                H: {},
                I: {},
            }, {
                A: {},
                B: {},
                C: {},
                D: {},
                E: {},
                F: {},
                G: {},
                H: {},
                I: {},
            }, {
                A: {},
                B: {},
                C: {},
                D: {},
                E: {},
                F: {},
                G: {},
                H: {},
                I: {},
            }],
            label1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
            label2: ['J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'],
            cagewidth: (document.documentElement.clientWidth * 0.84 - 14.5) / 9 - 6,
            cages: this.$route.query,
            dialogFormVisible: false,
            dialogYWVisible: false,
            nocagedata: [],
            value: '',
            value1: '',
            value2: '',
            options: [{
                label: '设置为功能笼'
            }, {
                label: '设置为实验笼'
            }],
            options1: [{
                label: '测试笼'
            }, {
                label: '笼卡'
            }, {
                label: '饲养料'
            }],
            index: 0,
            label: '',
            yyswmice: '',
            shelf: ''
        }
    },
    components: {
        headTop,
        drugtest,
        feedtest,
        breedtest,
        emptytest,
    },
    created() {
        if (this.$route.meta.length < 2) {
            this.$route.meta.push(this.cages.name)
        }
        this.shelf = this.$route.meta[1].split('架')[1][0]
    },
    mounted() {
        // window.screenWidth = document.documentElement.clientWidth
        // this.cagewidth = (window.screenWidth * 0.84-14.5)/9 - 6
        this.gettablist()
    },
    methods: {
        gettablist() {
            // 获取当前拥有的笼子信息，包括了已分配位置的和未分配位置的
            getcagelist().then((res) => {
                //这里需要对tableData进行初始化(虽然它没用push方法), 但因为不同笼架是用同一个组件的  所以当我从 1号位A架J面 点击到 1好位B架A面 时，数据不会进行初始化(类似于hover样式那个机制)
                this.tableData = [{
                    A: {},
                    B: {},
                    C: {},
                    D: {},
                    E: {},
                    F: {},
                    G: {},
                    H: {},
                    I: {},
                }, {
                    A: {},
                    B: {},
                    C: {},
                    D: {},
                    E: {},
                    F: {},
                    G: {},
                    H: {},
                    I: {},
                }, {
                    A: {},
                    B: {},
                    C: {},
                    D: {},
                    E: {},
                    F: {},
                    G: {},
                    H: {},
                    I: {},
                }, {
                    A: {},
                    B: {},
                    C: {},
                    D: {},
                    E: {},
                    F: {},
                    G: {},
                    H: {},
                    I: {},
                }, {
                    A: {},
                    B: {},
                    C: {},
                    D: {},
                    E: {},
                    F: {},
                    G: {},
                    H: {},
                    I: {},
                }, {
                    A: {},
                    B: {},
                    C: {},
                    D: {},
                    E: {},
                    F: {},
                    G: {},
                    H: {},
                    I: {},
                }, {
                    A: {},
                    B: {},
                    C: {},
                    D: {},
                    E: {},
                    F: {},
                    G: {},
                    H: {},
                    I: {},
                }, {
                    A: {},
                    B: {},
                    C: {},
                    D: {},
                    E: {},
                    F: {},
                    G: {},
                    H: {},
                    I: {},
                }, {
                    A: {},
                    B: {},
                    C: {},
                    D: {},
                    E: {},
                    F: {},
                    G: {},
                    H: {},
                    I: {},
                }]
                for (var i in res.data.data) {
                    //这里的判断条件是我这个数据的y_axis存在，存在就表明这个笼子是有位置的，所有else里的就是没有位置的笼子
                    if (res.data.data[i]['y_axis']) {
                        //把位置的笼子的数据放到对应的数据位置，这里面的 this.$route.meta[1]就是 '1号房A架J面'  然后res.data.data[i].wall_id就是 '1-A-J'
                        //这里我已经做了对货架的判断 还不够全面
                        if (this.$route.meta[1].split('号房')[1].split('架')[0] === res.data.data[i].wall_id.split('-')[1] && this.$route.meta[1].split('号房')[0] === res.data.data[i].wall_id.split('-')[0] && this.$route.meta[1].split('号房')[1].split('架')[1][0] === res.data.data[i].wall_id.split('-')[2]) {
                            // 修改成前端展示需要的中午而不是展示英文
                            if (res.data.data[i].type === 'drugtest') {
                                res.data.data[i].type = '实验笼'
                                res.data.data[i].mice = []
                                for (var j in res.data.data[i].dtcd.m_info) {
                                    res.data.data[i].mice.push(res.data.data[i].dtcd.m_info[j])
                                }
                                while(res.data.data[i].mice.length < 6){
                                    res.data.data[i].mice.push({
                                        'id': ''
                                    })
                                }
                            }
                            if (res.data.data[i].type === 'feed') {
                                res.data.data[i].type = '饲养笼'
                                res.data.data[i].mice = []
                                for (var j in res.data.data[i].fcd.m_info) {
                                    res.data.data[i].mice.push(res.data.data[i].fcd.m_info[j])
                                }
                                while(res.data.data[i].mice.length < 6){
                                    res.data.data[i].mice.push({
                                        'id': ''
                                    })
                                }
                            }
                            if (res.data.data[i].type === 'coitus') {
                                res.data.data[i].type = '繁殖笼'
                                res.data.data[i].mice = []
                                // for (var j in res.data.data[i].dtcd.m_info){
                                // 	res.data.data[i].mice.push(res.data.data[i].dtcd.m_info[j].id)
                                // }
                            }
                            res.data.data[i].created = res.data.data[i].created.split('T')[0]
                            // 因为这里的数据顺序是从0开始的，而后端的'y_axis'字段是正常的 1 2 3这种  所以要-1
                            this.tableData[parseInt(res.data.data[i]['y_axis'] - 1)][res.data.data[i]['x_axis']] = res.data.data[i]
                        }
                    }
                    //  else {
                    // 	//进到这里的数据就是没有确定位置的笼子，就直接把它push到nocagedata里去， 
                    // 	//因为是push的原因  所以每次调用这个函数的时候需要对nocagedata进行初始化一下，不然弄nocagedata每调用一次接口就会放一次数据
                    // 	this.nocagedata.push(res.data.data[i])
                    // }
                }
            })
        },
        goexpmouse() {
            this.$router.push({ path: '/expmouse' })
        },
        gocageentry() {
            this.$router.push({ path: '/cageentry' })
        },
        gomatingtask() {
            this.$router.push({ path: '/matingtask' })
        },
        gotransfertask() {
            this.$router.push({ path: '/transfertask' })
        },
        godisuse() {
            this.$router.push({ path: '/disuse' })
        },
        goshow(cageinfo, index, label) {
            console.log(index, label)
            if (cageinfo.type) {
            } else {
                this.getunsetcagedata()
                this.index = index
                this.label = label
                this.dialogFormVisible = true

            }
        },
        getunsetcagedata() {
            gettasklist().then((res) => {
                if (res.code === 200) {
                    this.nocagedata = res.data.data
                }
            })
        },
        changecagename() {
            if (this.value === '设置为功能笼') {
                // this.tableData[this.lastsignalindex][this.lastsignalcol]['task_id'] = this.value1
                this.dialogFormVisible = false
            } else if (this.value === '设置为实验笼') {
                // postcagetype(this.value2)
                let house_id = this.$route.meta[1].split('号房')[0]
                let shelf_id = this.$route.meta[1].split('号房')[0] + '-' + this.$route.meta[1].split('号房')[1].split('架')[0]
                let wall_id = this.$route.meta[1].split('号房')[0] + '-' + this.$route.meta[1].split('号房')[1].split('架')[0] + '-' + this.$route.meta[1].split('号房')[1].split('架')[1][0]
                let postdata = {
                    "house_id": house_id,
                    "shelf_id": shelf_id,
                    "wall_id": wall_id,
                    "x_axis": this.label,
                    "experiment_id": this.value2,
                    "project_id": 'test',
                    "y_axis": (parseInt(this.index) + 1).toString(),
                    "cage_details": {
                        "conf_id": "conf-drugtest-default",
                        "details": {
                            "测试药品": "",
                            "给药剂量": "",
                            "给药方式": "",
                            "药物浓度": "",
                            "给药体积": "",
                            "药品批号": ""
                        },
                        "group": "",
                        "gender": "",
                        // "dob": "2015-04-10T00:00:00+08:00",
                        "m_info": []
                    }
                }
                // console.log(postdata)
                // let expid = '29f21ac0-5652-4619-9fe6-63c278a20e47'
                postnewcage('drugtest', postdata).then((res) => {
                    if (res.code === 200) {
                        this.gettablist()
                        this.dialogFormVisible = false
                    }
                })
            }
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        }
    },
    watch: {
        //所以我在这里对路由信息进行监听，发生变化的时候，就会重新调用一次获取笼位信息的函数，函数里对tableData进行初始化操作
        $route(to) {
            if (to.path === '/cageinfo') {
                this.cages = to.query
                this.$route.meta[1] = this.cages.name
                this.gettablist()
            }
        }
    }
}
</script>

<style lang="less" scoped>
.header_container {
    position: absolute;
    top: 0;
}

.a_i {
    margin-top: 60px;
    height: 20px;
    margin-left: 13px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 3px;

    p {
        color: black;
    }

}

.nine {
    width: 10%;
    display: flex;
    margin-right: 2px;
}

.inputmicecode {
    p {
        margin-bottom: 20px;
    }
}
</style>
