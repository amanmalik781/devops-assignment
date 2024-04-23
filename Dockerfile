# Use a base image
FROM nginx:alpine

# Copy your HTML and JavaScript files into the container
COPY . /usr/share/nginx/html
