namespace SpriteKind {
    export const 回復 = SpriteKind.create()
    export const 攻擊物 = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    巨蟹2.setPosition(randint(0, 160), randint(0, 65))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.攻擊物, function (sprite, otherSprite) {
    info.changeScoreBy(-66)
    鬼魂能量.setPosition(randint(0, 160), 95)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    巨蟹座.setPosition(randint(0, 160), randint(0, 65))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    巨蟹3.setPosition(randint(0, 160), randint(0, 60))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.回復, function (sprite, otherSprite) {
    info.changeLifeBy(2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-66)
})
let 巨蟹3: Sprite = null
let 巨蟹2: Sprite = null
let 鬼魂能量: Sprite = null
let 巨蟹座: Sprite = null
scene.setBackgroundImage(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbfffbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbfbfffffbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbfffffbbbbbbbbbbbffffffffffffffffffffffffffbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbffffbbbbbbbbbbffffffffffffffffffffffffffffffffffbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbfffffffff1ffbbbbbbbbbffffffffffffbbfbffbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbfffffffbb11fffffffffbbbbffffffffffffbbffbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbffffbbbbffff1ffffffffffffbbfffffffffffbbbffbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbfffffffffbbbfffffffff11ffffffffffffbbffffffffffbbbfffbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbfffffffffffbbffffffffffffff1fffffffffffffbbfffffffffbbffbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbffffffffbbfffffffffffffffff1ffffffffffffffbffffffffbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbfbbbbbbbffffffffffffffbbffffffffffffffbbbbb1bbbbbbbbbffffffbbfffffffbfbfbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbfbbbbbbfffffffffffffbbffffffffffffffbbffffff1ffffffffbbbfffffbfffffffbfffbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbfbbbbbbffffffffffffbbffffffffffffbbbbfffffffff1ffffffffffbbffffbffffffffffbbbfbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbfbbbbbbbbbbfffffffbbfffffffffffbbbffffffffffffff1fffffffffffb1bffbbfffffffffbbfbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbfbbbbbbbbbfffffffbfffffffffffbbffffffffffffffffff1ffffffffffff1bbffbfffffffffbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbfbbbbffffffffffffbffffffffffbbfffffffffffffffffffffffffffffffff1ffbffbffffffffbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbfbbbfffffffffffffbffffffffffbfffffffffffffffffffffffffffffffffff1fffbffbffffffffbfbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbfffffffbfffffffffbbffffffffffffffffffffffffffffffffffff1ffffbffbfffffffbfbfbfbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbfffffffbfffffffffbffffff11111fffffffffffffffffffffffffff1fffffbffbffffffbfbfbfbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbfbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbffffffffbfffffffffbffff111ffffffffffffffffffffffffffffffff1ffffffbffbfffffffbfbfbbbbbbbfbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbfbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbfffffffbbfffffffffbff111fffffffffffffbbbbbbbbbbbbbbbfffffff1fffffffbffbfffffbfffffbbbbbfbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbfbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbffffffffbffffffffffb111fffffffffffffbbbffffffffbbbbbbbbbbffff1ffffffffbfbfffffffffffbbbbffbbbfbbbbbbbfbbbbbbbbbbbbbbbbbbbbbb
    bbbbbfbbbbbbbbbbbbbbbfbbbbbbbbbbbbbfffffbbffbfffffffffb1fffffffffffffffbfffffffffbbffffffffffbbff1fffffffffbfbffffffffffbbbbfbbbfbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbb
    bbbbbfbbbbbbbbbbbbbbbfbbbbbbbbbbbbfffffbbffbffffffffbb1ffffffffffffffbbffffffffbbffffffffffffffbb1ffffffffffbfbfffffffffbbbbfbbbfbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbb
    bbbbbfbbbbbbbbbbbbbbbfbbbbbbbbbbfffffbbbfffbfffffffbf1ffffffffffffffbffffffffbbfffffffffffffffffb1fffffffffffbbfffffffffbbbffbbfbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbb
    bbbbbfbbbbbbbbbbbbbbfbbbbbbbbbbfffffbbffffbfffffffbf1ffffffffffffffbfffffffbbffffffffffffffffffff1bbfffffffffbfbfffffffbfbffbbffbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbb
    bbbbbfbbbbbbbbbbbbbbfbbbbbbbbbffffbbbfffffbfffffffb1fffffffffffffbbffffffbbfffffffffffbbbbbbbffff1bfbfffffffffbfbffffffbfbffbffbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbb
    bbbbfbbbbbbbbbbbbbbbfbbbbbbbfffffbbffffbfbfffffffb1fffffffffffffbffffffbbfffffffffffbbfffffffbbbbffbfbbfffffffbfbfffffffffffffbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbb
    bbbbfbbbbbbbbbbbbbbbfbbbbbbfffffbbffffbbbfffffffb1fffffffffffffbffffffbffffffffffffbfffffffffffffbfbfffbfffffffbfbffffffffffffbbbbffbbbbbbbbbbbfbbbbbbbbbbbbbbbb
    bbbbfbbbbbbbbbbbbbbbfbbbbbfffffbbffffbbfbfffffff1fffffffffffffbfffffbbfff1fffffffbbfffffffffffffffbbffffbfffffffbfbffffffffffbbbbfffbbbbbbbbbbbfbbbbbbbbbbbbbbbb
    bbbbfbbbbbbbbbbbbbbfbbbbbbbbbfbbbfffbfffbfffffffbffffffffffffbfffffbffff1fffffffbffffffffffffffffffbfffffbffffffbfbffffffbffbbbbbffbbbbbbbbbbbbbfbbbbbbbbbbbbbbb
    bbbbfbbbbbbbbbbbbbbfbbbbbbbffbbbffbbfbfbfffffffbffffffffffffbfffffbfff11ffffffbbfffffffffffffffffffbbfffffbffffffbfbffffffffbbbfffbbbbbbbbbbbbbbbfbbbbbbbbbbbbbb
    bbbbfbbbbbbbbbbbbbbfbbbbbbbbbbfffbbfbfbbfffffffbfffffffffffbfffffbffff1fffffbbffffffffffffffffffffffbffffffbffffffbfbffffffbbffffbbbfbbbbbbbbbbbbbfbbbbbbbbbbbbb
    bbbbfbbbbbbbbbbbbbfbbbbbbbbbbffbbbfffbbfffffffbffffffffffffbffffbffff1fffffbffffffffffffffffffffffffbbffffffbfffffbfbfffffbbffffbbbfbbbbbbbbbbbbbbfbbbbbbbbbbbbb
    bbbfbbbbbbbbbbbbbbfbbbbbbbbbbbbbfffbbbbfffffffbfffffffffffbffffbffff1fffffbfffffffffffffffffffffffffbbfffffffbfffffbfbffffbffffbbffbbbbbbbbbbbbbbbbfbbbbbbbbbbbb
    bbbfbbbbbbbbbbbbbfbbbbbbbbbbbbbbffbbbfbffffffbfffffffffffbffffbfffff1ffffbffffffffffffbbffffffffffffbbfffffffbfffffbfbfffbfffffbffbbbbbbbbbbbbbbbbbfbbbbbbbbbbbb
    bbbfbbbbbbbbbbbbbfbbbbbbbbbbbbbffbbbffbffffffbffffffffffbfffffbffff1fffffbffffffffffbbffbbffffffffffbbffffffffbffffb1fbfffffffbffbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbb
    bbbfbbbbbbbbbbbbbfbbbbbbbbbbbfffbbbfffffffffbfffffffffffbffffbffffffffffbfffffffffbbffffffbbfffffffffbfffffffffbfff1bfbffffffbffbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbb
    bbbfbbbbbbbbbbbbbfbbbbbbbbbbbffbbbbfffffffffbffffffffffbffffbffffffffffbfffffffffbffffffffffbffffffffbfffffffffbff1fbfbfffffbffbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbfbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbffffffffffbfffffffffbfffffbfffffffffbfffffffffbffffffffffffbfffffffbfffffffffbff1fbffbffffffbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbfbbbbbbbbbbbbbfbbbbbbbbbbbbbbbffffffffffbfffffffffbfffffbfffffffffbfffffffffbfffffffffffffbfffffffbfffffffffbf1ffbffbfffffbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbfbbbbbbbbbbbbfbbbbbbbbbbbbbbbbffffbfffffbfffffffffbffffbfffffffffbfffffffffbffffffffffffffbfffffffbfffffffffbf1fffbfbffffbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbfbbbbbbbbbbbbfbbbbbbbbbbbbbbbffffbbffffbffffffffffbffffbffffffffbfffffffffbfffffffffffffffbfffffffbfffffffffb1ffffbfbfffbbbbbfffbbbbbbbbbbbbbbbbbbbbfffbbbbbb
    bbbfbbbbbbbbbbbbfbbbbbbbbbbbbbbffffbffffffbfffffffffbffffbfffffffffbfffffffffbffffffffffffffbffffffffbfffffffff1fffffbfbffbbbbffffbbbbbbbbbbbbbbbbbbbbbbbbfbbbbb
    bbbbfbbbbbbbbbbbfbbbbbbbbbbbbbbfffbfffffffbfffffffffbffffbffffffffbfffffffffbffffffffffffffbffffffffbbfffffff11bfffffbffbbbbfffffbbfbbbbbbbbbbbbbbbbbbbbbbbfbbbb
    bbbbfbbbbbbbbbbbfbbbbbbbbbbbbffffbffffffffbffffffffbfff1bffffffffbfffffffffbffffbbbffffffffbffffffffbbffffff1ffbfffffbffbfffffffbffffbbbbbbbbbbbbbbbbbbbbbbfbbbb
    bbbbfbbbbbbbbbbbfbbbbbbbbbbbffffbbffbfffffbffffffffbff1bfffffffffbffffffffbffffbbbbfffffffbffffffffbffbfff11fffbfffffbffbffffffbffffbbbbbbbbbbbbbbbbbbbbbbbfbbbb
    bbbbfbbbbbbbbbbbfbbbbbbbbbbffffbbbfbbffffbfffffffffbf1fbfffffffffbfffffffbfffffbbbbfffffffbfff1ffffbffbf11fffffbfffffbffbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbfbbbb
    bbbbbfbbbbbbbbbbfbbbbbbbbbffffbbbfbbfffffbffffffffbff1bffffffffffbfffffffbfffffbbffffffffbfff1fffffbffbffffffffbfffffbffbfffffffffbbbbfbbbbbbbbbbbbbbbbbbbbfbbbb
    bbbbbfbbbbbbbbbbfbbbbbbbbbfffbbbfbbffffffbffffffffbf1fbfffffffffbffffffffbfffffbffffbbffbfff1ffffffbffbfffffffbffffffbffbffffffffbbbffbbbbbbbbffbbbbbbbbbbbfbbbb
    bbbbbfbbbbbbbbbbfbbbbbbbbfffbbbfbbbffffffbffffffffbf1fbfffffffffbffffffffbfffffbffffbbfbfff11ffffffbffbfffffffbffffffbffbfffffffbbffbbbbbbbbfffbbbbbbbbbbbbfbbbb
    bbbbbfbbbbbbbbbbbbbbbbbbbffbbbffbbbffffffbfffffffbf1ffbffffffffbfffffffffbfffffbffbbbfbfff1ffffffffbffbfffffffbffffffbffbffffffbfffbbbbbbffffbbbbbbbbbbbbbfbbbbb
    bbbbbbfbbbbbbbbbbbbbbbbbbbbbbfbbbbbfffffbffffffffb1fffbfffffffbfffffff1ffbffffffbbffffffffffffffffbfffbfffffffbffffffbffbfffffbfffbbbbbfffffbbbbbbbbbbbbbbfbbbbb
    bbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffbffffffffb1ffbffffffffbfffffff1ffbffffffffffffffffffffffffbfffbfffffffbffffffbffbffffbfffbbbbbfffffffbbbbbbbbbbbbbfbbbbb
    bbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbffffffbfffffffbf1ffbffffffffbfffffff1fbffffffffffffffffffffffffbfffbfffffffbfffffffbffbfffffffbbbbbffffffbbbbbbbbbbbbbbbfbbbbb
    bbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbffffffbfffffffb1fffbffffffffbfffffff1fbffff1fffffffffffffffffffbfffbfffffffbffffffbfffbffffffbbbbbffffffbbbbbbbbbbbbbbbbfbbbbb
    bbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbffbffffbfffffffb1fffbfffffffbfffffffff111111fffffffffffffffffffbffffbfffffffbffffffbffbffffffbbbbfffffffbbbbbbbbbbbbbbbbfbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbffffbffffffbf1fffbfffffffbffffffffffbfffffffffffffffffffffffbfffbfffffffbfffffffbffbfffffbbfffffffffbbfbbbbbbbbbbbbbbfbbbbbb
    bbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbfbbbffffbffffffb1fffbffffffffbffffffffffbffffffffffffffffffffffbffffbfffffffbfffffffbffbffffffffffffffbbffbbbbbbbbbbbbbbbfbbbbbb
    bbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbfbbbffffbffffffb1fffbffffffffbffffffffffbfffffffffffffffffffffbfffffbfffffffbfffffffbffbfffffffffffffbfffbbbbbbbbbbbbbbbbfbbbbbb
    bbbbbbbbbbbbbbbbffbbbbbbbbbbbbbffbbbffffbffffff1ffffbffffffffbffffffffffbffffffffffffffffffffbfffffbfffffffbfffffffbfffbffffffffffffffffbbbbbbbbbbbbbbbbfbbbbbbb
    bbbbbbbbbbbbbbbbbbfbbbbbbbbbbbfffbbbffffbffffff1ffffbffffffffbffffffffffbfffffffffffffffffffbffffffbfffffffbfffffffbffbffffffffffffffffbbbbbbbbbbbbbbbbbfbbbbbbb
    bbbbbbbbbbbbbbbbbbbfbbbbbbbbbbffbbbbffffbffffff1ffffbffffffffbfffffffffffbffffffffffffffffffbffffffbffffffbffffffffbffbffffffffffffffffbbbbbbbbbbbbbbbbbfbbbbbbb
    bbbbbbbbbbbbbbbbbbbbfbbbbbbbbfffbbbfffffbffffff1ffffbffffffffbfffffffffffbffffffffffffffffbbfffffffbffffffbffffffffbffbffffffffffffffbbbbbbbbbbbbbbbbbbbfbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbfffffbbbfffbbbfbfffbfffff1bfffbfffffffffbfffffffffffbffffffffffffffbbffffffffbffffffb1ffffffffbfbffffffffffffffbbbbbbbbbbbbbbbbbbbfbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbffbfffbfffff1bfffbfffffffffbfffffffffffbffffffffffffbbfffffffffbfffffff11fffffffbffbfffffffffffffbbbbbbbbbbbbbbbbbbbfbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbfffbfffff1bfffbffffffffffbfffffffffffbffffffffbbbfffffffffffbffffff1fffffffffbffbfffffffffffbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbfffbfffff1bfffbffffffffffbffffffffffffbbbbbbbbfffffffffffffbffffff1bffffffffbffbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbfffbfffff1bfffbfffffffffffbf1fffffffffffffffffffffffffffffbfffff11bffffffffbfffbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbfffbfffff1fbffbffffffffffffb1ffffffffffffffffffffffff11fffb11111ffbffffffffbffbffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbfbbfffbfffff1fbffbffffffffffffb1ffffffffffffffffffffffffff1111fffffffbfffffffbfffbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbfffbffffffffbfbffffffffffffbf1ffffffffffffffffffffffffffbffffffffbffffffffbfffbfffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbfbbbbfffbbfffffffbfbfffffffffffffbf1ffffffffffffffffffffffffbfffffffffbfffffffbfffbffffbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbfffbffffffffbfbfffffffffffffbf1fffffffffffffffffffffffbfffffffffbffffffffbfffbfffffbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbffffbfbfffffbffbfffffffffffffb1ffffffffffffffffffffffbfffffffffbffffffffbfffbffffbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbffffbfbffffffbfbffffffffffffffb1fffffffffffffffffffbbffffffffffbfffffffbffffbfffbffbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbffffbffbffffffbfbffffffffffffffb1ffffffffffffffffbbfffffffffffbffffffffbfffbffffffbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbffffbfbfbfffffbfbfffffffffffffffb1fffffffffffffbbffffffffffffbffffffffbffffbffffbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbffffbfbfbbfffffbfbfffffffffffffffb1fffffffffbbbffffffffffffffbfffffffbffffbffffbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbffbbbbbbbbbbbbbfbbbbbbbbbbfffffbffffbbfffffbbfffffffffffffffff1bbfffbbbffffffffffffffffbfffffffbffffbffbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbffbbbbbbbbbbbbbbfbbbbbbbbbffffffbfffbfffffffbbfffffffffffffffff11bbbffffffffffffffffffbfffffffbffffbfbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbfbbbbbbbbbbbbbbbfbbbbbbbbbfffbffbffffbffffffbbfffffffffffffffffff11ffffffffffffffffffbffffffbbfffffbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbfbbbbbbbbbbbbbbfbbbbbbbbbfffbfffbfffbffbffffbbffffffffffffffffffff1111ffffffffffffffbffffbbfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbfbbbbbbbbbbbbbbfbbbbbbbbbfffbbffbfffffbffffffbbbfffffffffffffffffffffffffffffffffffbffffbfffffffbffffbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbfbbbbbbbbbbbbbbfbbbbbbbbfffbbfffbffbbffffffffbfbfffffffffffffffffffffffffffffffffbfffbbfffffffbfffffffbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbfbbbbbbbbbbbbbbfbbbbbbbbfffbbffffbffbfffffffffbbbfffffffffffffffffffffffffffffffbfffbffffffffbffffffffbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbfbbbbbbbbbbbbbfbbbbbbbbbfbbbffffbffbbffffffffffbbfffffffffffffffffffffffffffffbffbbfffffffffbffffffbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbfbbbbbbbbbbbbbbfbbbbbbbbbbbbfffffbfbbfffffffffffbbffffffffffffffffffffffffffffbbbffffffffffbffbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbfbbbbbbbbbbbbbbfbbbbbbbbbbbbffffffbfbfffffffffffffbbffffffffffffffffffffffffbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbfbbbbbbbbbbbbbbfbbbbbbbbbbbfffffffbbfbffffffffffffbbbffffffffffffffffffffbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbfbbbbbbbbbbbbbbfbbbbbbbbbbbbffffffffbbfffffffffffffbfbbbfffffffffffffffbbbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbfbbbbbbbbbbbbbfbbbbbbbbbbbbfffffffffbbfffffffffffffbbffbbbbbffffffffbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbfbbbbbbbbbbbbbfbbbbbbbbbbbbbfffffffbbbbffffffffffffffbbbffffbbbbbbbbffffffffffffbbfffffffbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbfbbbbbbbbbbbbbfbbbbbbbbbbbbfffffffbbbbbbbffffffffffffffbbbbbbbbffffffffffffbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbfbbbbbbbbbbbfffffffbbbbfffbbbbbffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbfbbbbbbbbbbbfffffffbbbbfffffffbbbbbbfffffffbffffbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbfbbbbbbbbbbbfffffffbbbfffffffffffffbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffbbbbffffffbffffffffffffffbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffbbbbbffffffffffffffffffffbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbffffbfffffffffffffffbbbbbfffffffffbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbfffbfbfbfffffffffffffbbbbbbffffffbffbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbffbbffbbfffffffffffffbbbbbbfffffbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbffbbffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffbbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbfffffbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbffffbbbbbfbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbffbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbffbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbffbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffbbbfffbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
game.splash("觀測地點:寂靜")
game.splash("別讓那鬼東西接近你")
game.splash("狂按你的AB鍵")
game.splash("也必須隨時往右走")
game.splash("也別忘了用能量擊敗他")
game.splash("有一個攻擊物不會移動")
game.splash("待在上面達成最強及效率")
game.splash("將得分降為零")
info.setLife(6666)
info.setScore(666666)
let 伊索比亞宋 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 . . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . b b f e f b b . . . . . 
    . . . . b e f e f e b . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . e 5 5 5 5 5 e . . . . . 
    . . . . e 5 5 5 5 5 e . . . . . 
    . . . . e 5 5 5 5 5 e . . . . . 
    . . . . e a a a a a e . . . . . 
    . . . . . a a . a a . . . . . . 
    . . . . . a a . a a . . . . . . 
    . . . . . a a . a a . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
伊索比亞宋.setStayInScreen(true)
巨蟹座 = sprites.create(img`
    ...............fffffff..................
    .............ff4444444ff................
    ............f44444444444f...............
    ..44444....f4411444444444f..............
    ......4...f444444444424444f.............
    ......44..f444444444422144f........444..
    .4....44.f44444d44444422444f......44.4..
    .444.4444f44444d44444444444f.....44.....
    ...444..f44444dd4444d4444444f....4......
    ...2....f4444ffd4444dff44444f...44......
    ...2....f4444fffd444dfff4444f..444....44
    ...2....f44441ffddddd1ff4444f.44.44...4.
    ........f4444199ddddd1994444f44...44444.
    .........f444d91dddddd91444f........2...
    ...2.....f444dd2d222dd2d4455f.......2...
    ........f55f45d2dd22dd24ff55f.......2...
    ........f55fffffffffffff..ff........22..
    .........fff.....fddff....f2.........2..
    ..........2f....11ddd11...f2.........22.
    .........22...1111131111...22...........
    ...2....f2f..11211331121....2...........
    .......f22...1111133112111..22..........
    .......f2f...1111133111111...2f.........
    .......f2...11111333311111...fff........
    .......22...11.11311311111...f4ff.......
    .......22...11.11311331111...ff4ff......
    .......f2f..11.13111131111....f44f......
    ........22f.4..111121111.....ff44f......
    .........22f4...11121111....fffff.......
    ...........ff...1112111.................
    ................1111211.................
    .................111211.................
    .................111221.................
    ....................12111...............
    ......................1111..............
    .........................111............
    ............................1...........
    ........................................
    ........................................
    ........................................
    `, SpriteKind.Enemy)
巨蟹座.setPosition(0, 0)
controller.moveSprite(伊索比亞宋)
伊索比亞宋.setPosition(80, 95)
鬼魂能量 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . 3 3 . . . . . . . . 
    . . . . . 3 3 9 9 . . . . . . . 
    . . . . 3 3 9 9 9 9 . . . . . . 
    . . . . 3 9 3 3 3 3 3 . . . . . 
    . . . 3 9 9 3 9 9 9 3 3 . . . . 
    . . . 3 9 9 3 9 3 3 9 3 3 . . . 
    . . . 3 9 9 3 3 9 3 9 9 3 . . . 
    . . . 3 3 9 9 3 3 3 9 9 3 . . . 
    . . . . 3 3 9 9 9 9 9 3 3 . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.攻擊物)
鬼魂能量.setPosition(randint(0, 160), 100)
鬼魂能量 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . 3 3 . . . . . . . . 
    . . . . . 3 3 9 9 . . . . . . . 
    . . . . 3 3 9 9 9 9 . . . . . . 
    . . . . 3 9 3 3 3 3 3 . . . . . 
    . . . 3 9 9 3 9 9 9 3 3 . . . . 
    . . . 3 9 9 3 9 3 3 9 3 3 . . . 
    . . . 3 9 9 3 3 9 3 9 9 3 . . . 
    . . . 3 3 9 9 3 3 3 9 9 3 . . . 
    . . . . 3 3 9 9 9 9 9 3 3 . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.攻擊物)
鬼魂能量.setPosition(randint(0, 160), 95)
巨蟹座.follow(伊索比亞宋, 120)
巨蟹2 = sprites.create(img`
    ...............fffffff..................
    .........2...ff4444444ff.22.............
    .........2..f44444444444f.22............
    ..44444..2.f4411444444444f.22...........
    ......4...f444444444424444f.2...........
    ......44..f444444444422144f..2.....444..
    .4....44.f44444d44444422444f.22...44.4..
    .444.4444f44444d44444444444f..2..44.....
    ...444..f44444dd4444d4444444f....4......
    ...2....f4444ffd4444dff44444f...44......
    ...2....f4444fffd444dfff4444f..444....44
    ...2....f4444f2fdddddf2f4444f.44.44...4.
    .......2f4444fffdddddfff4444f44...44444.
    ......2..f4442ffddddddff444f........2...
    ...2..2..f442dd2d222dd2d4455f.......2...
    ......2.f55f25d2dd22dd24ff55f.2.....2...
    ......2.f55f2ffffffffff2..ff..2.....22..
    ......2..fff2....fd2ff.2..f2..22.....2..
    ......2...2f2...11d2d11.2.f2...2.....22.
    ......2..22.2.11111211112..22..2........
    ...2.2..f2f.211211332121....2...2.......
    .....2.f22...1111133112111..22...2......
    ....2..f2f...1111133111111...2f..2......
    ....2..f2...11111333311111...fff........
    ...2...22..211.11311311111...f4ff.......
    ...2...22..211.11311331111...ff4ff......
    ..2....f2f..11.13111131111....f44f......
    ..2.....22f.4..111121111.....ff44f......
    .2.......22f4...11121111....fffff.......
    .2.........ff...1112111.................
    .2..............1111211.2...............
    ..2..............111211..2..............
    ..22.............111221..2..............
    ....22..............1211122.............
    ......................11112.............
    .........................1122...........
    ............................22..........
    ........................................
    ........................................
    ........................................
    `, SpriteKind.Enemy)
巨蟹2.setPosition(155, 0)
巨蟹2.follow(伊索比亞宋, 130)
巨蟹3 = sprites.create(img`
    ...............fffffff..................
    .............ff4444444ff................
    ............f44444444444f.77............
    ..44444....f4411444444444f.77...........
    ......4...f444444447424444f.7...........
    ......44..f444444447722144f........444..
    .4....44.f44444d44444422444f......44.4..
    .444.4444f47444d44444444444f.....44.....
    ...444..f44744dd4444d4444444f....4......
    ...2....f447455d4444d7744444f...44......
    ...2....f4474555d444d7774444f..444....44
    ...2....f4474555ddddd7774444f.44.44...4.
    ........f4474555ddddd7774444f44...44444.
    .........f444d55dddddd71444f........2...
    ...2..7..f444dd2d222dd7d4455f..7....2...
    ......7.f55f45d7dd22dd77ff55f..7....2...
    .....7..f55ffff77ffffff7..ff...7....22..
    .....7...fff....7fddff.77.f2....7....2..
    .....7....2f....11ddd11.7.f2....7....22.
    .....7...22...11111311117..22...7.......
    ...2....f2f..112113311217...2...7.......
    .......f72...1111133112171..22..........
    .......f7f...1111133111171...2f.........
    .......f7...11111333311171...fff........
    .......72...11.11311311117...f4ff.......
    .......72...11.11311331117...ff4ff......
    .......72f..11.13111131111....f44f......
    .......722f.4..111121111.....ff44f......
    ........722f4...17721111....fffff.......
    ........77.ff...1712111.................
    .........77.....1711211.................
    ..........7......711211.................
    .................171221.................
    ....................121117..............
    ......................1117..............
    .........................771............
    ..........................7.1...........
    ........................................
    ........................................
    ........................................
    `, SpriteKind.Enemy)
巨蟹3.follow(伊索比亞宋, 75)
if (info.score() == 0) {
    game.over(true)
}
game.onUpdate(function () {
	
})
