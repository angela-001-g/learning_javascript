import * as newController from "./controller.js"
import chalk from "chalk"

const sum = newController.suma(1, 2)
console.log(sum)

const mult = newController.multiplica(4, 5)
console.log(chalk.green(mult))