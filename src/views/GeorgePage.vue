<template>
  <div class="george-page">
    <h1>
      たったの{{ $route.params.hour }}時間{{ $route.params.minute }}分？<br />
      ガチで危機感持った方がいい。厳しいって。やばいって。弱いって。
    </h1>
    <video width="320" height="240" controls autoplay>
      <source :src="videoUrl" type="video/mp4" />
      お使いのブラウザはvideoタグをサポートしていません。
    </video>
  </div>
</template>

<script>
export default {
  name: "GeorgePage",
  computed: {
    isSuccess() {
      // 時間を整数に変換し、23時間以上かどうかを判断
      const hours = parseInt(this.$route.params.hour, 10);
      return hours >= 23;
    },
    videoUrl() {
      // 条件に応じて異なる動画URLを返す
      return this.isSuccess
        ? "/videos/Georgegender.mp4"
        : "/videos/GeorgeKikikan.mp4";
    },
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.george-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
}
.george-page video {
  width: 20%; /* ページの幅の80%を使用 */
  height: auto; /* 高さは自動調整してアスペクト比を保持 */
}
h1,
p {
  margin-bottom: 20px;
}
video {
  margin-bottom: 20px;
}
</style>
