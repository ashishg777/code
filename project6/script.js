document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("user-input");
  const searchButton = document.getElementById("search-button");
  const statsContainer = document.querySelector(".stats-container");
  const easyProgressCircle = document.querySelector(".easy-progress");
  const mediumProgressCircle = document.querySelector(".medium-progress");
  const hardProgressCircle = document.querySelector(".hard-progress");
  const easyLabel = document.getElementById("easy-label");
  const mediumLabel = document.getElementById("medium-label");
  const hardLabel = document.getElementById("hard-label");
  const cardStatsContainer = document.querySelector("stats-card");

  // return true or false based on regex(regular expression)
  function validateUsername(username) {
    if (username.trim() === "") {
      alert("Please enter a username.");
      return false;
    }

    //regular expr from chat grp
    const regex = /^[a-zA-Z0-9_-]{1,15}$/;
    const isMatching = regex.test(username);
    if (!isMatching) {
      alert("invalid username");
    }
    return isMatching;
  }

  async function fetchUserDetails(username) {
    // const url = `https://leetcode-stats-api.herokuapp.com/${username}`; we can use this also.
    try {
      searchButton.textContent = "loading...";
      searchButton.disabled = true;
      // const response = await fetch(url);
      const proxyurl = `https://cors-anywhere.herokuapp.com/`;
      const targeturl = `https://leetcode.com/graphql/`;
      myHeaders = new Headers();

      const graphql = JSON.stringify({
        query:
          "\n  query userSessionProgress($username : String!) {\n    allQuestionsCount  {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n  acSubmissionNum {\n    difficulty\n     count\n      submissions\n    }\n      totalSubmissionNum {\n    difficulty\n    count\n     submissions\n  }\n    }\n  }\n   }\n ",
        variables: { username: `${username}` },
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
        redirect: "follow",
      };

      const response = await fetch(proxyurl + targeturl, requestOptions);
      console.log(response);
      if (!response.ok) {
        throw new Error("unable to fetch data");
      }
      const parsedData = await response.json();
      console.log(parsedData);
    } catch (error) {
      statsContainer.innerHTML = `<p>no data found</p>`;
    } finally {
      searchButton.textContent = "Search";
      searchButton.disabled = false;
    }
    displayUserData(parsedData);
  }

  function displayUserData(parsedData) {
    const totalQues = parsedData.data.allQuestionsCount[0].count;
    const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
    const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
    const totalHardQues = parsedData.data.allQuestionsCount[3].count;

    const solvedTotalQues =
      parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
    const solvedTotalEasyQues =
      parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
    const solvedTotalMediumQues =
      parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
    const solvedTotalHardQues =
      parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;
  }

  searchButton.addEventListener("click", function () {
    const username = usernameInput.value;
    console.log("logging name", username);
    if (validateUsername(username)) {
      fetchUserDetails(username);
    }
  });
});
