# Module 10 Exercise 2 - GitHub Actions

Same calculator app from Exercise 1. Now GitHub builds my Docker image and pushes it to Docker Hub for me every time I push changes to this folder.

## WHERE THE WORKFLOW FILE IS
GitHub only looks for workflows in `.github/workflows` at the top of the repo, so my file is at:
`IOD-2026/.github/workflows/cicd.yml`

It only runs when something in `Module10/LabExercises/Exercise02` changes, so pushing my other modules won't set it off.

## WHAT I CHANGED FROM THE SLIDES
- branch is `master` because that's what my repo uses
- `context` and `file` point to this folder instead of `./`
- newer action versions and Node 22 to match my Dockerfile

## SECRETS I ADDED ON GITHUB
- DOCKER_HUB_USERNAME
- DOCKER_HUB_ACCESS_TOKEN

## MY DOCKER HUB IMAGE
https://hub.docker.com/repository/docker/tabithacodes/calculator/general

Notes Ref: Module 10 Part 1 slides
