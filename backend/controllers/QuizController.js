
export const getQuizResult = async (req, res) => {
    try { 
        console.log(req.body);
        let correctAnswers,wrongAnswers,totalQuestions,notAttempted;
        correctAnswers=wrongAnswers=totalQuestions=notAttempted=totalQuestions=0;
        if(req.body!=null && req.body!=undefined && req.body.length>0){
            req.body.map((item)=>{
                    if(item.selectedAnswer==null)
                        notAttempted++;
                    else if(item.answer==item.selectedAnswer)
                        correctAnswers++;
                    else if(item.answer!=item.selectedAnswer)
                        wrongAnswers++;
                totalQuestions++;
            });
            res.json({CorrectAnswers:correctAnswers,WrongAnswers:wrongAnswers,NotAttempted:notAttempted,TotalQuestions:totalQuestions});
        }

    } catch (error) {
        res.json({ message: error.message });
    }  
}
