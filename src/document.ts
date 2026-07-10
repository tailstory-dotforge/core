export interface DotforgeDocument {
  /**
   * mm
   */
  width: number;
  /**
   * mm
   */
  height: number;
  elements: TextElement[];
  [k: string]: unknown;
}
export interface TextElement {
  type: "text";
  x: number;
  y: number;
  text: string;
  fontSize: number;
  [k: string]: unknown;
}
