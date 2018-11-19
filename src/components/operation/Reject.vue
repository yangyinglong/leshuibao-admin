<template>
  <div class="content">
      <b class="linked" @click="dialogLoginVisible = true">驳回</b>
      <el-dialog width="340px" title="驳回" :visible.sync="dialogLoginVisible">
        <div>
          <el-form :model="rejectForm" :rules="rules" ref="rejectForm" class="demo-ruleForm">
            <el-form-item prop="reason">
              <el-select v-model="rejectForm.reason" placeholder="驳回原因" style="width: 100%">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="desc" style=" width:100%">
              <el-input type="textarea" v-model="rejectForm.desc" placeholder="备注"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div style="height: 40px"></div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogLoginVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('rejectForm')">确 定</el-button>
        </div>
      </el-dialog>
  </div>

</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        dialogLoginVisible: false,
        rejectForm: {
          reason: '',
          desc: '',
        },
        options: [
          {
            value: '错误1',
            label: '错误1'
          }, {
            value: '错误2',
            label: '错误2'
          }, {
            value: '错误3',
            label: '错误3'
          },{
            value: '其他',
            label: '其他'
          }
        ],
        loading: false, 
        rules: {
          reason: [
            { required: true, message: '请选择驳回原因', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写具体说明', trigger: 'blur' }
          ]
        }
      }
    },
    props: {
      orderId: String
    },
    methods: {
      submitForm(rejectForm) {
        this.$refs[rejectForm].validate((valid) => {
          if (valid) {
            var rejectDate = {
              id: this.orderId,
              reason: this.rejectForm.reason,
              desc: this.rejectForm.desc
            }
            console.log(rejectDate)
            this.$http.RejectInvoice(rejectDate).then((result) => {
              if (result.c === 200) {
                this.$message.success(result.r)
                this.dialogLoginVisible = false
                this.$router.push({path: '/orderCenter'})

              } else {
                this.$message.error(result.r)
              }
            }, (err) => {
              this.$message.error(err.msg)
              // this.searchLoading = false
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }

</script>

<style scoped>

</style>
