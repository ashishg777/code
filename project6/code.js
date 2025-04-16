document.addEventListener("DOMContentLoaded", function(){

    const usernameInput = document.getElementById("user-input");
    const searchButton = document.getElementById("search-button");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-card");

    function validateUsername(username){
        if(username.trim() ===""){
            alert("user name should not be empty");
            return false; 
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching){
            alert("invalid username");
        }
        return isMatching;
    }

    async function fetchUserDetails(username){

        try{
            searchButton.textContent = "loading...";
            searchButton.disabled = true;
            statsContainer.style.setProperty("display","none");

            const targeturl = `https://leetcode.com/graphql/`;
            const proxyurl = `https://cors-anywhere.herokuapp.com/`;
            const myHeaders = new Headers();
            myHeaders.append("content-type","application/json");
            
            const graphql = JSON.stringify({
                query: `query userSessionProgress($username : String!) {
                    allQuestionsCount  {
                        difficulty
                        count
                    }
                    matchedUser(username: $username) {
                        submitStats {
                            acSubmissionNum {
                                difficulty
                                count
                                submissions
                            }
                            totalSubmissionNum {
                                difficulty
                                count
                                submissions
                            }
                        }
                    }
                }`, variables: { "username": `${username}` }
            })
            
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
                redirect: "follow"
            };
           
            const response = await fetch((proxyurl+targeturl), requestOptions);
            console.log(response);
            if(!response.ok){
                throw new Error("unable to fetch data");
            }
            const parsedData = await response.json();
            console.log(parsedData);
            // as i have no data in my leetcode account so it will return error and will print no data found 
            displayUserData(parsedData);

        }
        catch(error){
            statsContainer.innerHTML = `<p>${error}</p>`;
            
        }
        finally{
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    function updateProgress(solved,total,label,circle){
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree",`${progressDegree}`);
        label.textContent = `${solved}/${total}`;
    }


    function displayUserData(parsedData){
        const totalQues = parsedData.data.allQuestionsCount[0].count;
        const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
        const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
        const totalHardQues = parsedData.data.allQuestionsCount[3].count;
  
        const solvedTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedTotalEasyQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedTotalMediumQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedTotalHardQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateProgress(solvedTotalEasyQues,totalEasyQues,easyLabel,easyProgressCircle);
        updateProgress(solvedTotalMediumQues,totalMediumQues,mediumLabel,mediumProgressCircle);
        updateProgress(solvedTotalHardQues,totalHardQues,hardLabel,hardProgressCircle);


        const cardData = [
            {label: "overall submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].count},
            {label: "overall submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].count},
            {label: "overall submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].count},
            {label: "overall submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].count}
        ];
        console.log(cardData);

        cardStatsContainer.innerHTML = cardData.map(
            data => `<div class="card">
                        <h3>${data.label}</h3>
                        <p>${data.value}</p>
                    </div>`
        ).join("")



    }


    searchButton.addEventListener('click', function(){
        const username = usernameInput.value;
        console.log(username);
        if(validateUsername(username)){
            fetchUserDetails(username);
        }

    })





})