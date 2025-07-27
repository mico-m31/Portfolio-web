package main 
import ( 
"net/smtp"
"log"
"net/http"
"encoding/json"
"fmt"
)

type EmailData struct{
	Name    string `json:"name"`
	Subject string `json:"subject"`
	Message string `json:"message"`
}

type Response struct {
	Message string `json:"message"`
	Success bool   `json:"success"`
}

func sendEmail(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://micomartin.my.id:4173")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	  if r.Method == "OPTIONS" {
        fmt.Println("OPTIONS request - sending 200 OK")
        w.WriteHeader(http.StatusOK)
        return
    }

	if r.Method != http.MethodPost {
            http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
            return
    }
	var emailData EmailData
	if err := json.NewDecoder(r.Body).Decode(&emailData); err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		return
	}

	fmt.Printf("Received email data: %+v\n", emailData)

	
	auth := smtp.PlainAuth("", 
	"days43070@gmail.com",
	"ouzk pexh ydpe lxch",
	"smtp.gmail.com",
	)

	msg := "Subject:" + emailData.Subject + "\n\n" + emailData.Message + "\n\nFrom: " + emailData.Name 

	err :=smtp.SendMail(
	"smtp.gmail.com:587",
	auth,
	"days43070@gmail.com",
	[]string{"micomrtn@gmail.com"},
	[]byte(msg),
	)

	if err != nil{
		log.Print("Error sending email:", err)
		json.NewEncoder(w).Encode(Response{
			Message: "Failed to send email",
			Success: false,
		})
		return
	}

	log.Print("Email sent successfully")
	json.NewEncoder(w).Encode(Response{
		Message: "Email sent successfully",
		Success: true,
	})	
}

func main(){
	http.HandleFunc("/api/sendEmail", sendEmail)
	log.Println("Server started on :8081")
	log.Fatal(http.ListenAndServe(":8081", nil))
}