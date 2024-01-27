// 1 Inicializar el canvas

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const blockSize = 20
const boardWidth = 30
const boardHeight = 25

const canvasSize = {
    canvasWitdth: blockSize * boardWidth,
    canvasHeight: blockSize * boardHeight
}
context.scale(blockSize, blockSize)

