import PlugInParameters from "@/lib/main-entrance/PlugInParameters";

/**
 * 绘制蒙层
 * @param context 需要进行绘制canvas
 * @param imgData 屏幕截图canvas容器
 */
export function drawMasking(
  context: CanvasRenderingContext2D,
  imgData?: HTMLCanvasElement
) {
  const plugInParameters = new PlugInParameters();
  // 清除画布
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  // 屏幕截图存在且展示截图数据的状态为true则进行绘制
  if (imgData != null && plugInParameters.getShowScreenDataStatus()) {
    context.drawImage(imgData, 0, 0, imgData.width, imgData.height);
  }
  // 绘制蒙层
  context.save();
  context.fillStyle = "rgba(0, 0, 0, .6)";
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  // 绘制结束
  context.restore();
}
