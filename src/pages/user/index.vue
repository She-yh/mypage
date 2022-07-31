<!--  -->
<template>
<div id="commentDelete">
    <template>
  <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    tooltip-effect="dark"
    style="width: 100%"
    @current-change="handleSelectionChange">
    <el-table-column
      prop="id"
      label="id"
      width="120">
    </el-table-column>
    <el-table-column
      prop="time"
      label="日期"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="comment"
      label="评论"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="deleteComments()">删除</el-button>
  </div>
</template>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UserPage',
  data () {
    return {
      tableData: [],
      currentRow: null
    }
  },
  created () {

  },
  mounted () {
    axios.get(`${process.env.VUE_APP_BASE_URL}api/comments`).then((response) => {
      for (const cur of response.data) {
        const comment = {}
        comment.id = cur.id
        comment.name = cur.name
        comment.comment = cur.comments
        comment.time = cur.time.replaceAll('-', '/').replace(/T(.)*/, '')
        this.tableData.unshift(comment)
      }
    }, (err) => {
      console.log(err)
    })
  },
  methods: {
    deleteComments () {
      const params = new URLSearchParams()
      const token = localStorage.getItem('token')
      params.append('id', this.currentRow.id)
      axios({
        method: 'post',
        url: `${process.env.VUE_APP_BASE_URL}user/deleteComments`,
        headers: {
          Authorization: token
        },
        data: params
      }).then(res => {
        if (res.data.status === 0) {
          console.log()
        }
      })
    },
    handleSelectionChange (val) {
      this.currentRow = val
    }
  }
}
</script>
<style scoped>

</style>
