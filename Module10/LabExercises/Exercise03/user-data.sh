#!/bin/bash
apt-get update -y
apt-get install -y apache2
echo "<h1>Hi, this is Tabitha's EC2 server</h1>" > /var/www/html/index.html
