<!--  -->
<template>
<div id="commentDelete">
    <template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
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
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
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
      multipleSelection: []
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
        console.log(comment)
      }
    }, (err) => {
      console.log(err)
    })
    this.$nextTick(() => {
      console.log('data', this.tableData)
    })
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>
<style scoped>

</style>
