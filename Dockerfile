# 第一阶段：使用 Node 构建 React 项目

# 使用官方 Node 20 镜像
FROM node:20 AS builder
# 设置工作目录
WORKDIR /app
# 拷贝 package.json 并安装依赖
COPY package*.json ./
RUN npm install
# 拷贝源代码
COPY . .
# 构建项目
RUN npm run build


# 第二阶段：使用 nginx 托管静态文件
FROM nginx:alpine
# 删除默认配置文件
RUN rm -rf /usr/share/nginx/html/*
# 拷贝 React 构建结果到 nginx 的根目录
COPY --from=builder /app/dist /usr/share/nginx/html
# 拷贝自定义 nginx 配置（可选）
COPY nginx.conf /etc/nginx/conf.d/default.conf
# 暴露端口
EXPOSE 8083
# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]