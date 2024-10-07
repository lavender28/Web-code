Vue.createApp({
  data() {
    return {
      currentRating: 0,
      submitted: false,
      totalRating: 0,
      comment: '',
      submittedComment: '',
      ratings: []
    };
  },
  methods: {
    rate(star) {
      this.currentRating = star;
    },
    submitRating() {
      if (this.currentRating > 0) {
        this.totalRating = this.currentRating;
        this.ratings.push({stars: this.currentRating, comment: this.comment})
        this.submitted = true;
        this.submittedComment = this.comment
        this.currentRating = 0; // 提交后重置当前评分
        this.comment = ''; // 提交后清空评语
      } else {
        alert("请给出评分和评语！");
      }
    },
    resetRating() {
      this.currentRating = 0;
      this.comment = '';
      this.submitted = false;
      this.ratings.pop();
    }
  }
}).mount('#app');
