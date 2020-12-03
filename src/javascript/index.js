

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
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)

const material = new THREE.RawShaderMaterial({
    uniforms: {
        mouse: {type: 'v2', value: Mouse.cursor},
        rez: {type: 'v2', value: [canvasWidth, canvasHeight]},
        time: {value: 1.0}
    },
    fragmentShader: require('../shaders/screen.frag'),
    vertexShader: require('../shaders/screen.vert')
})

const geometry = new THREE.PlaneBufferGeometry(2, 2, 1, 1)

const mesh = new THREE.Mesh(geometry, material)

const scene = new THREE.Scene()
scene.add(mesh)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
scene.add(camera)
camera.position.z = 5

const mainLight = new THREE.PointLight()
scene.add(mainLight)
renderer.render(scene, camera)

// à chaque image : 60fps
const update = () => {
    requestAnimationFrame(update)


}
requestAnimationFrame(update)