# Module 10 Exercise 1 - Docker

I'm using my calculator app from Module 9 Exercise 1 because it doesn't need a database.

## FILES I ADDED
- `Dockerfile` - the steps Docker follows to build my app
- `.dockerignore` - same as my .gitignore so node_modules doesn't get copied

My app runs on port 3000 so I used EXPOSE 3000 instead of 8080 like the slides.
I used node:22-alpine instead of node:19-alpine because Node 19 is old now.

## COMMANDS I RAN
```
docker build -t tabithacodes/calculator .
docker images
docker run -d -p 7000:3000 tabithacodes/calculator
docker ps -a
docker push tabithacodes/calculator
```

Then I went to http://localhost:7000 to see it running.

## MY DOCKER HUB IMAGE
(link goes here)

Notes Ref: Module 10 Part 1 slides
