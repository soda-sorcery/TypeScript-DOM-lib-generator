document.addEventListener("arbitrary_invalid_event", (ev) => {
  return ev.returnValue;
});

document.addEventListener("arbitrary_invalid_event", {
  handleEvent(ev)  {
    return ev.returnValue;
  }
});

const divElement: HTMLElement = document.createElement("div");


divElement.addEventListener(
  "click",
  (event: Event) => {
    if (event) {
      return;
    }
  },
  false,
);

divElement.addEventListener("click", (event: Event) => {
  if (event) {
    return;
  }
});

divElement.addEventListener("beep", (event: UIEvent) => {
  if (event) {
    return;
  }
});

