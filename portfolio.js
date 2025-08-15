const grid = document.getElementById("grid");
  const videos = grid.querySelectorAll("video");
  const closeBtn = document.getElementById("closeBtn");
  let focused = null;

  function focusVideo(v) {
    videos.forEach(vid => {
      if (vid !== v) vid.pause();
    });
    focused = v;
    v.classList.add("focused");
    v.setAttribute("controls", "");
    v.muted = true;
    document.body.classList.add("focus-mode");
    v.play().catch(() => {});
  }

  function unfocusVideo() {
    if (!focused) return;
    focused.pause();
    focused.removeAttribute("controls");
    focused.classList.remove("focused");
    document.body.classList.remove("focus-mode");
    focused = null;
  }

  videos.forEach(v => {
    v.addEventListener("click", () => {
      if (focused === v) {
        unfocusVideo();
      } else {
        unfocusVideo();
        focusVideo(v);
      }
    });
  });

  closeBtn.addEventListener("click", unfocusVideo);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") unfocusVideo();
  });

  //Dar opção de ver o video deitado
  const rotateBtn = document.getElementById("rotateBtn");

  rotateBtn.addEventListener("click", () => {
    if (!focused) return;
    focused.classList.toggle("rotated");
  });