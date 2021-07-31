package makelog

import (
	"log"

	"github.com/fluent/fluent-logger-golang/fluent"
)

func fluentClient() *fluent.Fluent {
	logger, err := fluent.New(fluent.Config{FluentHost: "fluentd", FluentPort: 24224})

	// Error Handling
	if err != nil {
		log.Fatalln(err)
	}

	return logger
}
