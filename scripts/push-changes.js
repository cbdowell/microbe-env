/* eslint-disable */

var dotenv = require('dotenv')
var shell = require('shelljs/global')

dotenv.config()

const GIT_USER = process.env.GIT_USER


if (!which(`git`)) {
    echo(`Sorry, this script requires git`)
    exit(1)
}

if (
    exec(`git add --all`).code +
    exec(`git commit -m "updates"`).code +
    exec(`git push -f origin master`).code !== 0
) {
    echo(`Error: Git pushing build failed...`)
    exit(1)
}

shell.echo('changes pushed successfully!')
