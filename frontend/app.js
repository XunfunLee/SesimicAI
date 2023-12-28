const app = Vue.createApp({
	data() {
		return {
			title: "i am vue title"
		}
	},
	methods: {
		changeTitle() {
			console.log("change title")
			this.title = "i am new title with function"
		}
	}
})

app.mount("#app")