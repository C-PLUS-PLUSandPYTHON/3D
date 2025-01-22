function draw_screen (image: number[]) {
    i = 0
    for (let index = 0; index < 25; index++) {
        led.plotBrightness(i % 5, Math.floor(i / 5), image[i])
        i += 1
    }
}
function _3D () {
	
}
function _3D__2D__1D (x: number, y: number, z: number) {
    return x / z * fov + y / z * fov * 5
}
let i = 0
let fov = 0
let screen: number[] = []
let cam_x = 0
let button_action = 0
fov = 1
basic.forever(function () {
	
})
