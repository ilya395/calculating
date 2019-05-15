var app = new Vue({
	el: '#app',
	data: {
		message: 'Lol!'
	}
})
//
var app1 = new Vue({
	el: '#app1',
	data: {
		items: [
			'Пункт меню',
			'Еще пункт меню',
			'Еще один пункт меню',
			'ОМАГАД! пункт меню'
		]
	}
})
//
new Vue ({
	el: '#app2',
	data() {
		return {
			message: 'Пиши что-нибудь... '
		}
	}
})
//
new Vue ({
	el: '#app3',
	data() {
		return {
			counter: 0
		}
	},
	methods: {
		increment() {
			this.counter++
		}
	}
})