#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_rez;
uniform vec2 u_mouse;

void main() {
	vec2 st = gl_FragCoord.xy/u_rez;
	gl_FragColor = vec4(st.x, abs(sin(u_time)), u_mouse.x, 1.0);
}