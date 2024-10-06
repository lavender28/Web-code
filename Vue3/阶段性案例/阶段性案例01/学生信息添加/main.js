const app = Vue.createApp({
	data() {
		return {
			sId: '',
			sName: '',
			sClass: '',
			sKeyWord: '',
			sClasses: ['计算机科学与技术', '数据科学与大数据', '人工智能',
				'软件工程', '计算机应用技术', '电子商务', '移动应用开发'
			],
			students: [{
					id: "2023100",
					name: "张三",
					class: "计算机科学与技术",
					sTime: new Date('2022.9.1'),
				},
				{
					id: "2023101",
					name: "李四",
					class: "数据科学与大数据",
					sTime: new Date('2023.8.29'),
				},
				{
					id: "2023102",
					name: "王五",
					class: "计算机应用技术",
					sTime: new Date('2024.8.30'),
				}
			]
		}

	},
	methods: {
		add() {
			if (this.sId == '' || this.sName == '') {
				alert('必须输入学号和姓名')
			} else {
				temp = this.students.some((item) => {
					if (item.id === this.sId) {
						// alert("存在相同id的学生")
						return true
					}
				})
				if (temp) {
					alert('学生学号不能重复，请检查输入的学号是否正确!')
					this.sId = ''
					this.sName = ''
					this.sClass = ''
				} else {
					let student = {
						id: this.sId,
						name: this.sName,
						class: this.sClass ? this.sClass : '未填写专业',
						sTime: new Date()
					}
					this.students.push(student)
					this.sId = ''
					this.sName = ''
					this.sClass = ''
				}
			}
		},
		remove(index) {
			this.students.splice(index, 1)
		},
		formatDate(date) {
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();
			return year + "." + month + "." + day
		}
	},
	computed: {
		result() {
			let students = this.students
			if (this.sKeyWord === '') {
				return students
			} else {
				let skeyword = this.sKeyWord.trim().toLowerCase()
				students = this.students.filter((item) => {
					if (item.name.trim().toLowerCase().indexOf(skeyword) != -1) {
						return item
					}
				})
				return students
			}
		}
	},
})
app.mount('#app')