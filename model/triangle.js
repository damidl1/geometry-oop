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

  get area() {
    const p = this.perimeter / 2;
    const pLessA = p - this.segmentAB.length;
    const pLessB = p - this.segmentBC.length;
    const pLessC = p - this.segmentCA.length;

    const multiplyPByAll = p * pLessA * pLessB * pLessC;
    const area = Math.sqrt(multiplyPByAll);

    return area;
  }

  // verificare se triangolo è rettangolo questo lato al quadrato è uguale alla somma degli altri due lati al quadrato? se si è rettangolo

  isRectangle() {
    const segmentA = this.segmentAB.length;
    const segmentB = this.segmentBC.length;
    const segmentC = this.segmentCA.length;

    const triangleArray = [segmentA, segmentB, segmentC];




    for (let i = 0; i < triangleArray.length; i++) {
      const element = triangleArray[i];
      if (Math.pow(element) === Math.pow(element[i+1] + Math.pow(element[i+2]))) {
        return true;
      
      }
      return false;
    }

    // const powOfAB = Math.pow(this.segmentAB.length);
    // const powOfBC = Math.pow(this.segmentBC.length);
    // const powOfCA = Math.pow(this.segmentCA.length);

    // if (powOfAB === powOfBC + powOfCA) {
    //   return true;
    // } else if (powOfBC === powOfAB + powOfCA) {
    //   return true;
    // } else if (powOfCA === powOfAB + powOfBC) {
    //   return true;
    // }
    // return false;
  }
}
