<template>
  <div class="table-content">
    <div class="table-table" id="subOutputRank-print">
      <table cellspacing="0" border="1">
        <tr class="trd">
          <th colspan="8">代开增值税发票缴纳税款申请表</th>
        </tr>
        <tr>
          <td class="trd-left" colspan="8">
            <span>代开人声明：</span>
            <p>
              <span>&emsp;&emsp;本次缴纳税款申请单提供的开票信息真实、完整、准确，符合有关法律法规，现申请代开增值税普通发票。</span>
            </p>
            <br>
            <div>
              <input type="text" style="border: none; width: 200px">
              <span>代开人（盖章）：<input type="text" style="border: none; width: 150px"></span>
              <span><input type="text" style="border: none; width: 35px; text-align: center;">年</span>
              <span><input type="text" style="border: none; width: 35px; text-align: center;">月</span>
              <span><input type="text" style="border: none; width: 35px; text-align: center;">日</span>
            </div>
          </td>
        </tr>
        <div style="width: 100%">
          <tr class="trd" :model="payer">
            <td class="trd" rowspan="3">购买方<br>信息</td>
            <td class="t-l">名称</td>
            <td class="trd" colspan="2">{{payer.payerName}}</td>
            <td class="t-l">纳税人识别</td>
            <td class="trd" colspan="3">{{payer.payerCode}}</td>
          </tr>
          <tr class="trd">
            <td class="t-l">地址</td>
            <td class="trd" colspan="2">{{payer.payerAddr}}</td>
            <td class="t-l">开户银行</td>
            <td class="trd" colspan="3">{{payer.payerBank}}</td>
          </tr>
          <tr class="trd">
            <td class="t-l">电话</td>
            <td class="trd" colspan="2">{{payer.payerPhone}}</td>
            <td class="t-l">银行账号</td>
            <td class="trd" colspan="3">{{payer.payerBankNo}}</td>
          </tr>
          <tr :model="payee">
            <td class="trd" rowspan="3">销售方<br>信息</td>
            <td class="t-l">名称</td>
            <td class="trd" colspan="2">{{payee.payeeName}}</td>
            <td class="t-l">纳税人识别</td>
            <td class="trd" colspan="3">{{payee.payeeCidno}}</td>
          </tr>
          <tr class="trd">
            <td class="t-l">地址</td>
            <td class="trd" colspan="2"></td>
            <td class="t-l">开户银行</td>
            <td class="trd" colspan="3">
            </td>
          </tr>
          <tr class="trd">
            <td class="t-l">电话</td>
            <td class="trd" colspan="2"></td>
            <td class="t-l">银行账号</td>
            <td class="trd" colspan="3"></td>
          </tr>
          <tr class="trd">
            <td class="trd" colspan="2">代开人类型</td>
            <td class="trd" colspan="6">
              <label>自然人<input type="checkbox" style="vertical-align: text-top;display: inline-block;"></label>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <label>其他纳税人<input type="checkbox" style="vertical-align: text-top;display: inline-block;"></label>
            </td>
          </tr>
          <tr class="trd">
            <td class="trd" colspan="2">减免税标识（代开普通<br/>发票，符合条件填写）</td>
            <td class="trd" colspan="6">
              <label>是<input type="checkbox" style="vertical-align: text-top;display: inline-block;"/></label>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <label>否<input type="checkbox" style="vertical-align: text-top;display: inline-block;"/></label>
            </td>
          </tr>
          <tr class="trd">
            <td class="trd" colspan="2">减免税种</td>
            <td class="trd" colspan="3">减免税类型</td>
            <td class="trd" colspan="3">减免原因</td>
          </tr class="trd">
          <tr class="trd" style="height: 30px;">
            <td class="trd" colspan="2"></td>
            <td class="trd" colspan="3"></td>
            <td class="trd" colspan="3"></td>
          </tr>
          <tr>
            <td class="trd" width="120px;">货物或应税<br/>劳务、服务名称</td>
            <td class="trd" width="120px;">规格型号<br/>（服务类型）</td>
            <td class="trd" width="60px;">计量<br/>单位</td>
            <td class="trd" width="80px;">数量</td>
            <td class="trd" width="140px;">单价</td>
            <td class="trd" width="100px;">不含税<br/>销售额</td>
            <td class="trd" width="100px;">征收税</td>
            <td class="trd" width="100px;">税额</td>
          </tr>
          <!--可循环这个tr-->
          <tr class="trd" v-for="goods in goodsList">
            <td class="trd">{{goods.goodsName}}</td>
            <td class="trd">{{goods.goodsType}}</td>
            <td class="trd">{{goods.measureUnit}}</td>
            <td class="trd">{{goods.buyedNum}}</td>
            <td class="trd">{{goods.price}}</td>
            <td class="trd">{{goods.salesVolume}}</td>
            <td class="trd">{{goods.tax}}</td>
            <td class="trd">{{goods.taxAmount}}</td>
          </tr>
          <!-- <tr class="trd">
            <td class="trd">价税合计（大写）</td>
            <td class="t-l" colspan="3">{{tax_all.uppercase}}</td>
            <td class="trd">价税合计（小写）</td>
            <td class="t-l" colspan="3">{{tax_all.lowercase}}</td>
          </tr> -->

          <tr class="trd">
            <td class="trd">受理税务机关</td>
            <td class="t-l" colspan="7">
              <div>
                <span>税收完税凭证号：</span><span></span>
              </div>
              <div>
                <span>发票代码：</span><span></span>
              </div>
              <div>
                <span>发票号码：</span><span></span>
              </div>
              <div style="padding-left:190px;">
                <span>经办人（签字）</span>
                <input style="border: none;text-align: left;width:70px;" type="text"/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input style="border: none;text-align: center;width:30px;" type="text"/><span>年</span>
                <input style="border: none;text-align: center;width:30px;"
                       type="text"/><span></span><span>月</span>
                <input style="border: none;text-align: center;width:30px;" type="text"/><span></span><span>日</span>
              </div>

            </td>
          </tr>

          <tr class="trd">
            <td class="trd">收件地址</td>
            <td class="trd" colspan="7">{{address}}
            </td>
          </tr>
        </div>
      </table>
    </div>
    <br>
    <div class="button-button">
      <el-row>
        <el-button type="info" plain>{{payStatus}}</el-button>
        <el-button type="info" plain>
          <Reject :orderId="orderId"></Reject>
        </el-button>
        <el-button type="info" plain @click="printIC">打印身份证</el-button>
        <el-button type="info" plain @click="printOrder">打印申请单</el-button>
        <el-button type="info" plain>打印快递单</el-button>
        <el-select v-model="courierType" placeholder="请选择快递" style="width: 120px; margin-left: 20px">
          <el-option
            v-for="item in courierTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input v-model="courierNumber" placeholder="请输入快递单号" style="width: 150px"></el-input>
      </el-row>
      <br>
      <el-row>
        <el-button type="info" plain @click="returnCenter">返回</el-button>
        <el-button type="info" @click="submit">&nbsp;&nbsp;&nbsp;&nbsp;处理工单&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
      </el-row>
    </div>
    <!--<div id="xxx" style="display:none"><img src="http://localhost:7070/api/suppliment/download?filePath=xxxx"></div>-->
    <div id="xxx" style="display:none">
      <img :src="imgPath1" width="500px" height="300px">
      <img :src="imgPath2" width="500px" height="300px">
    </div>
  </div>
</template>

<script>
  import Reject from "./operation/Reject"
  import Login from "./user/Login"

  export default {
    name: "OrderShow",
    components: {Reject, Login},
    data() {
      return {
        // orderId: this.$route.params.orderId,
        orderId: sessionStorage.getItem('orderId'),
        payer: {},
        payee: {},
        address: '',
        // imgPath: '',
        goodsList: [],
        tax_all: {
          lowercase: 'xxxx-lowercase',
          uppercase: 'xxxx-uppercase'
        },
        courierTypes: [
          {
            value: '韵达',
            label: '韵达'
          }
        ],
        courierType: '',
        courierNumber: '',
        dialogVisible: false,
        payStatus: '未付款'
      }
    },
    mounted() {
      this.showOrderDtl()
    },
    methods: {
      showOrderDtl() {
        this.$http.ShowOrderDtl(sessionStorage.getItem('orderId')).then((result) => {
          if (result.c === 200) {
            if (result.r.orderEntity.status === 2) {
              this.payStatus = '已付款'
            }else{
              this.$http.AliPayQuery(sessionStorage.getItem('orderId')).then((result) => {
                if (result.c === 200) {
                  this.payStatus = '已付款'
                } else if (result.c === 201) {
                  this.payStatus = '未付款'
                } else {
                  this.payStatus = '查询失败'
                }
              })
            }
            this.payer = result.r.payerEntity
            this.payee = result.r.payeeEntity
            this.goodsList = result.r.shoppingTrolleyEntities
            this.address = result.r.addressEntity.address
          } else {
            this.$message.error(result.r)
          }
        }, (err) => {
          this.$message.error(err.msg)
        })
      },
      submit() {
        if (this.courierType !== '' && this.courierNumber === '') {
          this.$message.error("请输入快递单号")
        } else {
          var passData = {
            orderId: this.orderId,
            expressCompany: this.courierType,
            expressTrackingCode: this.courierNumber

          }
          this.$http.PassInvoice(passData).then((result) => {
            if (result.c === 200) {
              this.$message.success(result.r)
              this.$router.push({path: 'orderCenter'})
            } else {
              this.$message.error(result.r)
            }
          }, (err) => {
            this.$message.error(err.msg)
          })
        }
      },
      // printIC() {
      //   var from = {
      //     payeeId: '652436475786565',
      //     payeeName: '韩老板',
      //     isFront: '1'
      //   }
      //   this.$http.PrintIC(from).then((result) => {
      //
      //   }, (err) => {
      //     this.$message.error(err.msg)
      //   })
      // },
      // printIC() {
      //   this.$http.Download('xxxxx').then((result) => {
      //     alert()
      //     this.$message.success('下载成功')
      //   }, (err) => {
      //     this.$message.error(err.msg)
      //   })
      // },
      printOrder: function () {
        let subOutputRankPrint = document.getElementById('subOutputRank-print');
        let newContent = subOutputRankPrint.innerHTML;
        let oldContent = document.body.innerHTML;
        document.body.innerHTML = newContent;
        window.print();
        window.location.reload();
        document.body.innerHTML = oldContent;
        return false;

      },
      printIC: function () {
        document.getElementById('xxx').style.display = 'block';
        let subOutputRankPrint = document.getElementById('xxx');
        let newContent = subOutputRankPrint.innerHTML;
        let oldContent = document.body.innerHTML;
        document.body.innerHTML = newContent;
        window.print();
        window.location.reload();
        document.body.innerHTML = oldContent;
        document.getElementById('xxx').style.display = 'none';
        return false;
      },
      returnCenter() {
        this.$router.push({path: '/orderCenter'})
      }
    },
    computed: {
      imgPath1() {
        return 'http://leshuibao.cn:7070/api/suppliment/printIC?payeeId=' + this.payee.payeeCidno + '&payeeName=' + this.payee.payeeName + '&isFront=1' + '&randomInt=' + Math.random()
      },
      imgPath2() {
        return 'http://leshuibao.cn:7070/api/suppliment/printIC?payeeId=' + this.payee.payeeCidno + '&payeeName=' + this.payee.payeeName + '&isFront=2' + '&randomInt=' + Math.random()
      }
    }
  }
</script>

<style>
  .table-content {
    margin: 0 auto;
    width: 861.6px;
    height: 100%;
  }

  .table-table {
    width: 861.6px;
    display: inline;
  }

  .trd {
    /*border: 1px solid #151515;*/
    min-height: 25px;
    line-height: 25px;
    text-align: center;
    vertical-align: middle;
  }

  .trd-left {
    /*border: 1px solid #151515;*/
    min-height: 25px;
    line-height: 25px;
    text-align: left;
    vertical-align: middle;
  }

  .t-l {
    /*border: 0px solid #151515;*/
    min-height: 25px;
    line-height: 25px;
    text-align: left;
    vertical-align: middle;
  }

  .ipt {
    border: 0px;
    text-align: left;
    width: 98%;
    height: 25px;
    text-align: center;
  }

  .btn {
    display: block;
    margin: 15px auto;
    width: 260px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #cccccc;
  }

  /*input {*/
  /*height: 18px;*/
  /*}*/
</style>
