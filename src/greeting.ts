import { translateTable,arguAliesTable } from "./Static.arguTable";

export default class Greeting {
  lang: string;
  // private translateTable = translateTable
  // private arguAliesTable = arguAliesTable
  // private translateTable: Record<string, string> = {
  //   ko: "안녕하세요",
  //   en: "hello!",
  //   jp: "こんにちは",
  // };

  // private arguAliesTable: Record<string, string> = {
  //   korea: "ko",
  //   english: "en",
  //   japan: "jp",
  // };

  constructor(lang: string) {
    this.lang = this.NormalizeInput(lang)
    this.hello();
  }

  private NormalizeInput(input : string): string {
    const lowerCased = input.toLowerCase();
    if (lowerCased in translateTable) {
      return lowerCased;
    } else if (lowerCased in arguAliesTable) {
      return arguAliesTable[lowerCased];
    } else {
      throw new Error("지원되지 않는 언어입니다!")
    }
  }

  hello(): void {
    if (this.lang !="unknown") {
      console.log(translateTable[this.lang]);
    }
  }
}
