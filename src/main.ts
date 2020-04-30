import { logr } from './helpers/utils'

logr("it works!")

const myFn = (optional?: string) => {
    logr('optional')
    logr(optional)

    const things = ["one", "two"]

    if(!optional) {
        logr('doing something with things because no optional')
    }
    else {
        logr('doing nothing')
    }
}

myFn()