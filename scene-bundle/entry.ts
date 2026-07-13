// Standalone entry for the medical 3D scene — bundled with `bun build` into a
// single IIFE script in /public. This keeps three.js OUT of the Next.js /
// Turbopack compile graph (which OOMs the sandbox when cold-compiling three).
//
// The React component loads /medical-scene.js via a <script> tag and calls
// window.__initMedicalScene(mountEl, getState) to start the scene.

import * as THREE from "three";
import type { LayerId } from "../src/lib/anatomy-store";
import { useAnatomyStore } from "../src/lib/anatomy-store";
import { bodySystems } from "../src/lib/anatomy-data";

type AnatomyState = ReturnType<typeof useAnatomyStore.getState>;

type Tissue = "skin" | "muscle" | "bone" | "organ" | "nerve" | "vessel" | "lung" | "liver" | "fat";

type PartDef = {
  geo: "sphere" | "capsule" | "box" | "cylinder" | "torus";
  args?: number[];
  pos: [number, number, number];
  rot?: [number, number, number];
  scale?: [number, number, number];
  layer: LayerId;
  tissue?: Tissue;
  label?: string;
};

const TISSUE_PBR: Record<Tissue, { color: number; roughness: number; metalness: number }> = {
  skin: { color: 0xe3a888, roughness: 0.55, metalness: 0 },
  muscle: { color: 0xa83232, roughness: 0.45, metalness: 0 },
  bone: { color: 0xece4d2, roughness: 0.35, metalness: 0.05 },
  organ: { color: 0xc0563e, roughness: 0.4, metalness: 0 },
  nerve: { color: 0xe8d8a0, roughness: 0.5, metalness: 0 },
  vessel: { color: 0xb03030, roughness: 0.4, metalness: 0 },
  lung: { color: 0xc89090, roughness: 0.7, metalness: 0 },
  liver: { color: 0x7a2e2e, roughness: 0.42, metalness: 0 },
  fat: { color: 0xe8d090, roughness: 0.6, metalness: 0 },
};

const PARTS: PartDef[] = [
  // SKIN
  { geo: "sphere", args: [0.34, 32, 32], pos: [0, 2.42, 0.01], layer: "skin", tissue: "skin", label: "Head" },
  { geo: "capsule", args: [0.13, 0.12, 12, 20], pos: [0, 2.04, 0], layer: "skin", tissue: "skin" },
  { geo: "capsule", args: [0.48, 0.62, 16, 28], pos: [0, 1.44, 0], scale: [1.18, 1, 0.78], layer: "skin", tissue: "skin", label: "Thorax" },
  { geo: "capsule", args: [0.4, 0.4, 16, 28], pos: [0, 0.72, 0], scale: [1.06, 1, 0.78], layer: "skin", tissue: "skin" },
  { geo: "capsule", args: [0.44, 0.2, 16, 28], pos: [0, 0.18, 0], scale: [1.2, 1, 0.8], layer: "skin", tissue: "skin" },
  { geo: "sphere", args: [0.21, 24, 24], pos: [0.62, 1.66, 0], layer: "skin", tissue: "skin" },
  { geo: "sphere", args: [0.21, 24, 24], pos: [-0.62, 1.66, 0], layer: "skin", tissue: "skin" },
  { geo: "capsule", args: [0.115, 0.66, 12, 20], pos: [0.64, 1.2, 0], rot: [0, 0, 0.1], layer: "skin", tissue: "skin" },
  { geo: "capsule", args: [0.115, 0.66, 12, 20], pos: [-0.64, 1.2, 0], rot: [0, 0, -0.1], layer: "skin", tissue: "skin" },
  { geo: "capsule", args: [0.095, 0.6, 12, 20], pos: [0.7, 0.46, 0], rot: [0, 0, 0.08], layer: "skin", tissue: "skin" },
  { geo: "capsule", args: [0.095, 0.6, 12, 20], pos: [-0.7, 0.46, 0], rot: [0, 0, -0.08], layer: "skin", tissue: "skin" },
  { geo: "box", args: [0.16, 0.22, 0.07], pos: [0.74, 0.05, 0], layer: "skin", tissue: "skin" },
  { geo: "box", args: [0.16, 0.22, 0.07], pos: [-0.74, 0.05, 0], layer: "skin", tissue: "skin" },
  { geo: "capsule", args: [0.165, 0.78, 14, 24], pos: [0.23, -0.56, 0], layer: "skin", tissue: "skin" },
  { geo: "capsule", args: [0.165, 0.78, 14, 24], pos: [-0.23, -0.56, 0], layer: "skin", tissue: "skin" },
  { geo: "capsule", args: [0.13, 0.72, 14, 24], pos: [0.23, -1.48, 0], layer: "skin", tissue: "skin" },
  { geo: "capsule", args: [0.13, 0.72, 14, 24], pos: [-0.23, -1.48, 0], layer: "skin", tissue: "skin" },
  { geo: "box", args: [0.2, 0.1, 0.4], pos: [0.23, -1.98, 0.12], layer: "skin", tissue: "skin" },
  { geo: "box", args: [0.2, 0.1, 0.4], pos: [-0.23, -1.98, 0.12], layer: "skin", tissue: "skin" },
  // MUSCLE
  { geo: "sphere", args: [0.2, 20, 20], pos: [0.19, 1.56, 0.26], scale: [1, 0.7, 0.6], layer: "muscle", tissue: "muscle", label: "Pectoralis major" },
  { geo: "sphere", args: [0.2, 20, 20], pos: [-0.19, 1.56, 0.26], scale: [1, 0.7, 0.6], layer: "muscle", tissue: "muscle" },
  { geo: "sphere", args: [0.18, 20, 20], pos: [0.6, 1.66, 0.02], layer: "muscle", tissue: "muscle", label: "Deltoid" },
  { geo: "sphere", args: [0.18, 20, 20], pos: [-0.6, 1.66, 0.02], layer: "muscle", tissue: "muscle" },
  { geo: "box", args: [0.17, 0.12, 0.1], pos: [0.11, 1.02, 0.32], layer: "muscle", tissue: "muscle", label: "Rectus abdominis" },
  { geo: "box", args: [0.17, 0.12, 0.1], pos: [-0.11, 1.02, 0.32], layer: "muscle", tissue: "muscle" },
  { geo: "box", args: [0.17, 0.12, 0.1], pos: [0.11, 0.86, 0.32], layer: "muscle", tissue: "muscle" },
  { geo: "box", args: [0.17, 0.12, 0.1], pos: [-0.11, 0.86, 0.32], layer: "muscle", tissue: "muscle" },
  { geo: "box", args: [0.17, 0.12, 0.1], pos: [0.11, 0.7, 0.32], layer: "muscle", tissue: "muscle" },
  { geo: "box", args: [0.17, 0.12, 0.1], pos: [-0.11, 0.7, 0.32], layer: "muscle", tissue: "muscle" },
  { geo: "capsule", args: [0.09, 0.42, 10, 18], pos: [0.64, 1.22, 0.04], rot: [0, 0, 0.1], layer: "muscle", tissue: "muscle", label: "Biceps brachii" },
  { geo: "capsule", args: [0.09, 0.42, 10, 18], pos: [-0.64, 1.22, 0.04], rot: [0, 0, -0.1], layer: "muscle", tissue: "muscle" },
  { geo: "capsule", args: [0.14, 0.66, 12, 22], pos: [0.23, -0.54, 0.04], layer: "muscle", tissue: "muscle", label: "Quadriceps femoris" },
  { geo: "capsule", args: [0.14, 0.66, 12, 22], pos: [-0.23, -0.54, 0.04], layer: "muscle", tissue: "muscle" },
  { geo: "sphere", args: [0.19, 20, 20], pos: [0.2, 0.06, -0.16], scale: [1, 0.7, 0.8], layer: "muscle", tissue: "muscle", label: "Gluteus maximus" },
  { geo: "sphere", args: [0.19, 20, 20], pos: [-0.2, 0.06, -0.16], scale: [1, 0.7, 0.8], layer: "muscle", tissue: "muscle" },
  { geo: "capsule", args: [0.16, 0.4, 10, 18], pos: [0, 1.78, -0.08], scale: [2.4, 1, 0.6], layer: "muscle", tissue: "muscle", label: "Trapezius" },
  // ORGANS
  { geo: "sphere", args: [0.13, 24, 24], pos: [-0.1, 1.5, 0.18], scale: [1, 1.15, 0.9], layer: "organs", tissue: "organ", label: "Heart" },
  { geo: "sphere", args: [0.22, 24, 24], pos: [0.3, 1.42, 0], scale: [0.78, 1.5, 0.7], layer: "organs", tissue: "lung", label: "Right lung" },
  { geo: "sphere", args: [0.2, 24, 24], pos: [-0.28, 1.42, 0], scale: [0.78, 1.5, 0.7], layer: "organs", tissue: "lung", label: "Left lung" },
  { geo: "cylinder", args: [0.035, 0.035, 0.32, 16], pos: [0, 1.78, 0.06], layer: "organs", tissue: "organ" },
  { geo: "sphere", args: [0.22, 24, 24], pos: [0.16, 1.08, 0.1], scale: [1.2, 0.7, 0.85], layer: "organs", tissue: "liver", label: "Liver" },
  { geo: "capsule", args: [0.1, 0.18, 12, 20], pos: [-0.14, 1.04, 0.16], rot: [0, 0, 0.5], layer: "organs", tissue: "organ", label: "Stomach" },
  { geo: "torus", pos: [0, 0.62, 0.14], rot: [Math.PI / 2, 0, 0], scale: [0.5, 0.5, 0.28], layer: "organs", tissue: "organ", label: "Small intestine" },
  { geo: "sphere", args: [0.1, 18, 18], pos: [0.22, 0.96, -0.12], scale: [0.6, 1, 0.7], layer: "organs", tissue: "organ", label: "Kidney" },
  { geo: "sphere", args: [0.1, 18, 18], pos: [-0.22, 0.96, -0.12], scale: [0.6, 1, 0.7], layer: "organs", tissue: "organ" },
  { geo: "sphere", args: [0.1, 18, 18], pos: [0, 0.06, 0.1], scale: [1, 0.85, 0.8], layer: "organs", tissue: "organ", label: "Urinary bladder" },
  { geo: "sphere", args: [0.24, 28, 28], pos: [0, 2.44, 0], scale: [1, 0.95, 1.05], layer: "organs", tissue: "nerve", label: "Cerebrum" },
  // SKELETON
  { geo: "sphere", args: [0.32, 28, 28], pos: [0, 2.44, 0], layer: "skeleton", tissue: "bone", label: "Skull" },
  { geo: "capsule", args: [0.02, 0.4, 8, 14], pos: [0.28, 1.84, 0.26], rot: [0, 0, -0.2], layer: "skeleton", tissue: "bone", label: "Clavicle" },
  { geo: "capsule", args: [0.02, 0.4, 8, 14], pos: [-0.28, 1.84, 0.26], rot: [0, 0, 0.2], layer: "skeleton", tissue: "bone" },
  { geo: "box", args: [0.06, 0.5, 0.03], pos: [0, 1.5, 0.32], layer: "skeleton", tissue: "bone", label: "Sternum" },
  { geo: "torus", pos: [0, 1.66, 0], rot: [Math.PI / 2, 0, 0], scale: [1.05, 0.62, 1], layer: "skeleton", tissue: "bone", label: "Rib cage" },
  { geo: "torus", pos: [0, 1.52, 0], rot: [Math.PI / 2, 0, 0], scale: [1.12, 0.62, 1], layer: "skeleton", tissue: "bone" },
  { geo: "torus", pos: [0, 1.38, 0], rot: [Math.PI / 2, 0, 0], scale: [1.16, 0.62, 1], layer: "skeleton", tissue: "bone" },
  { geo: "torus", pos: [0, 1.24, 0], rot: [Math.PI / 2, 0, 0], scale: [1.14, 0.6, 1], layer: "skeleton", tissue: "bone" },
  { geo: "torus", pos: [0, 1.1, 0], rot: [Math.PI / 2, 0, 0], scale: [1.1, 0.58, 1], layer: "skeleton", tissue: "bone" },
  ...Array.from({ length: 16 }, (_, i): PartDef => ({
    geo: "sphere",
    args: [0.05 + (i > 8 ? 0.012 * (i - 8) : 0), 12, 12],
    pos: [0, 1.92 - i * 0.15, -0.16 - (i > 6 ? 0.005 * (i - 6) : 0)],
    layer: "skeleton",
    tissue: "bone",
    label: i === 0 ? "Vertebral column" : undefined,
  })),
  { geo: "torus", pos: [0, 0.16, 0], rot: [Math.PI / 2, 0, 0], scale: [1.1, 0.55, 0.8], layer: "skeleton", tissue: "bone", label: "Pelvis" },
  { geo: "capsule", args: [0.035, 0.62, 10, 16], pos: [0.62, 1.22, 0], rot: [0, 0, 0.1], layer: "skeleton", tissue: "bone", label: "Humerus" },
  { geo: "capsule", args: [0.035, 0.62, 10, 16], pos: [-0.62, 1.22, 0], rot: [0, 0, -0.1], layer: "skeleton", tissue: "bone" },
  { geo: "capsule", args: [0.028, 0.56, 10, 16], pos: [0.7, 0.48, 0.02], rot: [0, 0, 0.08], layer: "skeleton", tissue: "bone" },
  { geo: "capsule", args: [0.028, 0.56, 10, 16], pos: [-0.7, 0.48, 0.02], rot: [0, 0, -0.08], layer: "skeleton", tissue: "bone" },
  { geo: "capsule", args: [0.045, 0.72, 12, 18], pos: [0.23, -0.56, 0], layer: "skeleton", tissue: "bone", label: "Femur" },
  { geo: "capsule", args: [0.045, 0.72, 12, 18], pos: [-0.23, -0.56, 0], layer: "skeleton", tissue: "bone" },
  { geo: "capsule", args: [0.035, 0.66, 12, 18], pos: [0.23, -1.48, 0], layer: "skeleton", tissue: "bone" },
  { geo: "capsule", args: [0.035, 0.66, 12, 18], pos: [-0.23, -1.48, 0], layer: "skeleton", tissue: "bone" },
];

function makeGeo(p: PartDef): THREE.BufferGeometry {
  const a = p.args ?? [];
  switch (p.geo) {
    case "sphere": return new THREE.SphereGeometry(a[0] ?? 0.3, a[1] ?? 24, a[2] ?? 24);
    case "capsule": return new THREE.CapsuleGeometry(a[0] ?? 0.1, a[1] ?? 0.3, a[2] ?? 10, a[3] ?? 18);
    case "box": return new THREE.BoxGeometry(a[0] ?? 0.2, a[1] ?? 0.2, a[2] ?? 0.2);
    case "cylinder": return new THREE.CylinderGeometry(a[0] ?? 0.1, a[1] ?? 0.1, a[2] ?? 0.3, a[3] ?? 16);
    case "torus": return new THREE.TorusGeometry(0.42, 0.022, 10, 32);
  }
}

type GetState = () => AnatomyState;

export function initMedicalScene(mount: HTMLDivElement, getState: GetState): () => void {
  const width = mount.clientWidth;
  const height = mount.clientHeight;

  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.localClippingEnabled = true;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  mount.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0d12);
  scene.fog = new THREE.Fog(0x0a0d12, 10, 24);

  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
  const target = new THREE.Vector3(0, 0.5, 0);
  const spherical = new THREE.Spherical().setFromVector3(new THREE.Vector3(0, 0.5, 6));

  // Lighting
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  scene.add(new THREE.HemisphereLight(0xffffff, 0x3a4a5a, 0.7));
  const key = new THREE.DirectionalLight(0xffffff, 2.4);
  key.position.set(4, 6, 3);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.bias = -0.0001;
  key.shadow.camera = new THREE.OrthographicCamera(-4, 4, 4, -4, 0.1, 20);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x9bc4d8, 1.0);
  fill.position.set(-4, 3, -2);
  scene.add(fill);
  const accent = new THREE.PointLight(0x22d3ee, 0.8, 20);
  accent.position.set(0, 1, 5);
  scene.add(accent);
  const spot = new THREE.SpotLight(0xffffff, 1.6, 0, Math.PI / 6, 0.8, 1);
  spot.position.set(0, 5, 2);
  spot.castShadow = true;
  scene.add(spot);
  spot.target.position.copy(target);
  scene.add(spot.target);

  // Body
  const bodyGroup = new THREE.Group();
  bodyGroup.position.y = 0.05;
  scene.add(bodyGroup);

  type MeshInfo = { mesh: THREE.Mesh; def: PartDef; basePos: THREE.Vector3 };
  const meshes: MeshInfo[] = [];
  const labelIndex: Record<string, THREE.Mesh> = {};

  for (const p of PARTS) {
    const geo = makeGeo(p);
    const tissue = p.tissue ?? "organ";
    const pbr = TISSUE_PBR[tissue];
    const mat = new THREE.MeshStandardMaterial({
      color: pbr.color,
      roughness: pbr.roughness,
      metalness: pbr.metalness,
      transparent: true,
      opacity: 1,
      side: p.layer === "skin" ? THREE.DoubleSide : THREE.FrontSide,
      emissive: new THREE.Color(pbr.color),
      emissiveIntensity: 0.04,
      clipShadows: true,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.fromArray(p.pos);
    if (p.rot) mesh.rotation.fromArray(p.rot);
    mesh.scale.fromArray(p.scale ?? [1, 1, 1]);
    mesh.castShadow = p.layer !== "skin";
    mesh.receiveShadow = p.layer === "skin";
    bodyGroup.add(mesh);
    meshes.push({ mesh, def: p, basePos: new THREE.Vector3(...p.pos) });
    if (p.label && !labelIndex[p.label]) labelIndex[p.label] = mesh;
  }

  // Ground shadow
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), new THREE.ShadowMaterial({ opacity: 0.45 }));
  ground.position.y = -2.02;
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // Slice plane visual
  const sliceMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1.6, 1.6),
    new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.08, side: THREE.DoubleSide })
  );
  sliceMesh.visible = false;
  scene.add(sliceMesh);

  // Tool overlay
  const toolGroup = new THREE.Group();
  scene.add(toolGroup);
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const catcher = new THREE.Mesh(
    new THREE.SphereGeometry(8, 20, 20),
    new THREE.MeshBasicMaterial({ side: THREE.BackSide, visible: false })
  );
  scene.add(catcher);

  const firstPoint: { current: [number, number, number] | null } = { current: null };
  let prevTool: string = "none";

  function setCameraFromSpherical() {
    camera.position.setFromSpherical(spherical).add(target);
    camera.lookAt(target);
  }
  setCameraFromSpherical();

  // Orbit
  let dragging = false;
  let lastX = 0, lastY = 0;
  let velTheta = 0, velPhi = 0;

  function onPointerDown(e: PointerEvent) {
    const st = getState();
    if (st.tool !== "none") return;
    dragging = true;
    lastX = e.clientX; lastY = e.clientY;
    velTheta = 0; velPhi = 0;
  }
  function onPointerMove(e: PointerEvent) {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX; lastY = e.clientY;
    spherical.theta -= dx * 0.005;
    spherical.phi = Math.max(0.15, Math.min(Math.PI - 0.15, spherical.phi - dy * 0.005));
    velTheta = -dx * 0.005; velPhi = -dy * 0.005;
  }
  function onPointerUp() { dragging = false; }
  function onWheel(e: WheelEvent) {
    e.preventDefault();
    spherical.radius = Math.max(3, Math.min(11, spherical.radius + e.deltaY * 0.005));
  }
  function onCanvasClick(e: PointerEvent) {
    const st = getState();
    if (st.tool === "none") return;
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObject(catcher, false);
    if (hits.length === 0) return;
    const pt = hits[0].point;
    const p: [number, number, number] = [Number(pt.x.toFixed(3)), Number(pt.y.toFixed(3)), Number(pt.z.toFixed(3))];
    if (st.tool === "annotate") {
      st.addAnnotation({ id: `ann-${Date.now()}`, position: p, label: `Point ${st.annotations.length + 1}` });
    } else if (st.tool === "measure") {
      if (!firstPoint.current) {
        firstPoint.current = p;
      } else {
        const len = Math.sqrt((p[0]-firstPoint.current[0])**2+(p[1]-firstPoint.current[1])**2+(p[2]-firstPoint.current[2])**2);
        st.addMeasurement({ id: `meas-${Date.now()}`, from: firstPoint.current, to: p, length: Number((len*50).toFixed(1)) });
        firstPoint.current = null;
      }
    }
  }

  const el = renderer.domElement;
  el.style.touchAction = "none";
  el.addEventListener("pointerdown", onPointerDown);
  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
  el.addEventListener("wheel", onWheel, { passive: false });
  el.addEventListener("pointerdown", onCanvasClick);

  function onResize() {
    const w = mount.clientWidth, h = mount.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  const ro = new ResizeObserver(onResize);
  ro.observe(mount);

  function rebuildTools() {
    const st = getState();
    while (toolGroup.children.length) {
      const c = toolGroup.children[0] as THREE.Mesh;
      toolGroup.remove(c);
      if (c.geometry) c.geometry.dispose();
    }
    for (const m of st.measurements) {
      const g = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(...m.from), new THREE.Vector3(...m.to)]);
      toolGroup.add(new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0x22d3ee })));
      const s1 = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), new THREE.MeshBasicMaterial({ color: 0x22d3ee }));
      s1.position.fromArray(m.from); toolGroup.add(s1);
      const s2 = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), new THREE.MeshBasicMaterial({ color: 0x22d3ee }));
      s2.position.fromArray(m.to); toolGroup.add(s2);
    }
    for (const a of st.annotations) {
      const s = new THREE.Mesh(new THREE.SphereGeometry(0.04, 10, 10), new THREE.MeshBasicMaterial({ color: 0xfacc15 }));
      s.position.fromArray(a.position); toolGroup.add(s);
    }
    if (firstPoint.current) {
      const s = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 10), new THREE.MeshBasicMaterial({ color: 0x22d3ee }));
      s.position.fromArray(firstPoint.current); toolGroup.add(s);
    }
  }

  const clock = new THREE.Clock();
  let rafId = 0;
  let lastSync = 0;

  function animate() {
    rafId = requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    const st = getState();
    const breath = Math.sin(t * 0.9) * 0.5 + 0.5;
    const beat = Math.pow(Math.max(0, Math.sin(t * 7.3)), 6) + 0.45 * Math.pow(Math.max(0, Math.sin(t * 7.3 + 0.9)), 6);

    if (st.tool !== prevTool) { prevTool = st.tool; firstPoint.current = null; }

    if (t - lastSync > 0.1) {
      lastSync = t;
      const explode = st.explode;
      const xray = st.mode === "x-ray";
      const sel = st.systemId && st.organId ? (bodySystems.find(s => s.id === st.systemId)?.organs.find(o => o.id === st.organId)?.name ?? null) : null;
      for (const info of meshes) {
        const op = st.layerOpacity[info.def.layer];
        const mat = info.mesh.material as THREE.MeshStandardMaterial;
        mat.opacity = op;
        mat.visible = op > 0.001;
        mat.wireframe = xray;
        if (sel && info.def.label === sel) {
          mat.emissive = new THREE.Color(0xffffff);
          mat.emissiveIntensity = 0.3;
        } else {
          mat.emissive = new THREE.Color(TISSUE_PBR[info.def.tissue ?? "organ"].color);
          mat.emissiveIntensity = st.photoreal ? 0.04 : 0.5;
        }
        const ek = info.def.layer === "skin" ? explode*0.3 : info.def.layer === "fascia" ? explode*0.2 : info.def.layer === "muscle" ? explode*0.15 : info.def.layer === "organs" ? explode*0.5 : explode*0.08;
        info.mesh.position.set(info.basePos.x*(1+ek), info.basePos.y + ek*0.15, info.basePos.z*(1+ek));
      }
      if (st.sliceActive) {
        const range = st.sliceAxis === "y" ? [-2,2.6] : [-0.9,0.9];
        const ppos = range[0] + (range[1]-range[0])*st.slicePosition;
        const n = st.sliceAxis==="x"?new THREE.Vector3(-1,0,0):st.sliceAxis==="y"?new THREE.Vector3(0,-1,0):new THREE.Vector3(0,0,-1);
        const plane = new THREE.Plane(n, ppos);
        for (const info of meshes) (info.mesh.material as THREE.Material).clippingPlanes = [plane];
        sliceMesh.visible = true;
        const sz = st.sliceAxis === "y" ? 1.6 : 2.4;
        sliceMesh.scale.set(st.sliceAxis==="y"?1:sz/1.6, st.sliceAxis==="y"?sz/1.6:1, 1);
        sliceMesh.position.set(st.sliceAxis==="x"?ppos:0, st.sliceAxis==="y"?ppos:0.3, st.sliceAxis==="z"?ppos:0);
        sliceMesh.rotation.set(st.sliceAxis==="y"?Math.PI/2:0, st.sliceAxis==="x"?Math.PI/2:0, 0);
      } else {
        for (const info of meshes) (info.mesh.material as THREE.Material).clippingPlanes = null;
        sliceMesh.visible = false;
      }
      rebuildTools();
    }

    bodyGroup.position.y = 0.05 + breath * 0.02;
    const thorax = labelIndex["Thorax"];
    if (thorax) { const s = 1 + breath*0.035; thorax.scale.set(1.18*s, s, 0.78*s); }
    const heart = labelIndex["Heart"];
    if (heart) { const s = 1 + beat*0.14; heart.scale.set(s, 1.15*s, 0.9*s); }
    const rl = labelIndex["Right lung"], ll = labelIndex["Left lung"];
    const ls = 1 + breath*0.06;
    if (rl) rl.scale.set(0.78*ls, 1.5*(1+breath*0.04), 0.7*ls);
    if (ll) ll.scale.set(0.78*ls, 1.5*(1+breath*0.04), 0.7*ls);

    if (st.autoRotate && !dragging) {
      spherical.theta -= 0.016 * 0.35;
    } else if (!dragging) {
      spherical.theta += velTheta * 0.92;
      spherical.phi = Math.max(0.15, Math.min(Math.PI-0.15, spherical.phi + velPhi * 0.92));
      velTheta *= 0.9; velPhi *= 0.9;
    }
    setCameraFromSpherical();

    renderer.render(scene, camera);
  }
  animate();

  return () => {
    cancelAnimationFrame(rafId);
    ro.disconnect();
    el.removeEventListener("pointerdown", onPointerDown);
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
    el.removeEventListener("wheel", onWheel);
    el.removeEventListener("pointerdown", onCanvasClick);
    renderer.dispose();
    scene.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
      const mat = m.material as THREE.Material | THREE.Material[] | undefined;
      if (mat) { if (Array.isArray(mat)) mat.forEach(x => x.dispose()); else mat.dispose(); }
    });
    if (mount.contains(el)) mount.removeChild(el);
  };
}

// Expose globally for the React loader
(window as unknown as Record<string, unknown>).__initMedicalScene = initMedicalScene;
