#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_rez;

void main() {
	vec2 st = gl_FragCoord.xy/u_rez;
	gl_FragColor = vec4(st.x, st.y, 1., 1.0);
}