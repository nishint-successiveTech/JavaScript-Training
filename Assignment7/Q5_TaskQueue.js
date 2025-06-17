class TaskQueue {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.activeCount = 0;
  }

  schedule(promiseFn) {
    const task = { promiseFn };
    this.queue.push(task);
    this._processQueue();
    return new Promise((resolve, reject) => {
      task.resolve = resolve;
      task.reject = reject;
    });
  }

  _processQueue() {
    if (this.activeCount >= this.limit || this.queue.length === 0) return;

    const { promiseFn, resolve, reject } = this.queue.shift();
    this.activeCount++;

    promiseFn()
      .then(resolve)
      .catch(reject)
      .finally(() => {
        this.activeCount--;
        this._processQueue();
      });
  }
}

const task = (taskId, delay) => () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Task ${taskId} completed`);
      resolve(taskId);
    }, delay);
  });

const queue = new TaskQueue(3);

queue.schedule(task(1, 2000));
queue.schedule(task(2, 1000));
queue.schedule(task(3, 2000));
queue.schedule(task(4, 3000));
queue.schedule(task(5, 2000));
