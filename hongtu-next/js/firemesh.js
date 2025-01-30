import * as THREE from 'three'
import { FireMaterial } from 'fireshader'

class FireMesh extends THREE.Mesh {

  constructor(fireTex, color) {
    const fireMaterial = new THREE.ShaderMaterial({
      vertexShader: FireMaterial.vertexShader,
      fragmentShader: FireMaterial.fragmentShader,
      uniforms: FireMaterial.uniforms,
      defines: FireMaterial.defines,
      transparent     : true,
      depthWrite      : false,
      depthTest       : false,
      side: THREE.DoubleSide,
    })

    // initialize uniforms

    fireTex.magFilter = fireTex.minFilter = THREE.LinearFilter
    fireTex.wrapS = fireTex.wrapT = THREE.ClampToEdgeWrapping

    fireMaterial.uniforms.fireTex.value = fireTex
    fireMaterial.uniforms.color.value = color || new THREE.Color( 0xeeeeee )
    fireMaterial.uniforms.invModelMatrix.value = new THREE.Matrix4()
    fireMaterial.uniforms.scale.value = new THREE.Vector3( 1, 1, 1 )
    fireMaterial.uniforms.seed.value = Math.random() * 19.19

    super(new THREE.BoxGeometry(1.0, 1.0, 1.0), fireMaterial)
  }

  update(time) {
    const invModelMatrix = this.material.uniforms.invModelMatrix.value

    this.updateMatrixWorld()
    invModelMatrix.copy(this.matrixWorld).invert()
    if( time !== undefined ) {
      this.material.uniforms.time.value += time
    }

    this.material.uniforms.invModelMatrix.value = invModelMatrix
    this.material.uniforms.scale.value = this.scale
  }
}

export { FireMesh }
