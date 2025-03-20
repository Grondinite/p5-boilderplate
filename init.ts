import p5Methods from './index'

for (const [key, func] of Object.entries(p5Methods)) {
    window[key] = func
}
