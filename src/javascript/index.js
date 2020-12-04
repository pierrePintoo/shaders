

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
let time = 0
const material = new THREE.RawShaderMaterial({
    uniforms: {
        u_mouse: {type: 'v2', value: Mouse.cursor},
        u_rez: {type: 'v2', value: [canvasWidth, canvasHeight]},
        u_time: {type: 'f', value : time}
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
    time += .01
    // console.log(Mouse.cursor[0])
    material.uniforms.u_time.value = time
    material.uniforms.u_mouse.value = Mouse.cursor
    renderer.render(scene, camera)

}
requestAnimationFrame(update)