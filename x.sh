#!/bin/bash

# 删除旧容器
docker rm -f $(docker ps -a -q --filter ancestor=react-demo:latest) || true

# 删除旧镜像
docker rmi -f react-demo:latest || true

echo "🛠️ 开始强制重建镜像..."
docker build --no-cache -t react-demo /home/vito/.jenkins/workspace/web-task

echo "🚀 启动新容器..."
docker run -d -p 8083:8083 --name react-demo react-demo

echo "📦 当前运行容器："
docker ps
