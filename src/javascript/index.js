

import Mouse from "./utils/mouse"
import Easing from "./utils/easing"
import * as THREE from "../../node_modules/three"
const canvas = document.querySelector('.main-canvas')
const ctx = canvas.getContext("3D")

canvas.width = window.innerWidth * window.devicePixelRatio
canvas.height = window.innerHeight * window.devicePixelRatio
canvas.style.maxWidth = window.innerWidth
canvas.style.maxHeight = window.innerHeight

let canvasWidth = (canvas.width)
let canvasHeight = (canvas.height)
let cW2 = (canvas.width / 2)
let cH2 = (canvas.height / 2)

const renderer = new THREE.WebGLRenderer({canvas})

const material = new THREE.RawShaderMaterial({
    uniforms: {
        mouse: {type: 'v2', value: Mouse.cursor},
        rez: {type: 'v2', value: [canvasWidth, canvasHeight]},
        time: {value: 1.0}
    },
    fragmentShader: require('../shaders/color.frag'),
    vertexShader: require('../shaders/screen.vert')
})

const geometry = new THREE.PlaneBufferGeometry(20, 20)

const mesh = new THREE.Mesh(geometry, material)

const scene = new THREE.Scene()
scene.add(mesh)

const camera = new THREE.PerspectiveCamera(75, cW2, 20, 1000)
scene.add(camera)

const mainLight = new THREE.PointLight()
scene.add(mainLight)

// à chaque image : 60fps
const update = () => {
    requestAnimationFrame(update)

    renderer.render(scene, camera)

}
requestAnimationFrame(update)