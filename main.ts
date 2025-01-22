function draw_screen (image: string) {
    i = 0
    for (let index = 0; index < 25; index++) {
        led.plotBrightness(i % 5, Math.floor(i / 5), parseFloat(image.charAt(i)) * (28 + 1 / 3))
        i += 1
    }
}
let i = 0
let screen = "2969289998899984999414941"
draw_screen(screen)
