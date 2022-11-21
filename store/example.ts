import { defineStore } from 'pinia'

export const useCounter = defineStore('counter', {
	state: () => ({
		count: 2,
		incrementedTimes: 0,
		decrementedTimes: 0,
		numbers: [] as number[],
	}),

	getters: {
		double: (state) => state.count * 2,
	},

	actions: {
		increment(amount = 1) {
			this.incrementedTimes++
			this.count += amount
		},
	},
})
