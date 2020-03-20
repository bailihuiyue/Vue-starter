<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <el-row>
      <el-col>
        <el-button
          :loading="loading"
          type="primary"
          @click="getData(123)"
        >获取数据</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        {{$t('message')}}
        <el-switch
          v-model="language"
          active-text="中文"
          inactive-text="英文"
          @change="changeLanguage"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="1">
        <el-button
          type="primary"
          size="small"
          @click="dec"
        >减一</el-button>
      </el-col>
      <el-col :span="1">vuex集成{{count}}</el-col>
      <el-col :span="1">
        <el-button
          type="primary"
          size="small"
          @click="inc"
        >加一</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-date-picker
          v-model="date"
          type="date"
          :placeholder="$t('placeholder')"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { TestService } from "@/services/test.service";
import { mapState, mapMutations } from "vuex";
import { DatePicker } from "ant-design-vue";
export default {
  name: "Home",
  data() {
    return {
      language: "en",
      loading: false,
      date: null
    };
  },
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapMutations(["increment", "decrement"]),
    inc() {
      this.$store.commit("increment");
      // this.increment();
    },
    dec() {
      this.$store.commit("decrement");
      // this.decrement();
    },
    getData() {
      this.loading = true;
      TestService.add().then(
        () => {
          this.$message({
            type: "success",
            message: "请求成功"
          });
          this.loading = false;
        },
        () => {
          this.$message({
            type: "error",
            message: "请求失败"
          });
          this.loading = false;
        }
      );
    },
    changeLanguage(value) {
      this.$i18n.locale = value ? "zh" : "en";
    }
  }
};
</script>
