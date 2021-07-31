package main

import (
	"fmt"
	makelog "gin/makeLog"
)

func main() {
	fmt.Println("Hello golang from docker!")

	// fluentd Sample
	makelog.Main()

	// engine:= gin.Default()
	// engine.GET("/", func(c * gin.Context) {
	// 	c.JSON(http.StatusOK, gin.H{
	// 		"message": "Hello golang from docker!",
	// 	})
	// })
	// engine.Run(":8080")
}
