//4.Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number.

class RateLimiter {
    constructor(limit) {
        this.limit = limit;
        this.activeRequest = 0;
        this.requestQueue = [];
    }

    async scheduleTask(task){
        if(this.requestQueue.length < this.limit){
            this.activeRequest++;
            this.requestQueue.push(task)
        }
        else {
            
        while(this.activeRequest > 0){
            this.activeRequest--;
            
            const task = this.requestQueue.shift();
            await task.then((data) => console.log("Popped From Queue"+ data))
        }
        console.log("-------------------")
        }
    }
}

const rateLimiter = new RateLimiter(3);

const task = (taskId) => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Added ${taskId} in Queue`)
        resolve(taskId);
    }, 1000)
})

for(let i=0;i<20;i++){
    rateLimiter.scheduleTask(task(i))
}