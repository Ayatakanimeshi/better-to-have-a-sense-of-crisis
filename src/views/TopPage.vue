<template>
  <div class="home">
    <img
      src="/photos/GeorgeFace.jpeg"
      alt="Study Time Image"
      class="study-image"
    />
    <h1>あなたの今日の勉強時間を報告してね！</h1>
    <div class="time-selectors">
      <select v-model="selectedHour">
        <option disabled value="">時</option>
        <option v-for="hour in hours" :key="hour" :value="hour">
          {{ hour }}
        </option>
      </select>
      <select v-model="selectedMinute">
        <option disabled value="">分</option>
        <option v-for="minute in minutes" :key="minute" :value="minute">
          {{ minute }}
        </option>
      </select>
    </div>
    <button @click="submitTime">時間を送信</button>
  </div>
</template>

<script>
export default {
  name: "TopPage",
  data() {
    return {
      selectedHour: "",
      selectedMinute: "",
      hours: Array.from({ length: 24 }, (_, i) => i), // 0時から23時
      minutes: [0, 15, 30, 45], // 分を15分単位で選択
    };
  },
  methods: {
    submitTime() {
      if (this.selectedHour !== "" && this.selectedMinute !== "") {
        this.$router.push(
          `/George/${this.selectedHour}/${this.selectedMinute}`
        );
      } else {
        alert("時間と分を選択してください。");
      }
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
}
.study-image {
  max-width: 30%; /* 最大幅を50%に設定 */
  height: auto; /* 高さは自動調整 */
  margin-bottom: 20px; /* 下マージン */
}
h1 {
  color: #333;
}
.time-selectors select {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
