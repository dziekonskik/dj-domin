export function getSnapshot() {
  return window.localStorage.getItem("d-volume");
}

export function subscribe(emitChange: () => void) {
  window.addEventListener("storage", emitChange);
  return () => {
    window.removeEventListener("storage", emitChange);
  };
}
