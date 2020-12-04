#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
vec2 wowColors() {
    return vec2(abs(sin(u_time)), abs(cos(u_time)));
}
vec4 colors() {
	return vec4(wowColors(),abs(tan(u_time)),1.0);
}

void main() {
	gl_FragColor = colors();
}