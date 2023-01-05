class LazyMan {
  name: string
  private task: Function[] = []

  constructor(name: string) {
    this.name = name

    setTimeout(() => {
      this.next()
    }, 2000)
  }

  next() {
    const fn: Function | undefined = this.task.shift()
    if (fn && typeof fn === 'function') {
      ;(fn as Function)()
    }
  }

  eat(val: string) {
    const task = () => {
      console.log(`${this.name} 正在吃 ${val}`)
      this.next()
    }
    this.task.push(task)
    return this
  }

  sleep(time: number) {
    const task = () => {
      console.log(`${this.name} 正在睡觉`)
      setTimeout(() => {
        console.log(`${this.name} 睡醒了`)
        this.next()
      }, time * 1000)
    }

    this.task.push(task)
    return this
  }
}

// me.eat('苹果').eat('香蕉').sleep(2).eat('葡萄').eat('西瓜').sleep(2).eat('橘子')

class LazyWoMan {
  name: string
  private task: Function[] = []

  constructor(name: string) {
    this.name = name
  }

  eat(val: string) {
    console.log(`${this.name} 正在吃 ${val}`)
    return this
  }

  

  sleep() {
    console.log(`${this.name} 正在准备睡觉`)
    return this
  }
}

export function funcPlayGround() {
  const me = new LazyWoMan('Jarvis')
  // me.eat('苹果')
  //   .eat('香蕉')
  //   .sleep(2)
  //   .eat('葡萄')
  //   .eat('西瓜')
  //   .sleep(2)
  //   .eat('橘子')

  me.eat('苹果').sleep(2)
}
