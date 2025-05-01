import { MousePos } from "@/types/common";
import { Cell } from "./cell";
import { GRID_COLUMNS, GRID_ROWS } from "../consts";

export class Effect {
  private width: number;
  private height: number;
  private cellWidth: number;
  private cellHeight: number;
  private imageGrid: Cell[] = [];

  constructor(canvas: HTMLCanvasElement, private image: HTMLImageElement, private mousePos: MousePos) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.cellWidth = canvas.width / GRID_COLUMNS;
    this.cellHeight = canvas.height / GRID_ROWS;
    this.createGrid();
  }

  private createGrid() {
    for (let y = 0; y < this.height; y += this.cellHeight) {
      for (let x = 0; x < this.width; x += this.cellWidth) {
        this.imageGrid.push(new Cell(this.cellWidth, this.cellHeight, x, y, this.image, this.mousePos));
      }
    }
  }

  public render(ctx: CanvasRenderingContext2D) {
    this.imageGrid.forEach((cell) => {
      cell.update();
      cell.draw(ctx);
    });
  }
}
