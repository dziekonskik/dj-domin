import { MousePos } from "@/types/common";
import { FORCE_MULTIPLIER, RADIUS } from "../consts";

export class Cell {
  private origX: number;
  private origY: number;
  private changeX = 0;
  private changeY = 0;

  constructor(
    private width: number,
    private height: number,
    private x: number,
    private y: number,
    private image: HTMLImageElement,
    private mousePos: MousePos
  ) {
    this.origX = x;
    this.origY = y;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.image,
      this.origX,
      this.origY,
      this.width,
      this.height,
      this.x + this.changeX,
      this.y + this.changeY,
      this.width,
      this.height
    );
  }

  public update() {
    if (!this.mousePos.x) {
      this.reset();
      return;
    }
    const dx = this.mousePos.x - this.x;
    const dy = this.mousePos.y - this.y;
    const distance = Math.hypot(dx, dy);

    if (distance < RADIUS) {
      const angle = Math.atan2(dy, dx);
      const force = (1 - distance / RADIUS) * FORCE_MULTIPLIER;

      this.changeX = Math.cos(angle) * force;
      this.changeY = Math.sin(angle) * force;
    } else {
      this.reset();
    }
  }

  private reset() {
    this.changeX *= 0.05;
    this.changeY *= 0.05;

    if (Math.abs(this.changeX) < 0.1) this.changeX = 0;
    if (Math.abs(this.changeY) < 0.1) this.changeY = 0;
  }
}
