function blaster () {
    pewpew = game.createSprite(enemy.get(LedSpriteProperty.X), 0)
    for (let index = 0; index < 4; index++) {
        pewpew.change(LedSpriteProperty.Y, 1)
        basic.pause(140)
    }
}
let pewpew: game.LedSprite = null
let enemy: game.LedSprite = null
let player = game.createSprite(2, 4)
enemy = game.createSprite(0, 0)
basic.forever(function () {
    if (enemy.get(LedSpriteProperty.X) == player.get(LedSpriteProperty.X)) {
        basic.pause (randint(100,150))
        blaster()
    }
    if (enemy.get(LedSpriteProperty.X) < player.get(LedSpriteProperty.X)) {
       basic.pause (randint(300,400))
        enemy.change(LedSpriteProperty.X, 1)
    }
    if (enemy.get(LedSpriteProperty.X)>player.get(LedSpriteProperty.X)){
        enemy.change(LedSpriteProperty.X,-1)
    }
})
