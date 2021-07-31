package makelog

import "time"

func getTime() string {
	t := time.Now()
	loggerTime := t.Format(time.RFC3339)
	return loggerTime
}
