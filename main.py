def blaster():
    global pewpew
    pewpew = game.create_sprite(enemy.get(LedSpriteProperty.X), 0)
    for index in range(4):
        pewpew.change(LedSpriteProperty.Y, 1)
        basic.pause(140)
pewpew: game.LedSprite = None
enemy: game.LedSprite = None
player = game.create_sprite(2, 4)
enemy = game.create_sprite(0, 0)