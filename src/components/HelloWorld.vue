<template>
  <div>
    <group>
      <cell title="我的账号" value="保护中"></cell>
      <cell title="title" value="value"></cell>
      <cell title="title" value="value"></cell>
    </group>
    <p class="font">此处引用了全局的变量值，这是一个vue+vux+less+axios+webpack项目</p>
  </div>
</template>

<script>
  import { Group, Cell } from 'vux'
export default {
  name: 'HelloWorld',
  components: {
    Group,
    Cell
  },
  data () {
    return {

    }
  },
  methods:{
      getContent(id){
      this.$http.HttpGet({url:"/api/cross/getMenuById"},{id:id})
        .then((data) => {
          this.position=data.data[0].menu.fname+' >> '+data.data[0].menu.v_name;
          this.content=data.data[0].menu.content;
        }).catch((err)=>{

      })
    },


    toSave(menu) {
      this.$http.HttpPost({url: "/api/auth/addMenu"}, {fid: menu.id, name: this.menuName1})
        .then((data) => {
          this.dialogVisible = false;
          this.menuName1 = '';
          this.$message({
            message: '添加成功！',
            type: 'success'
          });
        }).catch((err) => {

      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.font{
  color: @base;
}

</style>
