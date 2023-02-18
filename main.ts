let temp = 0
input.onButtonPressed(Button.A, function () {
    music.setVolume(200)
    temp = input.temperature()
    if (input.temperature() < 23) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        music.playTone(220, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
