input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
function blaster () {
    pew = 1
    pewpew = game.createSprite(enemy.get(LedSpriteProperty.X), 0)
    for (let index = 0; index < 4; index++) {
        pewpew.change(LedSpriteProperty.Y, 1)
        basic.pause(140)
    }
    if (pewpew.isTouching(player)) {
        game.gameOver()
    }
    pew = 0
    pewpew.delete()
}
input.onButtonPressed(Button.AB, function () {
    blast = 1
    laser = game.createSprite(player.get(LedSpriteProperty.X), 4)
    for (let index = 0; index < 4; index++) {
        laser.change(LedSpriteProperty.Y, -1)
        basic.pause(140)
    }
    if (laser.isTouching(enemy)) {
        enemy.delete()
        game.addScore(1)
        enemy = game.createSprite(randint(0, 4), 0)
    }
    if (laser.get(LedSpriteProperty.X)==enemy.get(LedSpriteProperty.X)){
        basic.pause (randint (550,570))
        enemy.change(LedSpriteProperty.X,1)
        basic.pause(500)
    }
    blast = 0
    laser.delete()
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let laser: game.LedSprite = null
let blast = 0
let pewpew: game.LedSprite = null
let pew = 0
let enemy: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
enemy = game.createSprite(0, 0)
basic.forever(function () {
    if (enemy.get(LedSpriteProperty.X) == player.get(LedSpriteProperty.X)) {
        basic.pause(randint(50, 1000))
        blaster()
    }
    if (enemy.get(LedSpriteProperty.X) < player.get(LedSpriteProperty.X)) {
        basic.pause(randint(50, 1000))
        enemy.change(LedSpriteProperty.X, 1)
    }
    if (enemy.get(LedSpriteProperty.X) > player.get(LedSpriteProperty.X)) {
        enemy.change(LedSpriteProperty.X, -1)
        basic.pause(randint(50, 1000))
    }
    
})
basic.forever(function () {
    if (pew == 1 && blast == 1) {
        if (pewpew.isTouching(laser)) {
            pewpew.delete()
            laser.delete()
        }
    }
})
