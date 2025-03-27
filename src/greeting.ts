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
    this.lang = lang.toLowerCase();
    this.hello();
  }
  hello(): void {
    if (this.lang in this.translateTable) {
      console.log(this.translateTable[this.lang]);
    } else if (this.lang in this.arguAliesTable) {
      const normalizeArgument = this.arguAliesTable[this.lang];
      console.log(this.translateTable[normalizeArgument]);
    } else {
      console.log("잘못된 표현입니다");
    }
  }
}
