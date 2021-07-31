package makelog

import (
	"math/rand"
	"time"
)

// type NumData struct {
// 	num1 int
// 	num2 int
// 	num3 int
// 	num4 int
// 	num5 int
// }

func getNumData() int {

	rand.Seed(time.Now().UnixNano())

	randomNumData := rand.Intn(10) + 1

	// randomNumData := NumData{
	// 	num1: rand.Intn(10) + 1,
	// 	num2: rand.Intn(100) + 1,
	// 	num3: rand.Intn(80-40) + 40,
	// 	num4: rand.Intn(30-10) + 10,
	// 	num5: rand.Intn(500-400) + 400,
	// }

	// fmt.Printf("%+v \n", randomNumData)

	return randomNumData

}
