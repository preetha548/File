import ShaderPad from "shaderpad";
import { createFullscreenCanvas } from "shaderpad/util";
import autosize from "shaderpad/plugins/autosize";

import fragmentShaderSrc from "./shader.glsl?raw";

const shader = new ShaderPad(fragmentShaderSrc, {
  canvas: createFullscreenCanvas(),
  plugins: [autosize()]
});
shader.play();
