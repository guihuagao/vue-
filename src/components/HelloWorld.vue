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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.font{
  color: @base;
}

</style>
