const http = require('http')

const server = http.createServer(handle())
// 通过请求方法（req.method）来决定响应行为
function handle(req, res) {
  switch (req.method) {
    case 'POST':
      update(req, res)
      break
    case 'DELETE':
      remove(req, res)
      break
    case 'PUT':
      create(req, res)
      break
    case 'GET':
    default:
      get(req, res)
  }
}
// 根据路径（req.url）去查找磁盘中的文件，然后将其响应给客户端
function static(req, res) {
  const pathname = url.parse(req.url).pathname
  fs.readFile(path.join(ROOT, pathname), function (err, file) {
    if (err) {
      res.writeHead(404)
      res.end('找不到相关文件')
      return
    }
    res.writeHead(200)
    res.end(file)
  })
}
// 预设路径位控制器和行为的组合（controller/action/a/b/c），无须额外配置路由信息
function (req, res) {
  const pathname = url.parse(req.url).pathname
  const paths = pathname.split('/')
  const controller = paths[1] || 'index'
  const action = paths[2] || 'index'
  const args = paths.slice(3)
  if (handles[controller] && handles[controller][action]) {
    handles[controller][action].apply(null, [req, res].concat(args))
  } else {
    res.writeHead(200)
    res.end(foo)
  }
}

handles.index = {}
handles.index.index = function (req, res, foo, bar) {
  res.writeHead(200)
  res.end(foo)
}

// 查询字符串，挂载在请求对象上供业务调用
const url = require('url')
req.query = url.parse(req.url, true).query

// 解析req.headers.cookie，并挂载在请求对象上供业务调用
function parseCookie(cookie) {
  const cookies = {}
  if (!cookie) {
    return cookies
  }
  const list = cookie.split(';')
  for (let i = 0; i < list.length; i++) {
    const pair = list[i].split('=')
    cookies[pair[0].trim()] = pair[1]
  }
  return cookies
}

req.cookies = parseCookie(req.headers.cookie)
// 将Cookie序列化成符合规范的字符串
function serialize(name, val, opt = {}) {
  const pairs = [`${name}=${encode(val)}`]
  if (opt.maxAge) pairs.push(`Max-Age=${opt.maxAge}`)
  if (opt.domain) pairs.push(`Domain=${opt.domain}`)
  if (opt.path) pairs.push(`Path=${opt.path}`)
  if (opt.expires) pairs.push(`Expires=${opt.expires}`)
  if (opt.httpOnly) pairs.push(`HttpOnly=${opt.httpOnly}`)
  if (opt.secure) pairs.push(`Secure=${opt.secure}`)
  return pairs.join('; ')
}


// 当服务器端启用了Session，它将约定一个键值hi作为Session口令。一旦服务器检查到用户请求Cookie中没有携带该值，就会为之生成一个值，这个值是唯一且不重复的值，并设定超时时间。
const sessions = {}
const key = 'session_id'
const EXPIRES = 20 * 60 * 1000

function generate() {
  const session = {}
  session.id = (new Date()).getTime() + Math.random()
  session.cookie = {
    expire: (new Date()).getTime() + EXPIRES
  }
  sessions[session.id] = session
  return session
}
// 每个请求到来时，检查Cookie中的口令与服务器端的数据，如果过期，就重新生成。
function (rq, res) {
  const id = req.cookies[key]
  if (!id) {
    req.session = generate()
  } else {
    const session = sessions[id]
    if (session) {
      if (session.cookie.expire > (new Date()).getTime()) {
        // 更新超时时间
        session.cookie.expire = (new Date()).getTime() + EXPIRES
        req.session = session
      } else {
        // 超时了，删除旧的数据，并重新生成
        delete sessions[id]
        req.session = generate()
      }
    } else {
      // 如果session过期或口令不对，重新生成session
      req.session = generate()
    }
  }

  handle(req, res)
}

const writeHead = res.writeHead
res.writeHead = function () {
  const cookies = res.getHeader('Set-Cookie')
  const session = serialize(key, req.session.id)
  cookies = Array.isArray(cookies) ? cookies.concat(session) : [cookies, session]
  res.setHeader('Set-Cookie', cookies)
  return writeHead.apply(this, arguments)
}

function handle(req, res) {
  if (!req.session.isVisit) {
    req.session.isVisit = true
    res.writeHead(200)
    res.end('欢迎第一次来到动物园')
  } else {
    res.writeHead(200)
    res.end('动物园再次欢迎你')
  }
}

require.resolve(request, options);