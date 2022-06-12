<template>
  <div class="param-info">
    <table
      v-for="(item, index) in params.rule.tables"
      :key="index"
      class="size-table"
    >
      <tr v-for="(item1, index1) in item" :key="index1">
        <td v-for="(item2, index2) in item1" :key="index2">{{ item2 }}</td>
      </tr>
    </table>
    <table class="info">
      <tr v-for="(item, index) in params.info.set" :key="index">
        <td>{{ item.key }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    params: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.param-info {
  font-size: 14px;
  background-color: #fff;
}
.size-table {
  display: flex;
  flex-direction: column;
}
.size-table tr {
  display: flex;
  justify-content: space-between;

  margin: 0 20px;
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);

  text-align: left;
}
.size-table td {
  line-height: 20px;
  width: 32px;
}
.info {
  display: flex;
  flex-direction: column;
}
.info tr {
  margin: 0 20px;
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  
}

.info td:nth-child(1) {
  padding-right: 50px;
  white-space:nowrap;
}
</style>
