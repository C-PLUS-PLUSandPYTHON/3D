function draw_screen (image: number[]) {
    i = 0
    for (let index = 0; index < 25; index++) {
        led.plotBrightness(i % 5, Math.floor(i / 5), image[i])
        i += 1
    }
}
function _3D () {
    screen = []
    for (let index = 0; index < 25; index++) {
        screen.push(0)
    }
    screen[_3D__2D__1D(0, 0, 1)] = 255
    screen[_3D__2D__1D(4, 0, 1)] = 255
    screen[_3D__2D__1D(4, 4, 1)] = 255
    screen[_3D__2D__1D(0, 4, 1)] = 255
    screen[_3D__2D__1D(0, 0, 2)] = 255
    screen[_3D__2D__1D(4, 0, 2)] = 255
    screen[_3D__2D__1D(4, 4, 2)] = 255
    screen[_3D__2D__1D(0, 4, 2)] = 255
}
function _3D__2D__1D (x: number, y: number, z: number) {
    return x / z * fov + y / z * fov * 5
}
let i = 0
let fov = 0
let screen: number[] = []
screen = []
let cam_x = 0
let button_action = 0
fov = 1
basic.forever(function () {
    _3D()
    draw_screen(screen)
    basic.pause(10)
})
