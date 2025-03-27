export default class Greeting {
  lang: string;
  constructor(lang: string) {
    this.lang = lang;
    this.hello();
  }
  hello(): void {
    switch (this.lang) {
      case "ko":
      case "korea":
        console.log("안녕하세요");
        break;
      case "en":
      case "english":
        console.log("hello");
        break;
      case "jp":
      case "japan":
        console.log("こんにちは");
        break;
    }
  }
}