import type ISleeper from '../api/interface/ISleeper'

class Sleeper implements ISleeper {
  async sleep (miliseconds: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, miliseconds))
  }
}

export default Sleeper
