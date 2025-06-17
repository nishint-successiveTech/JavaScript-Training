// 4. Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number

class RateLimiter {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.activeCount = 0;
  }

  schedule(promiseFn) {
    return new Promise((resolve, reject) => {
      const task = async () => {
        const result = await promiseFn();
        resolve(result);
        this.activeCount--;
        this._processQueue();
      };
      this.queue.push(task);
      this._processQueue();
    });
  }

  _processQueue() {
    if (this.activeCount < this.limit && this.queue.length > 0) {
      const task = this.queue.shift();
      this.activeCount++;
      task();
    }
  }
}

const task = (taskId, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Task ${taskId} completed`);
      resolve(taskId);
    }, delay);
  });
};

const limiter = new RateLimiter(3);

for (let i = 1; i <= 10; i++) {
  limiter.schedule(() => task(i, 3000));
}
