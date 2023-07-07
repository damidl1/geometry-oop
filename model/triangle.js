class Triangle {
  constructor(xA, yA, xB, yB, xC, yC) {
    this.segmentAB = new Segment(xA, yA, xB, yB);
    this.segmentBC = new Segment(xB, yB, xC, yC);
    this.segmentCA = new Segment(xC, yC, xA, yA);
  }

  get perimeter() {
    return (
      this.segmentAB.length + this.segmentBC.length + this.segmentCA.length
    );
  }

  // area triangolo di test = 6
  // calcolare area con formula di erone

  // get area() {
  //   const p = this.perimeter / 2;
  //   const pLessA = p - this.segmentAB.length;
  //   const pLessB = p - this.segmentBC.length;
  //   const pLessC = p - this.segmentCA.length;

  //   const multiplyPByAll = p * pLessA * pLessB * pLessC;
  //   const area = Math.sqrt(multiplyPByAll);

  //   return area;
  // }


  //Versione aula --------------------------------------------


  get area() {
    const halfPerimeter = this.perimeter / 2;
    const hPMinusAB = halfPerimeter - this.segmentAB.length;
    const hPMinusBC = halfPerimeter - this.segmentBC.length;
    const hPMinusCA = halfPerimeter - this.segmentCA.length;
    const  area = Math.sqrt(halfPerimeter * hPMinusAB * hPMinusBC * hPMinusCA);

    return area;
  }






  // verificare se triangolo è rettangolo questo lato al quadrato è uguale alla somma degli altri due lati al quadrato? se si è rettangolo

  // isRectangle() {
  //     if (this.segmentAB.length **2 === this.segmentBC.length ** 2 + this.segmentCA.length ** 2) {     
  //       return true;
  //     } 
  //     if (this.segmentBC.length **2 === this.segmentAB.length ** 2 + this.segmentCA.length ** 2) {
  //       return true;
  //     }
  //     if (this.segmentCA.length **2 === this.segmentAB.length ** 2 + this.segmentBC.length ** 2) {
  //       return true;
  //     }
  //     return false;
  //   }




  // Altra versione ----------------------------

  isRectangle() {
    const isHypotenuseAB = this.segmentAB.length **2 === this.segmentBC.length ** 2 + this.segmentCA.length ** 2;
    const isHypotenuseBC = this.segmentBC.length **2 === this.segmentAB.length ** 2 + this.segmentCA.length ** 2;
    const isHypotenuseCA = this.segmentCA.length **2 === this.segmentAB.length ** 2 + this.segmentBC.length ** 2;

    if (isHypotenuseAB || isHypotenuseBC || isHypotenuseCA) {
      return true;
    }
     return false;
    }
  }

