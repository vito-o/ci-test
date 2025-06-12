#!/bin/bash

# 强制删除所有基于该镜像的容器
docker rm -f $(docker ps -a -q --filter ancestor=react-demo:latest) || true
# 删除旧镜像
docker rmi react-demo:latest || true

# 构建镜像
echo "🛠️ 构建镜像"
docker build -t react-demo /home/vito/.jenkins/workspace/web-task

# 运行容器
echo "🚀 启动容器"
docker run -d -p 8083:8083 --name react-demo  react-demo

echo "📦 当前运行容器列表"
docker ps

