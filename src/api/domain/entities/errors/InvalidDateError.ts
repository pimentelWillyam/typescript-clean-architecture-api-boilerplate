class InvalidDateError extends Error {
  constructor(date: string){
    super(`The date ${date} is not valid`)
    this.name = 'Invalid Date Error'
  }
}