import { defineStore } from 'pinia'
import { Names } from './store-name'

type User = {
  name: string,
  age: number
}

// let result: User = {
//   name: "飞机",
//   age: 18
// }

const Login = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "飞机",
        age: 18
      })
    }, 2000);
  })
}


export const useTestStore = defineStore(Names.TEST, {
  state: () => {
    return {
      current: 1,
      name: 'gotha',
      user: <User>{}
    }
  },
  getters: {
    newName(): string {
      return `$-${this.name}--${this.getUserAge}`
    },
    getUserAge(): number {
      return this.user.age
    }
  },
  actions: {
    setCurrent(num: number) {
      this.current = num
    },
    async setUser() {
      // this.user = result
      const result = await Login()
      this.user = result
      this.setName("大飞机")
    },
    setName(name: string) {
      this.name = name
    }
  }
})