"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 1000);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);

    const light = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(light);

    // 多面体ジオメトリ
    const geometry = new THREE.DodecahedronGeometry(300, 0); // 正十二面体

    // 本体のマテリアル
    function createGradientTexture() {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      canvas.width = 256;
      canvas.height = 256;

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height); // グラデーションを作成
      gradient.addColorStop(0, "#db3636");
      gradient.addColorStop(0.5, "#faca47");
      gradient.addColorStop(1, "#db3636");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    }

    const gradientTexture = createGradientTexture();

    const material = new THREE.MeshBasicMaterial({
      map: gradientTexture, // グラデーションを指定して光源の影響を受けないマテリアルを作成
    });

    // メッシュ
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 枠線のためのエッジジオメトリ
    const edges = new THREE.EdgesGeometry(geometry);

    // 枠線のマテリアル
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      linewidth: 1,
      opacity: 0.6,
      transparent: true,
    });

    // 枠線（エッジ）を描画
    const line = new THREE.LineSegments(edges, lineMaterial);
    scene.add(line);

    // マウスの動きに追従
    let mouseX = 0,
        mouseY = 0;

    let windowHalfX = window.innerWidth / 8;
    let windowHalfY = height / 8;

    function onDocumentMouseMove(event: MouseEvent) {
      mouseX = Math.max(-windowHalfX, Math.min(event.clientX - windowHalfX, windowHalfX));
      mouseY = Math.max(-windowHalfY, Math.min(event.clientY - windowHalfY, windowHalfY));
    }

    function onDocumentMouseLeave() {
      mouseX = 0;
      mouseY = 0;
    }

    document.addEventListener("mousemove", onDocumentMouseMove);
    document.addEventListener("mouseleave", onDocumentMouseLeave);

    function animate() {
      requestAnimationFrame(animate);

      camera.position.x += (mouseX - camera.position.x) * 0.02;
      camera.position.y += (-mouseY - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      // オブジェクトを回転させる
      mesh.rotation.y += 0.002;
      mesh.rotation.x += 0.002;
      line.rotation.y += 0.002;
      line.rotation.x += 0.002;

      renderer.render(scene, camera);
    }
    animate();

    // 画面幅の計算（リサイズ）
    function onWindowResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height);

      windowHalfX = window.innerWidth / 2;
      windowHalfY = height / 2;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", onWindowResize);

    return () => {
      document.removeEventListener("mousemove", onDocumentMouseMove);
      document.removeEventListener("mouseleave", onDocumentMouseLeave);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
}
