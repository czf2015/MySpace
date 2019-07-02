const fs = require('fs')
const path = require('path')

const args = process.argv.splice(2)
const command = args.shift()
const taskDescription = args.join(' ')
const file = path.join(process.cwd(), '/.tasks')

switch (command) {
  case 'list':
    listTasks(file)
    break

  case 'add':
    addTask(file, taskDescription)
    break
    
  default:
    console.log(`Usage: ${process.argv[0]} list|add [taskDescription]`)
}

function loadOrInitializeTaskArray(file, cb) {
  fs.exists(file, exists => {
    let tasks= []
    // 检查.tasks文件是否已经存在
    if (exists) {
      // 从.tasks文件中读取待办事项数据
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          throw err
        }

        let data = data.toString()
        // 把用JSON编码的待办事项数据解析到任务数组中
        tasks = JSON.parse(data || '[]')

        cb(tasks)
      })
    } else {
      //如果.tasks文件不存在，则创建空的任务数组
      cb([])
    }
  })
}

function listTasks(file) {
  loadOrInitializeTaskArray(file, tasks => {
    for (let i in tasks) {
      console.log(tasks[i])
    }
  })
}

function storeTasks(file, tasks) {
  fs.writeFile(file, JSON.stringify(tasks), 'utf8', err => {
    if (err) {
      throw err
    }

    console.log('Saved.')
  })
}

function addTask(file, taskDescription) {
  loadOrInitializeTaskArray(file, tasks => {
    tasks.push(taskDescription)
    storeTasks(file, tasks)
  })
}