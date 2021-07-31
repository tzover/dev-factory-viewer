package makelog

import (
	"log"
	"time"
)

type DataStatus struct {
	TimeDate string
	Num1     int
	Num2     int
}

var (
	tagName string = "go.log"
)

func Main() {
	logger := fluentClient()
	defer logger.Close()

	// for i := 0; i < 10; i++ {
	for {
		data := DataStatus{
			TimeDate: getTime(),
			Num1:     getNumData(),
			Num2:     getNumData(),
		}

		// data := DataStatus{
		// 	Num1: getNumData(),
		// }

		// POST to fluentd and error handling
		if e := logger.Post(tagName, data); e != nil {
			log.Println("Error while posting log: ", e)
		} else {
			log.Println("Success to POST !")
		}

		// Sleep
		time.Sleep(5000 * time.Millisecond)
	}
}
