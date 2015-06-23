module.exports = isWebGL2
function isWebGL2 (gl) {
  if (!gl) return false
  return (typeof WebGL2RenderingContext !== 'undefined'
      && gl instanceof WebGL2RenderingContext)
}