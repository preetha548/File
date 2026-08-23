import i from"shaderpad";import{createFullscreenCanvas as s}from"shaderpad/util";import u from"shaderpad/plugins/autosize";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const a=`#version 300 es
precision highp float;

in vec2 v_uv;
uniform float u_time;
out vec4 outColor;

void main() {
    vec2 p = (v_uv - 0.5) * 2.0;
    float t = u_time * 0.6;
    vec3 c = vec3(0.0);
    for (int i = 0; i < 10; ++i) {
        c = vec3(
            sin(c.r + cos(c.g + t * 1.139 + p.x * 2.0) + tan(c.b * 0.15 + p.y)),
            cos(c.g + sin(c.b + t * 1.003 + p.y * 2.0) + tan(c.r * 0.15 + p.x)),
            sin(c.b + cos(c.r + t * 0.7831 + p.x - p.y) + tan(c.g * 0.15 + p.x * p.y))
        );
    }
    outColor = vec4(0.5 + 0.5 * sin(c), 1.0);
}
`,f=new i(a,{canvas:s(),plugins:[u()]});f.play();

