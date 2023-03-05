export function getMachineImage(type, status) {
  // checking status
  switch (status) {
    case "clear":
      if (type === "washer") {
        return require("../../assets/images/machines/green_washer.jpg");
      } else {
        return require("../../assets/images/machines/green_dryer.jpg");
      }
      break;
    case "working":
      if (type === "washer") {
        return require("../../assets/images/machines/orange_washer.jpg");
      } else {
        return require("../../assets/images/machines/orange_dryer.jpg");
      }
      break;
    case "done":
      if (type === "washer") {
        return require("../../assets/images/machines/purple_washer.jpg");
      } else {
        return require("../../assets/images/machines/purple_dryer.jpg");
      }
      break;
    default:
      if (type === "washer") {
        return require("../../assets/images/machines/empty_washer.jpg");
      } else {
        return require("../../assets/images/machines/empty_dryer.jpg");
      }
  }
}
