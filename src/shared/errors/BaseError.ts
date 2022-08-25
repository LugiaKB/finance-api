export default abstract class BaseError {
  constructor(
    public code: number,
    public name: string,
    public title: string,
    public description: string
  ) {}

  public toObject(): object {
    return {
      code: this.code,
      name: this.name,
      title: this.title,
      description: this.description,
    };
  }
}
