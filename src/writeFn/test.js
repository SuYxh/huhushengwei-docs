/**
 * @description: 并发控制
 * @return {*}
 */

class TaskQueue {
  running = 0
  queue = []
  result = []

  constructor(pool, callback) {
    this.pool = pool
    this.callback = callback
  }

  addTask(tasks) {
    // this.queue.push(task)
    console.log('addTask', tasks)
    this.queue = tasks
    this.next()
  }

  next() {
    while (this.running < this.pool && this.queue.length) {
      this.running++

      const task = this.queue.shift()

      task()
        .then((res) => {
          this.result.push(res)
        })
        .finally(() => {
          this.running--
          this.next()
        })
    }

    if (this.running === 0) {
      this.callback(this.result)
    }
  }
}

function createQueueRequest(tasks, pool, callback) {
  console.log('createQueueRequest')

  const tq = new TaskQueue(pool, callback)
  tq.addTask(tasks)
}

const delay = function delay(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('interval', interval)
      resolve(interval)
    }, interval)
  })
}

const tasks = [
  () => {
    return delay(1000)
  },
  () => {
    return delay(1003)
  },
  () => {
    return delay(1005)
  },
  () => {
    return delay(1002)
  },
  () => {
    return delay(1004)
  },
  () => {
    return delay(1006)
  },
]

createQueueRequest(tasks, 2, (results) => {
  console.log('createQueueRequest--result', results)
})

// tasks.forEach(fn => fn())
