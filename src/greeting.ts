export default class Greeting {
  lang: string;
  private translateTable: Record<string, string> = {
    ko: "안녕하세요",
    en: "hello!",
    jp: "こんにちは",
  };

  private arguAliesTable: Record<string, string> = {
    korea: "ko",
    english: "en",
    japan: "jp",
  };

  constructor(lang: string) {
    this.lang = this.NormalizeInput(lang)
    this.hello();
  }

  private NormalizeInput(input : string): string {
    const lowerCased = input.toLowerCase();
    if (lowerCased in this.translateTable) {
      return lowerCased;
    } else if (lowerCased in this.arguAliesTable) {
      return this.arguAliesTable[lowerCased];
    } else {
      throw new Error("지원되지 않는 언어입니다!")
    }
  }

  hello(): void {
    if (this.lang !="unknown") {
      console.log(this.translateTable[this.lang]);
    } else {
      console.log("잘못된 표현입니다");
    }
  }
}
